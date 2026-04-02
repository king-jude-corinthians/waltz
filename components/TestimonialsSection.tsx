"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { testimonials } from "@/lib/data";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const next = () => setActive((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section
      ref={ref}
      className="section-pad relative overflow-hidden"
      style={{ backgroundColor: "#080808", isolation: "isolate" }}
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            rgba(201,168,76,0.02) 0,
            rgba(201,168,76,0.02) 1px,
            transparent 0,
            transparent 50%
          )`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container-luxury relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
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
            Client Testimonials
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(40px, 6vw, 64px)",
              fontWeight: 300,
              color: "#F5EDD6",
              lineHeight: 1.1,
            }}
          >
            What They Say
          </motion.h2>
        </div>

        {/* Testimonial slider */}
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Quote mark */}
          <p
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "120px",
              color: "rgba(201,168,76,0.12)",
              lineHeight: 0.8,
              marginBottom: "20px",
              fontWeight: 700,
            }}
          >
            &ldquo;
          </p>

          {/* Quote text */}
          <motion.blockquote
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: 300,
              color: "#F5EDD6",
              lineHeight: 1.6,
              fontStyle: "italic",
            }}
          >
            {testimonials[active].quote}
          </motion.blockquote>

          {/* Attribution */}
          <motion.div
            key={`attr-${active}`}
            className="mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="gold-divider max-w-[60px] mx-auto mb-6" />
            <p
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "14px",
                color: "#F5EDD6",
                letterSpacing: "0.05em",
                marginBottom: "4px",
              }}
            >
              {testimonials[active].name}
            </p>
            <p
              style={{
                fontSize: "12px",
                color: "#C9A84C",
                letterSpacing: "0.15em",
              }}
            >
              {testimonials[active].title}
            </p>
            <p
              style={{
                fontSize: "11px",
                color: "#7A7A7A",
                letterSpacing: "0.2em",
                marginTop: "4px",
              }}
            >
              {testimonials[active].location}
            </p>
          </motion.div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-8 mt-12">
            <button
              onClick={prev}
              className="w-12 h-12 border border-[rgba(201,168,76,0.2)] flex items-center justify-center text-[#7A7A7A] hover:border-gold hover:text-gold transition-all duration-300"
            >
              <ChevronLeft size={16} />
            </button>

            {/* Dots */}
            <div className="flex gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="transition-all duration-300"
                  style={{
                    width: i === active ? "24px" : "6px",
                    height: "6px",
                    borderRadius: i === active ? "3px" : "50%",
                    background: i === active ? "#C9A84C" : "rgba(201,168,76,0.25)",
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 border border-[rgba(201,168,76,0.2)] flex items-center justify-center text-[#7A7A7A] hover:border-gold hover:text-gold transition-all duration-300"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
