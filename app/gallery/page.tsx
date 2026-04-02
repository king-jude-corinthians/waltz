"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { galleryItems } from "@/lib/data";
import { X, ZoomIn } from "lucide-react";

export default function GalleryPage() {
  const [selected, setSelected] = useState<(typeof galleryItems)[0] | null>(null);
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  // Build masonry-style columns
  const col1 = galleryItems.filter((_, i) => i % 3 === 0);
  const col2 = galleryItems.filter((_, i) => i % 3 === 1);
  const col3 = galleryItems.filter((_, i) => i % 3 === 2);

  return (
    <div style={{ paddingTop: "80px", backgroundColor: "#080808", minHeight: "100vh" }}>
      {/* Hero */}
      <div
        className="relative py-24 text-center"
        style={{
          borderBottom: "1px solid rgba(201,168,76,0.1)",
          background: "linear-gradient(180deg, #050505 0%, #0D0D0D 100%)",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201,168,76,0.05) 0%, transparent 70%)",
          }}
        />
        <div className="container-luxury relative z-10" ref={headerRef}>
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
            Visual Archive
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(48px, 8vw, 96px)",
              fontWeight: 300,
              color: "#F5EDD6",
              lineHeight: 1,
              letterSpacing: "0.05em",
            }}
          >
            Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              color: "#7A7A7A",
              fontSize: "14px",
              marginTop: "16px",
              maxWidth: "480px",
              margin: "16px auto 0",
              lineHeight: "1.8",
            }}
          >
            An editorial lookbook of our finest works. Each frame a story of Nigerian artisanship.
          </motion.p>
        </div>
      </div>

      {/* Masonry Grid */}
      <div className="container-luxury py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[col1, col2, col3].map((col, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-4">
              {col.map((item, rowIndex) => {
                const globalIndex = colIndex + rowIndex * 3;
                const heights = ["400px", "520px", "360px"];
                const height = heights[rowIndex % heights.length];
                return (
                  <GalleryCard
                    key={item.id}
                    item={item}
                    index={globalIndex}
                    height={height}
                    onClick={() => setSelected(item)}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[9000] flex items-center justify-center p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <div
              className="absolute inset-0"
              style={{ background: "rgba(5,5,5,0.95)", backdropFilter: "blur(16px)" }}
            />
            <motion.div
              className="relative w-full max-w-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="w-full"
                style={{
                  height: "70vh",
                  background: selected.gradient,
                  border: "1px solid rgba(201,168,76,0.2)",
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(135deg, rgba(201,168,76,0.06) 0%, transparent 50%)",
                  }}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 p-8"
                  style={{
                    background: "linear-gradient(0deg, rgba(8,8,8,0.8) 0%, transparent 100%)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "28px",
                      color: "#F5EDD6",
                      fontWeight: 300,
                    }}
                  >
                    {selected.label}
                  </p>
                  <p style={{ fontSize: "10px", letterSpacing: "0.3em", color: "#C9A84C", marginTop: "4px" }}>
                    WALTZ SIGNATURE
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center border border-[rgba(201,168,76,0.2)] text-[#7A7A7A] hover:text-gold hover:border-gold transition-all"
              >
                <X size={14} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function GalleryCard({
  item,
  index,
  height,
  onClick,
}: {
  item: (typeof galleryItems)[0];
  index: number;
  height: string;
  onClick: () => void;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className="relative overflow-hidden group cursor-none"
      style={{ height, background: item.gradient }}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onClick={onClick}
    >
      {/* Shimmer overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, rgba(201,168,76,0.04) 0%, transparent 60%, rgba(201,168,76,0.06) 100%)",
        }}
      />

      {/* Label */}
      <div
        className="absolute top-5 left-5"
        style={{
          fontSize: "8px",
          letterSpacing: "0.4em",
          textTransform: "uppercase",
          color: "rgba(245,237,214,0.4)",
          fontFamily: "var(--font-dm-sans)",
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* Hover overlay */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: "rgba(8,8,8,0.65)", backdropFilter: "blur(4px)" }}
      >
        <div
          className="w-12 h-12 border border-gold flex items-center justify-center mb-4"
        >
          <ZoomIn size={16} style={{ color: "#C9A84C" }} />
        </div>
        <p
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "20px",
            color: "#F5EDD6",
            fontWeight: 300,
          }}
        >
          {item.label}
        </p>
      </div>

      {/* Bottom info */}
      <div
        className="absolute bottom-0 left-0 right-0 p-5"
        style={{ background: "linear-gradient(0deg, rgba(8,8,8,0.6) 0%, transparent 100%)" }}
      >
        <p
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "18px",
            color: "rgba(245,237,214,0.7)",
            fontWeight: 300,
          }}
        >
          {item.label}
        </p>
      </div>
    </motion.div>
  );
}
