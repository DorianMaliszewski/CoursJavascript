import React from "react";
import type {ComponentProps} from 'react'

type Props = {
  href: string;
  className?: string;
  type?: "TD" | "TP" | "QI" | "UNKNOWN" | (string & {}); // "UNKNOWN" par défaut
  children: React.ReactNode;
};

export default function LinkTag({
  href,
  className = "",
  type = "UNKNOWN",
  children,
}: Props) {

  const tagColor =
    type === "TD"
      ? "bg-green-500"
      : type === "TP"
      ? "bg-red-500"
      : type === "QI"
      ? "bg-blue-500"
      : "bg-gray-500";

  const handleClick: ComponentProps<'a'>['onClick'] = (e) => {
    // toggle de la sidebar comme dans ton onClick inline
    const el = e.view.document.getElementById("sidebar");
    el?.classList.toggle("-translate-x-full");
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`inline-flex items-center gap-2 ${className}`}
      data-astro-prefetch
    >
      {type !== "UNKNOWN" ? (
        <span className={`flex items-center justify-center text-white text-xs min-h-5 min-w-5 size-5 rounded ${tagColor}`}>
          {type}
        </span>
      ) : null}
      {children}
    </a>
  );
}
