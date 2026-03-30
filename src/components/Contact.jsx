import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contact.css";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const fromTop = (delay = 0) => ({
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1, y: 0,
    transition: { type: "spring", stiffness: 160, damping: 16, delay },
  },
});

const fromLeft = (delay = 0) => ({
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1, x: 0,
    transition: { type: "spring", stiffness: 160, damping: 16, delay },
  },
});

const fromRight = (delay = 0) => ({
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1, x: 0,
    transition: { type: "spring", stiffness: 160, damping: 16, delay },
  },
});

const scaleIn = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0.88, y: 20 },
  visible: {
    opacity: 1, scale: 1, y: 0,
    transition: { type: "spring", stiffness: 170, damping: 16, delay },
  },
});

/* ── EmailJS ── */
const SERVICE_ID  = "service_yqrtvlc";
const TEMPLATE_ID = "template_mpb905d";
const PUBLIC_KEY  = "KvyFtymBfgLA7Bsws";

const emailLink    = `mailto:yeshwanthvutukuru31@gmail.com?subject=Let's Connect!&body=Hi Yeshwanth, I wanted to connect with you!`;
const whatsappMsg  = encodeURIComponent("Hi Yeshwanth, I wanted to connect with you!");
const whatsappLink = `https://wa.me/918019483579?text=${whatsappMsg}`;

const contacts = [
  { icon: <FaEnvelope />, label: "Email",    value: "yeshwanthvutukuru31@gmail.com", href: emailLink,    btnText: "Send Mail",  color: "#38bdf8" },
  { icon: <FaWhatsapp />, label: "WhatsApp", value: "+91 8019483579",               href: whatsappLink, btnText: "Chat Now",   color: "#25d366" },
  { icon: <FaLinkedin />, label: "LinkedIn", value: "Yeshwanth Vutukuru",           href: "https://www.linkedin.com/in/yeshwanth-vutukuru/", btnText: "Connect", color: "#38bdf8" },
  { icon: <FaGithub />,   label: "GitHub",   value: "vutukuruyeshwanth",            href: "https://github.com/vutukuruyeshwanth",            btnText: "Follow",  color: "#38bdf8" },
];

export default function Contact() {
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

        {/* ══ TOP — Title left, Form right ══ */}
        <div className="contact-top">

          {/* LEFT — intro */}
          <motion.div
            className="contact-left"
            variants={fromLeft(0.1)}
            initial="hidden"
            animate="visible"
          >
            <p className="contact-tag">GET IN TOUCH</p>
            <h1 className="contact-title">
              Let's <span>Build</span><br />Something<br />Together.
            </h1>
            <p className="contact-desc">
              Whether you have a project idea, a collaboration in mind,
              or just want to say hi — my inbox is always open.
              I'll get back to you within 24 hours.
            </p>
            <div className="contact-availability">
              <span className="avail-dot" />
              <span>Available for freelance & full-time opportunities</span>
            </div>
          </motion.div>

          {/* RIGHT — form */}
          <motion.div
            className="contact-form-card"
            variants={fromRight(0.2)}
            initial="hidden"
            animate="visible"
          >
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
                <textarea name="message" placeholder="Tell me about your project or idea..." rows={5} required />
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

        {/* ══ BOTTOM — 2x2 contact cards grid ══ */}
        <div className="contact-cards-grid">
          {contacts.map((c, i) => (
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
              <div className="contact-card-icon"
                style={{ color: c.color, borderColor: `${c.color}30`, background: `${c.color}12` }}>
                {c.icon}
              </div>
              <div className="contact-card-info">
                <p className="contact-card-label">{c.label}</p>
                <p className="contact-card-value">{c.value}</p>
              </div>
              <span className="contact-card-btn">{c.btnText} →</span>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}