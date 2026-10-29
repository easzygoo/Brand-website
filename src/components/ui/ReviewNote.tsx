import { CircleAlert } from "lucide-react";
import type { ReactNode } from "react";

/** Block-level notice for content that still needs a company decision or verification. */
export function ReviewNote({ title = "Pending company review", children }: { title?: string; children: ReactNode }) {
  return (
    <div role="note" className="flex gap-3 rounded-2xl border border-brand-yellow-deep/40 bg-brand-yellow-soft p-4 text-sm leading-relaxed text-ink">
      <CircleAlert aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#8a6d00]" />
      <div>
        <p className="font-semibold text-brand-navy">{title}</p>
        <div className="mt-1 text-ink/80">{children}</div>
      </div>
    </div>
  );
}

/** Inline marker for an unresolved fact inside legal copy. */
export function ToConfirm({ children }: { children: ReactNode }) {
  return (
    <mark className="rounded-md bg-brand-yellow-soft px-1.5 py-0.5 font-medium text-[#6b5400] ring-1 ring-brand-yellow-deep/40 [box-decoration-break:clone]">
      [To confirm: {children}]
    </mark>
  );
}
