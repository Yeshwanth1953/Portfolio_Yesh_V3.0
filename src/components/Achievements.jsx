import React, { useState } from "react";
import "../styles/achievements.css";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

const achievements = [
  {
    id: 0,
    role: "Author / Speaker",
    title: "Research Paper at ISSIP",
    desc: "Presented innovative research findings on Enhanced Gaze Tracking at an international symposium — published and recognized globally.",
    icon: "📄",
    highlights: [
      "Presented at ISSIP international symposium in 2025",
      "Research focused on improving gaze tracking accuracy using Kalman filtering",
      "Paper published and recognized by global research community",
    ],
  },
  {
    id: 1,
    role: "Active Member",
    title: "GAAC Programming Team",
    desc: "Collaborating on high-level flight software and technical projects.",
    icon: "🚀",
    highlights: [
      "Contributing to flight software development at Vignan University",
      "Collaborating with a cross-functional technical team",
      "Working on real-world aerospace-grade software challenges",
    ],
  },
  {
    id: 2,
    role: "Director of Operations",
    title: "Codense Club",
    desc: "Overseeing event logistics and managing core team operations.",
    icon: "⚡",
    highlights: [
      "Led operations for multiple technical events and workshops",
      "Managed a core team and coordinated logistics end-to-end",
      "Drove community engagement and club growth initiatives",
    ],
  },
  {
    id: 3,
    role: "Professional Development",
    title: "Technical Workshops",
    desc: "Completed advanced training in modern web and software stacks.",
    icon: "🛠️",
    highlights: [
      "Completed workshops on full-stack web development",
      "Trained in modern tools including React, Node.js, and MongoDB",
      "Applied learnings directly to real projects and portfolio work",
    ],
  },
  {
    id: 4,
    role: "UI/UX Designer",
    title: "GAAC Website Design",
    desc: "Designed the complete UI/UX for the GAAC club platform — from wireframes to final handoff.",
    icon: "🎨",
    highlights: [
      "Created full user flows, wireframes, and high-fidelity mockups in Figma",
      "Designed a dark-themed UI with a focus on usability and visual clarity",
      "Collaborated with developers for seamless design-to-code handoff",
    ],
  },
  {
    id: 5,
    role: "Portfolio Design",
    title: "Dual-Mode Portfolio v3.0",
    desc: "Designed and built this dual-mode portfolio from scratch — both as a developer and designer.",
    icon: "💡",
    highlights: [
      "Designed and developed a dual-mode portfolio (Dev + Design) from scratch",
      "Implemented Framer Motion animations and a global CSS variable color system",
      "Built with React, featuring a context-based mode toggle across all pages",
    ],
  },
  {
    id: 6,
    role: "Design Learner",
    title: "Google UX Design Certificate",
    desc: "Currently pursuing the Google UX Design Professional Certificate on Coursera.",
    icon: "✦",
    highlights: [
      "Enrolled in the Google UX Design Professional Certificate on Coursera",
      "Learning end-to-end UX processes — research, wireframing, and prototyping",
      "Applying learnings to real design projects in parallel",
    ],
  },
];

/* ── Zoom in from center ── */
const zoomIn = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0.75 },
  visible: {
    opacity: 1, scale: 1,
    transition: { type: "spring", stiffness: 180, damping: 16, delay },
  },
});

export default function Achievements() {
  const [activeId, setActiveId] = useState(0);

  const featured = achievements.find((a) => a.id === activeId);
  const rest = achievements.filter((a) => a.id !== activeId);

  return (
    <section className="ach-page">
      <div className="bg-grid-layer"></div>
      <div className="ach-container">

        {/* Header */}
        <motion.div
          className="ach-header"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 160, damping: 16, delay: 0.1 }}
        >
          <p className="ach-tag">MILESTONES</p>
          <h1 className="ach-title">Key <span>Achievements</span></h1>
          <p className="ach-subtitle">
            Click any achievement to spotlight it. A collection of milestones
            across development, design, and research.
          </p>
        </motion.div>

        {/* Magazine grid */}
        <LayoutGroup>
          <div className="ach-magazine">

            {/* Featured big card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={featured.id}
                className="ach-featured-card"
                layoutId={`card-${featured.id}`}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ type: "spring", stiffness: 200, damping: 22 }}
              >
                <div className="ach-featured-icon">{featured.icon}</div>
                <span className="ach-role">{featured.role}</span>
                <h2>{featured.title}</h2>
                <p>{featured.desc}</p>

                {/* Key highlights */}
                <div className="ach-highlights">
                  <p className="ach-highlights-label">Key Highlights</p>
                  <ul className="ach-highlights-list">
                    {featured.highlights.map((point, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 + 0.2, type: "spring", stiffness: 180, damping: 18 }}
                      >
                        <span className="ach-bullet">✦</span>
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="ach-featured-tag">✦ Spotlight</div>
              </motion.div>
            </AnimatePresence>

            {/* Smaller cards grid */}
            <div className="ach-small-grid">
              {rest.map((item, i) => (
                <motion.div
                  key={item.id}
                  layoutId={`card-${item.id}`}
                  className="ach-small-card"
                  onClick={() => setActiveId(item.id)}
                  variants={zoomIn(0.08 + i * 0.06)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.97 }}
                >
                  <div className="ach-small-icon">{item.icon}</div>
                  <div className="ach-small-content">
                    <span className="ach-role">{item.role}</span>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                  <div className="ach-click-hint">Click to spotlight →</div>
                </motion.div>
              ))}
            </div>

          </div>
        </LayoutGroup>

      </div>
    </section>
  );
}