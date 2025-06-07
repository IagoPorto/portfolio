import { useState, useEffect } from "react";

export function Menu() {
  const menuItems = ["about", "experience", "projects"];
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "";
      menuItems.forEach((id) => {
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
  }, []);

  const handleClick = (id, event) => {
    event.preventDefault(); // Evita el comportamiento por defecto del enlace
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="menu">
      <ul>
        {menuItems.map((id) => (
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
