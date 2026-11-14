import { FOUNDER_NAME, FOUNDER_TITLE, FRANCHISE_PRICE } from '../../data/franchise';
import Icon from '../ui/Icon';

export default function BrandStory() {
  return (
    <section className="w-full bg-espresso-deep text-surface-container-low py-space-xl relative" id="story">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          {/* Founder */}
          <div className="lg:col-span-5">
            <figure className="relative bg-stencil-black rounded-lg shadow-[6px_6px_0px_#EAB308] overflow-hidden">
              <img
                src="/images/founder.webp"
                alt={`${FOUNDER_NAME}, ${FOUNDER_TITLE} of Beard Wala Chai`}
                width={800}
                height={800}
                loading="lazy"
                className="w-full aspect-square object-cover object-[30%_center]"
              />
              <img
                src="/images/logo.webp"
                alt="Beard Wala Chai logo"
                width={112}
                height={112}
                loading="lazy"
                className="absolute top-3 right-3 sm:top-4 sm:right-4 w-16 h-16 sm:w-24 sm:h-24 lg:w-28 lg:h-28 drop-shadow-[0_4px_10px_rgba(0,0,0,0.45)]"
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-space-md bg-gradient-to-t from-stencil-black via-stencil-black/80 to-transparent pt-space-xl">
                <span className="block font-label-md text-label-md text-mustard-vibrant uppercase">{FOUNDER_TITLE}</span>
                <span className="font-title-stencil text-title-stencil text-surface-bright">{FOUNDER_NAME}</span>
              </figcaption>
            </figure>
          </div>

          {/* Introduction */}
          <div className="lg:col-span-7 space-y-space-md">
            <div className="inline-flex items-center gap-2 text-mustard-vibrant">
              <Icon name="local_cafe" className="text-sm" />
              <span className="font-label-md text-label-md uppercase tracking-widest">Introducing Beard Wala Chai</span>
            </div>

            <h2 className="font-headline-lg text-headline-lg uppercase text-surface-bright tracking-tight">
              A NEW CHAI BRAND. <br />
              <span className="text-mustard-vibrant">NOW OPEN FOR FRANCHISE.</span>
            </h2>

            <p className="font-body-lg text-body-lg text-surface-container-high">
              Beard Wala Chai is a new tea and beverage brand bringing chai, coffee and milkshakes together under one bold
              name. We are just getting started, and we are inviting our first
              franchise partners to grow with us.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-space-xs">
              <div className="bg-stencil-black p-space-md rounded-lg shadow-[3px_3px_0px_#EAB308]">
                <Icon name="local_cafe" className="text-mustard-vibrant text-3xl mb-space-xs block" />
                <span className="font-title-stencil text-title-stencil text-surface-bright block uppercase mb-1">
                  Chai With Character
                </span>
                <p className="font-body-sm text-body-sm text-surface-container">
                  Bold desi chai with ginger and elachi, plus a full menu of teas, coffees and shakes.
                </p>
              </div>
              <div className="bg-stencil-black p-space-md rounded-lg shadow-[3px_3px_0px_#EAB308]">
                <Icon name="storefront" className="text-terracotta-raw text-3xl mb-space-xs block" />
                <span className="font-title-stencil text-title-stencil text-surface-bright block uppercase mb-1">
                  Start Your Own Outlet
                </span>
                <p className="font-body-sm text-body-sm text-surface-container">
                  Equipment, furniture, raw materials and training in one {FRANCHISE_PRICE} package.
                </p>
              </div>
            </div>

            <div className="p-space-md bg-terracotta-raw/20 rounded-lg flex items-center justify-between flex-wrap gap-space-sm">
              <div className="flex items-center gap-space-xs">
                <Icon name="verified" className="text-mustard-vibrant" />
                <span className="font-label-lg text-label-lg text-surface-bright uppercase">Menu &amp; Staff Training</span>
              </div>
              <span className="font-body-sm text-body-sm text-mustard-vibrant">
                Every Franchise Partner Is Trained on Our Menu
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
