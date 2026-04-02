"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section
      ref={ref}
      className="relative"
      style={{
        backgroundColor: "#080808",
        borderTop: "1px solid rgba(201,168,76,0.1)",
        borderBottom: "1px solid rgba(201,168,76,0.1)",
        position: "relative",
        zIndex: 1,
        overflow: "hidden",
      }}
    >
      {/* Gold gradient bg */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, rgba(201,168,76,0.04) 0%, transparent 50%, rgba(201,168,76,0.04) 100%)",
        }}
      />

      <div className="container-luxury py-24 pb-32 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
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
            Stay Connected
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(36px, 5vw, 52px)",
              fontWeight: 300,
              color: "#F5EDD6",
              lineHeight: 1.2,
              marginBottom: "16px",
            }}
          >
            Join the Inner Circle
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontSize: "14px",
              color: "#7A7A7A",
              lineHeight: "1.8",
              marginBottom: "40px",
            }}
          >
            Be the first to know about new collections, private appointments, and exclusive events for our discerning clientele.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="input-luxury flex-1"
                  style={{ textAlign: "center" }}
                />
                <button type="submit" className="btn-gold shrink-0" style={{ padding: "14px 28px" }}>
                  <span>Subscribe</span>
                  <ArrowRight size={14} style={{ position: "relative", zIndex: 1 }} />
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center"
              >
                <p
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "24px",
                    color: "#C9A84C",
                    marginBottom: "8px",
                  }}
                >
                  Welcome to the Inner Circle
                </p>
                <p style={{ fontSize: "12px", color: "#7A7A7A", letterSpacing: "0.15em" }}>
                  You will hear from us soon.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
