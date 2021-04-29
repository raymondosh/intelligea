<template>
  <form @submit.prevent="search" class="search-container main-shadow">
    <div class="image-frame search-image">
      <img src="../../assets/icons/search.png" alt="search icon" srcset="" />
    </div>
    <input
      :value="value"
      @input="updateValue"
      class="grey-200"
      v-bind="$attrs"
    />
    <button type="submit" class="button-primary">Search</button>
  </form>
</template>

<script>
export default {
  name: 'search-input',
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  methods: {
    updateValue (event) {
      this.$emit('input', event.target.value)
    },
    search () {
      this.$emit('search')
    }
  }
}
</script>
