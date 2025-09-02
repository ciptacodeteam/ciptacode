import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTiktok,
  IconBrandWhatsapp,
  IconMail,
} from "@tabler/icons-react";
import Link from "next/link";
import BrandLogo from "../logos/BrandLogo";
import {
  EMAIL_ADDRESS,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  PHONE_NUMBER,
  TIKTOK_URL,
} from "@/lib/constant";
import { getEmailUrl, getWhatsappMessageUrl } from "@/lib/utils";

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
                href={INSTAGRAM_URL}
                className="text-muted-foreground hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconBrandInstagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href={getWhatsappMessageUrl(
                  PHONE_NUMBER,
                  "Halo, saya ingin menanyakan tentang layanan Anda yang tersedia pada website ciptacode.id.",
                )}
                className="text-muted-foreground hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconBrandWhatsapp size={20} />
                <span className="sr-only">Whatsapp</span>
              </Link>
              <Link
                href={LINKEDIN_URL}
                className="text-muted-foreground hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconBrandLinkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href={getEmailUrl(EMAIL_ADDRESS)}
                className="text-muted-foreground hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconMail size={20} />
                <span className="sr-only">Email</span>
              </Link>
              <Link
                href={TIKTOK_URL}
                className="text-muted-foreground hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
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
                    prefetch
                  >
                    Website Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#erp"
                    className="text-muted-foreground hover:text-primary"
                    prefetch
                  >
                    ERP Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#apps"
                    className="text-muted-foreground hover:text-primary"
                    prefetch
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
                    prefetch
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-muted-foreground hover:text-primary"
                    prefetch
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-muted-foreground hover:text-primary"
                    prefetch
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
                href={getWhatsappMessageUrl(
                  PHONE_NUMBER,
                  "Halo, saya ingin menanyakan tentang layanan Anda yang tersedia pada website ciptacode.id.",
                )}
                className="text-primary text-base font-extrabold"
                target="_blank"
                rel="noopener noreferrer"
              >
                +62{" "}
                {PHONE_NUMBER.slice(2).replace(
                  /(\d{3})(\d{4})(\d{4})/,
                  "$1-$2-$3",
                )}
              </Link>
            </div>
            <div className="text-muted-foreground text-sm">
              <p>Email address:</p>
              <Link
                href={getEmailUrl(EMAIL_ADDRESS)}
                className="text-primary text-base font-bold hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {EMAIL_ADDRESS}
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
                prefetch
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-muted-foreground hover:text-primary"
                prefetch
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
