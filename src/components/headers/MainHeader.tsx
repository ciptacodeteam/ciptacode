"use client";

import { cn } from "@/lib/utils";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import BrandLogo from "../logos/BrandLogo";
import NavList from "../navigations/NavList";
import { Button } from "../ui/button";
import SidebarMobile from "./SidebarMobile";

const MainHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn("fixed top-0 right-0 left-0 z-40 container mx-auto w-full")}
    >
      <nav
        className={cn(
          "text-primary bg-white px-4 py-6 transition-all duration-300 ease-in-out md:px-10",
          isScrolled && "shadow-soft",
        )}
      >
        <div className="container mx-auto flex items-center justify-between">
          <BrandLogo clickable />
          <div className="hidden md:block">
            <NavList />
          </div>

          <div className="flex items-center space-x-4">
            <Button asChild className="hidden md:flex">
              <Link href="/" className="flex-center gap-2">
                <IconBrandWhatsapp />
                Contact Us
              </Link>
            </Button>

            <SidebarMobile />
          </div>
        </div>
      </nav>
    </header>
  );
};
export default MainHeader;
