import { useLocation } from 'react-router';
import logo from '../../../public/img/logo.png';
import { RouterLink } from '../RouterLink';

export function Header() {
  const location = useLocation();

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
          <RouterLink
            href="/"
            className={`${baseClass} ${
              isActive('/')
                ? 'text-assets after:w-full'
                : 'text-slate-300 hover:text-assets after:w-0 hover:after:w-full'
            }`}
          >
            Início
          </RouterLink>

          <RouterLink
            href="/how-work"
            className={`${baseClass} ${
              isActive('/how-work')
                ? 'text-assets after:w-full'
                : 'text-slate-300 hover:text-assets after:w-0 hover:after:w-full'
            }`}
          >
            Como funciona
          </RouterLink>

          <RouterLink
            href="/about"
            className={`${baseClass} ${
              isActive('/about')
                ? 'text-assets after:w-full'
                : 'text-slate-300 hover:text-assets after:w-0 hover:after:w-full'
            }`}
          >
            Sobre
          </RouterLink>
        </nav>
      </div>
    </header>
  );
}
