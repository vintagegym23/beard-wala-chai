import { useState, FormEvent } from 'react';
import Icon from '../ui/Icon';

interface ContactFormState {
  name: string;
  phone: string;
  email: string;
  city: string;
  inquiryType: 'franchise' | 'supply' | 'general';
  message: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormState>({
    name: '',
    phone: '',
    email: '',
    city: '',
    inquiryType: 'franchise',
    message: '',
  });
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError('');

    const phoneDigits = form.phone.replace(/\D/g, '');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (form.name.trim().length < 2) {
      setError('Please enter your full name.');
      return;
    }
    if (phoneDigits.length < 10) {
      setError('Please enter a valid 10-digit WhatsApp/mobile number.');
      return;
    }
    if (!emailRegex.test(form.email.trim())) {
      setError('Please enter a valid email address.');
      return;
    }
    if (form.city.trim().length < 2) {
      setError('Please enter your proposed city and pincode.');
      return;
    }

    setSubmitting(true);
    // Placeholder client-side handler (no backend endpoint configured)
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 400);
  };

  const whatsappUrl = `https://wa.me/919951991223?text=${encodeURIComponent(
    `Hi, I am contacting Beard Wala Chai (${form.inquiryType}).\nName: ${form.name}\nCity: ${form.city}\nEmail: ${form.email}\nNotes: ${form.message}`
  )}`;

  return (
    <section className="w-full bg-surface py-space-xl relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-margin-mobile lg:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          {/* Left: Rapid Form Module (7 Cols) */}
          <div className="lg:col-span-7 bg-plaster-subdued p-space-md sm:p-space-lg rounded-xl shadow-[4px_4px_0px_#120B09]">
            <div className="flex flex-col gap-space-xs mb-space-md">
              <div className="flex items-center gap-space-xs">
                <span className="w-3 h-3 bg-terracotta-raw rounded-full animate-ping" />
                <span className="font-label-md text-label-md uppercase text-terracotta-raw tracking-widest">
                  ENQUIRY FORM
                </span>
              </div>
              <h2 className="font-headline-md text-headline-md uppercase text-espresso-deep leading-tight">
                SEND US YOUR ENQUIRY
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Tell us a little about yourself and our franchise team will get in touch with you.
              </p>
            </div>

            <form className="flex flex-col gap-space-md" onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                <div className="flex flex-col gap-space-xs">
                  <label
                    className="font-label-md text-label-md uppercase text-espresso-deep tracking-wider flex items-center gap-1"
                    htmlFor="contact-name"
                  >
                    Full Name <span className="text-terracotta-raw font-bold">*</span>
                  </label>
                  <input
                    className="w-full bg-surface px-space-md py-space-sm rounded-lg text-on-surface font-body-md focus:outline-none focus:ring-2 focus:ring-terracotta-raw shadow-[2px_2px_0px_#120B09]"
                    id="contact-name"
                    placeholder="e.g., Rajesh Sharma"
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>

                <div className="flex flex-col gap-space-xs">
                  <label
                    className="font-label-md text-label-md uppercase text-espresso-deep tracking-wider flex items-center gap-1"
                    htmlFor="contact-phone"
                  >
                    Mobile Number (WhatsApp){' '}
                    <span className="text-terracotta-raw font-bold">*</span>
                  </label>
                  <input
                    className="w-full bg-surface px-space-md py-space-sm rounded-lg text-on-surface font-body-md focus:outline-none focus:ring-2 focus:ring-terracotta-raw shadow-[2px_2px_0px_#120B09]"
                    id="contact-phone"
                    placeholder="+91 98765 43210"
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                <div className="flex flex-col gap-space-xs">
                  <label
                    className="font-label-md text-label-md uppercase text-espresso-deep tracking-wider flex items-center gap-1"
                    htmlFor="contact-email"
                  >
                    Email Address <span className="text-terracotta-raw font-bold">*</span>
                  </label>
                  <input
                    className="w-full bg-surface px-space-md py-space-sm rounded-lg text-on-surface font-body-md focus:outline-none focus:ring-2 focus:ring-terracotta-raw shadow-[2px_2px_0px_#120B09]"
                    id="contact-email"
                    placeholder="name@domain.com"
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>

                <div className="flex flex-col gap-space-xs">
                  <label
                    className="font-label-md text-label-md uppercase text-espresso-deep tracking-wider flex items-center gap-1"
                    htmlFor="contact-city"
                  >
                    Proposed City &amp; Pincode{' '}
                    <span className="text-terracotta-raw font-bold">*</span>
                  </label>
                  <input
                    className="w-full bg-surface px-space-md py-space-sm rounded-lg text-on-surface font-body-md focus:outline-none focus:ring-2 focus:ring-terracotta-raw shadow-[2px_2px_0px_#120B09]"
                    id="contact-city"
                    placeholder="e.g., Hyderabad (500001)"
                    required
                    type="text"
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                  />
                </div>
              </div>

              {/* Inquiry Nature Selector */}
              <div className="flex flex-col gap-space-xs">
                <span className="font-label-md text-label-md uppercase text-espresso-deep tracking-wider flex items-center gap-1">
                  Inquiry Category <span className="text-terracotta-raw font-bold">*</span>
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-xs">
                  <label className="flex items-center gap-space-xs p-space-sm bg-surface rounded-lg cursor-pointer shadow-[2px_2px_0px_#120B09] hover:bg-mustard-vibrant/20 transition-colors">
                    <input
                      checked={form.inquiryType === 'franchise'}
                      className="accent-espresso-deep"
                      name="inquiry_type"
                      type="radio"
                      value="franchise"
                      onChange={() => setForm({ ...form, inquiryType: 'franchise' })}
                    />
                    <span className="font-label-md text-label-md uppercase text-espresso-deep">
                      Franchise (₹1.5L)
                    </span>
                  </label>
                  <label className="flex items-center gap-space-xs p-space-sm bg-surface rounded-lg cursor-pointer shadow-[2px_2px_0px_#120B09] hover:bg-mustard-vibrant/20 transition-colors">
                    <input
                      checked={form.inquiryType === 'supply'}
                      className="accent-espresso-deep"
                      name="inquiry_type"
                      type="radio"
                      value="supply"
                      onChange={() => setForm({ ...form, inquiryType: 'supply' })}
                    />
                    <span className="font-label-md text-label-md uppercase text-espresso-deep">
                      Bulk Spices / Supply
                    </span>
                  </label>
                  <label className="flex items-center gap-space-xs p-space-sm bg-surface rounded-lg cursor-pointer shadow-[2px_2px_0px_#120B09] hover:bg-mustard-vibrant/20 transition-colors">
                    <input
                      checked={form.inquiryType === 'general'}
                      className="accent-espresso-deep"
                      name="inquiry_type"
                      type="radio"
                      value="general"
                      onChange={() => setForm({ ...form, inquiryType: 'general' })}
                    />
                    <span className="font-label-md text-label-md uppercase text-espresso-deep">
                      General / Press
                    </span>
                  </label>
                </div>
              </div>

              {/* Message / Commercial Location Details */}
              <div className="flex flex-col gap-space-xs">
                <label
                  className="font-label-md text-label-md uppercase text-espresso-deep tracking-wider flex items-center justify-between gap-2"
                  htmlFor="contact-msg"
                >
                  <span>Location Specifics / Commercial Corner Details</span>
                  <span className="text-on-surface-variant font-normal">Optional</span>
                </label>
                <textarea
                  className="w-full bg-surface px-space-md py-space-sm rounded-lg text-on-surface font-body-md focus:outline-none focus:ring-2 focus:ring-terracotta-raw shadow-[2px_2px_0px_#120B09]"
                  id="contact-msg"
                  placeholder="Tell us if you already have a shop leased, footfall estimates, or questions regarding our ₹1.5L setup equipment..."
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>

              {error && (
                <div
                  role="alert"
                  className="p-3 bg-error-container text-on-error-container font-body-sm text-body-sm rounded border border-error"
                >
                  {error}
                </div>
              )}

              <button
                className="w-full bg-mustard-vibrant hover:bg-secondary-container text-stencil-black font-label-lg text-label-lg uppercase tracking-wider py-space-md px-4 rounded-lg shadow-[4px_4px_0px_#120B09] flex items-center justify-center gap-space-sm hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all mt-space-xs cursor-pointer disabled:opacity-70"
                disabled={submitting}
                type="submit"
              >
                <span>
                  {submitting
                    ? 'DISPATCHING INQUIRY...'
                    : 'SEND ENQUIRY'}
                </span>
                <Icon name="arrow_forward" className="text-[20px]" />
              </button>

              {submitted && (
                <div
                  role="status"
                  className="p-space-md bg-espresso-deep text-plaster-subdued rounded-lg shadow-[3px_3px_0px_#120B09] flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm"
                >
                  <div className="flex items-start gap-space-sm">
                    <Icon name="task_alt" className="text-mustard-vibrant text-[24px] shrink-0" />
                    <div className="flex flex-col">
                      <span className="font-label-lg text-label-lg uppercase text-mustard-vibrant">
                        Inquiry Prepared (Demo Preview)
                      </span>
                      <span className="font-body-sm text-body-sm text-surface-container-high">
                        Tap WhatsApp to send this query directly to +91 9951991223 or call our franchise team.
                      </span>
                    </div>
                  </div>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 bg-mustard-vibrant text-stencil-black font-label-md text-label-md uppercase px-3 py-2 rounded shadow-[2px_2px_0px_#000000]"
                  >
                    Open WhatsApp
                  </a>
                </div>
              )}
            </form>
          </div>

          {/* Right: Franchise package card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-space-md">
            <div className="relative bg-espresso-deep text-surface rounded-xl overflow-hidden shadow-[5px_5px_0px_#120B09] p-space-md sm:p-space-lg flex flex-col justify-between min-h-[460px]">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity"
                style={{
                  backgroundImage:
                    "url('/images/contact/form-backdrop.jpg')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-deep via-espresso-deep/80 to-transparent" />

              {/* Top Overlapping Badges */}
              <div className="relative z-10 flex items-start justify-between gap-2">
                <div className="bg-mustard-vibrant text-stencil-black px-space-sm py-space-xs font-label-md text-label-md uppercase tracking-wider rounded-lg shadow-[2px_2px_0px_#120B09] transform -rotate-3">
                  FRANCHISE PACKAGE
                </div>
                <div className="bg-terracotta-raw text-surface px-space-md py-space-xs rounded-lg shadow-[3px_3px_0px_#120B09] transform rotate-3 text-center">
                  <span className="font-label-md text-label-md uppercase block tracking-widest text-mustard-vibrant">
                    SPECIAL
                  </span>
                  <span className="font-metric-impact text-headline-sm block leading-none">
                    ₹1,50,000/-
                  </span>
                </div>
              </div>

              {/* Center Stamped Value Proposition */}
              <div className="relative z-10 my-auto py-space-md">
                <span className="font-label-md text-label-md uppercase text-tertiary-fixed tracking-widest">
                  WHAT IS INCLUDED
                </span>
                <h3 className="font-headline-lg text-headline-lg uppercase text-mustard-vibrant leading-none mt-space-xs mb-space-sm">
                  A COMPLETE EQUIPMENT PACKAGE.
                </h3>
                <p className="font-body-sm text-body-sm text-surface-container-high leading-relaxed">
                  Branding equipment, kitchen equipment, furniture, raw materials and ingredients, plus business support with menu training, staff training, branding support and marketing guidance.
                </p>
              </div>

              {/* Bottom Voice Call Anchor */}
              <div className="relative z-10 bg-primary-container p-space-md rounded-lg shadow-[2px_2px_0px_#000000] flex flex-col gap-space-xs">
                <div className="flex items-center justify-between">
                  <span className="font-label-md text-label-md uppercase text-surface-dim">
                    Prefer direct voice discussion?
                  </span>
                  <Icon name="verified" className="text-mustard-vibrant text-[18px]" />
                </div>
                <a
                  className="flex items-center gap-space-xs text-mustard-vibrant font-headline-sm text-headline-sm hover:underline"
                  href="tel:+919951991223"
                >
                  <Icon name="call" className="text-[20px]" />
                  <span>+91 9951991223</span>
                </a>
                <span className="font-body-sm text-body-sm text-surface-container-high">
                  Tap above to call our franchise team.
                </span>
              </div>
            </div>

            {/* Micro Location Assurance Decal */}
            <div className="bg-plaster-subdued p-space-md rounded-xl shadow-[3px_3px_0px_#120B09] flex items-center gap-space-md">
              <div className="w-10 h-10 rounded-full bg-terracotta-raw text-surface flex items-center justify-center shrink-0 shadow-[2px_2px_0px_#120B09]">
                <Icon name="pin_drop" className="text-[20px]" />
              </div>
              <div className="flex flex-col">
                <span className="font-label-lg text-label-lg uppercase text-espresso-deep leading-tight">
                  Founder &amp; CEO
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Vadla Vishnumurthy
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
