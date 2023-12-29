"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Notas Fiscais", href: "/notas" },
  { name: "Login", href: "/login" },
  { name: "Registro", href: "/registro" },
  { name: "Nova fatura", href: "/novafatura" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Nav() {
  const pathname = usePathname();

  return (
    <>
      {navigation.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={classNames(
            pathname === item.href
              ? "border-slate-500 text-gray-900"
              : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
            "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
          )}
          aria-current={pathname === item.href ? "page" : undefined}
        >
          {item.name}
        </Link>
      ))}
    </>
  );
}
