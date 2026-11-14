import { MENU_SECTIONS, MenuCategory } from '../../data/menu';
import Icon from '../ui/Icon';

interface MenuCategoriesProps {
  activeCategory: MenuCategory;
}

export default function MenuCategories({ activeCategory }: MenuCategoriesProps) {
  const sections = MENU_SECTIONS.filter((s) => activeCategory === 'all' || s.id === activeCategory);

  return (
    <div className="flex flex-col gap-space-xl">
      {sections.map((section) => (
        <section key={section.id} aria-labelledby={`menu-${section.id}`}>
          <div className="flex items-center gap-space-sm mb-space-md pb-space-sm border-b-2 border-stencil-black/10">
            <span className="w-11 h-11 rounded-lg bg-espresso-deep text-mustard-vibrant flex items-center justify-center">
              <Icon name={section.icon} className="text-2xl" />
            </span>
            <h2
              id={`menu-${section.id}`}
              className="font-headline-lg text-headline-lg uppercase text-espresso-deep leading-none"
            >
              {section.title}
            </h2>
            <span className="ml-auto font-label-md text-label-md uppercase text-on-surface-variant">
              {section.items.length} items
            </span>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-space-sm">
            {section.items.map((item) => (
              <li
                key={item}
                className="flex items-center gap-space-sm bg-plaster-subdued px-space-md py-space-sm rounded-lg font-body-md text-body-lg font-semibold text-espresso-deep"
              >
                <span className="w-2 h-2 rounded-full bg-terracotta-raw shrink-0" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
