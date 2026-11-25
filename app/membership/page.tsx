import Link from "next/link";

const plans = [
  { name: "START", price: "29", description: "A great place to begin.", items: ["Gym access", "Locker room", "Getting started session"] },
  { name: "PLUS", price: "49", description: "A little more in every session.", items: ["All START benefits", "Group classes", "Monthly coach check-in"], featured: true },
  { name: "UNLIMITED", price: "69", description: "Your training, without limits.", items: ["All PLUS benefits", "Anytime access", "Bring a friend"] },
];

export default function MembershipPage() {
  return (
    <main className="px-6 pb-20 pt-36 sm:px-12 sm:pb-28 lg:px-20">
      <section className="mb-12 max-w-3xl sm:mb-16"><p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#eaff00]">Choose your membership</p><h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">Make room for your goals.</h1><p className="mt-6 max-w-2xl text-base leading-7 text-white/55">Straightforward memberships with the space, equipment, and support you need to get moving.</p></section>
      <section className="grid gap-4 md:grid-cols-3">
        {plans.map(plan => <article key={plan.name} className={`rounded-2xl border p-7 sm:p-8 ${plan.featured ? "border-[#eaff00] bg-[#eaff00] text-black" : "border-white/10 bg-[#141414]"}`}>
          <p className={`text-xs font-extrabold tracking-[0.25em] ${plan.featured ? "text-black/60" : "text-[#eaff00]"}`}>{plan.name}</p><p className="mt-5 text-4xl font-extrabold">${plan.price}<span className={`ml-1 text-sm font-medium ${plan.featured ? "text-black/60" : "text-white/45"}`}>/ month</span></p><p className={`mt-3 text-sm ${plan.featured ? "text-black/65" : "text-white/50"}`}>{plan.description}</p>
          <ul className={`mt-7 space-y-3 border-t pt-6 text-sm ${plan.featured ? "border-black/15 text-black/75" : "border-white/10 text-white/65"}`}>{plan.items.map(item => <li key={item}><span className="mr-2 font-bold">✓</span>{item}</li>)}</ul>
          <Link href="/#top" className={`mt-8 inline-flex rounded-full px-6 py-3 text-sm font-extrabold ${plan.featured ? "bg-black text-white hover:bg-white hover:text-black" : "bg-white/10 text-white hover:bg-[#eaff00] hover:text-black"}`}>Get started ↗</Link>
        </article>)}
      </section>
      <p className="mt-8 text-sm text-white/40">Not sure which plan is right? Stop by for a free trial session and we’ll help you choose.</p>
    </main>
  );
}
