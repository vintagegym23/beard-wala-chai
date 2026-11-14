import Icon from '../ui/Icon';

export default function AboutHero() {
  return (
    <section className="relative w-full -mt-20 pt-24 pb-space-lg bg-surface-container-low overflow-hidden">
      {/* Street Art & Distressed Graphic Backdrop */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#120B09 1px, transparent 1px)',
          backgroundSize: '16px 16px',
        }}
      />
      <div className="absolute top-12 right-6 lg:right-24 w-72 h-72 rounded-full bg-mustard-vibrant/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-terracotta-raw/15 blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-margin-mobile lg:px-margin relative z-10">
        {/* Breadcrumb / Badge Row */}
        <div className="flex flex-wrap items-center gap-space-sm mb-space-md">
          <span className="inline-flex items-center gap-space-xs bg-mustard-vibrant text-stencil-black px-space-md py-space-xs rounded-lg font-label-lg text-label-lg uppercase tracking-widest shadow-[3px_3px_0px_#120B09] -rotate-1">
            <Icon name="local_cafe" className="text-[18px]" />
            NEW TEA &amp; BEVERAGE BRAND
          </span>
          <span className="inline-flex items-center gap-space-xs bg-terracotta-raw text-surface font-label-md text-label-md px-space-sm py-space-xs uppercase rounded-lg shadow-[2px_2px_0px_#120B09] rotate-1">
            <Icon name="verified" className="text-[16px]" />
            NOW OPEN FOR FRANCHISE
          </span>
        </div>

        {/* Main Headline Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center mb-space-lg">
          <div className="lg:col-span-7 flex flex-col gap-space-md">
            <div className="relative pt-4 lg:pt-0">
              {/* Crown Doodle Vector */}
              <svg
                className="w-12 h-12 sm:w-14 sm:h-14 text-mustard-vibrant absolute -top-6 -left-2 sm:-top-10 sm:-left-6 -rotate-12 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z" />
              </svg>
              <h1 className="font-display text-display uppercase text-stencil-black leading-none tracking-tight">
                A NEW CHAI BRAND.
                <span className="block text-terracotta-raw mt-space-xs">
                  BREWED WITH ATTITUDE.
                </span>
              </h1>
            </div>

            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
              Beard Wala Chai is a brand-new tea and beverage brand serving chai, coffee and milkshakes, now opening for franchise across India.
            </p>

            <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
              <a
                className="bg-mustard-vibrant hover:bg-secondary-container text-stencil-black font-label-lg text-label-lg uppercase tracking-wider px-space-lg py-space-sm rounded-lg shadow-[4px_4px_0px_#120B09] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all inline-flex items-center gap-space-xs"
                href="#philosophy"
              >
                <span>MEET THE FOUNDER</span>
                <Icon name="arrow_downward" className="text-[18px]" />
              </a>
              <a
                className="bg-espresso-deep hover:bg-stencil-black text-plaster-subdued font-label-lg text-label-lg uppercase tracking-wider px-space-lg py-space-sm rounded-lg shadow-[4px_4px_0px_#120B09] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all inline-flex items-center gap-space-xs"
                href="tel:+919951991223"
              >
                <Icon name="phone_in_talk" className="text-[18px] text-mustard-vibrant" />
                <span>FRANCHISE ENQUIRIES</span>
              </a>
            </div>
          </div>

          {/* Hero Graphic Card with Hand-Lettered Visual Aesthetic */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            {/* Starburst Sticker */}
            <div className="absolute -top-6 right-1 sm:-right-2 z-20 bg-mustard-vibrant text-stencil-black p-space-sm rounded-lg shadow-[4px_4px_0px_#120B09] rotate-6 flex flex-col items-center">
              <span className="font-label-md text-label-md uppercase tracking-widest text-espresso-deep">
                INVESTMENT
              </span>
              <span className="font-headline-sm text-headline-sm leading-none text-stencil-black">
                ₹1.5 LAKH
              </span>
              <span className="font-body-sm text-body-sm font-bold">FRANCHISE PACKAGE</span>
            </div>

            <div className="relative bg-surface-container rounded-xl p-space-sm shadow-[6px_6px_0px_#120B09] overflow-hidden -rotate-1">
              <div className="w-full h-[260px] sm:h-[300px] rounded-lg overflow-hidden relative">
                <img
                  className="w-full h-full object-cover"
                  alt="Creamy chai in a fluted glass on a stone coaster"
                  src="/images/menu/featured-dum-irani.jpg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stencil-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="font-label-md text-label-md uppercase text-mustard-vibrant tracking-widest">
                    OUR MENU
                  </span>
                  <p className="font-headline-sm text-headline-sm text-surface uppercase leading-none mt-space-xs">
                    CHAI • COFFEE • MILKSHAKES
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stat Badges Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
          <div className="bg-surface-container px-space-md py-space-sm rounded-lg shadow-[4px_4px_0px_#120B09] flex flex-col justify-between hover:-translate-y-1 transition-transform">
            <div className="flex items-center justify-between mb-space-xs">
              <Icon name="storefront" className="text-terracotta-raw text-[28px]" />
              <span className="font-label-md text-label-md uppercase text-on-surface-variant font-bold">
                STATUS
              </span>
            </div>
            <div>
              <div className="font-metric-impact text-headline-lg text-espresso-deep leading-none">
                New
              </div>
              <p className="font-body-sm text-body-sm text-on-surface mt-space-xs font-semibold">
                Now Open for Franchise
              </p>
            </div>
          </div>

          <div className="bg-surface-container px-space-md py-space-sm rounded-lg shadow-[4px_4px_0px_#120B09] flex flex-col justify-between hover:-translate-y-1 transition-transform">
            <div className="flex items-center justify-between mb-space-xs">
              <Icon name="local_cafe" className="text-mustard-vibrant text-[28px]" />
              <span className="font-label-md text-label-md uppercase text-on-surface-variant font-bold">
                PACKAGE
              </span>
            </div>
            <div>
              <div className="font-metric-impact text-headline-lg text-espresso-deep leading-none">
                5-in-1
              </div>
              <p className="font-body-sm text-body-sm text-on-surface mt-space-xs font-semibold">
                Branding, Kitchen, Furniture, Ingredients &amp; Support
              </p>
            </div>
          </div>

          <div className="bg-surface-container px-space-md py-space-sm rounded-lg shadow-[4px_4px_0px_#120B09] flex flex-col justify-between hover:-translate-y-1 transition-transform">
            <div className="flex items-center justify-between mb-space-xs">
              <Icon name="precision_manufacturing" className="text-terracotta-raw text-[28px]" />
              <span className="font-label-md text-label-md uppercase text-on-surface-variant font-bold">
                TRAINING
              </span>
            </div>
            <div>
              <div className="font-metric-impact text-headline-lg text-espresso-deep leading-none">
                Included
              </div>
              <p className="font-body-sm text-body-sm text-on-surface mt-space-xs font-semibold">
                Menu &amp; Staff Training
              </p>
            </div>
          </div>

          <div className="bg-mustard-vibrant px-space-md py-space-sm rounded-lg shadow-[4px_4px_0px_#120B09] flex flex-col justify-between hover:-translate-y-1 transition-transform">
            <div className="flex items-center justify-between mb-space-xs">
              <Icon name="payments" className="text-stencil-black text-[28px]" />
              <span className="font-label-md text-label-md uppercase text-stencil-black font-bold">
                FRANCHISE
              </span>
            </div>
            <div>
              <div className="font-metric-impact text-headline-lg text-stencil-black leading-none">
                ₹1.5L
              </div>
              <p className="font-body-sm text-body-sm text-stencil-black mt-space-xs font-bold">
                Special Franchise Package
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Torn Edge Divider SVG */}
      <div className="w-full mt-space-xl overflow-hidden leading-none">
        <svg
          className="w-full h-8 text-espresso-deep fill-current"
          preserveAspectRatio="none"
          viewBox="0 0 1200 30"
          aria-hidden="true"
        >
          <path d="M0,0 L45,15 L95,8 L160,24 L240,10 L310,20 L380,5 L470,25 L550,12 L630,22 L720,7 L810,24 L890,9 L970,22 L1050,8 L1130,26 L1200,10 L1200,30 L0,30 Z" />
        </svg>
      </div>
    </section>
  );
}
