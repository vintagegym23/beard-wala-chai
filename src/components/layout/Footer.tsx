import { Link } from 'react-router-dom';
import Icon from '../ui/Icon';

export default function Footer() {
  return (
    <footer className="w-full bg-espresso-deep text-plaster-subdued pt-space-xl pb-space-lg relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-margin-mobile lg:px-margin grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter mb-space-xl">
        {/* Column 1: Brand & Founder Quote */}
        <div className="flex flex-col gap-space-md">
          <div className="flex items-center gap-space-sm">
            <img
              src="/images/logo.webp"
              alt="Beard Wala Chai logo"
              width={80}
              height={80}
              loading="lazy"
              className="w-20 h-20 shrink-0"
            />
            <div className="flex flex-col">
              <span className="font-headline-md text-headline-md uppercase text-mustard-vibrant leading-none">
                BEARD WALA CHAI
              </span>
              <span className="font-label-md text-label-md uppercase text-tertiary-fixed-dim tracking-wider mt-space-xs">
                CHAI WITH CHARACTER
              </span>
            </div>
          </div>
          <p className="font-body-sm text-body-sm text-surface-container-high leading-relaxed">
            A new tea &amp; beverage brand, now open for franchise across India.
          </p>
          <div className="bg-primary-container p-space-md rounded-lg shadow-[3px_3px_0px_#000000]">
            <span className="font-label-md text-label-md uppercase text-tertiary-fixed-dim block">
              Founder &amp; CEO
            </span>
            <span className="font-label-lg text-label-lg uppercase text-mustard-vibrant block mt-1">
              Vadla Vishnumurthy
            </span>
          </div>
        </div>

        {/* Column 2: Franchise Package */}
        <div className="flex flex-col gap-space-md">
          <span className="font-headline-sm text-headline-sm uppercase text-mustard-vibrant">
            FRANCHISE PACKAGE
          </span>
          <div className="bg-tertiary-container p-space-md rounded-lg shadow-[3px_3px_0px_#000000] flex flex-col gap-space-xs">
            <span className="font-metric-impact text-metric-impact text-mustard-vibrant leading-none">
              ₹1,50,000/-
            </span>
            <span className="font-label-md text-label-md uppercase text-surface-bright tracking-wider">
              SPECIAL FRANCHISE PACKAGE
            </span>
          </div>
          <ul className="font-body-sm text-body-sm text-surface-container-high space-y-space-xs">
            <li className="flex items-center gap-space-xs">
              <Icon name="check_circle" className="text-[16px] text-mustard-vibrant" />
              <span>Branding &amp; Kitchen Equipment</span>
            </li>
            <li className="flex items-center gap-space-xs">
              <Icon name="check_circle" className="text-[16px] text-mustard-vibrant" />
              <span>Furniture &amp; Raw Materials</span>
            </li>
            <li className="flex items-center gap-space-xs">
              <Icon name="check_circle" className="text-[16px] text-mustard-vibrant" />
              <span>Menu &amp; Staff Training</span>
            </li>
            <li className="flex items-center gap-space-xs">
              <Icon name="check_circle" className="text-[16px] text-mustard-vibrant" />
              <span>Branding &amp; Marketing Support</span>
            </li>
          </ul>
        </div>

        {/* Column 3: Quick Explore */}
        <div className="flex flex-col gap-space-md">
          <span className="font-headline-sm text-headline-sm uppercase text-mustard-vibrant">
            QUICK EXPLORE
          </span>
          <ul className="font-body-md text-body-md space-y-space-sm">
            <li className="hover:translate-x-1 transition-transform">
              <Link className="text-surface-container-high hover:text-mustard-vibrant transition-colors" to="/about">
                Our Story
              </Link>
            </li>
            <li className="hover:translate-x-1 transition-transform">
              <Link className="text-surface-container-high hover:text-mustard-vibrant transition-colors" to="/menu">
                Our Menu
              </Link>
            </li>
            <li className="hover:translate-x-1 transition-transform">
              <Link className="text-surface-container-high hover:text-mustard-vibrant transition-colors" to="/franchise">
                Franchise Package
              </Link>
            </li>
            <li className="hover:translate-x-1 transition-transform">
              <Link className="text-surface-container-high hover:text-mustard-vibrant transition-colors" to="/contact">
                Franchise Enquiries
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Direct Connect */}
        <div className="flex flex-col gap-space-md">
          <span className="font-headline-sm text-headline-sm uppercase text-mustard-vibrant">
            DIRECT CONNECT
          </span>
          <p className="font-body-sm text-body-sm text-surface-container-high">
            Interested in starting your own tea business? Enquiries:
          </p>
          <div className="flex flex-col gap-space-xs font-label-lg text-label-lg text-surface-bright">
            <a className="flex items-center gap-space-xs hover:text-mustard-vibrant transition-colors" href="tel:+919951991223">
              <Icon name="call" className="text-[18px] text-mustard-vibrant" />
              <span>+91 9951991223</span>
            </a>
            <a
              className="flex items-center gap-space-xs hover:text-mustard-vibrant transition-colors"
              href="https://wa.me/919951991223"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="chat" className="text-[18px] text-mustard-vibrant" />
              <span>WhatsApp: +91 9951991223</span>
            </a>
          </div>
          <div className="flex items-center gap-space-sm pt-space-xs">
            <a
              href="https://wa.me/919951991223"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share via WhatsApp"
              className="inline-flex p-space-xs bg-stencil-black text-mustard-vibrant rounded-lg shadow-[2px_2px_0px_#000000] cursor-pointer hover:bg-mustard-vibrant hover:text-stencil-black transition-colors"
            >
              <Icon name="share" />
            </a>
            <Link
              to="/about"
              aria-label="Brand Story"
              className="inline-flex p-space-xs bg-stencil-black text-mustard-vibrant rounded-lg shadow-[2px_2px_0px_#000000] cursor-pointer hover:bg-mustard-vibrant hover:text-stencil-black transition-colors"
            >
              <Icon name="podcasts" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="max-w-[1280px] mx-auto px-margin-mobile lg:px-margin pt-space-md border-t border-espresso-deep/40 flex flex-col md:flex-row items-center justify-between gap-space-sm text-surface-container-high font-body-sm text-body-sm">
        <div className="text-center md:text-left">
          © {new Date().getFullYear()} Beard Wala Chai. All Rights Reserved.
        </div>
        <div className="flex items-center gap-space-md font-label-md text-label-md uppercase tracking-wider">
          <Link className="hover:text-mustard-vibrant transition-colors" to="/contact">
            Privacy Policy
          </Link>
          <span className="text-terracotta-raw">•</span>
          <Link className="hover:text-mustard-vibrant transition-colors" to="/franchise">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
