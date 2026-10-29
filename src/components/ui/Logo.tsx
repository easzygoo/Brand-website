import Image from "next/image";
import Link from "next/link";

import wordmark from "../../../public/brand/easzygoo-wordmark.png";
import icon from "../../../public/brand/easzygoo-icon.webp";

/** The official EaszyGoo wordmark, linked home. Aspect ratio is always preserved. */
export function Logo({ className = "h-10", preload = false }: { className?: string; preload?: boolean }) {
  return (
    <Link href="/" aria-label="EaszyGoo home" className="inline-flex shrink-0 items-center rounded-lg">
      <Image src={wordmark} alt="EaszyGoo" className={`w-auto ${className}`} preload={preload} sizes="180px" />
    </Link>
  );
}

/** The official square app-icon version of the logo. */
export function LogoTile({ className = "h-14 w-14" }: { className?: string }) {
  return <Image src={icon} alt="" aria-hidden="true" className={className} sizes="112px" />;
}
