"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const duration = 2200;
    const interval = 20;
    const steps = duration / interval;
    let current = 0;

    const timer = setInterval(() => {
      current++;
      const progress = current / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.min(Math.round(eased * 100), 100));
      if (current >= steps) {
        clearInterval(timer);
        setTimeout(() => setVisible(false), 400);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  if (!isMounted) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[99998] flex flex-col items-center justify-center"
          style={{ backgroundColor: "#080808" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Top line */}
          <motion.div
            className="absolute top-0 left-0 h-[1px] bg-gold"
            initial={{ width: "0%" }}
            animate={{ width: `${count}%` }}
            transition={{ ease: "linear" }}
            style={{ background: "linear-gradient(90deg, transparent, #C9A84C)" }}
          />

          {/* Logo */}
          <div className="text-center overflow-hidden">
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <p
                className="text-[10px] tracking-[0.6em] uppercase mb-6"
                style={{ color: "rgba(201, 168, 76, 0.6)", fontFamily: "var(--font-dm-sans)" }}
              >
                Abuja · Nigeria
              </p>
            </motion.div>

            <motion.h1
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(48px, 8vw, 96px)",
                fontWeight: 300,
                letterSpacing: "0.15em",
                color: "#F5EDD6",
                lineHeight: 1,
              }}
            >
              WALTZ
            </motion.h1>

            <motion.div
              className="h-[1px] mx-auto my-4"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.8 }}
              style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }}
            />

            <motion.h1
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(48px, 8vw, 96px)",
                fontWeight: 300,
                letterSpacing: "0.35em",
                color: "#F5EDD6",
                lineHeight: 1,
              }}
            >
              SIGNATURE
            </motion.h1>
          </div>

          {/* Counter */}
          <motion.div
            className="absolute bottom-12 right-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "48px",
                color: "rgba(201, 168, 76, 0.3)",
                fontWeight: 300,
                letterSpacing: "0.1em",
              }}
            >
              {String(count).padStart(2, "0")}
            </span>
          </motion.div>

          {/* Bottom label */}
          <motion.p
            className="absolute bottom-12 left-12 text-[10px] tracking-[0.4em] uppercase"
            style={{ color: "rgba(245, 237, 214, 0.3)", fontFamily: "var(--font-dm-sans)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Nigerian Luxury Tailoring
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
