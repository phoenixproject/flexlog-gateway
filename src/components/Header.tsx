import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import flexlogLogo from "@/assets/flexlog-logo.jpeg";

const navItems = [
  { label: "Início", href: "/" },
  { label: "Serviços", href: "/#servicos" },
  { label: "Orçamento", href: "/orcamento" },
  { label: "Contato", href: "/#contato" },
  { label: "Área do Cliente", href: "/area-cliente" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith("/#")) {
      const id = href.replace("/#", "");
      if (location.pathname === "/") {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = href;
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark/95 backdrop-blur-md border-b border-dark-muted">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={flexlogLogo} alt="FLEXLOG" className="h-10 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href.startsWith("/#") ? "/" : item.href}
              onClick={() => handleNavClick(item.href)}
              className="text-sm font-medium text-dark-foreground/70 hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="whatsapp" size="sm" asChild>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Phone className="h-4 w-4" />
              WhatsApp
            </a>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-dark-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-dark border-t border-dark-muted">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href.startsWith("/#") ? "/" : item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-sm font-medium text-dark-foreground/70 hover:text-primary transition-colors py-2"
              >
                {item.label}
              </Link>
            ))}
            <Button variant="whatsapp" size="sm" asChild>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 mt-2"
              >
                <Phone className="h-4 w-4" />
                WhatsApp
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
