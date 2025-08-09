import api from './api'

export const guestService = {
  // Lấy danh sách tất cả khách
  async getAll() {
    return await api.get('/guests')
  },

  // Lấy thông tin khách theo ID
  async getById(id) {
    return await api.get(`/guests/${id}`)
  },

  // Tạo khách mới
  async create(guestData) {
    return await api.post('/guests', guestData)
  },

  // Cập nhật thông tin khách
  async update(id, guestData) {
    return await api.put(`/guests/${id}`, guestData)
  },

  // Xóa khách
  async delete(id) {
    return await api.delete(`/guests/${id}`)
  },

  // Tìm kiếm khách
  async search(query) {
    return await api.get('/guests/search', { params: query })
  },

  // Lấy lịch sử đặt phòng của khách
  async getBookingHistory(id) {
    return await api.get(`/guests/${id}/bookings`)
  }
}
