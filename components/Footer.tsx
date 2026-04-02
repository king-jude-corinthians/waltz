"use client";

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

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
      style={{ backgroundColor: "#080808", borderTop: "1px solid rgba(201,168,76,0.12)" }}
    >
      <div className="container-luxury" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
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
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
              </a>
              <a
                href="https://wa.me/2349024692783"
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
                  Gwarimpa UltraModern Market,<br />Abuja FCT
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={14} className="text-gold shrink-0" />
                <a
                  href="tel:+2349024692783"
                  style={{ color: "#7A7A7A", fontSize: "13px" }}
                  className="hover:text-cream transition-colors"
                >
                  +234 902 469 2783
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={14} className="text-gold shrink-0" />
                <a
                  href="mailto:waltzsignature@gmail.com"
                  style={{ color: "#7A7A7A", fontSize: "13px" }}
                  className="hover:text-cream transition-colors"
                >
                  waltzsignature@gmail.com
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
            Crafted by{" "}
            <a
              href="https://your-portfolio-link-here.com"
              target="_blank"
              rel="noreferrer"
              style={{
                color: "#C9A84C",
                transition: "text-shadow 0.3s ease",
                textShadow: "0 0 8px rgba(201,168,76,0.6), 0 0 16px rgba(201,168,76,0.3)",
              }}
              onMouseEnter={e => (e.currentTarget.style.textShadow = "0 0 12px rgba(201,168,76,1), 0 0 24px rgba(201,168,76,0.8), 0 0 48px rgba(201,168,76,0.5)")}
              onMouseLeave={e => (e.currentTarget.style.textShadow = "0 0 8px rgba(201,168,76,0.6), 0 0 16px rgba(201,168,76,0.3)")}
            >
              KINGJUDE
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
