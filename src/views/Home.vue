<template>
  <div>
    <navbar></navbar>
    <sidebar></sidebar>
    <main>
      <main-filter></main-filter>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import Sidebar from '@/components/layout/Sidebar'
import Navbar from '@/components/layout/Navbar'
import MainFilter from '@/components/filter/MainFilter'

export default {
  name: 'Home',
  components: {
    Sidebar,
    Navbar,
    MainFilter
  },
  data () {
    return {
      // searchTerm: ''
    }
  }
  // methods: {
  //   search () {
  //     console.log(this.searchTerm)
  //   }
  // }
}
</script>
