import { Link } from 'react-router-dom';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';

interface NavItem {
  label: string;
  to: string;
  matchPath: string;
}

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
  isActive: (item: NavItem) => boolean;
}

export default function MobileNavigation({
  isOpen,
  onClose,
  navItems,
  isActive,
}: MobileNavigationProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 top-20 z-40 xl:hidden bg-stencil-black/60 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="bg-surface border-b-2 border-stencil-black shadow-[0_8px_24px_rgba(18,11,9,0.25)] px-margin-mobile py-space-lg flex flex-col gap-space-md max-h-[calc(100vh-5rem)] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <nav aria-label="Mobile Navigation" className="flex flex-col gap-space-xs">
          {navItems.map((item) => {
            const active = isActive(item);
            return (
              <Link
                key={item.label}
                to={item.to}
                onClick={onClose}
                aria-current={active ? 'page' : undefined}
                className={
                  active
                    ? 'flex items-center justify-between bg-mustard-vibrant text-stencil-black font-label-lg text-label-lg uppercase tracking-wider px-space-md py-3 rounded-lg shadow-[3px_3px_0px_#120B09]'
                    : 'flex items-center justify-between bg-plaster-subdued text-espresso-deep hover:bg-surface-container-high font-label-lg text-label-lg uppercase tracking-wider px-space-md py-3 rounded-lg shadow-[2px_2px_0px_#120B09] transition-colors'
                }
              >
                <span>{item.label}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            );
          })}
        </nav>

        <div className="pt-space-sm border-t border-stencil-black/15 flex flex-col gap-space-sm">
          <a
            href="tel:+919951991223"
            className="flex items-center justify-center gap-space-xs bg-espresso-deep text-mustard-vibrant font-label-lg text-label-lg uppercase tracking-wider py-3 px-space-md rounded-lg shadow-[3px_3px_0px_#120B09]"
          >
            <Phone className="w-4 h-4" />
            <span>CALL HOTLINE: +91 9951991223</span>
          </a>
          <a
            href="https://wa.me/919951991223"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-space-xs bg-terracotta-raw text-surface-bright font-label-lg text-label-lg uppercase tracking-wider py-3 px-space-md rounded-lg shadow-[3px_3px_0px_#120B09]"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WHATSAPP ENQUIRY</span>
          </a>
        </div>
      </div>
    </div>
  );
}
