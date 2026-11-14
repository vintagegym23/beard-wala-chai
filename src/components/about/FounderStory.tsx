import { FOUNDER_NAME, FOUNDER_TITLE, FRANCHISE_PRICE } from '../../data/franchise';
import Icon from '../ui/Icon';

const PILLARS = [
  {
    icon: 'local_cafe',
    title: 'Chai With Character',
    text: 'Bold, kadak masala chai with ginger and elachi, alongside coffee and milkshakes.',
  },
  {
    icon: 'kitchen',
    title: 'Ready-to-Start Package',
    text: `Branding, kitchen equipment, furniture and raw materials in one ${FRANCHISE_PRICE} package.`,
  },
  {
    icon: 'groups',
    title: 'Training & Guidance',
    text: 'Menu training, staff training and business guidance for every franchise partner.',
  },
];

export default function FounderStory() {
  return (
    <section className="w-full bg-espresso-deep text-plaster-subdued py-space-xl relative" id="philosophy">
      <div className="max-w-[1280px] mx-auto px-margin-mobile lg:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          {/* Founder card */}
          <div className="lg:col-span-5">
            <figure className="bg-tertiary-container rounded-xl shadow-[6px_6px_0px_#000000] overflow-hidden">
              <div className="relative">
                <img
                  src="/images/founder.webp"
                  alt={`${FOUNDER_NAME}, ${FOUNDER_TITLE} of Beard Wala Chai`}
                  width={800}
                  height={800}
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover object-[30%_30%]"
                />
                <img
                  src="/images/logo.webp"
                  alt="Beard Wala Chai logo"
                  width={112}
                  height={112}
                  loading="lazy"
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 w-16 h-16 sm:w-24 sm:h-24 lg:w-28 lg:h-28 drop-shadow-[0_4px_10px_rgba(0,0,0,0.45)]"
                />
              </div>
              <figcaption className="p-space-md text-center">
                <span className="font-label-md text-label-md uppercase tracking-widest text-mustard-vibrant">
                  Meet the Founder
                </span>
                <h2 className="font-headline-md text-headline-md uppercase text-surface-bright leading-tight mt-space-xs">
                  {FOUNDER_NAME}
                </h2>
                <span className="font-body-md text-body-md text-tertiary-fixed-dim">
                  {FOUNDER_TITLE}, Beard Wala Chai
                </span>
              </figcaption>
            </figure>
          </div>

          {/* Vision */}
          <div className="lg:col-span-7 flex flex-col gap-space-md">
            <span className="font-label-lg text-label-lg uppercase text-mustard-vibrant tracking-widest">
              A New Tea &amp; Beverage Brand
            </span>
            <h2 className="font-headline-lg text-headline-lg uppercase text-surface-bright leading-tight">
              Starting Fresh.
              <br />
              <span className="text-mustard-vibrant">Built for Partners.</span>
            </h2>
            <p className="font-body-lg text-body-lg text-surface-container-high">
              Beard Wala Chai is a brand-new tea and beverage brand founded by {FOUNDER_NAME}. With our launch, we are
              opening for franchise across India and inviting our first partners to start their own tea business with us.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md pt-space-xs">
              {PILLARS.map((p) => (
                <div
                  key={p.title}
                  className="bg-tertiary-container/80 p-space-md rounded-lg shadow-[3px_3px_0px_#000000] flex flex-col"
                >
                  <Icon name={p.icon} className="text-mustard-vibrant text-[28px] mb-space-xs" />
                  <h3 className="font-title-stencil text-title-stencil text-surface uppercase mb-space-xs">{p.title}</h3>
                  <p className="font-body-sm text-body-sm text-surface-container-high leading-snug">{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
