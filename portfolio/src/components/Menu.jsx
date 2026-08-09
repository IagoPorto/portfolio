import { useState, useEffect } from "react";

const MENU_ITEMS = ["about", "experience", "projects"];

export function Menu() {
  const [activeSection, setActiveSection] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "";
      MENU_ITEMS.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / MENU_ITEMS.length &&
            rect.bottom >= window.innerHeight / MENU_ITEMS.length
          ) {
            currentSection = id;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id, event) => {
    event.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setOpen(false);
  };

  return (
    <nav className={`menu ${open ? "open" : ""}`}>
      <button
        type="button"
        className="hamburger"
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span />
        <span />
        <span />
      </button>
      <ul className={open ? "open" : ""}>
        {MENU_ITEMS.map((id) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`menu-item ${activeSection === id ? "active" : ""}`}
              onClick={(e) => handleClick(id, e)}
            >
              {id.toUpperCase()}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
