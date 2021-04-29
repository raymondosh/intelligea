<template>
  <div class="notification-container">
    <div class="notification image-frame">
      <img src="../../assets/icons/notification.png" alt="notification bell" />
    </div>

    <span class="notification-count white button-danger f10">5</span>

    <!-- This toggles the drop-down for the notification -->
    <input type="checkbox" class="notification-check" />

    <div class="notification-modal main-shadow">
      <div class="notification-arrow"></div>
      <ul>
        <notification-dropdown
          v-for="(notification, index) in notifications"
          :key="index"
          :notification="notification"
        ></notification-dropdown>
      </ul>
    </div>
  </div>
</template>

<script>
import NotificationDropdown from './NotificationDropdown'

export default {
  name: 'main-navigation',
  components: {
    NotificationDropdown
  },
  data () {
    return {
      notifications: [
        {
          subject: 'Michael Liked you',
          timestamp: 'About 20 minutes ago',
          image: 'avatar',
          icon: 'love.svg'
        },
        {
          subject: 'Michael Liked you',
          timestamp: 'About 20 minutes ago',
          image: 'avatar',
          icon: 'love_red.png'
        },
        {
          subject: 'Michael Liked you',
          timestamp: 'About 20 minutes ago',
          image: 'avatar',
          icon: 'message.png'
        }
      ]
    }
  }
}
</script>
