"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { products } from "@/lib/data";
import { ArrowRight } from "lucide-react";

function ProductCard({ product, index }: { product: (typeof products)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className="product-card group"
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Image placeholder */}
      <div className="relative overflow-hidden aspect-portrait" style={{ background: product.gradient }}>
        {/* Shimmer overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(201,168,76,0.05) 0%, transparent 50%, rgba(201,168,76,0.08) 100%)",
          }}
        />

        {/* Badge */}
        {product.badge && (
          <div
            className="absolute top-4 left-4 px-3 py-1"
            style={{
              background: "rgba(201,168,76,0.15)",
              border: "1px solid rgba(201,168,76,0.3)",
              backdropFilter: "blur(8px)",
            }}
          >
            <span
              style={{
                fontSize: "8px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#C9A84C",
                fontFamily: "var(--font-dm-sans)",
              }}
            >
              {product.badge}
            </span>
          </div>
        )}

        {/* Category label */}
        <div
          className="absolute top-4 right-4"
          style={{
            fontSize: "8px",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "rgba(245,237,214,0.4)",
            fontFamily: "var(--font-dm-sans)",
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* Hover overlay */}
        <div
          className="product-overlay absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500"
          style={{ background: "rgba(8,8,8,0.7)", backdropFilter: "blur(4px)" }}
        >
          <Link
            href={`/collections`}
            className="btn-gold text-[10px]"
            style={{ padding: "12px 28px" }}
          >
            <span>View Details</span>
          </Link>
        </div>

        {/* Fabric texture suggestion */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32"
          style={{
            background: "linear-gradient(0deg, rgba(8,8,8,0.6) 0%, transparent 100%)",
          }}
        />
      </div>

      {/* Product info */}
      <div className="pt-5 pb-2">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p
              style={{
                fontSize: "10px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#C9A84C",
                fontFamily: "var(--font-dm-sans)",
                marginBottom: "6px",
              }}
            >
              {product.category}
            </p>
            <h3
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "20px",
                fontWeight: 400,
                color: "#F5EDD6",
                lineHeight: 1.2,
              }}
            >
              {product.name}
            </h3>
          </div>
          <p
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "18px",
              color: "#C9A84C",
              whiteSpace: "nowrap",
              paddingTop: "20px",
            }}
          >
            {product.price}
          </p>
        </div>
        <p
          style={{
            fontSize: "12px",
            color: "#7A7A7A",
            marginTop: "8px",
            lineHeight: "1.6",
          }}
        >
          {product.shortDescription}
        </p>
      </div>
    </motion.div>
  );
}

export default function FeaturedCollections() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section className="section-pad" style={{ backgroundColor: "#0D0D0D" }}>
      <div className="container-luxury">
        {/* Section header */}
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
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
              Signature Pieces
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
              The Collection
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Link
              href="/collections"
              className="flex items-center gap-3 group"
              style={{
                fontSize: "11px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#7A7A7A",
                fontFamily: "var(--font-dm-sans)",
                transition: "color 0.3s",
              }}
            >
              <span className="group-hover:text-cream transition-colors">View All Pieces</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, 4).map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
