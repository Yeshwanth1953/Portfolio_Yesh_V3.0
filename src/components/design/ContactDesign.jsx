import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../../styles/contact.css";
import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const fromLeft = (delay = 0) => ({
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 160, damping: 16, delay } },
});
const fromRight = (delay = 0) => ({
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 160, damping: 16, delay } },
});
const scaleIn = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0.88, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 170, damping: 16, delay } },
});

const SERVICE_ID  = "service_yqrtvlc";
const TEMPLATE_ID = "template_mpb905d";
const PUBLIC_KEY  = "KvyFtymBfgLA7Bsws";

const emailLink    = `mailto:yeshwanthvutukuru31@gmail.com?subject=Design Project Inquiry&body=Hi Yeshwanth, I wanted to connect with you about a design project!`;
const whatsappMsg  = encodeURIComponent("Hi Yeshwanth, I wanted to connect with you about a design project!");
const whatsappLink = `https://wa.me/918019483579?text=${whatsappMsg}`;

const contacts = [
  { icon: <FaEnvelope />, label: "Email",    value: "yeshwanthvutukuru31@gmail.com", href: emailLink,    btnText: "Send Mail", color: "#e2e8f0", disabled: false },
  { icon: <FaWhatsapp />, label: "WhatsApp", value: "+91 8019483579",               href: whatsappLink, btnText: "Chat Now",  color: "#25d366", disabled: false },
  { icon: <FaLinkedin />, label: "LinkedIn", value: "Yeshwanth Vutukuru",           href: "https://www.linkedin.com/in/yeshwanth-vutukuru/", btnText: "Connect", color: "#e2e8f0", disabled: false },
  { icon: "🎨",           label: "Behance",  value: "Coming Soon",                  href: "#",          btnText: "Soon",     color: "#e2e8f0", disabled: true },
];

export default function ContactDesign() {
  const formRef = useRef();
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setStatus("success");
      formRef.current.reset();
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section className="contact-page">
      <div className="contact-wrapper">

        {/* ══ TOP ══ */}
        <div className="contact-top">

          <motion.div className="contact-left" variants={fromLeft(0.1)} initial="hidden" animate="visible">
            <p className="contact-tag">LET'S CREATE TOGETHER</p>
            <h1 className="contact-title">
              Got a <span>Design</span><br />Project<br />in Mind?
            </h1>
            <p className="contact-desc">
              Whether it's a UI redesign, a new product, or a design
              collaboration — I'd love to hear about it. Let's craft
              something meaningful together.
            </p>
            <div className="contact-availability">
              <span className="avail-dot" />
              <span>Open for UI/UX freelance & design collaborations</span>
            </div>
          </motion.div>

          <motion.div className="contact-form-card" variants={fromRight(0.2)} initial="hidden" animate="visible">
            <h3 className="form-title">Send a Message</h3>
            <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" name="from_name" placeholder="Your name" required />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" name="from_email" placeholder="your@email.com" required />
                </div>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea name="message" placeholder="Tell me about your design project..." rows={5} required />
              </div>
              <button type="submit" className="form-submit-btn" disabled={status === "sending"}>
                {status === "sending" ? "Sending..." :
                 status === "success" ? "✓ Message Sent!" :
                 status === "error"   ? "Failed. Try again" :
                 "Send Message →"}
              </button>
              {status === "success" && <p className="form-success-msg">🎉 I'll get back to you within 24 hours!</p>}
              {status === "error"   && <p className="form-error-msg">Something went wrong. Please email me directly.</p>}
            </form>
          </motion.div>

        </div>

        {/* ══ BOTTOM — 2x2 grid ══ */}
        <div className="contact-cards-grid">
          {contacts.map((c, i) => (
            c.disabled ? (
              <motion.div
                key={i}
                className="contact-card-new contact-card-disabled"
                variants={scaleIn(0.3 + i * 0.08)}
                initial="hidden"
                animate="visible"
              >
                <div className="contact-card-icon" style={{ color: c.color, borderColor: `${c.color}30`, background: `${c.color}12` }}>
                  {c.icon}
                </div>
                <div className="contact-card-info">
                  <p className="contact-card-label">{c.label}</p>
                  <p className="contact-card-value">{c.value}</p>
                </div>
                <span className="contact-btn-disabled">{c.btnText}</span>
              </motion.div>
            ) : (
              <motion.a
                key={i}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="contact-card-new"
                variants={scaleIn(0.3 + i * 0.08)}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
              >
                <div className="contact-card-icon" style={{ color: c.color, borderColor: `${c.color}30`, background: `${c.color}12` }}>
                  {c.icon}
                </div>
                <div className="contact-card-info">
                  <p className="contact-card-label">{c.label}</p>
                  <p className="contact-card-value">{c.value}</p>
                </div>
                <span className="contact-card-btn">{c.btnText} →</span>
              </motion.a>
            )
          ))}
        </div>

      </div>
    </section>
  );
}