import { useState, useEffect } from "react";

const MENU_ITEMS = ["about", "experience", "projects"];

export function Menu() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "";
      MENU_ITEMS.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 3 &&
            rect.bottom >= window.innerHeight / 3
          ) {
            currentSection = id;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // no missing deps now

  const handleClick = (id, event) => {
    event.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="menu">
      <ul>
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
