import React, { useState, useEffect } from "react";

function Navbar() {
  const [active, setActive] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // close menu on click
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);

        if (element) {
          const rect = element.getBoundingClientRect();

          if (rect.top <= 150 && rect.bottom >= 150) {
            setActive(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-black/70 backdrop-blur-md border-b border-pink-500/20">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-16 py-5">

        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-widest bg-gradient-to-r from-pink-400 via-pink-500 to-purple-500 text-transparent bg-clip-text">
          GOURI NANDA
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-base font-medium">

          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`transition duration-300 hover:text-pink-300 ${
                active === section.id
                  ? "text-pink-300 font-bold"
                  : "text-gray-300"
              }`}
            >
              {section.label}
            </button>
          ))}

        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-pink-300 text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-5 py-6 bg-black/90 border-t border-pink-500/20">

          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`text-lg transition ${
                active === section.id
                  ? "text-pink-300 font-bold"
                  : "text-gray-300"
              }`}
            >
              {section.label}
            </button>
          ))}

        </div>
      )}

    </nav>
  );
}

export default Navbar;