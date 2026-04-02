"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { products, categories } from "@/lib/data";
import Link from "next/link";
import { X } from "lucide-react";

function ProductModal({
  product,
  onClose,
}: {
  product: (typeof products)[0];
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9000] flex items-end md:items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <div className="absolute inset-0" style={{ background: "rgba(8,8,8,0.9)", backdropFilter: "blur(12px)" }} />
        <motion.div
          className="relative w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden"
          style={{ backgroundColor: "#0D0D0D", border: "1px solid rgba(201,168,76,0.15)" }}
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 60, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Image panel */}
          <div className="aspect-portrait md:aspect-auto min-h-[300px]" style={{ background: product.gradient }}>
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(135deg, rgba(201,168,76,0.05) 0%, transparent 100%)" }}
            />
            {product.badge && (
              <div
                className="absolute top-6 left-6 px-3 py-1"
                style={{
                  background: "rgba(201,168,76,0.15)",
                  border: "1px solid rgba(201,168,76,0.3)",
                }}
              >
                <span style={{ fontSize: "8px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#C9A84C" }}>
                  {product.badge}
                </span>
              </div>
            )}
          </div>

          {/* Info panel */}
          <div className="p-10 flex flex-col justify-between">
            <div>
              <p
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: "#C9A84C",
                  fontFamily: "var(--font-dm-sans)",
                  marginBottom: "10px",
                }}
              >
                {product.category}
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "36px",
                  fontWeight: 300,
                  color: "#F5EDD6",
                  lineHeight: 1.1,
                  marginBottom: "8px",
                }}
              >
                {product.name}
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "28px",
                  color: "#C9A84C",
                  marginBottom: "20px",
                }}
              >
                {product.price}
              </p>
              <div className="gold-divider mb-6" />
              <p
                style={{
                  fontSize: "13px",
                  color: "#7A7A7A",
                  lineHeight: "1.9",
                  marginBottom: "24px",
                }}
              >
                {product.description}
              </p>

              {/* Materials */}
              <div>
                <p
                  style={{
                    fontSize: "9px",
                    letterSpacing: "0.4em",
                    textTransform: "uppercase",
                    color: "#C9A84C",
                    marginBottom: "10px",
                    fontFamily: "var(--font-dm-sans)",
                  }}
                >
                  Materials
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.materials.map((mat) => (
                    <span
                      key={mat}
                      style={{
                        fontSize: "11px",
                        padding: "4px 12px",
                        border: "1px solid rgba(201,168,76,0.2)",
                        color: "#7A7A7A",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {mat}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Link href="/contact" className="btn-gold w-full justify-center text-[10px]">
                <span>Book a Consultation</span>
              </Link>
            </div>
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-[#7A7A7A] hover:text-gold transition-colors border border-[rgba(201,168,76,0.15)] hover:border-gold"
          >
            <X size={16} />
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function CollectionsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<(typeof products)[0] | null>(null);

  const filtered =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <>
      <div style={{ paddingTop: "80px", backgroundColor: "#080808", minHeight: "100vh" }}>
        {/* Page hero */}
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
              background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201,168,76,0.05) 0%, transparent 70%)",
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
              Bespoke Nigerian Wear
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
              Collections
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
              Each piece is crafted to order. Prices reflect artisanship, not production.
            </motion.p>
          </div>
        </div>

        {/* Filter bar */}
        <div
          className="sticky top-20 z-50"
          style={{
            backgroundColor: "rgba(8,8,8,0.95)",
            borderBottom: "1px solid rgba(201,168,76,0.08)",
            backdropFilter: "blur(12px)",
          }}
        >
          <div className="container-luxury">
            <div className="flex items-center gap-2 py-5 overflow-x-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="shrink-0 transition-all duration-300"
                  style={{
                    padding: "8px 20px",
                    fontSize: "10px",
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    fontFamily: "var(--font-dm-sans)",
                    color: activeCategory === cat ? "#080808" : "#7A7A7A",
                    backgroundColor: activeCategory === cat ? "#C9A84C" : "transparent",
                    border: `1px solid ${activeCategory === cat ? "#C9A84C" : "rgba(201,168,76,0.15)"}`,
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Products grid */}
        <div className="container-luxury py-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {filtered.map((product, i) => (
                <motion.div
                  key={product.id}
                  className="product-card group cursor-none"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => setSelectedProduct(product)}
                >
                  {/* Image */}
                  <div
                    className="relative overflow-hidden aspect-portrait"
                    style={{ background: product.gradient }}
                  >
                    <div
                      className="absolute inset-0"
                      style={{
                        background: "linear-gradient(135deg, rgba(201,168,76,0.04) 0%, transparent 60%)",
                      }}
                    />
                    {product.badge && (
                      <div
                        className="absolute top-4 left-4 px-3 py-1"
                        style={{
                          background: "rgba(201,168,76,0.15)",
                          border: "1px solid rgba(201,168,76,0.3)",
                        }}
                      >
                        <span style={{ fontSize: "8px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#C9A84C" }}>
                          {product.badge}
                        </span>
                      </div>
                    )}
                    <div
                      className="absolute top-4 right-4 text-[rgba(245,237,214,0.3)]"
                      style={{ fontSize: "9px", letterSpacing: "0.3em", fontFamily: "var(--font-cormorant)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div
                      className="product-overlay absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500"
                      style={{ background: "rgba(8,8,8,0.75)" }}
                    >
                      <span
                        style={{
                          fontSize: "10px",
                          letterSpacing: "0.3em",
                          textTransform: "uppercase",
                          color: "#C9A84C",
                          border: "1px solid rgba(201,168,76,0.4)",
                          padding: "10px 24px",
                        }}
                      >
                        View Details
                      </span>
                    </div>
                    <div
                      className="absolute bottom-0 left-0 right-0 h-24"
                      style={{ background: "linear-gradient(0deg, rgba(8,8,8,0.5) 0%, transparent 100%)" }}
                    />
                  </div>

                  {/* Info */}
                  <div className="pt-5">
                    <p
                      style={{
                        fontSize: "9px",
                        letterSpacing: "0.4em",
                        textTransform: "uppercase",
                        color: "#C9A84C",
                        fontFamily: "var(--font-dm-sans)",
                        marginBottom: "5px",
                      }}
                    >
                      {product.category}
                    </p>
                    <div className="flex items-start justify-between gap-2">
                      <h3
                        style={{
                          fontFamily: "var(--font-cormorant)",
                          fontSize: "20px",
                          fontWeight: 400,
                          color: "#F5EDD6",
                        }}
                      >
                        {product.name}
                      </h3>
                      <p
                        style={{
                          fontFamily: "var(--font-cormorant)",
                          fontSize: "16px",
                          color: "#C9A84C",
                          whiteSpace: "nowrap",
                          paddingTop: "4px",
                        }}
                      >
                        {product.price}
                      </p>
                    </div>
                    <p style={{ fontSize: "12px", color: "#7A7A7A", marginTop: "6px", lineHeight: "1.6" }}>
                      {product.shortDescription}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* CTA */}
          <div className="text-center mt-20 pt-16 pb-24" style={{ borderTop: "1px solid rgba(201,168,76,0.08)" }}>
            <p
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "28px",
                color: "#F5EDD6",
                marginBottom: "8px",
              }}
            >
              Don&apos;t see what you&apos;re looking for?
            </p>
            <p style={{ color: "#7A7A7A", fontSize: "14px", marginBottom: "24px" }}>
              Every piece at Waltz Signature is made-to-order. We accept custom commissions.
            </p>
            <Link href="/contact" className="btn-gold">
              <span>Commission a Custom Piece</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Product modal */}
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </>
  );
}
