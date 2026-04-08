import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
        <div className="text-2xl font-bold text-brand-600">SlotZar 🇿🇦</div>
        <div className="flex items-center gap-4">
          <Link href="/pricing" className="text-gray-600 hover:text-gray-900 text-sm">Pricing</Link>
          <Link href="/login" className="text-gray-600 hover:text-gray-900 text-sm">Login</Link>
          <Link
            href="/signup"
            className="bg-brand-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-brand-700 transition"
          >
            Start Free Trial
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">
        <div className="inline-block bg-green-50 text-brand-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
          🇿🇦 Built for South African Service Businesses
        </div>
        <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
          Take Bookings.<br />
          <span className="text-brand-600">Get Paid Upfront.</span><br />
          Via WhatsApp.
        </h1>
        <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
          SlotZar sends your clients a booking link + payment request on WhatsApp.
          They pay to confirm. No more no-shows. No more chasing invoices.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/signup"
            className="bg-brand-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-brand-700 transition w-full sm:w-auto"
          >
            Start 14-Day Free Trial →
          </Link>
          <p className="text-sm text-gray-400">No credit card required</p>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-gray-50 py-10">
        <p className="text-center text-sm text-gray-400 mb-6">Trusted by service businesses across South Africa</p>
        <div className="flex flex-wrap justify-center gap-6 text-gray-500 text-sm font-medium px-6">
          {['💇 Hair Salons', '✂️ Barbers', '🏋️ Personal Trainers', '📚 Tutors', '💆 Wellness Spas', '🏥 Physios'].map(b => (
            <span key={b} className="bg-white px-4 py-2 rounded-full shadow-sm">{b}</span>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Everything you need to run your bookings</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: '📅', title: 'Online Booking Page', desc: 'Your own branded page at slotzar.co.za/yourname. Clients book 24/7 — no phone calls needed.' },
            { icon: '💬', title: 'WhatsApp Reminders', desc: 'Automated reminders 24h and 1h before. Users report up to 80% fewer no-shows.' },
            { icon: '💳', title: 'Payment at Booking', desc: 'Clients pay via Yoco or PayFast to confirm their slot. No payment = no booking.' },
            { icon: '🧾', title: 'Auto Invoicing', desc: 'Professional invoice with your branding sent automatically after every booking.' },
            { icon: '📆', title: 'Google Calendar Sync', desc: 'Every booking syncs to your calendar instantly. Never double-book again.' },
            { icon: '📢', title: 'Client Broadcasts', desc: 'Fill quiet slots by sending WhatsApp promos to your entire client list in one click.' },
          ].map(f => (
            <div key={f.title} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-gray-50 py-20 px-6" id="pricing">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Simple Pricing in ZAR</h2>
          <p className="text-center text-gray-500 mb-12">Start free. Upgrade when you're ready. No contracts.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Starter', price: 'Free', desc: 'Forever', features: ['5 bookings/month', 'WhatsApp reminders', 'Branded booking page'], cta: 'Get Started Free', highlight: false },
              { name: 'Pro', price: 'R249', desc: '/month — 14-day free trial', features: ['Unlimited bookings', 'Payment collection', 'Auto invoicing', 'Google Calendar sync', 'Client broadcasts'], cta: 'Start Free Trial', highlight: true },
              { name: 'Business', price: 'R549', desc: '/month', features: ['Everything in Pro', 'Multiple staff', 'White-label', 'API access', 'Priority support'], cta: 'Contact Sales', highlight: false },
            ].map(plan => (
              <div key={plan.name} className={`rounded-2xl p-6 ${plan.highlight ? 'bg-brand-600 text-white shadow-xl scale-105' : 'bg-white border border-gray-100 shadow-sm'}`}>
                <h3 className={`font-bold text-lg mb-1 ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
                <div className={`text-3xl font-bold mb-1 ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>{plan.price}</div>
                <p className={`text-sm mb-6 ${plan.highlight ? 'text-green-100' : 'text-gray-400'}`}>{plan.desc}</p>
                <ul className="space-y-2 mb-8">
                  {plan.features.map(f => (
                    <li key={f} className={`text-sm flex items-center gap-2 ${plan.highlight ? 'text-green-50' : 'text-gray-600'}`}>
                      <span>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/signup"
                  className={`block text-center py-2.5 rounded-lg font-medium text-sm transition ${plan.highlight ? 'bg-white text-brand-600 hover:bg-green-50' : 'bg-brand-600 text-white hover:bg-brand-700'}`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 text-sm text-gray-400">
        <p>Made in Cape Town 🇿🇦 · SlotZar · <Link href="/terms" className="underline">Terms</Link> · <Link href="/privacy" className="underline">Privacy</Link></p>
      </footer>
    </main>
  )
}
