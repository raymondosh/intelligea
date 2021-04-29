<template>
  <div>
    <header>
      <search-input
        v-model="searchTerm"
        @search="search"
        type="text"
        placeholder="Find Something..."
      ></search-input>

      <!-- menuicon. This shold handle the opening of the drawer -->
      <!-- <div class="menuicon image-frame">
      <img src="../../assets/icons/menuicon.png" alt="" />
    </div> -->

      <!-- notification -->
      <main-notification></main-notification>

      <!-- profile icon-->
      <profile-icon></profile-icon>
    </header>

    <sidebar></sidebar>

    <main>
      <main-filter></main-filter>
      <section class="galleries-container">
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

import api from '../api'

export default {
  name: 'Home',
  components: {
    Sidebar,
    ProfileIcon,
    SearchInput,
    MainFilter,
    ImageCard,
    MainNotification
  },
  data () {
    return {
      searchTerm: '',
      images: ''
    }
  },
  methods: {
    search () {
      console.log(this.searchTerm)
    },
    async getPhotos () {
      try {
        const res = await api.getPhotos()
        if (!res) return false
        this.images = res
      } catch (error) {
        console.log(error)
      }
    }
  },
  mounted () {
    this.getPhotos()
  }
}
</script>
