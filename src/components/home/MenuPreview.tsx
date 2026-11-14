import { Link } from 'react-router-dom';
import { HOME_SIGNATURE_ITEMS } from '../../data/menu';
import Icon from '../ui/Icon';

export default function MenuPreview() {
  return (
    <section className="w-full py-16 lg:py-24 bg-[#faf4ee] text-stencil-black">
      <div className="max-w-[1400px] mx-auto px-margin-mobile md:px-margin">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-12 mb-10 lg:mb-14">
          <div>
            <span className="block font-label-md text-[0.8rem] font-bold uppercase tracking-[0.2em] text-terracotta-raw mb-3">
              Our Menu
            </span>
            <h2 className="font-serif font-bold text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.05] tracking-tight text-stencil-black">
              Chai, Coffee &amp; Milkshakes
            </h2>
            <span aria-hidden="true" className="block w-16 h-[3px] bg-terracotta-raw rounded-full mt-6" />
          </div>
          <Link
            to="/menu"
            className="inline-flex w-fit items-center gap-2 font-label-lg text-label-lg uppercase tracking-wider text-terracotta-raw hover:underline"
          >
            See the full menu
            <Icon name="arrow_forward" className="text-lg" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {HOME_SIGNATURE_ITEMS.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col overflow-hidden rounded-2xl bg-[#fdf9f5] border border-[#efe4d8] shadow-[0_6px_24px_rgba(91,52,26,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(91,52,26,0.14)]"
            >
              <div className="aspect-[17/12] overflow-hidden bg-[#efe2d4]">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  alt={item.alt}
                  src={item.image}
                />
              </div>
              <div className="px-6 pt-5 pb-6">
                <span className="font-label-md text-[0.7rem] font-bold uppercase tracking-[0.14em] text-terracotta-raw">
                  {item.category}
                </span>
                <h3 className="font-serif font-bold text-[1.35rem] leading-tight text-stencil-black mt-1">
                  {item.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
