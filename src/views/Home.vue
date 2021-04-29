<template>
  <div>
    <sidebar></sidebar>
    <h1>Home page</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import Sidebar from '@/components/layout/Sidebar'

export default {
  name: 'Home',
  components: {
    Sidebar
  }
}
</script>
