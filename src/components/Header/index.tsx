import logo from '../../../public/img/logo.png';
import { RouterLink } from '../RouterLink';

export function Header() {
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
          <RouterLink
            href="/"
            className="text-sm font-medium text-slate-300 hover:text-assets transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-assets after:transition-all after:duration-300 hover:after:w-full"
          >
            Início
          </RouterLink>

          <RouterLink
            href="/how-work"
            className="text-sm font-medium text-slate-300 hover:text-assets transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-assets after:transition-all after:duration-300 hover:after:w-full"
          >
            Como funciona
          </RouterLink>

          <RouterLink
            href="/about"
            className="text-sm font-medium text-slate-300 hover:text-assets transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-assets after:transition-all after:duration-300 hover:after:w-full"
          >
            Sobre
          </RouterLink>
        </nav>

        {/* Botão Mobile */}
        <button className="lg:hidden text-assets hover:text-primary transition-colors">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

      </div>
    </header>
  );
}
