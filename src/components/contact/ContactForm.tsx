"use client";

import { CircleAlert, Info, Send } from "lucide-react";
import { useId, useRef, useState, type FormEvent } from "react";

import { Button } from "@/components/ui/Button";
import { contactConfig } from "@/config/site";

import { inquiryCategories, type InquiryCategory } from "./categories";

export type ContactFormValues = {
  name: string;
  email: string;
  category: InquiryCategory | "";
  message: string;
};

type Errors = Partial<Record<keyof ContactFormValues, string>>;
type Status = { kind: "idle" } | { kind: "preview" } | { kind: "sending" } | { kind: "sent" } | { kind: "error"; message: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MESSAGE_MIN = 20;
const MESSAGE_MAX = 2000;

export function validateContact(v: ContactFormValues): Errors {
  const errors: Errors = {};
  if (v.name.trim().length < 2) errors.name = "Please enter your name (at least 2 characters).";
  if (!v.email.trim()) errors.email = "Please enter your email address.";
  else if (!EMAIL_RE.test(v.email.trim())) errors.email = "Please enter a valid email address, like name@example.com.";
  if (!v.category) errors.category = "Please choose what your enquiry is about.";
  const len = v.message.trim().length;
  if (len < MESSAGE_MIN) errors.message = `Please write a message of at least ${MESSAGE_MIN} characters.`;
  else if (len > MESSAGE_MAX) errors.message = `Please keep your message under ${MESSAGE_MAX} characters.`;
  return errors;
}

/**
 * Sends the enquiry to `contactConfig.formEndpoint` as JSON.
 * Connect a backend by setting that endpoint; nothing is sent while it is null.
 */
async function submitContact(values: ContactFormValues) {
  const endpoint = contactConfig.formEndpoint;
  if (!endpoint) return { sent: false as const };
  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  });
  if (!res.ok) throw new Error(`Request failed (${res.status})`);
  return { sent: true as const };
}

const empty: ContactFormValues = { name: "", email: "", category: "", message: "" };

const fieldBase =
  "mt-2 block w-full rounded-xl border bg-white px-4 py-3 text-base text-ink placeholder:text-muted/70 transition focus:outline-none focus:ring-4";
const fieldOk = "border-line focus:border-brand-navy focus:ring-brand-navy/10";
const fieldBad = "border-red-500 focus:border-red-600 focus:ring-red-500/15";

