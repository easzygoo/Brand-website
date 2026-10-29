import {
  Apple,
  Bike,
  Carrot,
  Check,
  ChefHat,
  Citrus,
  Clock,
  Leaf,
  MapPin,
  Minus,
  Navigation,
  Package,
  Plus,
  Search,
  ShoppingBasket,
  Store,
  Wallet,
} from "lucide-react";
import type { ReactNode } from "react";

/*
 * Decorative phone previews of the three EaszyGoo apps.
 * They are design illustrations with sample content, not screenshots of live software,
 * so they are hidden from assistive technology and described by the surrounding card.
 */

function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div
      aria-hidden="true"
      className="relative w-[228px] rounded-[2.4rem] bg-ink p-[7px] shadow-phone select-none"
    >
      <div className="relative h-[440px] overflow-hidden rounded-[2rem] bg-cream">
        <div className="absolute top-2 left-1/2 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-ink" />
        <div className="flex items-center justify-between px-5 pt-2.5 text-[9px] font-semibold text-ink/70">
          <span>9:41</span>
          <span className="flex gap-1">
            <span className="h-1.5 w-3 rounded-sm bg-ink/60" />
            <span className="h-1.5 w-1.5 rounded-full bg-ink/60" />
          </span>
        </div>
        <div className="px-3.5 pt-4">{children}</div>
      </div>
    </div>
  );
}

function Pill({ className, children }: { className: string; children: ReactNode }) {
  return <span className={`rounded-full px-2 py-0.5 text-[8.5px] font-bold ${className}`}>{children}</span>;
}

