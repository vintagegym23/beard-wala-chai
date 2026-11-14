import { useState, FormEvent } from 'react';
import {
  FOUNDER_NAME,
  FOUNDER_TITLE,
  FRANCHISE_PHONE_DISPLAY,
  FRANCHISE_PHONE_TEL,
  FRANCHISE_PRICE,
  FRANCHISE_WHATSAPP,
} from '../../data/franchise';
import Icon from '../ui/Icon';

interface FormState {
  name: string;
  phone: string;
  city: string;
  status: string;
  space: string;
}

const NEXT_STEPS = [
  { title: 'Share your details', text: 'Fill in the short form with your name, number and preferred city.' },
  { title: 'We get in touch', text: 'Our franchise team contacts you to understand your plans.' },
  { title: 'Walk through the package', text: `We explain everything included in the ${FRANCHISE_PRICE} package and the next steps.` },
];

const INPUT =
  'w-full rounded-lg border-2 border-espresso-deep/15 bg-[#fffaf2] px-4 py-3 font-body-md text-base text-stencil-black placeholder:text-on-surface-variant/60 transition-colors focus:border-mustard-vibrant focus:outline-none focus:ring-4 focus:ring-mustard-vibrant/25';
const LABEL = 'block font-label-md text-label-md uppercase tracking-wider text-espresso-deep mb-1.5';

