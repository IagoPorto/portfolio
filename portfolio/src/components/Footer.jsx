import "./Footer.css";
import { FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">
        Compiled with <FaHeart className="icon" /> and caffeine
      </p>
      <p className="footer-copy">
        &copy; 2025 Iago Porto. All rights reserved.
      </p>
    </footer>
  );
}
