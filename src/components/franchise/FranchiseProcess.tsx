import { ONBOARDING_STEPS } from '../../data/franchise';

export default function FranchiseProcess() {
  return (
    <section className="w-full bg-stencil-black text-surface py-space-xl relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-margin-mobile lg:px-margin">
        <div className="mb-space-xl">
          <span className="font-label-lg text-label-lg uppercase tracking-widest text-mustard-vibrant block mb-1">
            Start Your Own Tea Business
          </span>
          <h2 className="font-headline-lg text-headline-lg uppercase text-surface leading-tight">
            How to Become a Franchise Partner
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-space-md relative">
          {ONBOARDING_STEPS.map((step) => (
            <div
              key={step.number}
              className="bg-primary-container p-space-md rounded-sm border-t-4 border-mustard-vibrant relative flex flex-col justify-between"
            >
              <div>
                <span className="font-headline-lg text-headline-lg text-mustard-vibrant block leading-none mb-2">
                  {step.number}
                </span>
                <h3 className="font-headline-sm text-headline-sm uppercase text-surface mb-2">
                  {step.title}
                </h3>
                <p className="font-body-sm text-body-sm text-surface-container-high">
                  {step.description}
                </p>
              </div>
              <div
                className={`mt-4 font-label-md text-label-md uppercase ${
                  step.highlight ? 'text-mustard-vibrant font-bold' : 'text-secondary-fixed'
                }`}
              >
                {step.tag}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
