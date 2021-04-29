<template>
  <div>
    <sidebar></sidebar>
    <navbar></navbar>
  </div>
</template>

<script>
// @ is an alias to /src
import Sidebar from '@/components/layout/Sidebar'
import Navbar from '@/components/layout/Navbar'

export default {
  name: 'Home',
  components: {
    Sidebar,
    Navbar
  },
  data () {
    return {
      searchTerm: ''
    }
  },
  methods: {
    search () {
      console.log(this.searchTerm)
    }
  }
}
</script>
