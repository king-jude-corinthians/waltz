"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "Every garment begins with a private consultation. We understand your occasion, your vision, your identity — and translate it into a blueprint for artistry.",
  },
  {
    number: "02",
    title: "Fabric Selection",
    description:
      "From hand-woven aso-oke in Iseyin to imported Swiss damask and French lace — we source the world's finest Nigerian and premium global fabrics.",
  },
  {
    number: "03",
    title: "The Cut",
    description:
      "Each pattern is drafted by hand, tailored to your exact measurements. No shortcuts, no shortcuts. Structure is built from the inside out.",
  },
  {
    number: "04",
    title: "Hand Embroidery",
    description:
      "Our master embroiderers spend 20–200 hours on each embellished piece, threading motifs drawn from Yoruba, Igbo, and Hausa artistic traditions.",
  },
  {
    number: "05",
    title: "Final Fitting",
    description:
      "We never release a piece without a perfect fit. Final adjustments are made with surgical precision until the garment moves as an extension of you.",
  },
  {
    number: "06",
    title: "Delivery",
    description:
      "Your finished piece arrives in our signature box, wrapped in tissue, sealed with our mark — a moment worthy of the occasion that awaits.",
  },
];

export default function CraftsmanshipSection() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section className="section-pad" style={{ backgroundColor: "#0D0D0D" }}>
      <div className="container-luxury">
        {/* Header */}
        <div ref={headerRef} className="max-w-2xl mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{
              fontSize: "10px",
              letterSpacing: "0.5em",
              textTransform: "uppercase",
              color: "#C9A84C",
              fontFamily: "var(--font-dm-sans)",
              marginBottom: "12px",
            }}
          >
            Our Process
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(40px, 6vw, 64px)",
              fontWeight: 300,
              color: "#F5EDD6",
              lineHeight: 1.1,
            }}
          >
            The Art of Making
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              color: "#7A7A7A",
              fontSize: "14px",
              lineHeight: "1.8",
              marginTop: "16px",
            }}
          >
            From your first consultation to the moment you wear your piece, every step is deliberate, unhurried, and uncompromising.
          </motion.p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {steps.map((step, i) => (
            <StepCard key={step.number} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StepCard({ step, index }: { step: (typeof steps)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className="relative p-8 group"
      style={{
        borderRight: index % 3 !== 2 ? "1px solid rgba(201,168,76,0.08)" : "none",
        borderBottom: index < 3 ? "1px solid rgba(201,168,76,0.08)" : "none",
      }}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Number */}
      <p
        style={{
          fontFamily: "var(--font-cormorant)",
          fontSize: "64px",
          fontWeight: 300,
          color: "rgba(201,168,76,0.08)",
          lineHeight: 1,
          marginBottom: "24px",
          transition: "color 0.4s",
        }}
        className="group-hover:!text-[rgba(201,168,76,0.15)] transition-all duration-400"
      >
        {step.number}
      </p>

      {/* Gold line */}
      <div
        className="mb-5 transition-all duration-500"
        style={{
          width: "32px",
          height: "1px",
          background: "#C9A84C",
        }}
      />

      <h3
        style={{
          fontFamily: "var(--font-cormorant)",
          fontSize: "24px",
          fontWeight: 400,
          color: "#F5EDD6",
          marginBottom: "12px",
        }}
      >
        {step.title}
      </h3>
      <p
        style={{
          fontSize: "13px",
          color: "#7A7A7A",
          lineHeight: "1.8",
        }}
      >
        {step.description}
      </p>
    </motion.div>
  );
}
