import "../../styles/home.css";
import "../../styles/Homedesignextra.css";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const fromTop = (delay = 0, distance = 80) => ({
  hidden: { opacity: 0, y: -distance },
  visible: {
    opacity: 1, y: 0,
    transition: { type: "spring", stiffness: 180, damping: 14, mass: 0.9, delay },
  },
});

const photoFromTop = {
  hidden: { opacity: 0, y: -100, rotate: -8, scale: 0.88 },
  visible: {
    opacity: 1, y: 0, rotate: 0, scale: 1,
    transition: { type: "spring", stiffness: 150, damping: 13, mass: 1.1, delay: 0.2 },
  },
};

const philosophyStatements = [
  { number: "01", statement: "I design for humans, not screens.",         sub: "Every interface I create starts with one question — does this make someone's life easier?" },
  { number: "02", statement: "Simplicity is the hardest thing to achieve.", sub: "Removing what's unnecessary takes more skill than adding. I obsess over what doesn't need to exist." },
  { number: "03", statement: "Every pixel has a purpose.",                 sub: "Nothing in my designs is accidental — every spacing, color, and shape decision is intentional." },
];

const designSkillGroups = [
  {
    category: "Design Tools",
    items: ["Figma", "Adobe XD", "Canva", "Photoshop"],
  },
  {
    category: "UX Skills",
    items: ["Wireframing", "Prototyping", "User Research", "Usability Testing", "User Flows"],
  },
  {
    category: "UI Skills",
    items: ["Visual Design", "Typography", "Color Theory", "Design Systems", "Responsive Design"],
  },
];

export default function HomeDesign() {
  return (
    <>
      {/* ════════════ HERO ════════════ */}
      <section className="home-hero">
        <div className="hero-left">

          <motion.p className="hero-tag" variants={fromTop(0.1, 60)} initial="hidden" animate="visible">
            UI/UX DESIGN PORTFOLIO
          </motion.p>

          <motion.h1 className="hero-title" variants={fromTop(0.22, 90)} initial="hidden" animate="visible">
            Hello, my name is <br /><span>Yeshwanth</span>.
          </motion.h1>

          <motion.p className="hero-desc" variants={fromTop(0.36, 70)} initial="hidden" animate="visible">
            I'm a <span className="hero-typed">UI/UX Designer</span>{" "}
            focused on crafting intuitive, beautiful, and user-centered
            digital experiences that make people's lives easier.
          </motion.p>

          <motion.div className="hero-actions" variants={fromTop(0.5, 60)} initial="hidden" animate="visible">
            <a href="/Certificates/Resume.pdf" target="_blank" rel="noreferrer" className="btn primary">
              Download Resume
            </a>
            <NavLink to="/projects" className="btn secondary">
              See my designs →
            </NavLink>
          </motion.div>

        </div>

        <motion.div className="hero-right" variants={photoFromTop} initial="hidden" animate="visible">
          <div className="image-ring">
            <div className="image-core">
              <img src="/images/ME.jpeg" alt="Yeshwanth" className="hero-img" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* ════════════ DESIGN SKILLS ════════════ */}
      <section className="home-skills-section">
        <div className="home-skills-container">

          <motion.p
            className="hero-tag"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 160, damping: 16 }}
          >
            WHAT I DESIGN WITH
          </motion.p>

          <motion.h2
            className="home-skills-title"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 160, damping: 16, delay: 0.08 }}
          >
            Design <span>Skills</span>
          </motion.h2>

          <div className="skills-focus">
            <span>Figma</span>
            <span>UI Design</span>
            <span>UX Research</span>
            <span>Prototyping</span>
            <span>Design Systems</span>
          </div>

          <div className="home-skills-grid">
            {designSkillGroups.map((group, index) => (
              <motion.div
                key={index}
                className="home-skills-card"
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ type: "spring", stiffness: 150, damping: 16, delay: index * 0.1 }}
              >
                <h3>{group.category}</h3>
                <div className="skill-pills-grid">
                  {group.items.map((skill, i) => (
                    <span key={i} className="skill-pill">{skill}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ════════════ DESIGN PHILOSOPHY ════════════ */}
      <section className="philosophy-section">
        <div className="philosophy-container">

          <motion.p
            className="philosophy-eyebrow"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 160, damping: 16 }}
          >
            MY DESIGN PHILOSOPHY
          </motion.p>

          <motion.h2
            className="philosophy-heading"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 160, damping: 16, delay: 0.08 }}
          >
            How I <span>Think</span>
          </motion.h2>

          <div className="philosophy-list">
            {philosophyStatements.map((item, i) => (
              <motion.div
                key={i}
                className="philosophy-item"
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ type: "spring", stiffness: 150, damping: 15, delay: i * 0.12 }}
              >
                <span className="philosophy-num">{item.number}</span>
                <div className="philosophy-content">
                  <h3 className="philosophy-statement">"{item.statement}"</h3>
                  <p className="philosophy-sub">{item.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}