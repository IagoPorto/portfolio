export function Menu() {
    const menuItems = ["ABOUT", "EXPERIENCE", "PROJECTS"];

    return (
        <nav className="menu">
            <ul>
                {menuItems.map((item, index) => (
                    <li key={index}>
                        <a href={`#${item.toLowerCase()}`} className="menu-item">
                            {item}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
