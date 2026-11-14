import { useState } from 'react';
import { FAQ_ITEMS } from '../../data/contact';
import Icon from '../ui/Icon';

export default function FaqAccordion() {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="w-full bg-surface py-space-lg relative">
      <div className="max-w-[960px] mx-auto px-margin-mobile lg:px-margin">
        <div className="text-center flex flex-col items-center gap-space-xs mb-space-md">
          <div className="inline-flex items-center gap-space-xs bg-espresso-deep text-mustard-vibrant px-space-md py-space-xs rounded-lg shadow-[2px_2px_0px_#120B09]">
            <Icon name="help_center" className="text-[16px]" />
            <span className="font-label-md text-label-md uppercase tracking-widest">
              FRANCHISE FAQ
            </span>
          </div>
          <h2 className="font-headline-lg text-headline-lg uppercase text-espresso-deep leading-tight mt-space-xs">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-lg">
            Answers to common questions about the Beard Wala Chai franchise package.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="flex flex-col gap-space-sm">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="bg-plaster-subdued rounded-xl shadow-[3px_3px_0px_#120B09] overflow-hidden"
              >
                <button
                  className="w-full text-left px-space-md py-space-sm flex items-center justify-between gap-space-sm font-headline-sm text-headline-sm uppercase text-espresso-deep hover:text-terracotta-raw transition-colors cursor-pointer"
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => toggle(item.id)}
                >
                  <span>{item.question}</span>
                  <Icon name={isOpen ? 'remove' : 'add'} className="text-terracotta-raw shrink-0" />
                </button>
                {isOpen && (
                  <div className="px-space-md pb-space-sm font-body-md text-body-md text-on-surface-variant">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Contact Strip at Bottom of FAQ */}
        <div className="mt-space-md text-center">
          <p className="font-body-md text-body-md text-on-surface-variant">
            Have more questions about the franchise?
          </p>
          <div className="inline-flex items-center gap-space-xs mt-space-xs">
            <a
              className="font-label-lg text-label-lg uppercase text-terracotta-raw hover:text-espresso-deep underline decoration-2 underline-offset-4 flex items-center justify-center gap-1 flex-wrap"
              href="tel:+919951991223"
            >
              <Icon name="call" className="text-[16px]" />
              <span>Franchise enquiries: +91 9951991223</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
