"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const mainMenus = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Portfolio",
    path: "/portfolio",
  },
  {
    label: "Services",
    path: "/services",
  },
  {
    label: "Contact",
    path: "/contact",
  },
];

const NavList = () => {
  const pathname = usePathname();

  return (
    <ul className="flex space-x-8">
      {mainMenus.map((item) => (
        <li key={item.path}>
          <Link
            href={item.path}
            className={cn(
              "relative text-gray-600 transition-colors duration-200",
              item.path === pathname && "text-primary font-bold",
              "before:bg-primary before:absolute before:-bottom-1 before:left-0 before:h-px before:w-full before:origin-center before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100",
              item.path === pathname && "before:scale-x-100",
            )}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default NavList;
