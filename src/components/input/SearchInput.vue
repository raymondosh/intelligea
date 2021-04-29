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
    <button
      :disabled="disable || isDisable(value)"
      type="submit"
      class="button-primary"
    >
      Search
    </button>
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
    },
    disable: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    updateValue (event) {
      this.$emit('input', event.target.value)
    },
    search () {
      this.$emit('search')
    },
    isDisable (value) {
      return value.length <= 0
    }
  },
  computed: {}
}
</script>
