"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IconMenu } from "@tabler/icons-react";
import BrandLogo from "../logos/BrandLogo";
import NavList from "../navigations/NavList";
import { Button } from "../ui/button";

const SidebarMobile = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="link" size="icon-lg" className="md:hidden">
          <IconMenu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <header>
            <BrandLogo />
          </header>

          <main className="mt-8 px-2">
            <NavList />
          </main>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
export default SidebarMobile;
