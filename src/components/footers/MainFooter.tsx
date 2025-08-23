import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTiktok,
  IconBrandWhatsapp,
  IconMail,
} from "@tabler/icons-react";
import Link from "next/link";
import BrandLogo from "../logos/BrandLogo";

const MainFooter = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* About */}
          <div className="max-w-md space-y-4">
            <BrandLogo clickable />
            <p className="text-muted-foreground mt-5 text-sm">
              Crafting reliable digital solutions for startups and enterprises.
              We help you build, scale, and ship faster with exceptional UX.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <IconBrandInstagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <IconBrandWhatsapp size={20} />
                <span className="sr-only">Whatsapp</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <IconBrandLinkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <IconMail size={20} />
                <span className="sr-only">Email</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <IconBrandTiktok size={20} />
                <span className="sr-only">Tiktok</span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Services</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/services#website"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Website Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#erp"
                    className="text-muted-foreground hover:text-primary"
                  >
                    ERP Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#apps"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Apps & Web Development
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/portfolio"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-muted-foreground hover:text-primary"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact & Newsletter */}
          <div className="max-w-md space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            {/* <p className="text-muted-foreground text-sm">
              Want to discuss your project?
            </p> */}
            <div className="text-muted-foreground space-y-1 text-sm">
              <p>Phone number:</p>
              <Link
                href="/contact"
                className="text-primary text-base font-extrabold"
              >
                +62 812-3456-7890
              </Link>
            </div>
            <div className="text-muted-foreground text-sm">
              <p>Email address:</p>
              <Link
                href="mailto:ciptaprojects@gmail.com"
                className="text-primary text-base font-bold hover:underline"
              >
                ciptaprojects@gmail.com
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © 2025 Ciptacode. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                href="/privacy"
                className="text-muted-foreground hover:text-primary"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-muted-foreground hover:text-primary"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default MainFooter;
