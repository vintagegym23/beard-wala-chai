import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import MobileNavigation from './MobileNavigation';
import Icon from '../ui/Icon';

interface NavItem {
  label: string;
  to: string;
  matchPath: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'HOME', to: '/', matchPath: '/' },
  { label: 'OUR STORY', to: '/about', matchPath: '/about' },
  { label: 'OUR MENU', to: '/menu', matchPath: '/menu' },
  { label: 'FRANCHISE (₹1.5L)', to: '/franchise', matchPath: '/franchise' },
  { label: 'CONTACT', to: '/contact', matchPath: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

  const isActive = (item: NavItem) => {
    return location.pathname === item.matchPath;
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 w-full z-50 bg-surface/90 backdrop-blur-md shadow-[0_4px_20px_rgba(43,20,14,0.08)]">
        <div className="h-20 max-w-[1280px] mx-auto px-margin-mobile lg:px-margin flex items-center justify-between gap-2 sm:gap-gutter">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-space-sm shrink-0 group">
            <img
              src="/images/logo.webp"
              alt="Beard Wala Chai logo"
              width={64}
              height={64}
              className="w-14 h-14 sm:w-16 sm:h-16 shrink-0 drop-shadow-[0_2px_4px_rgba(43,20,14,0.25)] transition-transform duration-300 group-hover:rotate-[-6deg]"
            />
            <div className="flex flex-col">
              <span className="font-headline-sm text-[18px] sm:text-headline-sm uppercase text-espresso-deep leading-none tracking-normal group-hover:text-terracotta-raw transition-colors">
                BEARD WALA CHAI
              </span>
              <span className="font-label-md text-[10px] sm:text-label-md uppercase text-terracotta-raw tracking-widest leading-tight">
                KADAK STREET CULTURE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden xl:flex items-center gap-space-md font-label-lg text-label-lg uppercase tracking-wider"
          >
            {NAV_ITEMS.map((item) => {
              const active = isActive(item);
              return (
                <Link
                  key={item.label}
                  to={item.to}
                  aria-current={active ? 'page' : undefined}
                  className={
                    active
                      ? 'transition-colors bg-mustard-vibrant text-stencil-black px-space-sm py-space-xs shadow-[2px_2px_0px_#120B09]'
                      : 'text-on-surface-variant hover:text-on-surface transition-colors py-space-xs px-space-xs'
                  }
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-space-md shrink-0">
            <a
              className="hidden lg:flex items-center gap-space-xs font-label-md text-label-md uppercase text-espresso-deep hover:text-terracotta-raw transition-colors whitespace-nowrap"
              href="tel:+919951991223"
            >
              <Icon name="call" className="text-[18px] text-terracotta-raw" />
              <span>+91 9951991223</span>
            </a>

            <Link
              to="/franchise"
              className="bg-mustard-vibrant hover:bg-secondary-container text-stencil-black font-label-lg text-[12px] sm:text-label-lg uppercase tracking-wider px-2.5 sm:px-space-md py-2 sm:py-space-sm rounded-lg shadow-[3px_3px_0px_#120B09] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all flex items-center gap-space-xs whitespace-nowrap"
            >
              <span>APPLY ₹1.5L</span>
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              className="xl:hidden inline-flex items-center justify-center p-2 bg-plaster-subdued text-stencil-black rounded-lg border border-stencil-black shadow-[2px_2px_0px_#120B09] hover:bg-mustard-vibrant transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      <MobileNavigation
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navItems={NAV_ITEMS}
        isActive={isActive}
      />
    </>
  );
}
