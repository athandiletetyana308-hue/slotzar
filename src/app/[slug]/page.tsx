import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book an Appointment — SlotZar',
}

export default function BookingPage({ params }: { params: { slug: string } }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-lg mx-auto px-4 py-12">
        {/* Business Header */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6 text-center">
          <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center text-2xl mx-auto mb-3">
            💇
          </div>
          <h1 className="text-xl font-bold text-gray-900">Book an Appointment</h1>
          <p className="text-gray-500 text-sm mt-1">slotzar.co.za/{params.slug}</p>
        </div>

        {/* Services */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Select a Service</h2>
          <div className="space-y-3">
            {[
              { name: 'Haircut', duration: '45 min', price: 'R250' },
              { name: 'Haircut + Wash', duration: '60 min', price: 'R350' },
              { name: 'Colour Treatment', duration: '90 min', price: 'R650' },
            ].map(service => (
              <button
                key={service.name}
                className="w-full flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:border-brand-300 hover:bg-brand-50 transition text-left"
              >
                <div>
                  <div className="font-medium text-gray-900">{service.name}</div>
                  <div className="text-sm text-gray-400">{service.duration}</div>
                </div>
                <div className="font-semibold text-brand-600">{service.price}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Booking Form */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h2 className="font-semibold text-gray-900 mb-4">Your Details</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
              <input
                type="text"
                placeholder="e.g. Thabo Nkosi"
                className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp Number</label>
              <input
                type="tel"
                placeholder="e.g. 082 123 4567"
                className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date & Time</label>
              <input
                type="datetime-local"
                className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-brand-600 text-white py-3 rounded-xl font-semibold hover:bg-brand-700 transition"
            >
              Book & Pay via WhatsApp →
            </button>
            <p className="text-center text-xs text-gray-400">
              You'll receive a payment link on WhatsApp to confirm your booking
            </p>
          </form>
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          Powered by <span className="font-medium text-brand-600">SlotZar 🇿🇦</span>
        </p>
      </div>
    </div>
  )
}
