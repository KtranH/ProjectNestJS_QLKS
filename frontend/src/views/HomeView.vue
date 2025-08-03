<template>
  <div class="home">
    <div class="hero-section">
      <h1>Chào mừng đến với Hệ thống Quản lý Khách sạn</h1>
      <p>Quản lý hiệu quả phòng, khách và đặt phòng</p>
    </div>
    
    <div class="dashboard-grid">
      <div class="dashboard-card">
        <h3>📋 Tổng quan</h3>
        <div class="stats">
          <div class="stat-item">
            <span class="stat-number">{{ stats.totalRooms }}</span>
            <span class="stat-label">Tổng phòng</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">{{ stats.occupiedRooms }}</span>
            <span class="stat-label">Phòng đã thuê</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">{{ stats.availableRooms }}</span>
            <span class="stat-label">Phòng trống</span>
          </div>
        </div>
      </div>
      
      <div class="dashboard-card">
        <h3>🚀 Chức năng chính</h3>
        <div class="features">
          <router-link to="/rooms" class="feature-link">
            <span>🏠</span>
            <span>Quản lý Phòng</span>
          </router-link>
          <router-link to="/guests" class="feature-link">
            <span>👥</span>
            <span>Quản lý Khách</span>
          </router-link>
          <router-link to="/bookings" class="feature-link">
            <span>📅</span>
            <span>Đặt Phòng</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const stats = ref({
  totalRooms: 0,
  occupiedRooms: 0,
  availableRooms: 0
})

onMounted(() => {
  // Mock data - sẽ được thay thế bằng API call
  stats.value = {
    totalRooms: 50,
    occupiedRooms: 35,
    availableRooms: 15
  }
})
</script>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
}

.hero-section {
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 12px;
}

.hero-section h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.hero-section p {
  font-size: 1.2rem;
  opacity: 0.9;
}

.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

.dashboard-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.dashboard-card h3 {
  margin-bottom: 1.5rem;
  color: #333;
  font-size: 1.3rem;
}

.stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.stat-item {
  text-align: center;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
}

.stat-number {
  display: block;
  font-size: 2rem;
  font-weight: bold;
  color: #667eea;
}

.stat-label {
  display: block;
  margin-top: 0.5rem;
  color: #666;
  font-size: 0.9rem;
}

.features {
  display: grid;
  gap: 1rem;
}

.feature-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  text-decoration: none;
  color: #333;
  transition: all 0.3s ease;
}

.feature-link:hover {
  background: #667eea;
  color: white;
  transform: translateY(-2px);
}

.feature-link span:first-child {
  font-size: 1.5rem;
}
</style> 