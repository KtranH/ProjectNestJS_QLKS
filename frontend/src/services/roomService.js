import api from './api'

export const roomService = {
  // Lấy danh sách tất cả phòng
  async getAll() {
    return await api.get('/rooms')
  },

  // Lấy thông tin phòng theo ID
  async getById(id) {
    return await api.get(`/rooms/${id}`)
  },

  // Tạo phòng mới
  async create(roomData) {
    return await api.post('/rooms', roomData)
  },

  // Cập nhật thông tin phòng
  async update(id, roomData) {
    return await api.put(`/rooms/${id}`, roomData)
  },

  // Xóa phòng
  async delete(id) {
    return await api.delete(`/rooms/${id}`)
  },

  // Lấy danh sách phòng trống
  async getAvailable() {
    return await api.get('/rooms/available')
  },

  // Cập nhật trạng thái phòng
  async updateStatus(id, status) {
    return await api.patch(`/rooms/${id}/status`, { status })
  }
}
