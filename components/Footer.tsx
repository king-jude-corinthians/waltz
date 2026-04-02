"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Phone, Mail, MapPin } from "lucide-react";

const footerLinks = {
  Collections: [
    { label: "Agbada", href: "/collections" },
    { label: "Senator Wear", href: "/collections" },
    { label: "Kaftan", href: "/collections" },
    { label: "Isi-Agu", href: "/collections" },
    { label: "Aso-Oke", href: "/collections" },
  ],
  Navigate: [
    { label: "Gallery", href: "/gallery" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Book Appointment", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer
      style={{ backgroundColor: "#080808", borderTop: "1px solid rgba(201,168,76,0.12)", marginTop: "80px" }}
    >
      <div className="container-luxury py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <p
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "36px",
                  fontWeight: 300,
                  letterSpacing: "0.15em",
                  color: "#F5EDD6",
                  lineHeight: 1.1,
                }}
              >
                WALTZ
              </p>
              <p
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "8px",
                  fontWeight: 300,
                  letterSpacing: "0.5em",
                  color: "#C9A84C",
                  textTransform: "uppercase",
                  marginTop: "2px",
                }}
              >
                SIGNATURE
              </p>
            </div>
            <p
              style={{
                color: "#7A7A7A",
                fontSize: "13px",
                lineHeight: "1.8",
                maxWidth: "240px",
              }}
            >
              Bespoke Nigerian luxury tailoring. Crafted with precision for those who understand that clothing is identity.
            </p>
            {/* Social */}
            <div className="flex gap-4 mt-8">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 border border-[rgba(201,168,76,0.2)] flex items-center justify-center text-[#7A7A7A] hover:border-gold hover:text-gold transition-all duration-300"
              >
                <Instagram size={14} />
              </a>
              <a
                href="https://wa.me/2348000000000"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 border border-[rgba(201,168,76,0.2)] flex items-center justify-center text-[#7A7A7A] hover:border-gold hover:text-gold transition-all duration-300 text-[11px] tracking-widest font-light"
              >
                WA
              </a>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4
                style={{
                  color: "#C9A84C",
                  fontSize: "10px",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  fontFamily: "var(--font-dm-sans)",
                  marginBottom: "24px",
                }}
              >
                {category}
              </h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      style={{
                        color: "#7A7A7A",
                        fontSize: "13px",
                        letterSpacing: "0.05em",
                        transition: "color 0.3s",
                      }}
                      className="hover:text-cream transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Column */}
          <div>
            <h4
              style={{
                color: "#C9A84C",
                fontSize: "10px",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                fontFamily: "var(--font-dm-sans)",
                marginBottom: "24px",
              }}
            >
              Contact
            </h4>
            <ul className="space-y-5">
              <li className="flex gap-3 items-start">
                <MapPin size={14} className="text-gold mt-1 shrink-0" />
                <span style={{ color: "#7A7A7A", fontSize: "13px", lineHeight: "1.6" }}>
                  14B Kofo Abayomi Street,<br />Victoria Island, Lagos
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={14} className="text-gold shrink-0" />
                <a
                  href="tel:+2348000000000"
                  style={{ color: "#7A7A7A", fontSize: "13px" }}
                  className="hover:text-cream transition-colors"
                >
                  +234 (0) 800 000 0000
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={14} className="text-gold shrink-0" />
                <a
                  href="mailto:hello@waltzsignature.com"
                  style={{ color: "#7A7A7A", fontSize: "13px" }}
                  className="hover:text-cream transition-colors"
                >
                  hello@waltzsignature.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="gold-divider mt-16 mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p style={{ color: "#4A4A4A", fontSize: "11px", letterSpacing: "0.1em" }}>
            © {new Date().getFullYear()} Waltz Signature. All rights reserved.
          </p>
          <p style={{ color: "#4A4A4A", fontSize: "11px", letterSpacing: "0.1em" }}>
            Crafted in Lagos, Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
}
