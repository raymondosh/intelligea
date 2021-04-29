<template>
  <div class="loading">
    <div class="obj"></div>
    <div class="obj"></div>
    <div class="obj"></div>
    <div class="obj"></div>
    <div class="obj"></div>
    <div class="obj"></div>
    <div class="obj"></div>
    <div class="obj"></div>
  </div>
</template>

<script>
export default {
  name: 'preloader'
}
</script>

<style scoped>
.loading {
  height: 40px;
  /* position: absolute; */
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.obj {
  width: 6px;
  height: 40px;
  background: #f5a31c;
  margin: 0 3px;
  border-radius: 10px;
  animation: loading 0.8s infinite;
}

.obj:nth-child(2) {
  animation-delay: 0.1s;
}

.obj:nth-child(3) {
  animation-delay: 0.2s;
}

.obj:nth-child(4) {
  animation-delay: 0.3s;
}

.obj:nth-child(5) {
  animation-delay: 0.4s;
}

.obj:nth-child(6) {
  animation-delay: 0.5s;
}

.obj:nth-child(7) {
  animation-delay: 0.6s;
}

.obj:nth-child(8) {
  animation-delay: 0.7s;
}

@keyframes loading {
  0% {
    height: 0px;
  }

  50% {
    height: 50px;
  }

  100% {
    height: 0px;
  }
}
</style>
