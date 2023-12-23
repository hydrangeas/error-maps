"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex sm:justify-center space-x-4">
      {[
        ["Home", "/"],
        ["Error Lists", "/errors"],
        ["Projects", "/projects"],
        ["Reports", "/reports"],
      ].map(([title, url]) => (
        <Link
          key={url}
          href={url}
          className={`rounded-lg px-1 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900 underline-offset-8 transition-all ${
            pathname == url ? "underline" : ""
          }`}
        >
          {title}
        </Link>
      ))}
    </nav>
  );
}
