import {
  FRANCHISE_PHONE_DISPLAY,
  FRANCHISE_PHONE_TEL,
  FRANCHISE_PRICE,
  WHY_CHOOSE_REASONS,
} from '../../data/franchise';
import Icon from '../ui/Icon';

export default function WhyChoose() {
  return (
    <section className="w-full bg-espresso-deep text-surface py-space-xl relative">
      <div className="max-w-[1280px] mx-auto px-margin-mobile lg:px-margin">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-xl">
          <div>
            <span className="font-label-lg text-label-lg uppercase tracking-widest text-mustard-vibrant block mb-1">
              Franchise Opportunity
            </span>
            <h2 className="font-headline-lg text-headline-lg uppercase text-surface leading-tight">
              Why Choose Beard Wala Chai?
            </h2>
          </div>
          <p className="font-body-md text-body-md text-surface-container-high max-w-md">
            We are inviting franchise partners to be among the first to join our tea business network.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-space-md">
          {WHY_CHOOSE_REASONS.map((reason) => (
            <div
              key={reason.title}
              className="bg-primary-container p-space-md rounded-sm shadow-[4px_4px_0px_#000000] hover:-translate-y-1 transition-transform"
            >
              <Icon name={reason.icon} className="text-3xl text-mustard-vibrant" />
              <h3 className="font-headline-sm text-headline-sm uppercase text-surface mt-space-sm">
                {reason.title}
              </h3>
              <p className="font-body-sm text-body-sm text-surface-container-high mt-2">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-space-lg bg-stencil-black p-space-md sm:p-space-lg rounded-sm shadow-[6px_6px_0px_#120B09] flex flex-col md:flex-row md:items-center justify-between gap-space-md">
          <div>
            <span className="font-label-md text-label-md uppercase text-mustard-vibrant">
              Special Franchise Package
            </span>
            <div className="font-metric-impact text-metric-impact text-surface leading-none mt-1">
              {FRANCHISE_PRICE}
            </div>
          </div>
          <a
            href={`tel:${FRANCHISE_PHONE_TEL}`}
            className="inline-flex items-center justify-center gap-space-xs bg-mustard-vibrant text-stencil-black font-label-lg text-label-lg uppercase tracking-wider px-6 py-4 shadow-[4px_4px_0px_#000000] hover:-translate-y-0.5 transition-transform"
          >
            <Icon name="call" className="text-xl" />
            Enquiries: {FRANCHISE_PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  );
}
