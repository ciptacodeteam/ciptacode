"use client";

import { PHONE_NUMBER } from "@/lib/constant";
import { cn, sendWhatsappMessage } from "@/lib/utils";
import { IconBrandWhatsapp } from "@tabler/icons-react";
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

  const handleWhatsapp = () => {
    const message =
      "Halo, saya ingin menanyakan tentang layanan Anda yang tersedia pada website ciptacode.id.";
    sendWhatsappMessage(PHONE_NUMBER, message);
  };

  return (
    <header className={cn("fixed top-0 right-0 left-0 z-40 mx-auto w-full")}>
      <nav
        className={cn(
          "text-primary bg-white px-6 py-6 transition-all duration-300 ease-in-out md:px-10",
          isScrolled && "shadow-soft",
        )}
      >
        <div className="container mx-auto flex items-center justify-between">
          <BrandLogo clickable />
          <div className="hidden md:block">
            <NavList />
          </div>

          <div className="flex items-center space-x-4">
            <Button className="hidden md:flex" onClick={handleWhatsapp}>
              <IconBrandWhatsapp />
              Contact Us
            </Button>

            <SidebarMobile />
          </div>
        </div>
      </nav>
    </header>
  );
};
export default MainHeader;
