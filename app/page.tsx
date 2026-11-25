import Link from "next/link";

const reasons = [
  ["01", "Train with a plan", "Personal training plans built around your goals, pace, and experience."],
  ["02", "Everything you need", "Modern strength and cardio equipment, ready whenever you are."],
  ["03", "A team that knows you", "Friendly coaches keep you moving and help you make real progress."],
  ["04", "Your time, your gym", "Early mornings, late evenings, or a quick session in between."],
];

const plans = [
  { name: "START", price: "29", features: ["Gym access", "Locker room", "Getting started session"] },
  { name: "PLUS", price: "49", features: ["All START benefits", "Group classes", "Monthly coach check-in"], featured: true },
  { name: "UNLIMITED", price: "69", features: ["All PLUS benefits", "Anytime access", "Bring a friend"] },
];

const trainers = [
  { name: "MAYA REED", focus: "Strength & conditioning", image: "photo-1534528741775-53994a69daeb" },
  { name: "JORDAN LEE", focus: "Personal training", image: "photo-1500648767791-00dcc994a43e" },
  { name: "ALEX MORGAN", focus: "Functional fitness", image: "photo-1506794778202-cad84cf45f1d" },
  { name: "SAM TAYLOR", focus: "Mobility & recovery", image: "photo-1531123897727-8f129e1688ce" },
];

export default function Home() {
  return (
    <main>
      <section id="top" className="relative flex min-h-[620px] items-center overflow-hidden border-b border-white/10 px-6 sm:min-h-[720px] sm:px-12 lg:min-h-[780px] lg:px-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=2000&q=85')] bg-cover bg-[center_38%] opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/10" />
        <div className="relative z-10 max-w-2xl py-28">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.35em] text-[#eaff00]">Train strong. Live better.</p>
          <h1 className="text-5xl font-extrabold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">Free trial session <span className="text-[#eaff00]">with a trainer</span></h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-white/65 sm:text-lg">Meet your coach, explore the gym, and find the training that feels right for you.</p>
          <Link href="/membership" className="mt-9 inline-flex rounded-full bg-[#eaff00] px-8 py-3.5 text-sm font-extrabold text-black transition hover:bg-white">Book your free session <span aria-hidden="true" className="ml-3"></span></Link>
        </div>
        <div className="absolute bottom-8 right-8 hidden text-xs font-semibold uppercase tracking-[0.25em] text-white/50 md:block">01 / 04</div>
      </section>

      <section className="px-6 py-24 sm:px-12 lg:px-20 lg:py-32">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div><p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#eaff00]">A better kind of gym</p><h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Reasons to join</h2></div>
          <span className="hidden text-sm text-white/40 sm:block">BUILT AROUND YOU</span>
        </div>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
          {reasons.map(([number, title, description]) => <article key={number} className="bg-[#111] p-7 sm:p-9"><span className="text-sm font-bold text-[#eaff00]">{number}</span><h3 className="mt-7 text-xl font-bold">{title}</h3><p className="mt-3 max-w-sm text-sm leading-6 text-white/55">{description}</p></article>)}
        </div>
      </section>

      <section className="bg-[#0b0b0b] px-6 py-24 sm:px-12 lg:px-20 lg:py-28">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-5"><div><p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#eaff00]">Simple plans. Serious results.</p><h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Gym membership</h2></div><Link href="/membership" className="text-sm font-bold text-[#eaff00] hover:text-white">Explore all plans </Link></div>
        <div className="grid gap-4 md:grid-cols-3">
          {plans.map(plan => <article key={plan.name} className={`rounded-2xl border p-7 ${plan.featured ? "border-[#eaff00] bg-[#eaff00] text-black" : "border-white/10 bg-[#161616]"}`}>
            <p className={`text-xs font-extrabold tracking-[0.25em] ${plan.featured ? "text-black/60" : "text-[#eaff00]"}`}>{plan.name}</p><p className="mt-6 text-4xl font-extrabold">${plan.price}<span className={`ml-1 text-sm font-medium ${plan.featured ? "text-black/60" : "text-white/45"}`}>/ month</span></p>
            <ul className={`mt-7 space-y-3 border-t pt-6 text-sm ${plan.featured ? "border-black/15 text-black/75" : "border-white/10 text-white/65"}`}>{plan.features.map(feature => <li key={feature}><span className="mr-2 font-bold">✓</span>{feature}</li>)}</ul>
            <Link href="/membership" className={`mt-8 inline-flex rounded-full px-6 py-3 text-sm font-extrabold ${plan.featured ? "bg-black text-white hover:bg-white hover:text-black" : "bg-white/10 text-white hover:bg-[#eaff00] hover:text-black"}`}>Choose plan ↗</Link>
          </article>)}
        </div>
      </section>

      <section className="grid lg:grid-cols-2">
        <div className="flex flex-col justify-center px-6 py-20 sm:px-12 lg:px-20 lg:py-28"><p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#eaff00]">More than a workout</p><h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">A place to get stronger.</h2><p className="mt-6 max-w-xl text-sm leading-7 text-white/60 sm:text-base">We built a welcoming space for people who want to move more, feel better, and enjoy the process. Come as you are; we’ll help you take the next step.</p><Link href="/about" className="mt-8 w-fit text-sm font-bold text-[#eaff00] hover:text-white">Get to know us ↗</Link></div>
        <div className="min-h-[350px] bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85')] bg-cover bg-center sm:min-h-[450px]" />
      </section>

      <section className="px-6 py-24 sm:px-12 lg:px-20 lg:py-28">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-5"><div><p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#eaff00]">Good people. Great coaching.</p><h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Meet your trainers</h2></div><Link href="/about" className="text-sm font-bold text-[#eaff00] hover:text-white">Meet the team </Link></div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-5">{trainers.map(trainer => <article key={trainer.name} className="overflow-hidden rounded-xl border border-white/10 bg-[#141414]"><div className="aspect-[4/5] bg-cover bg-center" style={{ backgroundImage: `url(https://images.unsplash.com/${trainer.image}?auto=format&fit=crop&w=600&q=80)` }} /><div className="p-4 sm:p-5"><h3 className="text-xs font-extrabold tracking-wide sm:text-sm">{trainer.name}</h3><p className="mt-2 text-[11px] text-white/45 sm:text-xs">{trainer.focus}</p></div></article>)}</div>
      </section>
    </main>
  );
}
