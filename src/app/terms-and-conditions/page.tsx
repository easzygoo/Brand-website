import type { Metadata } from "next";
import Link from "next/link";

import { LegalLayout, type LegalSection } from "@/components/legal/LegalLayout";
import { ToConfirm } from "@/components/ui/ReviewNote";
import { legalConfig } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Terms and Conditions",
  socialTitle: "EaszyGoo Terms and Conditions",
  description: "The terms that govern use of the EaszyGoo website and the EaszyGoo Customer, Vendor, and Rider apps.",
  path: "/terms-and-conditions",
});

const entity = legalConfig.legalEntityName ?? <ToConfirm>registered legal entity name and address</ToConfirm>;

const sections: LegalSection[] = [
  {
    id: "acceptance",
    title: "Introduction and acceptance",
    content: (
      <>
        <p>
          These Terms and Conditions (&quot;Terms&quot;) govern your use of the EaszyGoo website and the EaszyGoo Customer,
          Vendor, and Rider apps (the &quot;Services&quot;), operated by {entity}.
        </p>
        <p>
          By accessing or using the Services, you agree to these Terms. If you do not agree, please do not use the Services.
          Vendors and delivery partners may be subject to additional agreements. <ToConfirm>whether separate vendor and delivery-partner agreements exist</ToConfirm>
        </p>
      </>
    ),
  },
  {
    id: "purpose",
    title: "Website purpose and scope",
    content: (
      <p>
        This website provides information about EaszyGoo and its apps. EaszyGoo is a platform that connects customers with
        local vendors and delivery partners. <ToConfirm>whether EaszyGoo acts as a marketplace intermediary or as the seller of goods</ToConfirm>
      </p>
    ),
  },
  {
    id: "eligibility",
    title: "Eligibility and account responsibilities",
    content: (
      <>
        <p>Where an account is required, you agree to:</p>
        <ul>
          <li>Provide accurate information and keep it up to date.</li>
          <li>Keep your sign-in details and device secure, and not share access to your account.</li>
          <li>Be responsible for activity on your account, and tell us promptly about any unauthorised use.</li>
        </ul>
        <p>
          <ToConfirm>minimum age and any eligibility requirements for customers, vendors, and delivery partners</ToConfirm>
        </p>
      </>
    ),
  },
  {
    id: "listings-pricing",
    title: "Product listings and pricing",
    content: (
      <p>
        Where applicable, products, descriptions, images, and prices are listed by vendors and may change. Fresh produce
        naturally varies in size, weight, and appearance. Prices shown at the time of ordering apply to that order.{" "}
        <ToConfirm>who is responsible for listing accuracy, how taxes and delivery fees are shown, and how weight variations are handled</ToConfirm>
      </p>
    ),
  },
  {
    id: "ordering",
    title: "Ordering and availability",
    content: (
      <p>
        Where applicable, placing an order is a request to purchase from the vendor. Orders depend on product availability and
        on the vendor and a delivery partner being available, and a vendor may be unable to accept or fully fulfil an order.{" "}
        <ToConfirm>when an order is considered accepted, and how partial or unavailable items are handled</ToConfirm>
      </p>
    ),
  },
  {
    id: "payments",
    title: "Payment methods and cash on delivery",
    content: (
      <p>
        Where applicable, the Services may support online payment and/or cash on delivery (COD). Available payment methods may
        vary by order, location, or vendor. Online payments may be processed by third-party payment providers on their own
        terms. <ToConfirm>payment methods offered at launch, COD limits or conditions, and any applicable charges</ToConfirm>
      </p>
    ),
  },
  {
    id: "delivery",
    title: "Delivery and service-area limitations",
    content: (
      <p>
        The Services are available only in certain areas, and the stores shown to you depend on your location. Any delivery
        time shown is an estimate, not a guarantee, and can be affected by traffic, weather, and order volume.{" "}
        <ToConfirm>service areas, delivery fees, and what happens when a customer is unavailable at delivery</ToConfirm>
      </p>
    ),
  },
  {
    id: "cancellations-refunds",
    title: "Cancellation, refund, and return policies",
    content: (
      <>
        <p>
          Cancellations, refunds, and returns will be handled according to EaszyGoo&apos;s cancellation and refund policy, which
          has not yet been finalised.
        </p>
        <p>
          <ToConfirm>
            when orders can be cancelled and by whom, any cancellation charges, how missing, damaged or poor-quality items are
            reported, refund methods (including store credit), and refund timelines
          </ToConfirm>
        </p>
      </>
    ),
  },
  {
    id: "acceptable-use",
    title: "Acceptable use",
    content: (
      <>
        <p>When using the Services, you agree not to:</p>
        <ul>
          <li>Break any applicable law, or infringe anyone&apos;s rights.</li>
          <li>Provide false information, place fraudulent orders, or misuse offers or payment methods.</li>
          <li>Harass, abuse, or threaten customers, vendors, delivery partners, or staff.</li>
          <li>Interfere with, disrupt, or attempt to gain unauthorised access to the Services or related systems.</li>
          <li>Copy, scrape, or reverse-engineer the Services except as permitted by law.</li>
        </ul>
        <p>We may suspend or restrict access where we reasonably believe these Terms have been breached.</p>
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual property and brand assets",
    content: (
      <p>
        The EaszyGoo name, logo, website, and apps — including their design, text, and graphics — are owned by or licensed to
        EaszyGoo. You may not use our brand assets without prior written permission. Content provided by vendors remains
        their responsibility.
      </p>
    ),
  },
  {
    id: "third-party",
    title: "Third-party links and services",
    content: (
      <p>
        The Services may link to or rely on third-party websites and services, such as app stores, maps, and payment
        providers. We are not responsible for their content or practices, and your use of them is governed by their own
        terms.
      </p>
    ),
  },
  {
    id: "disclaimers",
    title: "Availability and disclaimers",
    content: (
      <p>
        We aim to keep the Services available and accurate, but they are provided on an &quot;as is&quot; and &quot;as
        available&quot; basis. We may change, suspend, or discontinue any part of the Services, and we do not promise they will
        be uninterrupted or error-free, to the extent permitted by applicable law.
      </p>
    ),
  },
  {
    id: "liability",
    title: "Limitation of liability",
    content: (
      <p>
        To the extent permitted by applicable law, EaszyGoo will not be liable for indirect, incidental, or consequential
        losses arising from use of the Services. Nothing in these Terms limits liability that cannot be limited by law,
        including any rights you have as a consumer. <ToConfirm>any liability cap and the allocation of responsibility between EaszyGoo, vendors, and delivery partners</ToConfirm>
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to these Terms",
    content: (
      <p>
        We may update these Terms from time to time. We will revise the &quot;Last updated&quot; date above and, where
        appropriate, notify users. Continuing to use the Services after changes take effect means you accept the updated
        Terms. <ToConfirm>governing law, jurisdiction, and dispute-resolution process</ToConfirm>
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact information",
    content: (
      <p>
        Questions about these Terms? Please reach us through our <Link href="/contact">contact page</Link>.{" "}
        <ToConfirm>official support email, phone number, and grievance officer details</ToConfirm>
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Terms and Conditions"
      intro={<p>The terms that apply when you use the EaszyGoo website and apps.</p>}
      sections={sections}
      related={{ label: "Privacy Policy", href: "/privacy-policy" }}
    />
  );
}
