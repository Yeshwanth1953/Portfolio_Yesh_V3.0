import React from "react";
import "../styles/certifications.css";

const certifications = [
  // Dev & Technical
  { title: "Web Development Bootcamp",           issuer: "Coursera",        year: "2024", link: "/Certificates/Full Stack Development Certificate.pdf", category: "Full Stack"   },
  { title: "HTML5",                              issuer: "Coursera",        year: "2024", link: "/Certificates/HTML_ Certificate.pdf",                   category: "Technical"   },
  { title: "Networking Basics",                  issuer: "Cisco",           year: "2025", link: "/Certificates/Networking Basics(Cisco) Certificate.pdf", category: "Technical"  },
  { title: "Getting Started with Cisco Networking", issuer: "Cisco",        year: "2025", link: "/Certificates/Getting Started with Cisco Packet Tracer Certificate.pdf", category: "Technical" },
  { title: "Exploring Networking",               issuer: "Cisco",           year: "2025", link: "/Certificates/Exploring Networking with Cisco Packet Tracer Certificate.pdf", category: "Technical" },
  { title: "Image Processing & Computer Vision", issuer: "Udemy",           year: "2026", link: "/Certificates/image processing with openCV Certificate.pdf", category: "Technical" },
  // Research
  { title: "Enhanced Gaze Tracker",              issuer: "RIT Global",      year: "2025", link: "/Certificates/ID 33-Research Participation.pdf",         category: "Research"    },
  // Design
  { title: "Google UX Design Certificate",       issuer: "Google / Coursera", year: "2025", link: "#", category: "UI/UX", placeholder: true },
  { title: "UI Design Fundamentals",             issuer: "Scrimba",         year: "2025", link: "#", category: "UI Design", placeholder: true },
  { title: "Figma — UI/UX Design Essentials",    issuer: "Udemy",           year: "2025", link: "#", category: "Design Tools", placeholder: true },
  { title: "Design Thinking",                    issuer: "IDEO / Coursera", year: "2025", link: "#", category: "UX Research", placeholder: true },
  // Events
  { title: "Bits Pillani Hackathon",             issuer: "BITS Pilani",     year: "2024", link: "/Certificates/Bits pillani Hackathon Certificate.pdf",   category: "Hackathon"   },
  { title: "Space Summit Tech Expo",             issuer: "Vignan University",year: "2025", link: "/Certificates/tech Expo certificate.pdf",                category: "Tech Expo"   },
  { title: "Internship on Full Stack",           issuer: "Unified Mentor",  year: "2024", link: "/Certificates/internship1 certificate.pdf",              category: "Internship"  },
];

export default function Certifications() {
  return (
    <section className="certifications-page">
      <div className="bg-grid-layer"></div>
      <div className="certifications-container">

        <div className="cert-header-content">
          <p className="certifications-tag">CREDENTIALS & GROWTH</p>
          <h1 className="certifications-title">My <span>Certifications</span></h1>
          <p className="certifications-desc">
            A complete collection of certifications spanning full-stack development,
            UI/UX design, networking, research, and more.
          </p>
        </div>

        <div className="certifications-list">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`cert-card-wide ${cert.placeholder ? "cert-placeholder" : ""}`}
            >
              <div className="cert-badge">
                <div className="badge-icon">{cert.placeholder ? "⏳" : "📜"}</div>
              </div>

              <div className="cert-main-info">
                <span className="cert-category">{cert.category}</span>
                <h3>
                  {cert.title}
                  {cert.placeholder && <span className="cert-soon-tag">Coming Soon</span>}
                </h3>
                <p className="issuer-name">{cert.issuer}</p>
              </div>

              <div className="cert-action-area">
                <span className="cert-year">{cert.year}</span>
                {cert.placeholder ? (
                  <span className="cert-view-link cert-in-progress">In Progress ✦</span>
                ) : (
                  <a href={cert.link} target="_blank" rel="noreferrer" className="cert-view-link">
                    Open Certificate ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}