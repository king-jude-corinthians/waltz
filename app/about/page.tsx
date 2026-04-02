"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Award, Scissors, Users, Star } from "lucide-react";

const values = [
  {
    icon: Scissors,
    title: "Precision",
    description:
      "Every millimeter is intentional. Every seam, a commitment to perfection.",
  },
  {
    icon: Award,
    title: "Heritage",
    description:
      "Rooted in the rich traditions of Nigerian textile artistry. Elevated for the modern era.",
  },
  {
    icon: Users,
    title: "Bespoke",
    description:
      "No two pieces are alike. Every garment is a private commission, made for you alone.",
  },
  {
    icon: Star,
    title: "Excellence",
    description:
      "We hold ourselves to a standard higher than market expectation. Nothing leaves our studio below perfection.",
  },
];

export default function AboutPage() {
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const valuesRef = useRef(null);
  const teamRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const storyInView = useInView(storyRef, { once: true, margin: "-80px" });
  const valuesInView = useInView(valuesRef, { once: true, margin: "-80px" });
  const teamInView = useInView(teamRef, { once: true, margin: "-80px" });

  return (
    <div style={{ paddingTop: "80px", backgroundColor: "#080808", minHeight: "100vh" }}>
      {/* Hero */}
      <div
        className="relative py-28 overflow-hidden"
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
        <div className="container-luxury relative z-10 text-center" ref={heroRef}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
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
            Our Story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
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
            About Waltz Signature
          </motion.h1>
        </div>
      </div>

      {/* Brand story split */}
      <section ref={storyRef} className="section-pad">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Image placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div
                className="aspect-portrait w-full relative overflow-hidden"
                style={{
                  background: "linear-gradient(160deg, #0d0500 0%, #2d1500 40%, #6b3d00 100%)",
                  border: "1px solid rgba(201,168,76,0.1)",
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(135deg, rgba(201,168,76,0.06) 0%, transparent 50%)",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p
                      style={{
                        fontFamily: "var(--font-cormorant)",
                        fontSize: "80px",
                        color: "rgba(201,168,76,0.08)",
                        fontWeight: 300,
                        lineHeight: 1,
                      }}
                    >
                      WS
                    </p>
                  </div>
                </div>
                {/* Gold corner accents */}
                <div
                  className="absolute top-6 left-6 w-12 h-12"
                  style={{
                    borderLeft: "1px solid rgba(201,168,76,0.3)",
                    borderTop: "1px solid rgba(201,168,76,0.3)",
                  }}
                />
                <div
                  className="absolute bottom-6 right-6 w-12 h-12"
                  style={{
                    borderRight: "1px solid rgba(201,168,76,0.3)",
                    borderBottom: "1px solid rgba(201,168,76,0.3)",
                  }}
                />
              </div>
              {/* Floating accent block */}
              <div
                className="absolute -bottom-8 -right-8 w-40 h-40 hidden lg:block"
                style={{
                  background: "linear-gradient(135deg, rgba(201,168,76,0.06) 0%, transparent 100%)",
                  border: "1px solid rgba(201,168,76,0.08)",
                }}
              />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <p
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.5em",
                  textTransform: "uppercase",
                  color: "#C9A84C",
                  fontFamily: "var(--font-dm-sans)",
                  marginBottom: "16px",
                }}
              >
                Est. Lagos, 2018
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(36px, 5vw, 52px)",
                  fontWeight: 300,
                  color: "#F5EDD6",
                  lineHeight: 1.2,
                  marginBottom: "28px",
                }}
              >
                Born from a Love of
                <br />
                <em style={{ color: "#C9A84C" }}>Nigerian Craft</em>
              </h2>
              <div className="space-y-5" style={{ color: "#7A7A7A", fontSize: "14px", lineHeight: "1.9" }}>
                <p>
                  Waltz Signature was founded in Lagos with a single conviction: that Nigerian native wear deserves the same standard of craft, attention, and reverence as any garment from the great fashion houses of the world.
                </p>
                <p>
                  Our master tailor — trained in the traditions of Yoruba tailoring and refined by years in the ateliers of Lagos&apos; most distinguished clients — built Waltz Signature around a belief that clothing is more than fabric. It is identity. It is legacy. It is declaration.
                </p>
                <p>
                  Today, we serve Nigeria&apos;s most discerning men — chiefs and corporate leaders, Abuja diplomats and Lagos moguls — all united by the understanding that how you dress tells the world who you are before you speak a word.
                </p>
              </div>

              <div className="mt-10">
                <Link href="/contact" className="btn-gold">
                  <span>Book a Private Consultation</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        ref={valuesRef}
        className="section-pad"
        style={{ backgroundColor: "#0D0D0D" }}
      >
        <div className="container-luxury">
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
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
              What We Stand For
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(40px, 6vw, 56px)",
                fontWeight: 300,
                color: "#F5EDD6",
              }}
            >
              Our Values
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                className="p-10 group"
                style={{
                  borderRight: i < 3 ? "1px solid rgba(201,168,76,0.08)" : "none",
                  borderTop: "1px solid rgba(201,168,76,0.08)",
                }}
                initial={{ opacity: 0, y: 40 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <val.icon
                  size={24}
                  style={{ color: "rgba(201,168,76,0.5)", marginBottom: "20px", transition: "color 0.3s" }}
                  className="group-hover:text-gold transition-colors"
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
                  {val.title}
                </h3>
                <p style={{ fontSize: "13px", color: "#7A7A7A", lineHeight: "1.8" }}>
                  {val.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Master tailor feature */}
      <section ref={teamRef} className="section-pad" style={{ backgroundColor: "#080808" }}>
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Text first on mobile */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={teamInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="order-2 lg:order-1"
            >
              <p
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.5em",
                  textTransform: "uppercase",
                  color: "#C9A84C",
                  fontFamily: "var(--font-dm-sans)",
                  marginBottom: "16px",
                }}
              >
                The Artisan
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(36px, 5vw, 52px)",
                  fontWeight: 300,
                  color: "#F5EDD6",
                  lineHeight: 1.2,
                  marginBottom: "28px",
                }}
              >
                The Master Behind
                <br />
                <em style={{ color: "#C9A84C" }}>The Needle</em>
              </h2>
              <div className="space-y-5" style={{ color: "#7A7A7A", fontSize: "14px", lineHeight: "1.9" }}>
                <p>
                  With over 15 years of tailoring experience — beginning under the tutelage of master craftsmen in Ibadan — our lead tailor brings an almost spiritual dedication to the work of dressing Nigerian men at their finest.
                </p>
                <p>
                  His education spans traditional Yoruba embroidery techniques, northern Nigerian geometric patterns, and Igbo isi-agu traditions. This breadth allows Waltz Signature to speak fluently across Nigeria&apos;s rich sartorial heritage.
                </p>
                <p>
                  &ldquo;Clothing is not vanity. In Nigerian culture, how a man dresses tells you his tribe, his title, his character. I take that seriously every time I pick up a needle.&rdquo;
                </p>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={teamInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="order-1 lg:order-2"
            >
              <div
                className="aspect-portrait relative overflow-hidden"
                style={{
                  background: "linear-gradient(160deg, #0a0a0a 0%, #1a1a2e 40%, #0d3d6b 100%)",
                  border: "1px solid rgba(201,168,76,0.1)",
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(135deg, rgba(201,168,76,0.04) 0%, transparent 50%)",
                  }}
                />
                <div className="absolute inset-0 flex items-end p-8">
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-cormorant)",
                        fontSize: "10px",
                        letterSpacing: "0.3em",
                        color: "rgba(201,168,76,0.5)",
                        textTransform: "uppercase",
                        marginBottom: "4px",
                      }}
                    >
                      Master Tailor
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-cormorant)",
                        fontSize: "28px",
                        color: "rgba(245,237,214,0.4)",
                        fontWeight: 300,
                      }}
                    >
                      Waltz Signature
                    </p>
                  </div>
                </div>
                <div
                  className="absolute top-6 left-6 w-12 h-12"
                  style={{
                    borderLeft: "1px solid rgba(201,168,76,0.25)",
                    borderTop: "1px solid rgba(201,168,76,0.25)",
                  }}
                />
                <div
                  className="absolute bottom-6 right-6 w-12 h-12"
                  style={{
                    borderRight: "1px solid rgba(201,168,76,0.25)",
                    borderBottom: "1px solid rgba(201,168,76,0.25)",
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section
        className="py-24 text-center relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0D0D0D 0%, #161616 50%, #0D0D0D 100%)",
          borderTop: "1px solid rgba(201,168,76,0.1)",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 50% 60% at 50% 50%, rgba(201,168,76,0.04) 0%, transparent 70%)",
          }}
        />
        <div className="container-luxury relative z-10">
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 300,
              color: "#F5EDD6",
              marginBottom: "12px",
            }}
          >
            Ready to Wear Your Story?
          </h2>
          <p style={{ color: "#7A7A7A", fontSize: "14px", marginBottom: "32px" }}>
            Book a private consultation and begin your Waltz Signature experience.
          </p>
          <Link href="/contact" className="btn-gold">
            <span>Book a Consultation</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
