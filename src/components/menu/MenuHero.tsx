import { MENU_FILTER_TABS, MenuCategory } from '../../data/menu';

interface MenuHeroProps {
  activeCategory: MenuCategory;
  onSelectCategory: (category: MenuCategory) => void;
}

export default function MenuHero({ activeCategory, onSelectCategory }: MenuHeroProps) {
  return (
    <section className="w-full bg-surface-container-high py-space-xl">
      <div className="max-w-[1280px] mx-auto px-margin-mobile lg:px-margin flex flex-col items-center text-center">
        <span className="font-label-md text-label-md uppercase tracking-widest text-terracotta-raw mb-space-xs">
          Beard Wala Chai
        </span>
        <h1 className="font-display text-display uppercase text-stencil-black tracking-tight leading-none mb-space-sm">
          Our Menu
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-space-lg">
          Chai, coffee and milkshakes.
        </p>

        <div className="flex items-center justify-center flex-wrap gap-space-xs" role="tablist" aria-label="Menu categories">
          {MENU_FILTER_TABS.map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => onSelectCategory(tab.id)}
                className={`font-label-lg text-label-lg uppercase px-space-md py-space-sm rounded-lg transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-stencil-black text-mustard-vibrant'
                    : 'bg-surface-container text-on-surface hover:bg-mustard-vibrant hover:text-stencil-black'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
