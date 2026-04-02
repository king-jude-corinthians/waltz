"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function BrandManifesto() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const words = [
    "We", "do", "not", "make", "clothes.",
    "We", "craft", "declarations.",
    "Every", "stitch", "a", "statement.",
    "Every", "thread,", "a", "legacy.",
  ];

  return (
    <section
      ref={ref}
      className="section-pad relative overflow-hidden"
      style={{ backgroundColor: "#080808" }}
    >
      {/* Background ornament */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container-luxury">
        <div className="max-w-4xl mx-auto text-center">
          {/* Ornament */}
          <motion.div
            className="flex items-center justify-center gap-6 mb-16"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div
              style={{
                width: "80px",
                height: "1px",
                background: "linear-gradient(90deg, transparent, #C9A84C)",
              }}
            />
            <div
              style={{
                width: "8px",
                height: "8px",
                border: "1px solid #C9A84C",
                transform: "rotate(45deg)",
                flexShrink: 0,
              }}
            />
            <div
              style={{
                width: "80px",
                height: "1px",
                background: "linear-gradient(90deg, #C9A84C, transparent)",
              }}
            />
          </motion.div>

          {/* Animated quote */}
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(36px, 5vw, 58px)",
              fontWeight: 300,
              lineHeight: 1.3,
              letterSpacing: "0.02em",
            }}
          >
            {words.map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-[0.25em]"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + i * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{
                  color: i >= 5 && i <= 7 ? "#C9A84C" : "#F5EDD6",
                }}
              >
                {word}
              </motion.span>
            ))}
          </h2>

          {/* Attribution */}
          <motion.div
            className="mt-12 flex items-center justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <div
              style={{
                width: "40px",
                height: "1px",
                background: "rgba(201,168,76,0.4)",
              }}
            />
            <p
              style={{
                fontSize: "10px",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "rgba(201,168,76,0.6)",
                fontFamily: "var(--font-dm-sans)",
              }}
            >
              Waltz Signature
            </p>
            <div
              style={{
                width: "40px",
                height: "1px",
                background: "rgba(201,168,76,0.4)",
              }}
            />
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-8 mt-20"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            {[
              { number: "6+", label: "Years of Artisanship" },
              { number: "500+", label: "Pieces Crafted" },
              { number: "100%", label: "Bespoke Tailoring" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "clamp(36px, 5vw, 52px)",
                    fontWeight: 300,
                    color: "#C9A84C",
                    lineHeight: 1,
                    marginBottom: "8px",
                  }}
                >
                  {stat.number}
                </p>
                <p
                  style={{
                    fontSize: "10px",
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: "#7A7A7A",
                    fontFamily: "var(--font-dm-sans)",
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
