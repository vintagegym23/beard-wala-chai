import Icon from '../ui/Icon';

const INK = '#2a1810';
const PAINT = '#f5b317';

// Deterministic jagged outline so the torn edge and sticker look hand-cut but stay stable between renders.
function jitter(i: number) {
  const x = Math.sin(i * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

// Torn paper: a slow wave (smoothly interpolated) plus fine fibre-like noise.
function tornEdgePath(width: number, base: number, amp: number, seed: number) {
  const wave = (x: number) => {
    const i = Math.floor(x / 120);
    const t = (x % 120) / 120;
    const s = t * t * (3 - 2 * t);
    return jitter(i + seed) * (1 - s) + jitter(i + 1 + seed) * s;
  };
  let d = `M0 ${base}`;
  for (let x = 0, i = 0; x <= width; x += 5, i++) {
    const y = base - wave(x) * amp - jitter(i * 3 + seed) * amp * 0.28;
    d += ` L${x} ${y.toFixed(1)}`;
  }
  return `${d} L${width} 120 L0 120 Z`;
}

const PAPER_EDGE = tornEdgePath(1600, 78, 46, 3);
const INK_EDGE = tornEdgePath(1600, 98, 40, 41);

export default function HomeHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#e9dcc9] flex flex-col xl:block" style={{ color: INK }}>
      {/* Blurred copy fills the space left of the photo on wide screens */}
      <img
        src="/images/home/hero-cafe-scene-960.webp"
        alt=""
        aria-hidden="true"
        className="hidden xl:block absolute inset-0 w-full h-full object-cover scale-110 blur-2xl"
      />
      {/* Full photo: in-flow on mobile, fitted (not cropped) background from xl */}
      <img
        src="/images/home/hero-cafe-scene.webp"
        srcSet="/images/home/hero-cafe-scene-960.webp 960w, /images/home/hero-cafe-scene.webp 1672w"
        sizes="100vw"
        alt="Painted mural of a bearded man in a hat and sunglasses behind a steaming glass of Beard Wala Chai on a wooden table"
        fetchPriority="high"
        className="order-last block w-full aspect-[1672/941] object-cover xl:absolute xl:top-0 xl:right-0 xl:h-full xl:w-auto xl:max-w-none xl:[mask-image:linear-gradient(to_right,transparent,black_12%)]"
      />
      {/* Soft wash behind the copy so text stays readable over the wall texture */}
      <div className="hidden xl:block absolute inset-y-0 left-0 w-[55%] bg-gradient-to-r from-[#efe3d1]/70 via-[#efe3d1]/30 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-margin-mobile md:px-margin pt-10 pb-8 xl:pt-12 xl:pb-36 xl:h-[calc(100svh-5rem)] xl:min-h-[560px] xl:max-h-[860px] xl:flex xl:flex-col xl:justify-center">
        <div className="max-w-xl xl:ml-[4%]">
          {/* Headline */}
          <div className="relative w-fit">
            <h1 className="font-marker uppercase leading-[0.9] -rotate-[4deg] pt-4">
              <span className="block text-[3.6rem] sm:text-[5rem] lg:text-[4.6rem] 2xl:text-[5.6rem]">Chai</span>
              <span className="block text-[2.2rem] sm:text-[3rem] lg:text-[2.8rem] 2xl:text-[3.4rem] pl-[18%] -mt-1">with</span>
              <span className="relative block text-[3.6rem] sm:text-[5rem] lg:text-[4.6rem] 2xl:text-[5.6rem] -mt-1">
                Character
                <svg
                  aria-hidden="true"
                  viewBox="0 0 400 30"
                  preserveAspectRatio="none"
                  className="absolute left-[8%] -bottom-3 w-[92%] h-4 sm:h-6"
                  fill={PAINT}
                >
                  <path d="M2 18 C80 6 200 4 398 2 C300 14 170 18 40 28 C20 29 4 26 2 18 Z" />
                </svg>
              </span>
            </h1>
          </div>

          <p className="mt-8 sm:mt-10 font-body-md text-lg sm:text-xl leading-snug font-medium xl:pl-[16%]">
            A Unique Tea &amp; Beverage Brand
            <br />
            Now Open for Franchise Across India
          </p>

          {/* drop-shadow sits on the wrapper because clip-path would cut off a box-shadow */}
          <div className="mt-8 xl:pl-[2%] cta-glow">
            <a
              href="#franchise-package"
              className="group relative overflow-hidden inline-flex w-full sm:w-auto items-center justify-center gap-2.5 px-8 sm:px-10 py-4 font-body-md text-base sm:text-lg font-extrabold uppercase tracking-wide [clip-path:polygon(1%_10%,99%_0,100%_88%,0.5%_100%)] transition-transform hover:-translate-y-1 hover:scale-[1.02]"
              style={{ backgroundColor: PAINT, color: INK }}
            >
              <span aria-hidden="true" className="cta-shine" />
              <span className="relative">Start Your Franchise</span>
              <Icon name="arrow_forward" className="relative text-xl cta-nudge" />
            </a>
          </div>
        </div>
      </div>

      {/* Torn paper edge */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1600 120"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 w-full h-8 sm:h-14 lg:h-24 z-10 pointer-events-none"
      >
        <path d={PAPER_EDGE} fill="#f3e7d4" />
        <path d={INK_EDGE} fill={INK} />
      </svg>
    </section>
  );
}
