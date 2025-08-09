<template>
  <div class="min-h-screen bg-white">
    <!-- Header -->
    <Header />

    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-gray-50 to-gray-100 py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center" data-aos="fade-up">
          <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Khám phá
            <span class="bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
              trải nghiệm
            </span>
            tuyệt vời
          </h1>
          <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Đặt phòng khách sạn cao cấp với giá tốt nhất. Trải nghiệm dịch vụ 5 sao tại những điểm đến đẹp nhất.
          </p>
          
          <!-- Search Form -->
          <div class="max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            <div class="bg-white rounded-3xl shadow-soft p-6 border border-gray-100">
              <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div class="relative">
                  <MapPin class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="Điểm đến" 
                    class="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-black focus:border-transparent bg-gray-50 focus:bg-white"
                  />
                </div>
                <div class="relative">
                  <Calendar class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input 
                    type="date" 
                    class="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-black focus:border-transparent bg-gray-50 focus:bg-white"
                  />
                </div>
                <div class="relative">
                  <Calendar class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input 
                    type="date" 
                    class="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-black focus:border-transparent bg-gray-50 focus:bg-white"
                  />
                </div>
                <button class="bg-black text-white py-3 px-6 rounded-2xl hover:bg-gray-800 transition-all flex items-center justify-center shadow-medium hover:shadow-strong">
                  <Search class="w-5 h-5 mr-2" />
                  Tìm kiếm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Rooms -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16" data-aos="fade-up">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Phòng nổi bật</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">Khám phá những phòng đẹp nhất với view tuyệt vời và tiện nghi hiện đại</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Room Card 1 -->
          <div class="bg-white rounded-3xl shadow-soft overflow-hidden hover:shadow-medium transition-all" data-aos="fade-up" data-aos-delay="100">
            <div class="relative h-64 bg-gradient-to-br from-gray-800 to-gray-900">
              <div class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-2xl text-sm font-medium text-gray-900">
                <Star class="w-4 h-4 inline mr-1 text-yellow-500" />
                4.9
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Deluxe Ocean View</h3>
              <p class="text-gray-600 mb-4">Phòng sang trọng với view biển tuyệt đẹp, tiện nghi 5 sao</p>
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-4 text-sm text-gray-500">
                  <span class="flex items-center"><Users class="w-4 h-4 mr-1" /> 2 khách</span>
                  <span class="flex items-center"><Bed class="w-4 h-4 mr-1" /> 1 giường</span>
                </div>
                <div class="text-right">
                  <div class="text-2xl font-bold text-gray-900">2,500,000₫</div>
                  <div class="text-sm text-gray-500">/đêm</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Room Card 2 -->
          <div class="bg-white rounded-3xl shadow-soft overflow-hidden hover:shadow-medium transition-all" data-aos="fade-up" data-aos-delay="200">
            <div class="relative h-64 bg-gradient-to-br from-gray-700 to-gray-800">
              <div class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-2xl text-sm font-medium text-gray-900">
                <Star class="w-4 h-4 inline mr-1 text-yellow-500" />
                4.8
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Executive Suite</h3>
              <p class="text-gray-600 mb-4">Suite cao cấp với không gian rộng rãi và dịch vụ VIP</p>
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-4 text-sm text-gray-500">
                  <span class="flex items-center"><Users class="w-4 h-4 mr-1" /> 4 khách</span>
                  <span class="flex items-center"><Bed class="w-4 h-4 mr-1" /> 2 giường</span>
                </div>
                <div class="text-right">
                  <div class="text-2xl font-bold text-gray-900">4,200,000₫</div>
                  <div class="text-sm text-gray-500">/đêm</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Room Card 3 -->
          <div class="bg-white rounded-3xl shadow-soft overflow-hidden hover:shadow-medium transition-all" data-aos="fade-up" data-aos-delay="300">
            <div class="relative h-64 bg-gradient-to-br from-gray-600 to-gray-700">
              <div class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-2xl text-sm font-medium text-gray-900">
                <Star class="w-4 h-4 inline mr-1 text-yellow-500" />
                4.7
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Garden Villa</h3>
              <p class="text-gray-600 mb-4">Villa riêng biệt với vườn cây xanh mát, không gian yên tĩnh</p>
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-4 text-sm text-gray-500">
                  <span class="flex items-center"><Users class="w-4 h-4 mr-1" /> 6 khách</span>
                  <span class="flex items-center"><Bed class="w-4 h-4 mr-1" /> 3 giường</span>
                </div>
                <div class="text-right">
                  <div class="text-2xl font-bold text-gray-900">6,800,000₫</div>
                  <div class="text-sm text-gray-500">/đêm</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16" data-aos="fade-up">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Dịch vụ của chúng tôi</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">Trải nghiệm dịch vụ 5 sao với những tiện nghi hiện đại</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center" data-aos="fade-up" data-aos-delay="100">
            <div class="w-16 h-16 bg-gray-100 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-soft">
              <Wifi class="w-8 h-8 text-gray-700" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">WiFi miễn phí</h3>
            <p class="text-gray-600">Kết nối internet tốc độ cao</p>
          </div>

          <div class="text-center" data-aos="fade-up" data-aos-delay="200">
            <div class="w-16 h-16 bg-gray-100 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-soft">
              <Utensils class="w-8 h-8 text-gray-700" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Nhà hàng</h3>
            <p class="text-gray-600">Ẩm thực đa dạng, chất lượng</p>
          </div>

          <div class="text-center" data-aos="fade-up" data-aos-delay="300">
            <div class="w-16 h-16 bg-gray-100 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-soft">
              <Car class="w-8 h-8 text-gray-700" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Đưa đón</h3>
            <p class="text-gray-600">Dịch vụ đưa đón sân bay</p>
          </div>

          <div class="text-center" data-aos="fade-up" data-aos-delay="400">
            <div class="w-16 h-16 bg-gray-100 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-soft">
              <Sparkles class="w-8 h-8 text-gray-700" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Spa & Gym</h3>
            <p class="text-gray-600">Thư giãn và rèn luyện sức khỏe</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import AOS from 'aos'
import { 
  Hotel, 
  Search, 
  MapPin, 
  Calendar, 
  Star, 
  Users, 
  Bed, 
  Wifi, 
  Utensils, 
  Car, 
  Sparkles, 
  Phone, 
  Mail 
} from 'lucide-vue-next'

import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'

onMounted(() => {
  AOS.refresh()
})
</script>


