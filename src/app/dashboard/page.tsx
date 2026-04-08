'use client'
import Link from 'next/link'

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="flex">
        <aside className="w-60 bg-white border-r border-gray-100 min-h-screen p-6 fixed">
          <div className="text-xl font-bold text-brand-600 mb-8">SlotZar 🇿🇦</div>
          <nav className="space-y-1">
            {[
              { href: '/dashboard', label: '📊 Overview' },
              { href: '/dashboard/bookings', label: '📅 Bookings' },
              { href: '/dashboard/services', label: '🛠️ Services' },
              { href: '/dashboard/clients', label: '👥 Clients' },
              { href: '/dashboard/settings', label: '⚙️ Settings' },
            ].map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="ml-60 flex-1 p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Good morning! 👋</h1>
            <p className="text-gray-500 mb-8">Here's what's happening with your bookings today.</p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                { label: "Today's Bookings", value: '0', icon: '📅', color: 'bg-blue-50 text-blue-600' },
                { label: 'Revenue This Month', value: 'R0', icon: '💰', color: 'bg-green-50 text-green-600' },
                { label: 'No-shows Prevented', value: '0', icon: '🚫', color: 'bg-orange-50 text-orange-600' },
              ].map(stat => (
                <div key={stat.label} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${stat.color} mb-3`}>
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
              <h2 className="font-semibold text-gray-900 mb-4">Quick Actions</h2>
              <div className="flex flex-wrap gap-3">
                <Link href="/dashboard/services" className="bg-brand-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-brand-700 transition">
                  + Add Service
                </Link>
                <Link href="/dashboard/bookings" className="border border-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition">
                  View Bookings
                </Link>
                <button className="border border-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition">
                  📢 Send Broadcast
                </button>
              </div>
            </div>

            {/* Setup Checklist */}
            <div className="bg-brand-50 rounded-2xl border border-brand-100 p-6">
              <h2 className="font-semibold text-brand-900 mb-4">🚀 Get Started — Setup Checklist</h2>
              <ul className="space-y-3">
                {[
                  { done: false, text: 'Complete your business profile' },
                  { done: false, text: 'Add your first service + price' },
                  { done: false, text: 'Share your booking link with clients' },
                  { done: false, text: 'Connect WhatsApp for reminders' },
                  { done: false, text: 'Set up payment collection (Yoco)' },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <span className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${item.done ? 'bg-brand-600 border-brand-600 text-white' : 'border-gray-300'}`}>
                      {item.done && '✓'}
                    </span>
                    <span className={item.done ? 'line-through text-gray-400' : 'text-gray-700'}>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
