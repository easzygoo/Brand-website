import { Bike, Headset, MessageCircle, Store, type LucideIcon } from "lucide-react";

export type InquiryCategory = "general" | "customer-support" | "vendor-partnership" | "delivery-partner";

export const inquiryCategories: { value: InquiryCategory; label: string; description: string; icon: LucideIcon }[] = [
  {
    value: "general",
    label: "General Enquiry",
    description: "Questions about EaszyGoo, our apps, or anything else.",
    icon: MessageCircle,
  },
  {
    value: "customer-support",
    label: "Customer Support",
    description: "Help with shopping on EaszyGoo or an order you've placed.",
    icon: Headset,
  },
  {
    value: "vendor-partnership",
    label: "Vendor Partnership",
    description: "Interested in bringing your store onto EaszyGoo.",
    icon: Store,
  },
  {
    value: "delivery-partner",
    label: "Delivery Partner",
    description: "Interested in delivering with EaszyGoo.",
    icon: Bike,
  },
];
