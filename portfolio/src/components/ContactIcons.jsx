import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa";

const ContactIcons = () => {
  return (
    <div className="contact-icons">
      <a
        href="https://github.com/IagoPorto"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub profile"
      >
        <FaGithub className="icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/iagoportomontes/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn profile"
      >
        <FaLinkedin className="icon" />
      </a>
      <a href="mailto:iagoportomontes@gmail.com" aria-label="Send an email">
        <FaEnvelope className="icon" />
      </a>
      <a
        href="/portfolio/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View resume"
        title="Look at my resume"
      >
        <FaFileAlt className="icon" />
      </a>
    </div>
  );
};

export default ContactIcons;
