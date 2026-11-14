import { useState, FormEvent } from 'react';
import Icon from '../ui/Icon';

interface FranchiseFormState {
  fullName: string;
  phone: string;
  city: string;
  pincode: string;
  readiness: string;
  locationStatus: string;
}

export default function FranchiseEnquiryForm() {
  const [form, setForm] = useState<FranchiseFormState>({
    fullName: '',
    phone: '',
    city: '',
    pincode: '',
    readiness: 'Ready Immediately (Within 7 Days)',
    locationStatus: 'Already Have Rented/Owned Spot',
  });
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError('');

    const phoneDigits = form.phone.replace(/\D/g, '');
    const pincodeDigits = form.pincode.replace(/\D/g, '');

    if (form.fullName.trim().length < 2) {
      setError('Please enter your full name.');
      return;
    }
    if (phoneDigits.length < 10) {
      setError('Please enter a valid 10-digit mobile or WhatsApp number.');
      return;
    }
    if (form.city.trim().length < 2) {
      setError('Please enter your target city or district.');
      return;
    }
    if (pincodeDigits.length !== 6) {
      setError('Please enter a valid 6-digit Indian pincode.');
      return;
    }

    setSubmitting(true);
    // Placeholder client-side submission handler (no backend endpoint configured)
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 400);
  };

  const whatsappUrl = `https://wa.me/919951991223?text=${encodeURIComponent(
    `Hi, I am applying for the ₹1,50,000 Beard Wala Chai Franchise.\nName: ${form.fullName}\nCity: ${form.city}\nPincode: ${form.pincode}\nCapital: ${form.readiness}\nSpace: ${form.locationStatus}`
  )}`;

  return (
    <section
      className="w-full bg-surface text-on-surface py-space-xl relative"
      id="franchise-form"
    >
      <div className="max-w-[1280px] mx-auto px-margin-mobile lg:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-stretch">
          {/* Left Side: Founder Pitch & Direct Hotline */}
          <div className="lg:col-span-5 bg-espresso-deep text-surface p-space-md sm:p-space-lg rounded-sm shadow-[6px_6px_0px_#120B09] flex flex-col justify-between">
            <div>
              <div className="inline-block bg-terracotta-raw text-surface font-label-md text-label-md px-2.5 py-1 rounded-sm uppercase tracking-wider mb-space-md">
                FRANCHISE ENQUIRIES
              </div>
              <h3 className="font-headline-md text-headline-md uppercase text-mustard-vibrant leading-tight mb-space-sm">
                INTERESTED IN STARTING YOUR OWN TEA BUSINESS?
              </h3>
              <p className="font-body-md text-body-md text-surface-container-high leading-relaxed mb-space-lg">
                Join the Beard Wala Chai franchise network with our Special Franchise Package of ₹1,50,000/-. It includes branding and kitchen equipment, furniture, raw materials, and training and guidance to get you started.
              </p>

              <div className="bg-stencil-black p-space-md rounded-sm mb-space-md shadow-[3px_3px_0px_#000000]">
                <span className="font-label-md text-label-md uppercase text-tertiary-fixed-dim block mb-1">
                  FRANCHISE ENQUIRIES:
                </span>
                <a
                  className="font-headline-sm text-headline-sm text-mustard-vibrant flex items-center gap-2 hover:underline"
                  href="tel:+919951991223"
                >
                  <Icon name="call" className="text-2xl text-terracotta-raw" />
                  <span>+91 9951991223</span>
                </a>
              </div>

              <div className="flex items-center gap-3">
                <img
                  alt="Vadla Vishnumurthy"
                  className="w-12 h-12 shrink-0 rounded-lg object-cover border-2 border-mustard-vibrant"
                  loading="lazy"
                  src="/images/founder-avatar.webp"
                />
                <div>
                  <div className="font-label-lg text-label-lg uppercase text-surface">
                    Vadla Vishnumurthy
                  </div>
                  <div className="font-body-sm text-body-sm text-surface-container-high">
                    Founder &amp; CEO
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Side: High-Voltage Application Form */}
          <div className="lg:col-span-7 bg-plaster-subdued p-space-md sm:p-space-lg rounded-sm shadow-[6px_6px_0px_#120B09]">
            <div className="mb-space-md">
              <span className="font-label-md text-label-md uppercase text-terracotta-raw font-bold tracking-wider">
                OFFICIAL APPLICATION
              </span>
              <h3 className="font-headline-md text-headline-md uppercase text-espresso-deep leading-tight">
                APPLY FOR A FRANCHISE
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Share your details and our franchise team will get in touch about the ₹1,50,000/- package.
              </p>
            </div>

            <form className="space-y-space-md" onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                <div>
                  <label
                    htmlFor="franchise-name"
                    className="block font-label-md text-label-md uppercase text-espresso-deep mb-1"
                  >
                    Full Name <span className="text-terracotta-raw">*</span>
                  </label>
                  <input
                    id="franchise-name"
                    className="w-full bg-surface text-espresso-deep px-4 py-3 rounded-sm font-body-md text-body-md border-2 border-stencil-black focus:border-terracotta-raw focus:outline-none shadow-[2px_2px_0px_#120B09]"
                    placeholder="e.g. Ramesh Reddy"
                    required
                    type="text"
                    value={form.fullName}
                    onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                  />
                </div>
                <div>
                  <label
                    htmlFor="franchise-phone"
                    className="block font-label-md text-label-md uppercase text-espresso-deep mb-1"
                  >
                    Mobile / WhatsApp Number <span className="text-terracotta-raw">*</span>
                  </label>
                  <input
                    id="franchise-phone"
                    className="w-full bg-surface text-espresso-deep px-4 py-3 rounded-sm font-body-md text-body-md border-2 border-stencil-black focus:border-terracotta-raw focus:outline-none shadow-[2px_2px_0px_#120B09]"
                    placeholder="e.g. +91 98765 43210"
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                <div>
                  <label
                    htmlFor="franchise-city"
                    className="block font-label-md text-label-md uppercase text-espresso-deep mb-1"
                  >
                    Target City / District <span className="text-terracotta-raw">*</span>
                  </label>
                  <input
                    id="franchise-city"
                    className="w-full bg-surface text-espresso-deep px-4 py-3 rounded-sm font-body-md text-body-md border-2 border-stencil-black focus:border-terracotta-raw focus:outline-none shadow-[2px_2px_0px_#120B09]"
                    placeholder="e.g. Hyderabad / Warangal"
                    required
                    type="text"
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                  />
                </div>
                <div>
                  <label
                    htmlFor="franchise-pincode"
                    className="block font-label-md text-label-md uppercase text-espresso-deep mb-1"
                  >
                    Target Pincode <span className="text-terracotta-raw">*</span>
                  </label>
                  <input
                    id="franchise-pincode"
                    className="w-full bg-surface text-espresso-deep px-4 py-3 rounded-sm font-body-md text-body-md border-2 border-stencil-black focus:border-terracotta-raw focus:outline-none shadow-[2px_2px_0px_#120B09]"
                    maxLength={6}
                    placeholder="e.g. 500081"
                    required
                    type="text"
                    value={form.pincode}
                    onChange={(e) => setForm({ ...form, pincode: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                <div>
                  <label
                    htmlFor="franchise-readiness"
                    className="block font-label-md text-label-md uppercase text-espresso-deep mb-1"
                  >
                    Capital Readiness (₹1.50 Lakh) <span className="text-terracotta-raw">*</span>
                  </label>
                  <select
                    id="franchise-readiness"
                    className="w-full bg-surface text-espresso-deep px-4 py-3 rounded-sm font-body-md text-body-md border-2 border-stencil-black focus:border-terracotta-raw focus:outline-none shadow-[2px_2px_0px_#120B09]"
                    value={form.readiness}
                    onChange={(e) => setForm({ ...form, readiness: e.target.value })}
                  >
                    <option>Ready Immediately (Within 7 Days)</option>
                    <option>Arranging Within 15 Days</option>
                    <option>Seeking Bank MUDRA Guidance</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="franchise-location"
                    className="block font-label-md text-label-md uppercase text-espresso-deep mb-1"
                  >
                    Location Status <span className="text-terracotta-raw">*</span>
                  </label>
                  <select
                    id="franchise-location"
                    className="w-full bg-surface text-espresso-deep px-4 py-3 rounded-sm font-body-md text-body-md border-2 border-stencil-black focus:border-terracotta-raw focus:outline-none shadow-[2px_2px_0px_#120B09]"
                    value={form.locationStatus}
                    onChange={(e) => setForm({ ...form, locationStatus: e.target.value })}
                  >
                    <option>Already Have Rented/Owned Spot</option>
                    <option>Finalizing Spot in High Footfall Market</option>
                    <option>Need Guidance Finding Spot</option>
                  </select>
                </div>
              </div>

              {error && (
                <div
                  role="alert"
                  className="p-3 bg-error-container text-on-error-container font-body-sm text-body-sm rounded border border-error"
                >
                  {error}
                </div>
              )}

              {/* Submit CTA */}
              <button
                className="w-full bg-mustard-vibrant hover:bg-secondary-container text-stencil-black font-headline-sm text-headline-sm uppercase tracking-wider py-4 px-4 rounded-sm shadow-[4px_4px_0px_#120B09] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 mt-4 cursor-pointer disabled:opacity-70"
                disabled={submitting}
                type="submit"
              >
                <Icon name="verified" className="text-2xl" />
                <span>
                  {submitting
                    ? 'SENDING ENQUIRY...'
                    : 'SUBMIT FRANCHISE ENQUIRY'}
                </span>
              </button>

              {/* Success Alert */}
              {submitted && (
                <div
                  role="status"
                  className="p-space-md bg-stencil-black text-mustard-vibrant rounded-sm text-center space-y-2"
                >
                  <span className="font-label-lg text-label-lg uppercase block">
                    ENQUIRY PREPARED (DEMO PREVIEW)
                  </span>
                  <p className="font-body-sm text-body-sm text-surface">
                    To speak with our franchise team right away, send your details on WhatsApp or call +91 9951991223.
                  </p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 bg-mustard-vibrant text-stencil-black font-label-md text-label-md uppercase px-4 py-2 rounded-sm shadow-[2px_2px_0px_#8E3512]"
                  >
                    <Icon name="chat" className="text-base" />
                    <span>Send Enquiry via WhatsApp</span>
                  </a>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
