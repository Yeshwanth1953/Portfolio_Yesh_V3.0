import "../styles/footer.css";
import { NavLink } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-left">
          <h3 className="footer-logo">Vutukuru Yeshwanth.Dev</h3>
          <p className="footer-desc">
            I design and build web experiences with clarity,
            structure, and long-term thinking.
          </p>

          <div className="footer-socials">
            <a href="https://github.com/vutukuruyeshwanth" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/yeshwanth-vutukuru/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="mailto:yeshwanthvutukuru31@gmail.com">
              <FaEnvelope />
            </a>
          </div>
          <p>© {new Date().getFullYear()} Yeshwanth. All rights reserved.</p>          
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/certifications">Certifications</NavLink>
          <NavLink to="/achievements">Achievements</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        <div className="footer-contact">
          <h4>Contact Info</h4>

          <p>
            <FaEnvelope />
            yeshwanthvutukuru31@gmail.com
          </p>

          <p>
            <FaMapMarkerAlt />
            Visakhapatnam, India
          </p>

          <p>
            <FaPhone />
            <a href="tel:+91 8019483579">+91 8019483579</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
