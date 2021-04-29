<template>
  <div>
    <navbar></navbar>
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
import Navbar from '@/components/layout/Navbar'
import MainFilter from '@/components/filter/MainFilter'
import ImageCard from '@/components/card/ImageCard'

import api from '../api'

export default {
  name: 'Home',
  components: {
    Sidebar,
    Navbar,
    MainFilter,
    ImageCard
  },
  data () {
    return {
      // searchTerm: ''
      images: ''
      // images: [
      //   {
      //     age: 28,
      //     location: 'Abuja',
      //     name: 'Emmanuel',
      //     image: 'boy.png'
      //   },
      //   {
      //     age: 28,
      //     location: 'Abuja',
      //     name: 'Emmanuel',
      //     image: 'boy.png'
      //   },
      //   {
      //     age: 28,
      //     location: 'Abuja',
      //     name: 'Emmanuel',
      //     image: 'boy.png'
      //   },
      //   {
      //     age: 28,
      //     location: 'Abuja',
      //     name: 'Emmanuel',
      //     image: 'boy.png'
      //   },
      //   {
      //     age: 28,
      //     location: 'Abuja',
      //     name: 'Emmanuel',
      //     image: 'boy.png'
      //   },
      //   {
      //     age: 28,
      //     location: 'Abuja',
      //     name: 'Emmanuel',
      //     image: 'boy.png'
      //   },
      //   {
      //     age: 28,
      //     location: 'Abuja',
      //     name: 'Emmanuel',
      //     image: 'boy.png'
      //   },
      //   {
      //     age: 28,
      //     location: 'Abuja',
      //     name: 'Emmanuel',
      //     image: 'boy.png'
      //   }
      // ]
    }
  },
  methods: {
    // search () {
    //   console.log(this.searchTerm)
    // },
    async getPhotos () {
      try {
        const res = await api.getPhotos()
        console.log(res[0])
        this.images = res
      } catch (error) {
        // console.log(error)
      }
    }
  },
  mounted () {
    this.getPhotos()
  }
}
</script>
