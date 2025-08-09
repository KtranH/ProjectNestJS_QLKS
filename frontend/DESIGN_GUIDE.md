# Hướng dẫn Thiết kế - Giao diện Tối giản Đen Trắng

## Tổng quan
Giao diện đã được cập nhật với thiết kế tối giản đen trắng hiện đại, tập trung vào tính dễ sử dụng và thẩm mỹ tối giản.

## Màu sắc

### Bảng màu chính
- **Đen chính**: `#000000` - Sử dụng cho text chính, buttons, và accent
- **Trắng**: `#ffffff` - Background chính
- **Xám nhạt**: `#f8f9fa` - Background phụ
- **Xám trung bình**: `#6b7280` - Text phụ
- **Xám đậm**: `#374151` - Text quan trọng

### Gradient
- **Background**: `from-gray-50 to-gray-100`
- **Text gradient**: `from-black to-gray-700`

## Typography

### Font
- **Font chính**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800, 900

### Kích thước
- **Heading lớn**: `text-5xl md:text-6xl`
- **Heading vừa**: `text-2xl`
- **Heading nhỏ**: `text-lg`
- **Body text**: `text-base`
- **Text nhỏ**: `text-sm`

## Border Radius

### Bo góc
- **Nhỏ**: `rounded-xl` (0.75rem)
- **Vừa**: `rounded-2xl` (1rem)
- **Lớn**: `rounded-3xl` (1.5rem)

## Shadow

### Độ sâu
- **Nhẹ**: `shadow-soft` - `0 2px 15px rgba(0, 0, 0, 0.08)`
- **Vừa**: `shadow-medium` - `0 4px 25px rgba(0, 0, 0, 0.12)`
- **Mạnh**: `shadow-strong` - `0 8px 40px rgba(0, 0, 0, 0.16)`

## Components

### Button
```vue
<Button 
  variant="primary" 
  size="md" 
  :loading="false"
  :icon="UserIcon"
>
  Nút bấm
</Button>
```

**Variants:**
- `primary`: Đen với hover xám đậm
- `secondary`: Xám nhạt với hover xám vừa
- `outline`: Viền xám với background trắng
- `ghost`: Chỉ text, hover background xám nhạt

**Sizes:**
- `sm`: `px-3 py-2 text-sm rounded-xl`
- `md`: `px-4 py-2.5 text-sm rounded-2xl`
- `lg`: `px-6 py-3 text-base rounded-2xl`

### Input
```vue
<Input 
  v-model="value"
  type="email"
  :icon="MailIcon"
  placeholder="Nhập email"
  required
/>
```

### Card
```vue
<div class="card p-6">
  <!-- Nội dung -->
</div>
```

## Spacing

### Padding
- **Nhỏ**: `p-4` (1rem)
- **Vừa**: `p-6` (1.5rem)
- **Lớn**: `p-8` (2rem)

### Margin
- **Nhỏ**: `space-y-4` (1rem)
- **Vừa**: `space-y-6` (1.5rem)
- **Lớn**: `space-y-8` (2rem)

## Transitions

### Thời gian
- **Nhanh**: `duration-200` (200ms)
- **Vừa**: `duration-300` (300ms)

### Loại
- `transition-all`: Tất cả properties
- `transition-colors`: Chỉ màu sắc
- `transition-shadow`: Chỉ shadow

## Responsive Design

### Breakpoints
- **Mobile**: `< 768px`
- **Tablet**: `768px - 1024px`
- **Desktop**: `> 1024px`

### Grid
- **Mobile**: `grid-cols-1`
- **Tablet**: `grid-cols-2`
- **Desktop**: `grid-cols-3` hoặc `grid-cols-4`

## Accessibility

### Focus States
- **Ring**: `focus:ring-2 focus:ring-black`
- **Offset**: `focus:ring-offset-2`

### Contrast
- **Text chính**: Đen trên trắng (21:1)
- **Text phụ**: Xám đậm trên trắng (7:1)

## Best Practices

### Do's
- ✅ Sử dụng đen làm màu chính cho text và buttons
- ✅ Áp dụng bo góc nhất quán
- ✅ Sử dụng shadow để tạo độ sâu
- ✅ Giữ spacing nhất quán
- ✅ Sử dụng font Inter cho tất cả text

### Don'ts
- ❌ Không sử dụng màu sắc sặc sỡ
- ❌ Không bỏ qua focus states
- ❌ Không sử dụng quá nhiều shadow
- ❌ Không bỏ qua responsive design

## File Structure

```
src/
├── components/
│   ├── Button.vue
│   ├── Input.vue
│   └── LoadingSpinner.vue
├── assets/
│   └── main.css
├── views/
│   ├── LoginView.vue
│   ├── RegisterView.vue
│   └── DashboardView.vue
└── App.vue
```

## Custom CSS Classes

### Utility Classes
- `.card`: Card với shadow và bo góc
- `.card-hover`: Hover effect cho card
- `.input-field`: Input field với style chuẩn
- `.gradient-text`: Text với gradient đen
- `.modern-shadow`: Shadow hiện đại

### Component Classes
- `.primary-btn`: Button chính
- `.secondary-btn`: Button phụ
- `.glass-card`: Card trong suốt
