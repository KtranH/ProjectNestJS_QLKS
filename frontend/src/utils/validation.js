// Validation cho email
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Validation cho số điện thoại Việt Nam
export const validatePhone = (phone) => {
  const phoneRegex = /^(0|\+84)(3[2-9]|5[689]|7[06-9]|8[1-689]|9[0-46-9])[0-9]{7}$/
  return phoneRegex.test(phone)
}

// Validation cho CMND/CCCD
export const validateIdCard = (idCard) => {
  const idCardRegex = /^[0-9]{9,12}$/
  return idCardRegex.test(idCard)
}

// Validation cho mật khẩu
export const validatePassword = (password) => {
  // Ít nhất 8 ký tự, có chữ hoa, chữ thường, số và ký tự đặc biệt
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
  return passwordRegex.test(password)
}

// Validation cho ngày tháng
export const validateDate = (date) => {
  const dateObj = new Date(date)
  return dateObj instanceof Date && !isNaN(dateObj)
}

// Validation cho số tiền
export const validateAmount = (amount) => {
  return !isNaN(amount) && amount > 0
}

// Validation cho tên
export const validateName = (name) => {
  return name && name.trim().length >= 2
}

// Validation cho địa chỉ
export const validateAddress = (address) => {
  return address && address.trim().length >= 10
}

// Validation cho mã phòng
export const validateRoomNumber = (roomNumber) => {
  const roomNumberRegex = /^[0-9]{3,4}$/
  return roomNumberRegex.test(roomNumber)
}

// Validation cho giá phòng
export const validateRoomPrice = (price) => {
  return !isNaN(price) && price >= 100000 && price <= 10000000
}
