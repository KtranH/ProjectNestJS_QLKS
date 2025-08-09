// Format tiền tệ VND
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  }).format(amount)
}

// Format ngày tháng
export const formatDate = (date) => {
  return new Intl.DateTimeFormat('vi-VN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).format(new Date(date))
}

// Format thời gian
export const formatDateTime = (date) => {
  return new Intl.DateTimeFormat('vi-VN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  }).format(new Date(date))
}

// Format số điện thoại
export const formatPhone = (phone) => {
  if (!phone) return ''
  const cleaned = phone.replace(/\D/g, '')
  const match = cleaned.match(/^(\d{4})(\d{3})(\d{3})$/)
  if (match) {
    return `${match[1]} ${match[2]} ${match[3]}`
  }
  return phone
}

// Format trạng thái
export const formatStatus = (status) => {
  const statusMap = {
    'available': 'Có sẵn',
    'occupied': 'Đã thuê',
    'maintenance': 'Bảo trì',
    'active': 'Hoạt động',
    'inactive': 'Không hoạt động',
    'pending': 'Chờ xử lý',
    'confirmed': 'Đã xác nhận',
    'cancelled': 'Đã hủy',
    'completed': 'Hoàn thành'
  }
  return statusMap[status] || status
}

// Format loại phòng
export const formatRoomType = (type) => {
  const typeMap = {
    'standard': 'Tiêu chuẩn',
    'deluxe': 'Cao cấp',
    'suite': 'Suite',
    'presidential': 'Tổng thống'
  }
  return typeMap[type] || type
}
