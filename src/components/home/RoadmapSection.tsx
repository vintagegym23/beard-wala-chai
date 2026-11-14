const ROADMAP_STEPS = [
  {
    num: '1',
    bgNum: '01',
    title: 'Enquire',
    description:
      'Call or WhatsApp our franchise team on +91 9951991223 and tell us about your plans.',
    highlight: false,
  },
  {
    num: '2',
    bgNum: '02',
    title: 'Book Your Package',
    description:
      'Confirm the Special Franchise Package of ₹1,50,000/- with branding, kitchen equipment, furniture and raw materials.',
    highlight: false,
  },
  {
    num: '3',
    bgNum: '03',
    title: 'Menu & Staff Training',
    description:
      'We train you and your staff on the Beard Wala Chai menu, with business guidance along the way.',
    highlight: false,
  },
  {
    num: '4',
    bgNum: '04',
    title: 'Open Your Outlet',
    description:
      'Start serving with our branding support and marketing guidance behind you.',
    highlight: true,
  },
];

export default function RoadmapSection() {
  return (
    <section className="w-full py-space-xl bg-surface text-stencil-black">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin space-y-space-xl">
        <div className="text-center max-w-2xl mx-auto">
          <span className="font-label-md text-label-md uppercase text-terracotta-raw tracking-widest block mb-space-xs">
            How It Works
          </span>
          <h2 className="font-headline-lg text-headline-lg uppercase tracking-tight text-stencil-black">
            YOUR PATH TO A BEARD WALA CHAI OUTLET
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {ROADMAP_STEPS.map((step) => (
            <div
              key={step.bgNum}
              className="bg-surface-container p-space-md rounded-xl shadow-[4px_4px_0px_#120B09] relative"
            >
              <span className="font-metric-impact text-display text-stencil-black/15 absolute top-2 right-4 pointer-events-none">
                {step.bgNum}
              </span>
              <span
                className={`w-10 h-10 rounded-full flex items-center justify-center font-headline-sm text-headline-sm mb-space-md ${
                  step.highlight
                    ? 'bg-mustard-vibrant text-stencil-black'
                    : 'bg-stencil-black text-mustard-vibrant'
                }`}
              >
                {step.num}
              </span>
              <h3 className="font-title-stencil text-title-stencil uppercase mb-1">
                {step.title}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
