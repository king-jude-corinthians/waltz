"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Visit Us",
    value: "14B Kofo Abayomi Street, Victoria Island, Lagos",
    sub: "By appointment only",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+234 (0) 800 000 0000",
    sub: "Mon – Sat, 9am – 7pm",
    href: "tel:+2348000000000",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "hello@waltzsignature.com",
    sub: "We respond within 24 hours",
    href: "mailto:hello@waltzsignature.com",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+234 (0) 800 000 0000",
    sub: "Quick consultations & inquiries",
    href: "https://wa.me/2348000000000",
  },
];

const services = [
  "Agbada Commission",
  "Senator Wear",
  "Kaftan",
  "Isi-Agu",
  "Aso-Oke",
  "Wedding Package",
  "Full Wardrobe Consultation",
  "Other",
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    occasion: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const headerRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);

  const headerInView = useInView(headerRef, { once: true });
  const formInView = useInView(formRef, { once: true, margin: "-80px" });
  const infoInView = useInView(infoRef, { once: true, margin: "-80px" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
            Begin Your Journey
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
            Contact
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
            Every great piece begins with a conversation. Reach out to begin yours.
          </motion.p>
        </div>
      </div>

      {/* Main content */}
      <div className="container-luxury py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Form — 3 cols */}
          <motion.div
            ref={formRef}
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 40 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-10">
              <h2
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "36px",
                  fontWeight: 300,
                  color: "#F5EDD6",
                  marginBottom: "8px",
                }}
              >
                Book a Consultation
              </h2>
              <p style={{ color: "#7A7A7A", fontSize: "13px", lineHeight: "1.8" }}>
                Fill in the details below and our team will be in touch within 24 hours to schedule your private appointment.
              </p>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label
                      style={{
                        fontSize: "9px",
                        letterSpacing: "0.4em",
                        textTransform: "uppercase",
                        color: "#C9A84C",
                        fontFamily: "var(--font-dm-sans)",
                        display: "block",
                        marginBottom: "8px",
                      }}
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Chief Emeka Okafor"
                      required
                      className="input-luxury"
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        fontSize: "9px",
                        letterSpacing: "0.4em",
                        textTransform: "uppercase",
                        color: "#C9A84C",
                        fontFamily: "var(--font-dm-sans)",
                        display: "block",
                        marginBottom: "8px",
                      }}
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                      className="input-luxury"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label
                      style={{
                        fontSize: "9px",
                        letterSpacing: "0.4em",
                        textTransform: "uppercase",
                        color: "#C9A84C",
                        fontFamily: "var(--font-dm-sans)",
                        display: "block",
                        marginBottom: "8px",
                      }}
                    >
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      placeholder="+234 (0) 800 000 0000"
                      required
                      className="input-luxury"
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        fontSize: "9px",
                        letterSpacing: "0.4em",
                        textTransform: "uppercase",
                        color: "#C9A84C",
                        fontFamily: "var(--font-dm-sans)",
                        display: "block",
                        marginBottom: "8px",
                      }}
                    >
                      Service Required
                    </label>
                    <select
                      name="service"
                      value={formState.service}
                      onChange={handleChange}
                      className="input-luxury"
                      style={{ cursor: "none" }}
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      {services.map((s) => (
                        <option key={s} value={s} style={{ backgroundColor: "#0D0D0D", color: "#F5EDD6" }}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    style={{
                      fontSize: "9px",
                      letterSpacing: "0.4em",
                      textTransform: "uppercase",
                      color: "#C9A84C",
                      fontFamily: "var(--font-dm-sans)",
                      display: "block",
                      marginBottom: "8px",
                    }}
                  >
                    The Occasion
                  </label>
                  <input
                    type="text"
                    name="occasion"
                    value={formState.occasion}
                    onChange={handleChange}
                    placeholder="e.g. Traditional wedding, Chieftaincy installation, Corporate gala..."
                    className="input-luxury"
                  />
                </div>

                <div>
                  <label
                    style={{
                      fontSize: "9px",
                      letterSpacing: "0.4em",
                      textTransform: "uppercase",
                      color: "#C9A84C",
                      fontFamily: "var(--font-dm-sans)",
                      display: "block",
                      marginBottom: "8px",
                    }}
                  >
                    Additional Notes
                  </label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Share your vision, style preferences, timeline, or any specific requirements..."
                    rows={5}
                    className="input-luxury resize-none"
                    style={{ paddingTop: "12px" }}
                  />
                </div>

                <button type="submit" className="btn-gold w-full justify-center gap-3">
                  <span>Send Inquiry</span>
                  <Send size={14} style={{ position: "relative", zIndex: 1 }} />
                </button>
              </form>
            ) : (
              <motion.div
                className="py-20 text-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  border: "1px solid rgba(201,168,76,0.15)",
                  background: "rgba(201,168,76,0.03)",
                }}
              >
                <div
                  className="w-16 h-16 flex items-center justify-center mx-auto mb-6"
                  style={{ border: "1px solid rgba(201,168,76,0.3)" }}
                >
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: "#C9A84C" }}
                  />
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "36px",
                    color: "#F5EDD6",
                    marginBottom: "12px",
                    fontWeight: 300,
                  }}
                >
                  Message Received
                </h3>
                <p style={{ color: "#7A7A7A", fontSize: "14px", lineHeight: "1.8", maxWidth: "360px", margin: "0 auto" }}>
                  Thank you, {formState.name || "distinguished client"}. Our team will contact you within 24 hours to arrange your private consultation.
                </p>
                <div className="gold-divider max-w-[60px] mx-auto mt-8" />
              </motion.div>
            )}
          </motion.div>

          {/* Contact info — 2 cols */}
          <motion.div
            ref={infoRef}
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 40 }}
            animate={infoInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "28px",
                fontWeight: 300,
                color: "#F5EDD6",
                marginBottom: "32px",
              }}
            >
              Get In Touch
            </h3>

            <div className="space-y-8">
              {contactInfo.map((info) => (
                <div
                  key={info.label}
                  className="flex gap-5 group"
                >
                  <div
                    className="w-12 h-12 flex items-center justify-center shrink-0 transition-colors duration-300"
                    style={{
                      border: "1px solid rgba(201,168,76,0.15)",
                    }}
                  >
                    <info.icon size={14} style={{ color: "#C9A84C" }} />
                  </div>
                  <div>
                    <p
                      style={{
                        fontSize: "9px",
                        letterSpacing: "0.4em",
                        textTransform: "uppercase",
                        color: "#C9A84C",
                        fontFamily: "var(--font-dm-sans)",
                        marginBottom: "4px",
                      }}
                    >
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith("http") ? "_blank" : undefined}
                        rel={info.href.startsWith("http") ? "noreferrer" : undefined}
                        style={{
                          fontSize: "14px",
                          color: "#F5EDD6",
                          lineHeight: "1.5",
                          transition: "color 0.3s",
                        }}
                        className="hover:text-gold transition-colors block"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p style={{ fontSize: "14px", color: "#F5EDD6", lineHeight: "1.5" }}>
                        {info.value}
                      </p>
                    )}
                    <p style={{ fontSize: "11px", color: "#7A7A7A", marginTop: "2px" }}>
                      {info.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Studio hours */}
            <div
              className="mt-12 p-8"
              style={{ border: "1px solid rgba(201,168,76,0.1)", background: "rgba(201,168,76,0.02)" }}
            >
              <div className="flex items-center gap-3 mb-5">
                <Clock size={14} style={{ color: "#C9A84C" }} />
                <p
                  style={{
                    fontSize: "9px",
                    letterSpacing: "0.4em",
                    textTransform: "uppercase",
                    color: "#C9A84C",
                    fontFamily: "var(--font-dm-sans)",
                  }}
                >
                  Studio Hours
                </p>
              </div>
              <div className="space-y-3">
                {[
                  { day: "Monday – Friday", hours: "9:00am – 7:00pm" },
                  { day: "Saturday", hours: "10:00am – 6:00pm" },
                  { day: "Sunday", hours: "By Appointment Only" },
                ].map((item) => (
                  <div key={item.day} className="flex justify-between">
                    <span style={{ fontSize: "12px", color: "#7A7A7A" }}>{item.day}</span>
                    <span style={{ fontSize: "12px", color: "#F5EDD6" }}>{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/2348000000000"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 mt-8 p-6 group transition-all duration-300"
              style={{
                background: "rgba(37,211,102,0.05)",
                border: "1px solid rgba(37,211,102,0.15)",
              }}
            >
              <MessageCircle size={20} style={{ color: "#25D366" }} />
              <div>
                <p style={{ fontSize: "13px", color: "#F5EDD6", marginBottom: "2px" }}>
                  Chat on WhatsApp
                </p>
                <p style={{ fontSize: "11px", color: "#7A7A7A" }}>
                  Fastest way to reach us
                </p>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
