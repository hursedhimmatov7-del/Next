const advantages = [
  ["01", "Coaching that gets you", "Our trainers take time to understand where you’re starting and where you want to go."],
  ["02", "Room to do your thing", "Strength, cardio, mobility, or a little bit of everything. Find your own rhythm."],
  ["03", "Equipment that works", "A considered mix of modern machines and free weights for every kind of session."],
  ["04", "A good place to show up", "A friendly team and welcoming atmosphere make it easier to keep coming back."],
];

export default function AdvantagesPage() {
  return (
    <main className="pt-24">
      <section className="px-6 pb-14 pt-16 sm:px-12 lg:px-20 lg:pb-20 lg:pt-24">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#eaff00]">The GYM24 difference</p>
        <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">A little more support. A lot more progress.</h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-white/55">A great gym should make you feel comfortable, motivated, and ready to get started. We’re here to help with all three.</p>
      </section>
      <section className="grid gap-px border-y border-white/10 bg-white/10 sm:grid-cols-2">
        {advantages.map(([number, title, text]) => <article key={number} className="bg-black px-6 py-9 sm:px-12 sm:py-12 lg:px-20"><span className="text-sm font-bold text-[#eaff00]">{number}</span><h2 className="mt-6 text-2xl font-extrabold">{title}</h2><p className="mt-3 max-w-lg text-sm leading-7 text-white/55">{text}</p></article>)}
      </section>
      <div className="h-[300px] bg-[url('https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1600&q=85')] bg-cover bg-center sm:h-[430px]" />
    </main>
  );
}
