import "./Footer.css";
import { FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">
        Compiled with{" "}
        <a
          href="https://github.com/IagoPorto/portfolio"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View portfolio on GitHub"
        >
          <FaHeart className="icon" />
        </a>{" "}
        and caffeine
      </p>
      <p className="footer-copy">
        &copy; 2025 Iago Porto. All rights reserved.
      </p>
    </footer>
  );
}