export function ContactForm() {
  const uid = useId();
  const [values, setValues] = useState<ContactFormValues>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof ContactFormValues, boolean>>>({});
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const summaryRef = useRef<HTMLDivElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);

  const id = (f: string) => `${uid}-${f}`;
  const isPreview = !contactConfig.formEndpoint;

  function update<K extends keyof ContactFormValues>(key: K, value: ContactFormValues[K]) {
    const next = { ...values, [key]: value };
    setValues(next);
    if (touched[key]) setErrors((e) => ({ ...e, [key]: validateContact(next)[key] }));
    if (status.kind !== "idle" && status.kind !== "sending") setStatus({ kind: "idle" });
  }

  function blur(key: keyof ContactFormValues) {
    setTouched((t) => ({ ...t, [key]: true }));
    setErrors((e) => ({ ...e, [key]: validateContact(values)[key] }));
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const found = validateContact(values);
    setErrors(found);
    setTouched({ name: true, email: true, category: true, message: true });
    if (Object.keys(found).length > 0) {
      setStatus({ kind: "idle" });
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }
    setStatus({ kind: "sending" });
    try {
      const result = await submitContact(values);
      setStatus(result.sent ? { kind: "sent" } : { kind: "preview" });
      if (result.sent) setValues(empty);
    } catch {
      setStatus({ kind: "error", message: "We couldn't send your message. Please try again later." });
    }
    requestAnimationFrame(() => statusRef.current?.focus());
  }

  const errorList = (Object.entries(errors) as [keyof ContactFormValues, string | undefined][]).filter(([, m]) => m);
  const showSummary = errorList.length > 0 && touched.name && touched.email && touched.category && touched.message;
  const messageLength = values.message.trim().length;

  return (
    <form noValidate onSubmit={onSubmit} aria-labelledby={`${uid}-title`} className="rounded-[2rem] bg-white p-6 shadow-lift ring-1 ring-line sm:p-10">
      <h2 id={`${uid}-title`} className="text-2xl font-extrabold tracking-tight text-brand-navy">
        Send us a message
      </h2>

      {isPreview ? (
        <div role="note" className="mt-4 flex gap-3 rounded-2xl bg-brand-navy-50 p-4 text-sm leading-relaxed text-ink">
          <Info aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-brand-navy" />
          <p>
            <strong className="font-semibold text-brand-navy">Preview form.</strong> Online submissions aren&apos;t connected
            yet, so messages entered here are checked on this page but <strong className="font-semibold">not sent</strong> to
            EaszyGoo.
          </p>
        </div>
      ) : null}

      {showSummary ? (
        <div
          ref={summaryRef}
          tabIndex={-1}
          role="alert"
          className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-red-500/20"
        >
          <p className="flex items-center gap-2 font-semibold">
            <CircleAlert aria-hidden="true" className="h-4 w-4" />
            Please fix {errorList.length === 1 ? "1 field" : `${errorList.length} fields`} before continuing:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-6">
            {errorList.map(([field, msg]) => (
              <li key={field}>
                <a href={`#${id(field)}`} className="underline underline-offset-2">
                  {msg}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={id("name")} className="text-sm font-semibold text-brand-navy">
            Full name <span aria-hidden="true" className="text-red-600">*</span>
          </label>
          <input
            id={id("name")}
            name="name"
            type="text"
            autoComplete="name"
            required
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            onBlur={() => blur("name")}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? id("name-error") : undefined}
            className={`${fieldBase} ${errors.name ? fieldBad : fieldOk}`}
            placeholder="Your name"
          />
          {errors.name ? (
            <p id={id("name-error")} className="mt-2 text-sm text-red-700">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor={id("email")} className="text-sm font-semibold text-brand-navy">
            Email address <span aria-hidden="true" className="text-red-600">*</span>
          </label>
          <input
            id={id("email")}
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            onBlur={() => blur("email")}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? id("email-error") : undefined}
            className={`${fieldBase} ${errors.email ? fieldBad : fieldOk}`}
            placeholder="name@example.com"
          />
          {errors.email ? (
            <p id={id("email-error")} className="mt-2 text-sm text-red-700">
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor={id("category")} className="text-sm font-semibold text-brand-navy">
          Enquiry type <span aria-hidden="true" className="text-red-600">*</span>
        </label>
        <select
          id={id("category")}
          name="category"
          required
          value={values.category}
          onChange={(e) => update("category", e.target.value as ContactFormValues["category"])}
          onBlur={() => blur("category")}
          aria-invalid={Boolean(errors.category)}
          aria-describedby={errors.category ? id("category-error") : undefined}
          className={`${fieldBase} appearance-none bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' stroke='%2309275B' stroke-width='2' viewBox='0 0 24 24'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")] bg-[position:right_1rem_center] bg-no-repeat pr-10 ${
            errors.category ? fieldBad : fieldOk
          }`}
        >
          <option value="" disabled>
            Choose a category
          </option>
          {inquiryCategories.map((c) => (
            <option key={c.value} value={c.value}>
              {c.label}
            </option>
          ))}
        </select>
        {errors.category ? (
          <p id={id("category-error")} className="mt-2 text-sm text-red-700">
            {errors.category}
          </p>
        ) : null}
      </div>

      <div className="mt-5">
        <label htmlFor={id("message")} className="text-sm font-semibold text-brand-navy">
          Message <span aria-hidden="true" className="text-red-600">*</span>
        </label>
        <textarea
          id={id("message")}
          name="message"
          required
          rows={6}
          maxLength={MESSAGE_MAX}
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          onBlur={() => blur("message")}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={`${id("message-hint")}${errors.message ? ` ${id("message-error")}` : ""}`}
          className={`${fieldBase} resize-y ${errors.message ? fieldBad : fieldOk}`}
          placeholder="How can we help?"
        />
        <div className="mt-2 flex justify-between gap-4 text-sm">
          {errors.message ? (
            <p id={id("message-error")} className="text-red-700">
              {errors.message}
            </p>
          ) : (
            <span />
          )}
          <p id={id("message-hint")} className="shrink-0 text-muted">
            {messageLength}/{MESSAGE_MAX}
            <span className="sr-only"> characters, minimum {MESSAGE_MIN}</span>
          </p>
        </div>
      </div>

      <p className="mt-5 text-sm text-muted">
        <span aria-hidden="true" className="text-red-600">*</span> Required fields
      </p>

      <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto" disabled={status.kind === "sending"}>
        <Send aria-hidden="true" className="h-4 w-4" />
        {status.kind === "sending" ? (isPreview ? "Checking…" : "Sending…") : isPreview ? "Check my message" : "Send message"}
      </Button>

      <div ref={statusRef} tabIndex={-1} aria-live="polite" className="focus:outline-none">
        {status.kind === "preview" ? (
          <div className="mt-6 flex gap-3 rounded-2xl border border-brand-yellow-deep/40 bg-brand-yellow-soft p-4 text-sm leading-relaxed text-ink">
            <Info aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#8a6d00]" />
            <p>
              <strong className="font-semibold text-brand-navy">Your message looks good — but it has not been sent.</strong>{" "}
              This form is a preview and isn&apos;t connected to EaszyGoo yet. Your text is still in the form if you&apos;d
              like to copy it.
            </p>
          </div>
        ) : null}
        {status.kind === "sent" ? (
          <p className="mt-6 rounded-2xl bg-brand-green-soft p-4 text-sm font-semibold text-brand-green">
            Thank you — your message has been sent.
          </p>
        ) : null}
        {status.kind === "error" ? (
          <p role="alert" className="mt-6 rounded-2xl bg-red-50 p-4 text-sm font-semibold text-red-800">
            {status.message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
