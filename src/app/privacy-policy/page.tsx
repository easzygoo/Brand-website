import type { Metadata } from "next";
import Link from "next/link";

import { LegalLayout, type LegalSection } from "@/components/legal/LegalLayout";
import { ToConfirm } from "@/components/ui/ReviewNote";
import { contactConfig, legalConfig } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  socialTitle: "EaszyGoo Privacy Policy",
  description: "How EaszyGoo collects, uses, shares, and protects personal information across its website and apps.",
  path: "/privacy-policy",
});

const entity = legalConfig.legalEntityName ?? <ToConfirm>registered legal entity name and address</ToConfirm>;

const sections: LegalSection[] = [
  {
    id: "introduction",
    title: "Introduction and scope",
    content: (
      <>
        <p>
          This Privacy Policy explains how EaszyGoo (&quot;EaszyGoo&quot;, &quot;we&quot;, &quot;us&quot;), operated by {entity},
          handles personal information when you use our website and the EaszyGoo Customer, Vendor, and Rider apps
          (together, the &quot;Services&quot;).
        </p>
        <p>
          It applies to customers, vendors, delivery partners, and website visitors. Some sections apply only to certain
          users or features, as indicated.
        </p>
      </>
    ),
  },
  {
    id: "information-categories",
    title: "Information we may collect",
    content: (
      <>
        <p>Depending on how you use the Services, we may collect the following categories of information:</p>
        <ul>
          <li>Information you provide directly, such as account, contact, and order details.</li>
          <li>Information generated when you use the Services, such as order history and status updates.</li>
          <li>Technical information from your device, where applicable.</li>
          <li>Information from vendors and delivery partners needed to fulfil an order.</li>
        </ul>
        <p>
          <ToConfirm>the complete and accurate list of data fields actually collected by each app and the website</ToConfirm>
        </p>
      </>
    ),
  },
  {
    id: "account-contact",
    title: "Account and contact information",
    content: (
      <>
        <p>
          To create and use an account, we may collect information such as your name, mobile phone number (for example, to
          sign in), and email address. Vendors and delivery partners may be asked for additional details needed to operate
          on the platform.
        </p>
        <p>
          <ToConfirm>
            which identity, business, payout or verification (KYC) details are collected from vendors and delivery partners
          </ToConfirm>
        </p>
      </>
    ),
  },
  {
    id: "order-transaction",
    title: "Order and transaction information",
    content: (
      <>
        <p>
          When you place or handle an order, we may process details such as the items ordered, the store, order amounts,
          payment method, order status, and delivery records.
        </p>
        <p>
          Online payments, where offered, may be handled by third-party payment providers. We do not intend to store full
          card details on our own systems. <ToConfirm>payment providers used and what payment data EaszyGoo receives from them</ToConfirm>
        </p>
      </>
    ),
  },
  {
    id: "address-location",
    title: "Address and location information",
    content: (
      <>
        <p>
          Where applicable, we may collect delivery addresses you save, and location information used to show nearby
          stores or to support delivery. Delivery partners&apos; location may be used while they are handling deliveries.
        </p>
        <p>
          <ToConfirm>whether precise or approximate location is collected, when it is collected (e.g. foreground only), and how it is shared</ToConfirm>
        </p>
      </>
    ),
  },
  {
    id: "device-diagnostics",
    title: "Device information and diagnostics",
    content: (
      <>
        <p>
          Where applicable, we may collect device and app information such as device type, operating system, app version,
          push-notification tokens, crash reports, and diagnostic logs, to keep the Services working and secure.
        </p>
        <p>
          <ToConfirm>analytics, crash-reporting and cookie tools used on the website and apps</ToConfirm>
        </p>
      </>
    ),
  },
  {
    id: "purposes",
    title: "How we use information",
    content: (
      <>
        <p>We may use personal information to:</p>
        <ul>
          <li>Create and manage accounts and verify sign-ins.</li>
          <li>Show nearby stores and products, and process and fulfil orders.</li>
          <li>Share order details between customers, vendors, and delivery partners as needed to complete an order.</li>
          <li>Send order updates and service-related notifications.</li>
          <li>Provide support and respond to enquiries.</li>
          <li>Maintain security, prevent fraud and misuse, and fix problems.</li>
          <li>Comply with legal obligations.</li>
        </ul>
        <p>
          <ToConfirm>whether information is used for marketing, and the legal basis or consent mechanism relied on for each purpose</ToConfirm>
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    title: "Service providers and information sharing",
    content: (
      <>
        <p>We do not sell personal information. We may share information with:</p>
        <ul>
          <li>
            <strong>Vendors and delivery partners</strong> — the details needed to prepare and deliver an order, such as
            items, name, and delivery address.
          </li>
          <li>
            <strong>Service providers</strong> who help us operate the Services, such as hosting, authentication,
            messaging, and payment providers, under appropriate obligations.
          </li>
          <li>
            <strong>Authorities</strong> where required by law or to protect rights and safety.
          </li>
        </ul>
        <p>
          <ToConfirm>named categories or list of service providers, and whether any data is stored or processed outside India</ToConfirm>
        </p>
      </>
    ),
  },
  {
    id: "retention",
    title: "Data retention",
    content: (
      <p>
        We keep personal information only for as long as needed for the purposes described in this policy, including legal,
        tax, and accounting requirements. <ToConfirm>specific retention periods for accounts, orders, and deleted accounts</ToConfirm>
      </p>
    ),
  },
  {
    id: "security",
    title: "Security",
    content: (
      <p>
        We use reasonable technical and organisational measures intended to protect personal information. No method of
        transmission or storage is completely secure, and we cannot guarantee absolute security.{" "}
        <ToConfirm>security practices the company is prepared to describe publicly</ToConfirm>
      </p>
    ),
  },
  {
    id: "rights",
    title: "Your rights and privacy requests",
    content: (
      <>
        <p>
          Subject to applicable law, you may be able to request access to, correction of, or deletion of your personal
          information, withdraw consent where processing relies on it, and raise a grievance about how your information is
          handled.
        </p>
        <p>
          <ToConfirm>
            how users submit requests (in-app account deletion and/or contact channel), expected response times, and grievance
            officer details required under applicable Indian law
          </ToConfirm>
        </p>
      </>
    ),
  },
  {
    id: "children",
    title: "Children's privacy",
    content: (
      <p>
        The Services are not intended for children. We do not knowingly collect personal information from children without
        appropriate consent as required by law. <ToConfirm>minimum age for using the Services</ToConfirm>
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    content: (
      <p>
        We may update this policy from time to time. When we do, we will revise the &quot;Last updated&quot; date above and,
        where appropriate, notify users through the Services. <ToConfirm>how material changes will be notified</ToConfirm>
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact for privacy enquiries",
    content: (
      <p>
        For questions or requests about this policy, please{" "}
        {contactConfig.privacyEmail ? (
          <>
            email <a href={`mailto:${contactConfig.privacyEmail}`}>{contactConfig.privacyEmail}</a>
          </>
        ) : (
          <>
            use our <Link href="/contact">contact page</Link>
          </>
        )}
        . {contactConfig.privacyEmail ? null : <ToConfirm>dedicated privacy / grievance contact</ToConfirm>}
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Privacy Policy"
      intro={<p>How EaszyGoo handles personal information across its website and apps.</p>}
      sections={sections}
      related={{ label: "Terms and Conditions", href: "/terms-and-conditions" }}
    />
  );
}
