import { Link } from 'react-router-dom';
import {
  FOUNDER_NAME,
  FOUNDER_TITLE,
  FRANCHISE_PHONE_DISPLAY,
  FRANCHISE_PHONE_TEL,
  FRANCHISE_WHATSAPP,
} from '../../data/franchise';
import Icon from '../ui/Icon';

const CARD =
  'bg-plaster-subdued p-space-md sm:p-space-lg rounded-xl shadow-[4px_4px_0px_#120B09] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#120B09] transition-all flex flex-col justify-between relative overflow-hidden';
const TAG =
  'absolute top-0 right-0 px-space-sm py-space-xs font-label-md text-label-md uppercase tracking-wider rounded-bl-lg';

export default function ContactMethods() {
  return (
    <section className="w-full bg-surface-container-low py-space-xl relative">
      <div className="max-w-[1280px] mx-auto px-margin-mobile lg:px-margin">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {/* Call */}
          <div className={CARD}>
            <div className={`${TAG} bg-terracotta-raw text-surface`}>Call</div>
            <div className="flex flex-col gap-space-sm">
              <div className="w-12 h-12 rounded-lg bg-espresso-deep text-mustard-vibrant flex items-center justify-center shadow-[2px_2px_0px_#120B09]">
                <Icon name="call" className="text-[26px]" />
              </div>
              <span className="font-headline-sm text-headline-sm uppercase text-espresso-deep mt-space-xs">
                Franchise Enquiries
              </span>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Interested in starting your own tea business? Call our franchise team.
              </p>
              <div className="bg-surface-container-lowest p-space-md rounded-lg shadow-[2px_2px_0px_#120B09] mt-space-xs">
                <a
                  className="font-metric-impact text-headline-md text-terracotta-raw hover:text-espresso-deep transition-colors tracking-normal block leading-tight"
                  href={`tel:${FRANCHISE_PHONE_TEL}`}
                >
                  {FRANCHISE_PHONE_DISPLAY}
                </a>
              </div>
            </div>
            <div className="mt-space-md pt-space-sm">
              <a
                className="w-full bg-mustard-vibrant hover:bg-secondary-container text-stencil-black font-label-lg text-label-lg uppercase tracking-wider py-space-sm px-space-md rounded-lg shadow-[3px_3px_0px_#120B09] flex items-center justify-center gap-space-xs transition-transform hover:-translate-y-0.5"
                href={`tel:${FRANCHISE_PHONE_TEL}`}
              >
                <Icon name="phone_in_talk" className="text-[18px]" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* WhatsApp */}
          <div className={CARD}>
            <div className={`${TAG} bg-secondary text-surface`}>WhatsApp</div>
            <div className="flex flex-col gap-space-sm">
              <div className="w-12 h-12 rounded-lg bg-secondary text-surface flex items-center justify-center shadow-[2px_2px_0px_#120B09]">
                <Icon name="chat" className="text-[26px]" />
              </div>
              <span className="font-headline-sm text-headline-sm uppercase text-espresso-deep mt-space-xs">
                Message Us
              </span>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Send us a WhatsApp message to ask about the franchise package and what&apos;s included.
              </p>
              <div className="bg-surface-container-lowest p-space-md rounded-lg shadow-[2px_2px_0px_#120B09] mt-space-xs">
                <span className="font-metric-impact text-headline-md text-espresso-deep tracking-normal block leading-tight">
                  {FRANCHISE_PHONE_DISPLAY}
                </span>
              </div>
            </div>
            <div className="mt-space-md pt-space-sm">
              <a
                className="w-full bg-stencil-black hover:bg-espresso-deep text-surface-bright font-label-lg text-label-lg uppercase tracking-wider py-space-sm px-space-md rounded-lg shadow-[3px_3px_0px_#120B09] flex items-center justify-center gap-space-xs transition-transform hover:-translate-y-0.5"
                href={`${FRANCHISE_WHATSAPP}?text=${encodeURIComponent('Hi, I would like details about the Beard Wala Chai franchise package.')}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Icon name="forum" className="text-[18px] text-mustard-vibrant" />
                <span>Open WhatsApp Chat</span>
              </a>
            </div>
          </div>

          {/* Founder */}
          <div className={CARD}>
            <div className={`${TAG} bg-espresso-deep text-mustard-vibrant`}>Leadership</div>
            <div className="flex flex-col gap-space-sm">
              <div className="w-12 h-12 rounded-lg bg-espresso-deep text-mustard-vibrant flex items-center justify-center shadow-[2px_2px_0px_#120B09]">
                <Icon name="verified_user" className="text-[26px]" />
              </div>
              <span className="font-headline-sm text-headline-sm uppercase text-espresso-deep mt-space-xs">
                {FOUNDER_NAME}
              </span>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {FOUNDER_TITLE}, Beard Wala Chai
              </p>
            </div>
            <div className="mt-space-md pt-space-sm">
              <Link
                className="w-full bg-surface-container hover:bg-surface-bright text-espresso-deep font-label-lg text-label-lg uppercase tracking-wider py-space-sm px-space-md rounded-lg shadow-[3px_3px_0px_#120B09] flex items-center justify-center gap-space-xs transition-transform hover:-translate-y-0.5"
                to="/about"
              >
                <Icon name="arrow_forward" className="text-[18px] text-terracotta-raw" />
                <span>Our Story</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
