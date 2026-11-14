import Icon from '../ui/Icon';

export default function FranchiseHero() {
  return (
    <section className="relative w-full bg-stencil-black text-surface overflow-hidden pt-space-lg pb-space-xl">
      {/* Atmospheric Street Backing Elements */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#EAB308 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative max-w-[1280px] mx-auto px-margin-mobile lg:px-margin">
        {/* Top Urgency Ribbon */}
        <div className="flex flex-wrap items-center gap-space-sm mb-space-md">
          <div className="bg-mustard-vibrant text-stencil-black font-label-md text-label-md px-space-sm py-1 rounded-sm uppercase tracking-widest shadow-[3px_3px_0px_#8E3512] flex items-center gap-1.5 font-bold">
            <Icon name="bolt" className="text-base" />
            <span>NOW OPEN FOR FRANCHISE PARTNERS</span>
          </div>
          <div className="bg-terracotta-raw text-surface font-label-md text-label-md px-space-sm py-1 rounded-sm uppercase tracking-wider flex items-center gap-1">
            <Icon name="verified" className="text-base" />
            <span>COMPLETE EQUIPMENT PACKAGE</span>
          </div>
        </div>

        {/* Main Asymmetric Pitch Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          {/* Copy Column */}
          <div className="lg:col-span-7 flex flex-col gap-space-md">
            <div className="inline-flex items-center gap-2">
              <span className="h-0.5 w-10 bg-mustard-vibrant shrink-0" />
              <span className="font-label-lg text-label-lg uppercase tracking-widest text-mustard-vibrant">
                BEARD WALA CHAI – FRANCHISE OPPORTUNITY
              </span>
            </div>

            <h1 className="font-display text-display uppercase leading-[0.92] text-surface tracking-tight">
              START YOUR OWN <br />
              <span className="text-mustard-vibrant underline decoration-terracotta-raw decoration-wavy decoration-2">
                TEA BUSINESS
              </span>{' '}
              <br />
              FOR <span className="text-secondary-fixed">₹1,50,000/-</span>
            </h1>

            <p className="font-body-lg text-body-lg text-surface-container-high max-w-2xl leading-relaxed">
              We are inviting franchise partners to be among the first to join our tea business network. Our Special Franchise Package includes branding equipment, kitchen equipment, furniture, starter raw materials, and business support with menu and staff training.
            </p>

            {/* Rapid Conversion Action Bar */}
            <div className="flex flex-wrap items-center gap-space-md pt-space-sm">
              <a
                className="bg-mustard-vibrant hover:bg-secondary-container text-stencil-black font-label-lg text-label-lg uppercase tracking-wider px-6 sm:px-8 py-4 rounded-sm shadow-[4px_4px_0px_#8E3512] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all flex items-center gap-2"
                href="#franchise-form"
              >
                <Icon name="verified_user" className="text-xl" />
                <span>APPLY FOR FRANCHISE</span>
              </a>
              <a
                className="bg-espresso-deep hover:bg-primary-container text-mustard-vibrant font-label-lg text-label-lg uppercase tracking-wider px-6 py-4 rounded-sm shadow-[4px_4px_0px_#000000] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all flex items-center gap-2 border border-mustard-vibrant/20"
                href="tel:+919951991223"
              >
                <Icon name="phone_in_talk" className="text-xl" />
                <span>ENQUIRIES: +91 9951991223</span>
              </a>
            </div>

            {/* Trust Badges Strip */}
            <div className="grid grid-cols-3 gap-space-sm pt-space-md max-w-xl">
              <div className="bg-primary-container p-space-sm rounded-sm">
                <div className="font-headline-sm text-[18px] sm:text-headline-sm text-mustard-vibrant">
                  5 IN 1
                </div>
                <div className="font-label-md text-[10px] sm:text-label-md text-surface-container-high uppercase">
                  Complete Package
                </div>
              </div>
              <div className="bg-primary-container p-space-sm rounded-sm">
                <div className="font-headline-sm text-[18px] sm:text-headline-sm text-mustard-vibrant">
                  TRAINING
                </div>
                <div className="font-label-md text-[10px] sm:text-label-md text-surface-container-high uppercase">
                  Menu &amp; Staff
                </div>
              </div>
              <div className="bg-primary-container p-space-sm rounded-sm">
                <div className="font-headline-sm text-[18px] sm:text-headline-sm text-mustard-vibrant">
                  SUPPORT
                </div>
                <div className="font-label-md text-[10px] sm:text-label-md text-surface-container-high uppercase">
                  Branding &amp; Marketing
                </div>
              </div>
            </div>
          </div>

          {/* Visual / Street Graphic Column */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            {/* Starburst Sticker Badge */}
            <div className="absolute -top-6 right-0 sm:-right-2 z-20 bg-mustard-vibrant text-stencil-black p-4 rounded-full shadow-[5px_5px_0px_#120B09] rotate-6 text-center w-32 h-32 sm:w-36 sm:h-36 flex flex-col items-center justify-center pointer-events-none">
              <span className="font-label-md text-label-md uppercase tracking-tighter">
                SPECIAL PACKAGE
              </span>
              <span className="font-metric-impact text-3xl leading-none font-bold">₹1.5L</span>
              <span className="font-label-md text-[10px] tracking-normal uppercase">
                FRANCHISE
              </span>
            </div>

            <div className="relative bg-espresso-deep p-3 rounded-md shadow-[8px_8px_0px_#000000] overflow-hidden">
              <img
                className="w-full h-[300px] sm:h-[360px] object-cover object-[68%_center] rounded-sm"
                alt="Beard Wala Chai mural behind a steaming glass of chai with the Beard Wala Chai logo"
                src="/images/home/hero-cafe-scene.webp"
              />
              <div className="p-space-md bg-stencil-black text-surface flex items-center justify-between mt-2">
                <div>
                  <span className="font-label-md text-label-md uppercase text-mustard-vibrant block">
                    SPECIAL FRANCHISE PACKAGE
                  </span>
                  <span className="font-headline-sm text-headline-sm text-surface">
                    ₹1,50,000/-
                  </span>
                </div>
                <div className="flex items-center gap-1 text-terracotta-raw">
                  <Icon name="storefront" className="text-2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
