import { FRANCHISE_PRICE, INVENTORY_CATEGORIES } from '../../data/franchise';
import Icon from '../ui/Icon';

// Short lists share the first row; the two long lists sit below in multi-column layouts
// so the whole package fits on one laptop screen.
const LAYOUT: Record<string, { order: number; span: string; cols: string }> = {
  '01': { order: 1, span: 'lg:col-span-4', cols: 'grid-cols-1' },
  '03': { order: 2, span: 'lg:col-span-4', cols: 'grid-cols-1' },
  '05': { order: 3, span: 'lg:col-span-4', cols: 'grid-cols-1' },
  '02': { order: 4, span: 'lg:col-span-5', cols: 'grid-cols-1 sm:grid-cols-2' },
  '04': { order: 5, span: 'lg:col-span-7', cols: 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3' },
};

export default function PackageDetails() {
  const categories = [...INVENTORY_CATEGORIES].sort((a, b) => LAYOUT[a.badge].order - LAYOUT[b.badge].order);

  return (
    <section id="package" className="w-full bg-surface text-on-surface py-space-lg relative">
      <div className="max-w-[1280px] mx-auto px-margin-mobile lg:px-margin">
        <div className="text-center mb-space-md">
          <span className="font-label-lg text-label-lg uppercase tracking-widest text-terracotta-raw block mb-1">
            Special Franchise Package: {FRANCHISE_PRICE}
          </span>
          <h2 className="font-headline-lg text-headline-lg uppercase text-espresso-deep leading-tight">
            What Is Included in the Franchise Package?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-space-md">
          {categories.map((cat) => {
            const layout = LAYOUT[cat.badge];
            const wide = cat.items.length > 6;
            return (
              <div
                key={cat.badge}
                className={`bg-plaster-subdued p-space-md rounded-sm shadow-[4px_4px_0px_#120B09] ${layout.span} ${
                  wide ? 'md:col-span-2' : ''
                }`}
              >
                <div className="flex items-center gap-space-sm mb-space-sm">
                  <span className="font-label-md text-label-md bg-stencil-black text-mustard-vibrant px-2 py-0.5 rounded-sm font-bold">
                    {cat.badge}
                  </span>
                  <h3 className="font-headline-sm text-headline-sm uppercase text-espresso-deep leading-none">
                    {cat.title}
                  </h3>
                  <Icon name={cat.icon} className="ml-auto text-xl text-terracotta-raw" />
                </div>

                <ul className={`grid ${layout.cols} gap-x-space-md gap-y-1.5 font-body-sm text-body-sm text-espresso-deep`}>
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Icon name="check_circle" className="text-sm text-terracotta-raw mt-[3px] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
