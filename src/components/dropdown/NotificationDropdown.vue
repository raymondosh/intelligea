<template>
  <li>
    <div class="profile image-frame">
      <img
        :src="require(`../../assets/icons/${notification.image}.png`)"
        alt="profile image"
      />
    </div>
    <div class="message">
      <span class="grey-300 f14">{{ notification.subject }}</span>
      <span class="grey-300 f10">{{ notification.timestamp }}</span>
    </div>
    <div class="notification-type image-frame icons">
      <img
        :src="require(`../../assets/icons/${notification.icon}`)"
        alt="social icon"
      />
    </div>
  </li>
</template>

<script>
export default {
  name: 'notification-dropdown',
  props: {
    notification: {
      type: Object,
      required: true
    }
  }
}
</script>
