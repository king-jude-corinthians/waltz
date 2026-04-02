"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Collections", href: "/collections" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-[9990] transition-all duration-500"
        style={{
          backgroundColor: scrolled ? "rgba(8,8,8,0.97)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(201,168,76,0.1)" : "1px solid transparent",
        }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="container-luxury">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex flex-col items-start group">
              <span
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "22px",
                  fontWeight: 400,
                  letterSpacing: "0.2em",
                  color: "#F5EDD6",
                  lineHeight: 1.1,
                  transition: "color 0.3s",
                }}
                className="group-hover:text-gold transition-colors duration-300"
              >
                WALTZ
              </span>
              <span
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "8px",
                  fontWeight: 300,
                  letterSpacing: "0.45em",
                  color: "#C9A84C",
                  textTransform: "uppercase",
                }}
              >
                SIGNATURE
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative group"
                >
                  <span
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontSize: "11px",
                      letterSpacing: "0.25em",
                      textTransform: "uppercase",
                      color: pathname === link.href ? "#C9A84C" : "rgba(245,237,214,0.7)",
                      transition: "color 0.3s",
                    }}
                    className="group-hover:text-cream transition-colors duration-300"
                  >
                    {link.label}
                  </span>
                  <span
                    className="absolute -bottom-1 left-0 h-[1px] bg-gold transition-all duration-300 ease-out"
                    style={{ width: pathname === link.href ? "100%" : "0%" }}
                  />
                  <span
                    className="absolute -bottom-1 left-0 h-[1px] bg-gold/40 w-0 group-hover:w-full transition-all duration-300 ease-out"
                    style={{ width: pathname !== link.href ? undefined : "0" }}
                  />
                </Link>
              ))}
            </nav>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-6">
              <Link
                href="/contact"
                className="hidden md:inline-flex items-center gap-3 btn-gold text-[10px]"
                style={{ padding: "10px 24px" }}
              >
                <span>Book Appointment</span>
              </Link>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden p-2 text-cream hover:text-gold transition-colors"
                aria-label="Toggle menu"
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[9980] flex flex-col"
            style={{ backgroundColor: "#080808" }}
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="container-luxury flex flex-col h-full" style={{ paddingTop: "100px", paddingBottom: "40px" }}>
              <nav className="flex flex-col gap-8">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.08 }}
                  >
                    <Link
                      href={link.href}
                      style={{
                        fontFamily: "var(--font-cormorant)",
                        fontSize: "52px",
                        fontWeight: 300,
                        letterSpacing: "0.05em",
                        color: pathname === link.href ? "#C9A84C" : "#F5EDD6",
                      }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="mt-auto">
                <div className="gold-divider mb-8" />
                <p style={{ color: "#7A7A7A", fontSize: "12px", letterSpacing: "0.3em" }}>
                  Abuja, Nigeria · +234 902 469 2783
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
