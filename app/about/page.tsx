export default function AboutPage() {
  return (
    <main className="pt-24">
      <section className="grid lg:min-h-[580px] lg:grid-cols-2">
        <div className="flex flex-col justify-center px-6 py-16 sm:px-12 lg:px-20 lg:py-24"><p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#eaff00]">A gym for real life</p><h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">Stronger feels good.</h1><p className="mt-6 max-w-xl text-base leading-7 text-white/55">GYM24 is a place to move at your own pace, learn something new, and feel proud of the work you put in. No pressure to be anyone but yourself.</p><p className="mt-4 max-w-xl text-base leading-7 text-white/55">From your first visit to your hundredth workout, our coaches and community are here to help you feel at home.</p></div>
        <div className="min-h-[340px] bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85')] bg-cover bg-center sm:min-h-[450px] lg:min-h-full" />
      </section>
      <section className="border-t border-white/10 px-6 py-16 sm:px-12 lg:px-20 lg:py-20"><p className="text-xs font-bold uppercase tracking-[0.3em] text-[#eaff00]">Our approach</p><h2 className="mt-4 max-w-2xl text-3xl font-extrabold leading-tight sm:text-4xl">Good training should fit into your life, not take it over.</h2><p className="mt-5 max-w-2xl text-sm leading-7 text-white/55">That’s why we focus on helpful coaching, quality equipment, and a positive space where everyone can get stronger in their own way.</p></section>
    </main>
  );
}
