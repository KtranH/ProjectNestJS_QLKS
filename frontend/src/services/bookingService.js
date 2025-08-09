import api from './api'

export const bookingService = {
  // Lấy danh sách tất cả đặt phòng
  async getAll() {
    return await api.get('/bookings')
  },

  // Lấy thông tin đặt phòng theo ID
  async getById(id) {
    return await api.get(`/bookings/${id}`)
  },

  // Tạo đặt phòng mới
  async create(bookingData) {
    return await api.post('/bookings', bookingData)
  },

  // Cập nhật thông tin đặt phòng
  async update(id, bookingData) {
    return await api.put(`/bookings/${id}`, bookingData)
  },

  // Xóa đặt phòng
  async delete(id) {
    return await api.delete(`/bookings/${id}`)
  },

  // Check-in
  async checkIn(id) {
    return await api.post(`/bookings/${id}/checkin`)
  },

  // Check-out
  async checkOut(id) {
    return await api.post(`/bookings/${id}/checkout`)
  },

  // Lấy đặt phòng theo ngày
  async getByDate(date) {
    return await api.get('/bookings/by-date', { params: { date } })
  },

  // Lấy đặt phòng theo trạng thái
  async getByStatus(status) {
    return await api.get('/bookings/by-status', { params: { status } })
  }
}
