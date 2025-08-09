import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

// Store cho quản lý phòng
export const useRoomStore = defineStore('room', () => {
  const rooms = ref([])
  const isLoading = ref(false)
  const error = ref(null)

  const availableRooms = computed(() => 
    rooms.value.filter(room => room.status === 'available')
  )

  const fetchRooms = async () => {
    isLoading.value = true
    error.value = null
    try {
      // Mock data - sẽ được thay thế bằng API call
      rooms.value = [
        { id: 1, number: '101', type: 'Standard', status: 'available', price: 500000 },
        { id: 2, number: '102', type: 'Deluxe', status: 'occupied', price: 800000 },
        { id: 3, number: '103', type: 'Suite', status: 'available', price: 1200000 }
      ]
    } catch (err) {
      error.value = 'Không thể tải danh sách phòng'
    } finally {
      isLoading.value = false
    }
  }

  return {
    rooms,
    isLoading,
    error,
    availableRooms,
    fetchRooms
  }
})

// Store cho quản lý khách
export const useGuestStore = defineStore('guest', () => {
  const guests = ref([])
  const isLoading = ref(false)
  const error = ref(null)

  const activeGuests = computed(() => 
    guests.value.filter(guest => guest.status === 'active')
  )

  const fetchGuests = async () => {
    isLoading.value = true
    error.value = null
    try {
      // Mock data - sẽ được thay thế bằng API call
      guests.value = [
        { id: 1, name: 'Nguyễn Văn A', phone: '0123456789', email: 'a@example.com', status: 'active' },
        { id: 2, name: 'Trần Thị B', phone: '0987654321', email: 'b@example.com', status: 'active' }
      ]
    } catch (err) {
      error.value = 'Không thể tải danh sách khách'
    } finally {
      isLoading.value = false
    }
  }

  return {
    guests,
    isLoading,
    error,
    activeGuests,
    fetchGuests
  }
})

// Store cho quản lý đặt phòng
export const useBookingStore = defineStore('booking', () => {
  const bookings = ref([])
  const isLoading = ref(false)
  const error = ref(null)

  const activeBookings = computed(() => 
    bookings.value.filter(booking => booking.status === 'active')
  )

  const fetchBookings = async () => {
    isLoading.value = true
    error.value = null
    try {
      // Mock data - sẽ được thay thế bằng API call
      bookings.value = [
        { 
          id: 1, 
          guestId: 1, 
          roomId: 1, 
          checkIn: '2024-01-15', 
          checkOut: '2024-01-17', 
          status: 'active',
          totalAmount: 1000000
        }
      ]
    } catch (err) {
      error.value = 'Không thể tải danh sách đặt phòng'
    } finally {
      isLoading.value = false
    }
  }

  return {
    bookings,
    isLoading,
    error,
    activeBookings,
    fetchBookings
  }
})
