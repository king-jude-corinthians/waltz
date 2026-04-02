"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="relative flex flex-col"
      style={{
        backgroundColor: "#080808",
        overflowX: "hidden",
        minHeight: "100vh",
      }}
    >
      {/* Geometric pattern bg */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            rgba(201,168,76,0.03) 0,
            rgba(201,168,76,0.03) 1px,
            transparent 0,
            transparent 50%
          )`,
          backgroundSize: "30px 30px",
        }}
      />

      {/* Gold radial glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Side lines */}
      <motion.div
        className="absolute left-8 top-0 bottom-0 w-[1px]"
        style={{ background: "linear-gradient(180deg, transparent, rgba(201,168,76,0.2), transparent)" }}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.5, delay: 3.2 }}
      />
      <motion.div
        className="absolute right-8 top-0 bottom-0 w-[1px]"
        style={{ background: "linear-gradient(180deg, transparent, rgba(201,168,76,0.2), transparent)" }}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.5, delay: 3.2 }}
      />

      {/* Corner ornaments */}
      <div
        className="absolute top-24 left-12 w-16 h-16 hidden lg:block"
        style={{
          borderLeft: "1px solid rgba(201,168,76,0.15)",
          borderTop: "1px solid rgba(201,168,76,0.15)",
        }}
      />
      <div
        className="absolute top-24 right-12 w-16 h-16 hidden lg:block"
        style={{
          borderRight: "1px solid rgba(201,168,76,0.15)",
          borderTop: "1px solid rgba(201,168,76,0.15)",
        }}
      />
      <div
        className="absolute bottom-24 left-12 w-16 h-16 hidden lg:block"
        style={{
          borderLeft: "1px solid rgba(201,168,76,0.15)",
          borderBottom: "1px solid rgba(201,168,76,0.15)",
        }}
      />
      <div
        className="absolute bottom-24 right-12 w-16 h-16 hidden lg:block"
        style={{
          borderRight: "1px solid rgba(201,168,76,0.15)",
          borderBottom: "1px solid rgba(201,168,76,0.15)",
        }}
      />

      {/* Main content — flex-1 so it fills space between nav and scroll indicator */}
      <div
        className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6"
        style={{ paddingTop: "80px", paddingBottom: "80px" }}
      >
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.6 }}
          style={{
            fontFamily: "var(--font-dm-sans)",
            fontSize: "10px",
            letterSpacing: "0.5em",
            textTransform: "uppercase",
            color: "rgba(201,168,76,0.7)",
            marginBottom: "40px",
          }}
        >
          Lagos, Nigeria · Est. 2018
        </motion.p>

        {/* WALTZ */}
        <div style={{ overflow: "hidden" }}>
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, delay: 2.7, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(52px, 14vw, 160px)",
              fontWeight: 300,
              letterSpacing: "0.08em",
              color: "#F5EDD6",
              lineHeight: 0.9,
              display: "block",
            }}
          >
            WALTZ
          </motion.h1>
        </div>

        {/* Gold separator */}
        <motion.div
          className="mx-auto my-5"
          initial={{ width: 0 }}
          animate={{ width: "80%" }}
          transition={{ duration: 1.2, delay: 3.2 }}
          style={{
            height: "1px",
            background: "linear-gradient(90deg, transparent, #C9A84C 30%, #E8D18A 50%, #C9A84C 70%, transparent)",
            maxWidth: "600px",
          }}
        />

        {/* SIGNATURE */}
        <div style={{ overflow: "hidden" }}>
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, delay: 2.9, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(34px, 10.5vw, 160px)",
              fontWeight: 300,
              letterSpacing: "clamp(0.05em, 1.5vw, 0.25em)",
              color: "#F5EDD6",
              lineHeight: 0.9,
              display: "block",
            }}
          >
            SIGNATURE
          </motion.h1>
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3.4 }}
          style={{
            fontFamily: "var(--font-dm-sans)",
            fontSize: "11px",
            letterSpacing: "clamp(0.1em, 1vw, 0.3em)",
            textTransform: "uppercase",
            color: "rgba(245,237,214,0.45)",
            marginTop: "40px",
            fontWeight: 300,
          }}
        >
          The Art of Nigerian Luxury Tailoring
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mt-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.6 }}
        >
          <Link href="/collections" className="btn-gold">
            <span>Explore Collections</span>
          </Link>
          <Link href="/about" className="btn-ghost">
            Our Story
            <span
              style={{
                display: "inline-block",
                width: "32px",
                height: "1px",
                backgroundColor: "currentColor",
              }}
            />
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator — always at the bottom in normal flow, never overlaps buttons */}
      <motion.div
        className="relative z-10 flex flex-col items-center gap-3 pb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.2 }}
      >
        <p
          style={{
            fontSize: "9px",
            letterSpacing: "0.5em",
            textTransform: "uppercase",
            color: "rgba(245,237,214,0.3)",
            fontFamily: "var(--font-dm-sans)",
          }}
        >
          Scroll
        </p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} style={{ color: "rgba(201,168,76,0.5)" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
