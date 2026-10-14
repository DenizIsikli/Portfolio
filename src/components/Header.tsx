import { FC, MouseEvent, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { ModeToggle } from "./theme/mode-toggle";

const sections = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
];

const navLink =
    "relative text-muted-foreground transition-colors duration-200 hover:text-foreground " +
    "after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:origin-left after:scale-x-0 " +
    "after:bg-foreground after:transition-transform after:duration-200 after:ease-out hover:after:scale-x-100";

const Header: FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const scrollToSection = (e: MouseEvent, sectionId: string): void => {
        e.preventDefault();
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container">
                <nav className="flex items-center justify-between py-4">
                    <a
                        href="#about"
                        className="text-lg font-semibold text-foreground transition-opacity duration-200 hover:opacity-70"
                        onClick={(e) => scrollToSection(e, "about")}
                    >
                        Deniz Isikli
                    </a>

                    <ul className="hidden md:flex items-center gap-6 text-sm">
                        {sections.map(({ id, label }) => (
                            <li key={id}>
                                <a className={navLink} href={`#${id}`} onClick={(e) => scrollToSection(e, id)}>
                                    {label}
                                </a>
                            </li>
                        ))}
                        <li>
                            <ModeToggle />
                        </li>
                    </ul>

                    <div className="md:hidden flex items-center gap-2">
                        <ModeToggle />
                        <button
                            className="text-xl text-foreground transition-opacity duration-200 hover:opacity-70"
                            onClick={() => setMenuOpen((prev) => !prev)}
                            aria-label="Toggle menu"
                            aria-expanded={menuOpen}
                        >
                            {menuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </nav>
            </div>

            {menuOpen && (
                <div className="md:hidden border-t border-border bg-background">
                    <div className="container py-4">
                        <ul className="flex flex-col gap-3 text-sm">
                            {sections.map(({ id, label }) => (
                                <li key={id}>
                                    <a
                                        className="block text-muted-foreground transition-colors duration-200 hover:text-foreground"
                                        href={`#${id}`}
                                        onClick={(e) => scrollToSection(e, id)}
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
