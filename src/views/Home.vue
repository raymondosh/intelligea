<template>
  <div>
    <header>
      <search-input
        v-model="searchTerm"
        @search="searchPhoto"
        :disable="loading"
        type="text"
        placeholder="Find Something..."
      ></search-input>

      <!-- menuicon. This shold handle the opening of the drawer -->
      <div @click="toggleSidebar" class="menuicon image-frame">
        <img src="../assets/icons/menuicon.png" alt="Hamburger menu" />
      </div>

      <!-- notification -->
      <main-notification></main-notification>

      <!-- profile icon-->
      <profile-icon></profile-icon>
    </header>

    <sidebar :isSidebar="isSidebar"></sidebar>

    <main>
      <main-filter></main-filter>

      <preloader v-if="loading"></preloader>

      <section v-else class="galleries-container">
        <div class="galleries">
          <image-card
            v-for="(image, index) in images"
            :key="index"
            :image="image"
          ></image-card>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import Sidebar from '@/components/layout/Sidebar'
import MainFilter from '@/components/filter/MainFilter'
import ImageCard from '@/components/card/ImageCard'
import SearchInput from '@/components/input/SearchInput'
import MainNotification from '../components/notification/MainNotification.vue'
import ProfileIcon from '../components/profile/ProfileIcon.vue'
import Preloader from '@/components/preloader/Preloader'

import api from '../api'

export default {
  name: 'Home',
  components: {
    Sidebar,
    ProfileIcon,
    SearchInput,
    MainFilter,
    ImageCard,
    MainNotification,
    Preloader
  },
  data () {
    return {
      searchTerm: '',
      images: '',
      loading: false,
      isSidebar: true
    }
  },
  methods: {
    toggleSidebar () {
      this.isSidebar = !this.isSidebar
    },
    async getPhotos () {
      try {
        this.loading = true
        const res = await api.getPhotos()
        if (!res) return false
        this.loading = false
        this.images = res
      } catch (error) {
        this.loading = false
        console.log(error)
      }
    },
    async searchPhoto () {
      try {
        this.loading = true
        const res = await api.searchPhoto(this.searchTerm)
        if (!res) return false
        this.images = res.results
        this.loading = false
        this.searchTerm = ''
      } catch (error) {
        this.loading = false
        console.log(error)
      }
    }
  },
  mounted () {
    this.getPhotos()
  }
}
</script>
