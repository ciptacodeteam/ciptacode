import { IconMail } from "@tabler/icons-react";
import Link from "next/link";
import BrandLogo from "../logos/BrandLogo";
import NavList from "../navigations/NavList";
import { Button } from "../ui/button";
import SidebarMobile from "./SidebarMobile";

const MainHeader = () => {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 container mx-auto">
      <nav className="text-primary shadow-soft rounded-b-4xl bg-white px-4 py-6 md:px-10">
        <div className="container mx-auto flex items-center justify-between">
          <BrandLogo clickable />
          <div className="hidden md:block">
            <NavList />
          </div>

          <div className="flex items-center space-x-4">
            <Button asChild className="hidden md:flex">
              <Link href="/" className="flex-center gap-2">
                <IconMail />
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
