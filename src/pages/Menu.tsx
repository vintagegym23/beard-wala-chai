import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuCategory } from '../data/menu';
import { FRANCHISE_PRICE } from '../data/franchise';
import MenuHero from '../components/menu/MenuHero';
import MenuCategories from '../components/menu/MenuCategories';
import Icon from '../components/ui/Icon';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('all');

  return (
    <div className="flex flex-col w-full">
      <MenuHero activeCategory={activeCategory} onSelectCategory={setActiveCategory} />

      <div className="max-w-[1280px] w-full mx-auto px-margin-mobile lg:px-margin py-space-xl flex flex-col gap-space-xl">
        <MenuCategories activeCategory={activeCategory} />

        <div className="bg-espresso-deep text-surface rounded-xl p-space-md sm:p-space-lg flex flex-col md:flex-row md:items-center justify-between gap-space-md">
          <div>
            <h2 className="font-headline-sm text-headline-sm uppercase text-mustard-vibrant">
              Want to serve this menu in your city?
            </h2>
            <p className="font-body-md text-body-md text-surface-container-high mt-1">
              Start your own Beard Wala Chai outlet with our Special Franchise Package of {FRANCHISE_PRICE}.
            </p>
          </div>
          <Link
            to="/franchise"
            className="inline-flex shrink-0 items-center gap-space-xs bg-mustard-vibrant text-stencil-black font-label-lg text-label-lg uppercase tracking-wider px-space-md py-space-sm rounded-lg hover:-translate-y-0.5 transition-transform"
          >
            Apply for Franchise
            <Icon name="arrow_forward" className="text-lg" />
          </Link>
        </div>
      </div>
    </div>
  );
}
