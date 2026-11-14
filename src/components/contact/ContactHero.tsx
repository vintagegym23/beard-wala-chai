import Icon from '../ui/Icon';

export default function ContactHero() {
  return (
    <section className="relative w-full overflow-hidden bg-surface py-space-xl">
      {/* Atmospheric Street Backing Accent */}
      <div className="absolute -top-24 right-4 w-96 h-96 bg-secondary-container/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-20 w-80 h-80 bg-terracotta-raw/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-margin-mobile lg:px-margin relative z-10">
        <div className="flex flex-col items-start gap-space-sm max-w-4xl">
          {/* Street Stencil Pill Badge */}
          <div className="inline-flex items-center gap-space-xs bg-espresso-deep text-mustard-vibrant px-space-md py-space-xs rounded-lg shadow-[3px_3px_0px_#120B09] transform -rotate-1">
            <Icon name="campaign" className="text-[16px] animate-pulse" />
            <span className="font-label-md text-[10px] sm:text-label-md tracking-widest uppercase">
              FRANCHISE ENQUIRIES: +91 9951991223
            </span>
          </div>

          <h1 className="font-display text-display uppercase text-espresso-deep leading-none tracking-normal mt-space-xs">
            LET&apos;S TALK CHAI.
            <br />
            <span className="text-terracotta-raw inline-block transform -rotate-1">
              LET&apos;S BUILD
            </span>{' '}
            YOUR OUTLET.
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-space-xs">
            Interested in starting your own tea business? Talk to the Beard Wala Chai franchise team about our Special Franchise Package of ₹1,50,000/-.
          </p>

          {/* Quick Proof Counter Strip */}
          <div className="flex flex-wrap items-center gap-space-sm sm:gap-space-md mt-space-md pt-space-md bg-plaster-subdued/80 px-space-md py-space-sm rounded-xl shadow-[2px_2px_0px_#120B09]">
            <div className="flex items-center gap-space-xs">
              <Icon name="bolt" className="text-terracotta-raw text-[20px]" />
              <span className="font-label-lg text-[12px] sm:text-label-lg uppercase text-espresso-deep">
                Complete Equipment Package
              </span>
            </div>
            <span className="text-on-surface-variant hidden sm:inline">•</span>
            <div className="flex items-center gap-space-xs">
              <Icon name="verified" className="text-mustard-vibrant text-[20px]" />
              <span className="font-label-lg text-[12px] sm:text-label-lg uppercase text-espresso-deep">
                ₹1,50,000/- Franchise Package
              </span>
            </div>
            <span className="text-on-surface-variant hidden sm:inline">•</span>
            <div className="flex items-center gap-space-xs">
              <Icon name="local_cafe" className="text-terracotta-raw text-[20px]" />
              <span className="font-label-lg text-[12px] sm:text-label-lg uppercase text-espresso-deep">
                Training &amp; Guidance
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
