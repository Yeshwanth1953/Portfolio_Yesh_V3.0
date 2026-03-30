import "../../styles/projects.css";
import "../../styles/Projectsdesign.css";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.22,1,0.36,1], delay: i * 0.1 },
  }),
};

const projects = [
  {
    title: "GAAC Website — UI/UX",
    description: "Designed the full UI/UX for the GAAC club website — user flows, wireframes, and final visual design before development.",
    tech: ["Figma", "UI Design", "Prototyping", "React"],
    status: "Live",
    live: "https://github.com/vutukuruyeshwanth/GAAC-website.git",
    type: "UI Design",
  },
  {
    title: "Fitness Bot — Conversation UX",
    description: "Designed the conversational UX flow — mapping user intents, dialogue trees, and testing with real users.",
    tech: ["Conversation Design", "User Flows", "Figma", "UX Writing"],
    status: "Live",
    live: "https://github.com/vutukuruyeshwanth/FitnessBot.git",
    type: "UX Design",
  },
  {
    title: "Portfolio Design — v3.0",
    description: "Designed this portfolio from scratch — IA, layout, color system, and interaction design before writing any code.",
    tech: ["Figma", "UI Design", "Design Tokens", "Motion Design"],
    status: "Live",
    live: "#",
    type: "UI Design",
  },
  {
    title: "Mobile App Redesign",
    description: "A complete UX overhaul of a fitness tracking app focused on reducing friction and improving the onboarding experience.",
    tech: ["Figma", "User Research", "Wireframing", "Prototyping"],
    status: "Coming Soon",
    live: null,
    type: "Case Study",
  },
  {
    title: "Design System — SaaS Product",
    description: "Built a scalable component library and design system from scratch in Figma with 20+ reusable components.",
    tech: ["Figma", "Design Systems", "Typography", "Color Theory"],
    status: "Coming Soon",
    live: null,
    type: "Design System",
  },
  {
    title: "E-commerce Checkout Redesign",
    description: "End-to-end UX research and wireframing — reduced drop-off by simplifying the 5-step checkout to 2 steps.",
    tech: ["Figma", "UX Research", "User Testing", "Wireframing"],
    status: "Coming Soon",
    live: null,
    type: "Case Study",
  },
];

export default function ProjectsDesign() {
  return (
    <section className="projects-page">
      <div className="projects-container">
        <p className="projects-tag">WHAT I DESIGNED</p>
        <h1 className="projects-title">My <span>Designs</span></h1>
        <p className="projects-desc">
          UI/UX projects, case studies, and design work that showcase
          how I think, research, and craft experiences.
        </p>

        {/* Design process pills */}
        <div className="design-process-pills">
          {["Research", "Wireframe", "Prototype", "Test", "Deliver"].map((step, i) => (
            <div key={i} className="process-pill">
              <span className="process-num">0{i + 1}</span>
              <span>{step}</span>
            </div>
          ))}
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Placeholder image */}
              <div className="design-img-placeholder">
                <span className="design-img-icon">🎨</span>
                <span className="design-type-badge">{project.type}</span>
                <span className={`design-status ${project.status === "Live" ? "live" : "soon"}`}>
                  {project.status}
                </span>
              </div>

              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-tech">
                {project.tech.map((item, i) => <span key={i}>{item}</span>)}
              </div>

              <div className="project-actions">
                {project.live ? (
                  <a href={project.live} className="btn primary">View Work</a>
                ) : (
                  <span className="btn coming-soon-btn">Coming Soon</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}