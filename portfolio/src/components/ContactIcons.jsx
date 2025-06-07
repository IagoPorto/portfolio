import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const ContactIcons = () => {
  return (
    <div className="contact-icons">
      <a
        href="https://github.com/IagoPorto"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/iagoportomontes/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="icon" />
      </a>
      <a href="mailto:iagoportomontes@gmail.com">
        <FaEnvelope className="icon" />
      </a>
    </div>
  );
};

export default ContactIcons;
