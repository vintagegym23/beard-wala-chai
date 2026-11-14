import { Link } from 'react-router-dom';
import {
  FRANCHISE_PHONE_DISPLAY,
  FRANCHISE_PHONE_TEL,
  FRANCHISE_PRICE,
  INVENTORY_CATEGORIES,
  WHY_CHOOSE_REASONS,
} from '../../data/franchise';
import Icon from '../ui/Icon';

const CATEGORY_SUMMARIES: Record<string, string> = {
  'Branding Equipment': 'Name board, stand board, form boards, menu board & photo frames.',
  'Kitchen Equipment': '185-litre refrigerator, gas stove, grinder, bowls, filters & tools.',
  Furniture: 'Cash counter with snack display, partition, stools & tea table.',
  'Raw Materials & Ingredients': 'Tea powder, coffee, syrups, masalas, biscuits, dry fruits & cups.',
  'Business Support': 'Menu & staff training, business guidance, branding & marketing.',
};

export default function FranchiseBlueprint() {
  return (
    <section className="w-full bg-espresso-deep text-surface-container-low py-16 lg:py-20" id="franchise-package">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 lg:mb-12">
          <div>
            <span className="block font-label-md text-[0.8rem] font-bold uppercase tracking-[0.2em] text-mustard-vibrant mb-3">
              Franchise Opportunity
            </span>
            <h2 className="font-serif font-bold text-4xl sm:text-5xl leading-[1.1] tracking-tight text-surface-bright">
              Special Franchise Package
              <span className="block text-mustard-vibrant mt-1">{FRANCHISE_PRICE}</span>
            </h2>
          </div>
          <p className="font-body-md text-base lg:text-lg leading-relaxed text-surface-container-high max-w-md lg:border-l lg:border-white/15 lg:pl-8">
            Start your own tea business with Beard Wala Chai. We are inviting franchise partners to be among the first to
            join our tea business network.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* What's included */}
          <div className="lg:col-span-7 rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8 flex flex-col gap-6">
            <h3 className="font-body-md text-sm font-bold uppercase tracking-[0.14em] text-surface-container-high">
              What Is Included
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
              {INVENTORY_CATEGORIES.map((cat) => (
                <div key={cat.title} className="flex items-start gap-4">
                  <span className="w-10 h-10 shrink-0 rounded-xl bg-mustard-vibrant/10 text-mustard-vibrant flex items-center justify-center">
                    <Icon name={cat.icon} className="text-xl" />
                  </span>
                  <div>
                    <span className="block font-body-md text-base font-semibold text-surface-bright">{cat.title}</span>
                    <span className="block font-body-md text-sm leading-relaxed text-surface-container-high/80 mt-0.5">
                      {CATEGORY_SUMMARIES[cat.title]}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/franchise#package"
              className="mt-auto pt-5 border-t border-white/10 inline-flex items-center gap-2 font-body-md text-sm font-semibold text-mustard-vibrant hover:gap-3 transition-all"
            >
              See the full package list
              <Icon name="arrow_forward" className="text-base" />
            </Link>
          </div>

          {/* Why choose us */}
          <div className="lg:col-span-5 rounded-2xl bg-[#fdf9f5] text-stencil-black p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.25)] flex flex-col gap-6">
            <h3 className="font-serif font-bold text-2xl leading-tight">Why Choose Beard Wala Chai?</h3>
            <ul className="divide-y divide-[#efe4d8]">
              {WHY_CHOOSE_REASONS.map((reason) => (
                <li key={reason.title} className="flex items-center gap-3 py-3 first:pt-0">
                  <Icon name="check_circle" className="text-lg text-terracotta-raw" />
                  <span className="font-body-md text-base font-medium">{reason.title}</span>
                </li>
              ))}
            </ul>

            <a
              className="mt-auto w-full inline-flex items-center justify-center gap-2 rounded-xl bg-espresso-deep text-surface-bright font-body-md text-base font-semibold py-3.5 px-4 hover:bg-terracotta-raw transition-colors"
              href={`tel:${FRANCHISE_PHONE_TEL}`}
            >
              <Icon name="call" className="text-lg" />
              Enquiries: {FRANCHISE_PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