export default function FranchiseApplySection() {
  const [form, setForm] = useState<FormState>({ name: '', phone: '', city: '', status: 'ready', space: '' });
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError('');

    if (form.name.trim().length < 2) {
      setError('Please enter your full name.');
      return;
    }
    if (form.phone.replace(/\D/g, '').length < 10) {
      setError('Please enter a valid 10-digit mobile or WhatsApp number.');
      return;
    }
    if (form.city.trim().length < 2) {
      setError('Please enter your preferred city or district.');
      return;
    }

    setSubmitting(true);
    // Placeholder client-side handler (no backend endpoint configured)
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 400);
  };

  const whatsappPrefillUrl = `${FRANCHISE_WHATSAPP}?text=${encodeURIComponent(
    `Hi, I want to apply for the ${FRANCHISE_PRICE} Beard Wala Chai franchise.\nName: ${form.name || 'Applicant'}\nCity: ${form.city || 'TBD'}\nPhone: ${form.phone || 'TBD'}`
  )}`;

  return (
    <section className="w-full bg-[#faf4ee] text-stencil-black py-16 lg:py-20" id="apply-now">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Information */}
        <div className="lg:col-span-5">
          <span className="block font-label-md text-[0.8rem] font-bold uppercase tracking-[0.2em] text-terracotta-raw mb-3">
            Franchise Enquiries
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl leading-[1.15] tracking-tight">
            Start Your Own Tea Business
          </h2>
          <span aria-hidden="true" className="block w-16 h-[3px] bg-terracotta-raw rounded-[50%] mt-6" />
          <p className="font-body-md text-sm lg:text-base leading-relaxed text-on-surface-variant mt-5">
            Interested in opening a Beard Wala Chai outlet? Share a few details and our franchise team will reach out to
            you about the Special Franchise Package.
          </p>

          <div className="mt-8 flex items-center justify-between gap-4 rounded-2xl bg-espresso-deep text-surface-bright px-6 py-5">
            <div>
              <span className="block font-body-md text-xs font-semibold uppercase tracking-[0.14em] text-surface-container-high">
                Special Franchise Package
              </span>
              <span className="block font-serif font-bold text-3xl text-mustard-vibrant mt-1">{FRANCHISE_PRICE}</span>
            </div>
            <Icon name="storefront" className="text-3xl text-mustard-vibrant/80" />
          </div>

          <h3 className="font-body-md text-sm font-bold uppercase tracking-[0.14em] text-on-surface-variant mt-10 mb-5">
            What happens next
          </h3>
          <ol className="space-y-5">
            {NEXT_STEPS.map((step, i) => (
              <li key={step.title} className="flex gap-4">
                <span className="w-8 h-8 shrink-0 rounded-[50%] bg-terracotta-raw text-white font-body-md text-sm font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <div>
                  <span className="block font-body-md text-base font-semibold">{step.title}</span>
                  <span className="block font-body-md text-sm leading-relaxed text-on-surface-variant mt-0.5">
                    {step.text}
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Form + contact details */}
        <div className="lg:col-span-7">
          <div className="rounded-2xl bg-plaster-subdued border-2 border-espresso-deep overflow-hidden shadow-[6px_6px_0px_#EAB308]">
            <div className="bg-espresso-deep px-6 sm:px-10 py-5 flex items-center justify-between gap-4">
              <div>
                <h3 className="font-headline-sm text-headline-sm uppercase tracking-wide text-mustard-vibrant leading-none">
                  Franchise Enquiry Form
                </h3>
                <p className="font-body-md text-sm text-surface-container-high mt-1.5">
                  Fields marked <span className="text-mustard-vibrant">*</span> are required.
                </p>
              </div>
              <Icon name="local_cafe" className="text-3xl text-mustard-vibrant shrink-0" />
            </div>

            <form className="p-6 sm:p-10 space-y-5" onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className={LABEL} htmlFor="applicant-name">
                    Full name <span className="text-terracotta-raw">*</span>
                  </label>
                  <input
                    className={INPUT}
                    id="applicant-name"
                    placeholder="e.g. Ramesh Reddy"
                    required
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className={LABEL} htmlFor="applicant-phone">
                    Mobile / WhatsApp number <span className="text-terracotta-raw">*</span>
                  </label>
                  <input
                    className={INPUT}
                    id="applicant-phone"
                    placeholder="+91 98765 43210"
                    required
                    type="tel"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className={LABEL} htmlFor="applicant-city">
                    Preferred city / district <span className="text-terracotta-raw">*</span>
                  </label>
                  <input
                    className={INPUT}
                    id="applicant-city"
                    placeholder="e.g. Warangal"
                    required
                    type="text"
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                  />
                </div>
                <div>
                  <label className={LABEL} htmlFor="applicant-status">
                    Where are you in your plans?
                  </label>
                  <select
                    className={INPUT}
                    id="applicant-status"
                    value={form.status}
                    onChange={(e) => setForm({ ...form, status: e.target.value })}
                  >
                    <option value="ready">Ready to start soon</option>
                    <option value="evaluating">Still exploring options</option>
                    <option value="multiple">Interested in more than one outlet</option>
                  </select>
                </div>
              </div>

              <div>
                <label className={LABEL} htmlFor="applicant-space">
                  Do you already have a location?
                </label>
                <input
                  className={INPUT}
                  id="applicant-space"
                  placeholder="e.g. Rented shop on main road / Still looking"
                  type="text"
                  value={form.space}
                  onChange={(e) => setForm({ ...form, space: e.target.value })}
                />
              </div>

              {error && (
                <div role="alert" className="rounded-lg border border-error/30 bg-error-container px-4 py-3 font-body-md text-sm text-on-error-container">
                  {error}
                </div>
              )}

              <button
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-mustard-vibrant text-stencil-black font-label-lg text-label-lg uppercase tracking-wider py-4 px-6 border-2 border-espresso-deep shadow-[3px_3px_0px_#2B140E] hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#2B140E] active:translate-y-0 active:shadow-[1px_1px_0px_#2B140E] transition-all cursor-pointer disabled:opacity-70"
                disabled={submitting}
                type="submit"
              >
                {submitting ? 'Sending…' : 'Submit Enquiry'}
                <Icon name="arrow_forward" className="text-lg" />
              </button>

              {submitted && (
                <div
                  role="status"
                  className="rounded-lg bg-espresso-deep text-surface-bright px-5 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div>
                    <span className="block font-body-md text-base font-semibold text-mustard-vibrant">Your enquiry is ready</span>
                    <span className="block font-body-md text-sm text-surface-container-high mt-0.5">
                      Send it to our franchise team on WhatsApp, or call {FRANCHISE_PHONE_DISPLAY}.
                    </span>
                  </div>
                  <a
                    href={whatsappPrefillUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] text-white font-body-md text-sm font-semibold px-4 py-2.5 hover:bg-[#1fa855] transition-colors"
                  >
                    <Icon name="chat" className="text-base" />
                    Send via WhatsApp
                  </a>
                </div>
              )}

              <p className="font-body-md text-xs text-on-surface-variant text-center">
                We only use your details to respond to your franchise enquiry.
              </p>
            </form>
          </div>

          <div className="mt-6 px-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
            <div className="flex items-center gap-3">
              <img
                src="/images/founder-avatar.webp"
                alt={FOUNDER_NAME}
                width={48}
                height={48}
                loading="lazy"
                className="w-12 h-12 rounded-[50%] object-cover"
              />
              <div>
                <span className="block font-body-md text-sm font-semibold">{FOUNDER_NAME}</span>
                <span className="block font-body-md text-xs text-on-surface-variant">{FOUNDER_TITLE}, Beard Wala Chai</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
              <a href={`tel:${FRANCHISE_PHONE_TEL}`} className="inline-flex items-center gap-3 group">
                <span className="w-10 h-10 rounded-[50%] bg-white border border-[#e3d6c7] flex items-center justify-center text-terracotta-raw">
                  <Icon name="call" className="text-lg" />
                </span>
                <span>
                  <span className="block font-body-md text-xs text-on-surface-variant">Call us</span>
                  <span className="block font-body-md text-base font-semibold group-hover:text-terracotta-raw transition-colors">
                    {FRANCHISE_PHONE_DISPLAY}
                  </span>
                </span>
              </a>
              <a href={FRANCHISE_WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 group">
                <span className="w-10 h-10 rounded-[50%] bg-white border border-[#e3d6c7] flex items-center justify-center text-[#1fa855]">
                  <Icon name="chat" className="text-lg" />
                </span>
                <span>
                  <span className="block font-body-md text-xs text-on-surface-variant">WhatsApp</span>
                  <span className="block font-body-md text-base font-semibold group-hover:text-terracotta-raw transition-colors">
                    Chat with us
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
