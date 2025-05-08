import { useEffect, useState } from "react";
import { Home, RefreshCw, Briefcase, HelpCircle, Phone } from "lucide-react";

const sections = [
  { id: "home", icon: <Home size={20} />, label: "Home" },
  { id: "updates", icon: <RefreshCw size={20} />, label: "Updates" },
  { id: "jobs", icon: <Briefcase size={20} />, label: "Jobs" },
  { id: "faqs", icon: <HelpCircle size={20} />, label: "FAQs" },
  { id: "contact", icon: <Phone size={20} />, label: "Contact" },
];

const StickySidebarButtons = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      let current = "";
      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) {
          const { top, height } = el.getBoundingClientRect();
          const sectionTop = window.scrollY + top;
          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + height
          ) {
            current = section.id;
          }
        }
      });
      setActiveSection(current);

      const footer = document.getElementById("footer");
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        setIsFooterVisible(footerRect.top < window.innerHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      className={`sidebar-buttons fixed top-1/4 left-4 flex flex-col gap-3 z-50 transition-opacity duration-300 ${
        isFooterVisible ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          className={`w-36 h-10 flex items-center justify-start gap-2 px-4 rounded-full font-medium shadow-sm transition-all duration-300 
            ${
              activeSection === section.id
                ? "bg-[#0B52C0] text-white"
                : "bg-white text-black border border-[#0B52C0] hover:bg-[#f0f7ff]"
            }
          `}
        >
          <span>{section.icon}</span>
          <span className="capitalize">{section.label}</span>
        </button>
      ))}
    </div>
  );
};

export default StickySidebarButtons;