export function CustomerMockup() {
  const cats = [
    { icon: Carrot, label: "Veggies", bg: "bg-orange-100 text-orange-600" },
    { icon: Apple, label: "Fruits", bg: "bg-red-100 text-red-500" },
    { icon: Leaf, label: "Greens", bg: "bg-brand-green-soft text-brand-green" },
    { icon: ShoppingBasket, label: "Essentials", bg: "bg-brand-navy-50 text-brand-navy" },
  ];
  return (
    <PhoneFrame>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[8px] font-semibold text-muted">Deliver to</p>
          <p className="flex items-center gap-1 text-[11px] font-bold text-brand-navy">
            <MapPin className="h-3 w-3 text-brand-green" /> Home
          </p>
        </div>
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-yellow text-[10px] font-extrabold text-brand-navy">
          E
        </span>
      </div>
      <div className="mt-3 flex items-center gap-1.5 rounded-xl bg-white px-2.5 py-2 text-[9px] text-muted shadow-soft">
        <Search className="h-3 w-3" /> Search vegetables, fruits…
      </div>
      <div className="mt-3 grid grid-cols-4 gap-1.5">
        {cats.map(({ icon: Icon, label, bg }) => (
          <div key={label} className="flex flex-col items-center gap-1">
            <span className={`flex h-9 w-9 items-center justify-center rounded-xl ${bg}`}>
              <Icon className="h-4 w-4" />
            </span>
            <span className="text-[7.5px] font-semibold text-ink">{label}</span>
          </div>
        ))}
      </div>
      <p className="mt-3.5 text-[10px] font-bold text-brand-navy">Stores near you</p>
      <div className="mt-1.5 flex items-center gap-2 rounded-xl bg-white p-2 shadow-soft">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-green-soft text-brand-green">
          <Store className="h-4 w-4" />
        </span>
        <div className="flex-1">
          <p className="text-[9px] font-bold text-ink">Local fresh store</p>
          <p className="text-[7.5px] text-muted">Vegetables · Fruits</p>
        </div>
        <Pill className="bg-brand-green-soft text-brand-green">Open</Pill>
      </div>
      <div className="mt-2 grid grid-cols-2 gap-2">
        {[
          { name: "Tomato", qty: "1 kg", icon: Apple, tint: "bg-red-50 text-red-500" },
          { name: "Oranges", qty: "1 kg", icon: Citrus, tint: "bg-orange-50 text-orange-500" },
        ].map(({ name, qty, icon: Icon, tint }) => (
          <div key={name} className="rounded-xl bg-white p-2 shadow-soft">
            <span className={`flex h-12 items-center justify-center rounded-lg ${tint}`}>
              <Icon className="h-6 w-6" />
            </span>
            <p className="mt-1.5 text-[9px] font-bold text-ink">{name}</p>
            <div className="mt-0.5 flex items-center justify-between">
              <span className="text-[7.5px] text-muted">{qty}</span>
              <span className="flex items-center gap-1 rounded-md bg-brand-yellow px-1 py-0.5 text-brand-navy">
                <Minus className="h-2 w-2" />
                <span className="text-[7.5px] font-bold">1</span>
                <Plus className="h-2 w-2" />
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-2.5 flex items-center justify-between rounded-xl bg-brand-navy px-3 py-2 text-white">
        <span className="text-[9px] font-semibold">2 items in cart</span>
        <span className="text-[9px] font-bold text-brand-yellow">View cart →</span>
      </div>
    </PhoneFrame>
  );
}

export function VendorMockup() {
  const orders = [
    { id: "Order 1042", items: "5 items", status: "New", cls: "bg-brand-yellow text-brand-navy" },
    { id: "Order 1041", items: "3 items", status: "Preparing", cls: "bg-orange-100 text-orange-700" },
    { id: "Order 1039", items: "8 items", status: "Ready", cls: "bg-brand-green-soft text-brand-green" },
  ];
  return (
    <PhoneFrame>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[8px] font-semibold text-muted">My store</p>
          <p className="text-[11px] font-bold text-brand-navy">Store dashboard</p>
        </div>
        <span className="flex items-center gap-1 rounded-full bg-brand-green-soft px-1.5 py-1 text-[8px] font-bold text-brand-green">
          <span className="relative h-3 w-5 rounded-full bg-brand-green">
            <span className="absolute top-0.5 right-0.5 h-2 w-2 rounded-full bg-white" />
          </span>
          Open
        </span>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2">
        <div className="rounded-xl bg-brand-yellow p-2.5">
          <Package className="h-3.5 w-3.5 text-brand-navy" />
          <p className="mt-1.5 text-[8px] font-semibold text-brand-navy/70">New orders</p>
          <p className="text-[9px] font-bold text-brand-navy">Review now</p>
        </div>
        <div className="rounded-xl bg-white p-2.5 shadow-soft">
          <ChefHat className="h-3.5 w-3.5 text-orange-600" />
          <p className="mt-1.5 text-[8px] font-semibold text-muted">In preparation</p>
          <p className="text-[9px] font-bold text-ink">Update status</p>
        </div>
      </div>
      <p className="mt-3.5 text-[10px] font-bold text-brand-navy">Incoming orders</p>
      <ul className="mt-1.5 space-y-1.5">
        {orders.map((o) => (
          <li key={o.id} className="flex items-center gap-2 rounded-xl bg-white p-2 shadow-soft">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-navy-50 text-brand-navy">
              <ShoppingBasket className="h-3.5 w-3.5" />
            </span>
            <div className="flex-1">
              <p className="text-[9px] font-bold text-ink">{o.id}</p>
              <p className="text-[7.5px] text-muted">{o.items}</p>
            </div>
            <Pill className={o.cls}>{o.status}</Pill>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-[10px] font-bold text-brand-navy">Products</p>
      <div className="mt-1.5 flex items-center gap-2 rounded-xl bg-white p-2 shadow-soft">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-50 text-orange-500">
          <Carrot className="h-3.5 w-3.5" />
        </span>
        <p className="flex-1 text-[9px] font-bold text-ink">Carrots</p>
        <Pill className="bg-brand-green-soft text-brand-green">In stock</Pill>
      </div>
    </PhoneFrame>
  );
}

export function RiderMockup() {
  const steps = ["Assigned", "Picked up", "On the way", "Delivered"];
  return (
    <PhoneFrame>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[8px] font-semibold text-muted">Current delivery</p>
          <p className="text-[11px] font-bold text-brand-navy">Order 1039</p>
        </div>
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-navy text-brand-yellow">
          <Bike className="h-3.5 w-3.5" />
        </span>
      </div>
      {/* Stylised route map */}
      <div className="relative mt-3 h-28 overflow-hidden rounded-xl bg-[#e8eef8]">
        <svg viewBox="0 0 200 112" className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
          <path d="M0 30 H200 M0 78 H200 M50 0 V112 M140 0 V112" stroke="#fff" strokeWidth="7" />
          <path
            d="M30 92 C 60 92, 55 55, 95 52 S 150 30, 170 20"
            fill="none"
            stroke="#09275B"
            strokeWidth="3"
            strokeDasharray="6 5"
            strokeLinecap="round"
          />
        </svg>
        <span className="absolute bottom-3 left-5 flex h-5 w-5 items-center justify-center rounded-full bg-brand-green text-white ring-2 ring-white">
          <Store className="h-2.5 w-2.5" />
        </span>
        <span className="absolute top-2.5 right-5 flex h-5 w-5 items-center justify-center rounded-full bg-brand-yellow text-brand-navy ring-2 ring-white">
          <MapPin className="h-2.5 w-2.5" />
        </span>
      </div>
      <div className="mt-2.5 space-y-1.5 rounded-xl bg-white p-2.5 shadow-soft">
        <p className="flex items-start gap-1.5 text-[8.5px] text-ink">
          <Store className="mt-px h-3 w-3 shrink-0 text-brand-green" />
          <span>
            <b className="font-bold">Pickup</b> · Vendor store details
          </span>
        </p>
        <p className="flex items-start gap-1.5 text-[8.5px] text-ink">
          <Navigation className="mt-px h-3 w-3 shrink-0 text-brand-navy" />
          <span>
            <b className="font-bold">Drop</b> · Customer address
          </span>
        </p>
      </div>
      <ol className="mt-2.5 flex items-center justify-between px-1">
        {steps.map((s, i) => (
          <li key={s} className="flex flex-col items-center gap-1">
            <span
              className={`flex h-4 w-4 items-center justify-center rounded-full ${
                i < 2 ? "bg-brand-green text-white" : i === 2 ? "bg-brand-yellow text-brand-navy" : "bg-line text-muted"
              }`}
            >
              {i < 2 ? <Check className="h-2.5 w-2.5" /> : <Clock className="h-2.5 w-2.5" />}
            </span>
            <span className="text-[6.5px] font-semibold text-muted">{s}</span>
          </li>
        ))}
      </ol>
      <div className="mt-2.5 rounded-xl bg-brand-yellow py-2 text-center text-[9.5px] font-bold text-brand-navy">
        Update delivery status
      </div>
      <div className="mt-2.5 flex items-center gap-2 rounded-xl bg-white p-2 shadow-soft">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-navy-50 text-brand-navy">
          <Wallet className="h-3.5 w-3.5" />
        </span>
        <div className="flex-1">
          <p className="text-[9px] font-bold text-ink">Earnings &amp; history</p>
          <div className="mt-1 flex h-4 items-end gap-0.5">
            {[40, 65, 50, 80, 60, 90, 70].map((h, i) => (
              <span key={i} className="w-2 rounded-sm bg-brand-navy/70" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}
