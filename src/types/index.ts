export interface Business {
  id: string
  owner_id: string
  name: string
  slug: string
  logo_url?: string
  whatsapp_number: string
  description?: string
  address?: string
  plan: 'free' | 'pro' | 'business'
  trial_ends_at?: string
  created_at: string
}

export interface Service {
  id: string
  business_id: string
  name: string
  description?: string
  duration_minutes: number
  price_zar: number
  is_active: boolean
}

export interface Booking {
  id: string
  business_id: string
  service_id: string
  client_name: string
  client_whatsapp: string
  starts_at: string
  ends_at: string
  status: 'pending_payment' | 'confirmed' | 'cancelled' | 'completed' | 'no_show'
  payment_status: 'unpaid' | 'paid' | 'refunded'
  amount_zar: number
  payment_reference?: string
  notes?: string
  created_at: string
}

export interface Client {
  id: string
  business_id: string
  name: string
  whatsapp_number: string
  total_bookings: number
  total_spent_zar: number
  last_booking_at?: string
  created_at: string
}
