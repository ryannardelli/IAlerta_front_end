import { useState } from "react";
import { useLocation } from "react-router";
import logo from "../../../public/img/logo.png";
import { RouterLink } from "../RouterLink";
import { Menu, X } from "lucide-react";

export function Header() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const baseClass =
    "text-sm font-medium transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-assets after:transition-all after:duration-300";

  return (
    <header className="top-0 w-full z-50 bg-primary backdrop-blur-md border-b border-secondary">
      <div className="flex items-center justify-between px-6 lg:px-8 h-16 max-w-7xl mx-auto">
        {/* Logo */}
        <RouterLink href="/">
          <img
            src={logo}
            alt="Logo IAlerta"
            className="w-32 p-4 object-contain transition-transform duration-300 hover:scale-105 cursor-pointer"
          />
        </RouterLink>

        {/* Menu Desktop */}
        <nav className="hidden lg:flex items-center gap-8">
          {[
            { name: "Início", path: "/" },
            { name: "Como funciona", path: "/how-work" },
            { name: "Sobre", path: "/about" },
          ].map((item) => (
            <RouterLink
              key={item.path}
              href={item.path}
              className={`${baseClass} ${
                isActive(item.path)
                  ? "text-assets after:w-full"
                  : "text-slate-300 hover:text-assets after:w-0 hover:after:w-full"
              }`}
            >
              {item.name}
            </RouterLink>
          ))}
        </nav>

        {/* Menu Mobile Button */}
        <button
          className="lg:hidden p-2 rounded-md text-slate-300 hover:text-assets focus:outline-none cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 cursor-pointer" />}
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <nav className="lg:hidden bg-primary border-t border-secondary">
          <ul className="flex flex-col items-center gap-4 py-4">
            {[
              { name: "Início", path: "/" },
              { name: "Como funciona", path: "/how-work" },
              { name: "Sobre", path: "/about" },
            ].map((item) => (
              <RouterLink
                key={item.path}
                href={item.path}
                className={`${baseClass} ${
                  isActive(item.path)
                    ? "text-assets after:w-full"
                    : "text-slate-300 hover:text-assets after:w-0 hover:after:w-full"
                }`}
                onClick={() => setIsOpen(false)} // Fecha o menu ao clicar
              >
                {item.name}
              </RouterLink>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
