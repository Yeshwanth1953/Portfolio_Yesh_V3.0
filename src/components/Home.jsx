import "../styles/home.css";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

/* ── Typewriter ── */
function useTypewriter(words, speed = 90, pause = 2200) {
  const [display, setDisplay] = useState("");
  const [wi, setWi] = useState(0);
  const [ci, setCi] = useState(0);
  const [del, setDel] = useState(false);
  useEffect(() => {
    const cur = words[wi];
    let t;
    if (!del && ci < cur.length)        t = setTimeout(() => setCi(c => c + 1), speed);
    else if (!del && ci === cur.length) t = setTimeout(() => setDel(true), pause);
    else if (del && ci > 0)             t = setTimeout(() => setCi(c => c - 1), speed / 2);
    else { setDel(false); setWi(w => (w + 1) % words.length); }
    setDisplay(cur.slice(0, ci));
    return () => clearTimeout(t);
  }, [ci, del, wi, words, speed, pause]);
  return display;
}

/* ── Magnetic pull from top ── */
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

const tlDrop = (delay = 0) => ({
  hidden: { opacity: 0, y: -60 },
  visible: {
    opacity: 1, y: 0,
    transition: { type: "spring", stiffness: 160, damping: 18, delay },
  },
});

/* ── Skills data ── */
const skillGroups = [
  {
    category: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "MongoDB", "REST APIs"],
  },
  {
    category: "Tools & Others",
    items: ["VS Code", "GitHub Pages", "GitBash", "Vercel", "Figma", "Lovable" , "Notion"],
  },
];

export default function Home() {
  const typed = useTypewriter([
    "Web Developer",
    "Full-Stack Developer",
    "React Engineer",
    "Problem Solver",
  ]);

  return (
    <>
      {/* ════════════ HERO ════════════ */}
      <section className="home-hero">
        <div className="hero-left">

          <motion.p className="hero-tag" variants={fromTop(0.1, 60)} initial="hidden" animate="visible">
            WELCOME TO MY PORTFOLIO
          </motion.p>

          <motion.h1 className="hero-title" variants={fromTop(0.22, 90)} initial="hidden" animate="visible">
            Hello, my name is <br /><span>Yeshwanth</span>.
          </motion.h1>

          <motion.p className="hero-desc" variants={fromTop(0.36, 70)} initial="hidden" animate="visible">
            I'm a{" "}
            <span className="hero-typed">{typed}<span className="hero-cursor">|</span></span>{" "}
            focused on building clean, scalable, and user-friendly
            web applications using modern technologies.
          </motion.p>

          <motion.div className="hero-actions" variants={fromTop(0.5, 60)} initial="hidden" animate="visible">
            <a href="/Certificates/Resume.pdf" target="_blank" rel="noreferrer" className="btn primary">
              Download Resume
            </a>
            <NavLink to="/projects" className="btn secondary">
              See my work →
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

      {/* ════════════ PROOF SECTION ════════════ */}
      <section className="proof-section">
        <div className="proof-container">
          <h3 className="proof-title">
            This portfolio isn't here to impress.
            <span>
              It's here to show how I think, how I build,
              and why details matter to me.
            </span>
          </h3>
          <p className="proof-subtitle">
            Anyone can write code. I focus on{" "}
            <strong>understanding the problem</strong> deeply
            before deciding what should exist at all.
          </p>
          <div className="proof-points">
            <div className="proof-card">
              <h4>Thinking before coding</h4>
              <p>I focus on structure, flow, and intent before writing a single line.</p>
            </div>
            <div className="proof-card">
              <h4>Details matter</h4>
              <p>Small things like spacing, flow, and consistency decide whether a product feels polished or rushed.</p>
            </div>
            <div className="proof-card">
              <h4>Thinking first</h4>
              <p>I don't jump into code immediately. I take time to understand the problem, structure the solution, and then build it cleanly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ SKILLS SECTION ════════════ */}
      <section className="home-skills-section">
        <div className="home-skills-container">

          <motion.p
            className="hero-tag"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 160, damping: 16 }}
          >
            WHAT I KNOW
          </motion.p>

          <motion.h2
            className="home-skills-title"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 160, damping: 16, delay: 0.08 }}
          >
            My <span>Skills</span>
          </motion.h2>

          {/* Focus pills */}
        <div className="skills-focus">
          <span>Frontend</span>
          <span>React</span>
          <span>JavaScript</span>
          <span>Git & Github</span>
          <span>Backend Basics</span>
        </div>

          <div className="home-skills-grid">
            {skillGroups.map((group, index) => (
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

      {/* ════════════ FEATURED PROJECTS ════════════ */}
      <section className="featured-section">
        <div className="featured-container">
          <h2 className="featured-title">Featured Projects</h2>
          <div className="timeline-wrapper">
            <div className="timeline-line"></div>

            <motion.div className="timeline-item left" variants={tlDrop(0)} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
              <div className="timeline-dot"></div>
              <div className="featured-card">
                <img src="/images/GAAC.jpeg" alt="GAAC" />
                <h3>GAAC Website</h3>
                <p>A full-stack platform built with a powerful backend and carefully designed UI/UX for real club operations.</p>
                <a href="https://github.com/vutukuruyeshwanth/GAAC-website.git" className="project-link">View project →</a>
              </div>
            </motion.div>

            <motion.div className="timeline-item right" variants={tlDrop(0.1)} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
              <div className="timeline-dot"></div>
              <div className="featured-card">
                <img src="/images/fitness.png" alt="Fitness" />
                <h3>Fitness Coach Bot</h3>
                <p>An interactive coaching system focused on clarity, guidance, and user-friendly flow.</p>
                <a href="https://github.com/vutukuruyeshwanth/FitnessBot.git" className="project-link">View project →</a>
              </div>
            </motion.div>

            <motion.div className="timeline-item left" variants={tlDrop(0)} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
              <div className="timeline-dot"></div>
              <div className="featured-card">
                <img src="/images/weather.png" alt="Weather" />
                <h3>Weather Forecasting App</h3>
                <p>A clean API-based weather app designed for quick understanding and usability.</p>
                <a href="https://github.com/vutukuruyeshwanth/WheatherApp.git" className="project-link">View project →</a>
              </div>
            </motion.div>

            <motion.div className="timeline-item right" variants={tlDrop(0.1)} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
              <div className="timeline-dot"></div>
              <div className="featured-card">
                <img src="/images/gaze.jpg" alt="Research" />
                <h3>Research: Enhanced Gaze Tracker</h3>
                <p>A research-driven study on improving gaze tracking accuracy using Kalman filtering.</p>
                <a href="/projects" className="project-link">View project →</a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}