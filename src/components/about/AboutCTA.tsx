import Icon from '../ui/Icon';

export default function AboutCTA() {
  return (
    <section className="w-full bg-stencil-black text-surface py-space-xl relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-terracotta-raw/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-mustard-vibrant/20 blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-margin-mobile lg:px-margin relative z-10">
        <div className="bg-espresso-deep rounded-2xl p-space-md sm:p-space-lg lg:p-space-xl shadow-[8px_8px_0px_#8E3512] flex flex-col lg:flex-row items-center justify-between gap-space-xl">
          {/* Left Content */}
          <div className="flex flex-col gap-space-md max-w-2xl">
            <div className="inline-flex items-center gap-space-xs bg-mustard-vibrant text-stencil-black font-label-md text-label-md uppercase px-space-md py-space-xs rounded-lg shadow-[3px_3px_0px_#000000] self-start -rotate-1">
              <Icon name="bolt" className="text-[16px]" />
              FRANCHISE OPPORTUNITY
            </div>
            <h2 className="font-headline-lg text-headline-lg uppercase text-surface-bright leading-tight">
              READY TO BRING THE{' '}
              <span className="text-mustard-vibrant">KADAK REVOLUTION</span> TO YOUR TOWN?
            </h2>
            <p className="font-body-lg text-body-lg text-surface-container-high leading-relaxed">
              Start your own tea business with Beard Wala Chai. Our Special Franchise Package includes branding equipment, kitchen equipment, furniture, raw materials and business support.
            </p>
            <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
              <a
                className="bg-mustard-vibrant hover:bg-secondary-container text-stencil-black font-label-lg text-label-lg uppercase tracking-wider px-space-md sm:px-space-lg py-space-md rounded-lg shadow-[4px_4px_0px_#000000] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all inline-flex items-center gap-space-sm"
                href="tel:+919951991223"
              >
                <Icon name="phone_forwarded" className="text-[20px]" />
                <span>FRANCHISE ENQUIRIES (+91 9951991223)</span>
              </a>
              <a
                className="bg-surface-container-lowest text-stencil-black hover:bg-surface-bright font-label-lg text-label-lg uppercase tracking-wider px-space-lg py-space-md rounded-lg shadow-[4px_4px_0px_#000000] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all inline-flex items-center gap-space-sm"
                href="https://wa.me/919951991223"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="chat" className="text-[20px] text-terracotta-raw" />
                <span>WHATSAPP ENQUIRY</span>
              </a>
            </div>
          </div>

          {/* Right Visual Callout Stamp */}
          <div className="bg-tertiary-container p-space-lg rounded-xl shadow-[5px_5px_0px_#000000] flex flex-col items-center text-center rotate-1 lg:rotate-2 shrink-0 max-w-xs w-full">
            <span className="font-label-md text-label-md uppercase tracking-widest text-mustard-vibrant font-bold mb-space-xs">
              SPECIAL FRANCHISE PACKAGE
            </span>
            <span className="font-metric-impact text-metric-impact text-mustard-vibrant leading-none">
              ₹1,50,000
            </span>
            <span className="font-label-md text-label-md uppercase text-surface-bright mt-space-xs tracking-wider">
              COMPLETE EQUIPMENT PACKAGE
            </span>
            <div className="w-full my-space-md border-t border-espresso-deep" />
            <ul className="text-left font-body-sm text-body-sm text-surface-container-high space-y-space-xs w-full">
              <li className="flex items-center gap-space-xs">
                <Icon name="check" className="text-mustard-vibrant text-[16px]" />
                <span>Branding &amp; Kitchen Equipment</span>
              </li>
              <li className="flex items-center gap-space-xs">
                <Icon name="check" className="text-mustard-vibrant text-[16px]" />
                <span>Furniture &amp; Raw Materials</span>
              </li>
              <li className="flex items-center gap-space-xs">
                <Icon name="check" className="text-mustard-vibrant text-[16px]" />
                <span>Menu &amp; Staff Training</span>
              </li>
            </ul>
            <div className="mt-space-md bg-mustard-vibrant text-stencil-black w-full py-space-xs rounded font-label-md text-label-md uppercase tracking-wider font-bold">
              ENQUIRIES: +91 9951991223
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
