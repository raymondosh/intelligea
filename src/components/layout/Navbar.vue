<template>
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
    <div class="notification-container">
      <div class="notification image-frame">
        <img
          src="../../assets/icons/notification.png"
          alt="notification bell"
        />
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

    <!-- profile icon-->
    <div class="profile">
      <div class="averter">
        <div class="image-frame averter-image main-shadow">
          <img src="../../assets/icons/avatar.png" alt="" />
        </div>
        <div class="user-status"></div>
      </div>
      <div class="f16 blue-200 user-name">
        Abigil
        <div class="image-frame icon">
          <img src="../../assets/icons//arrowdown.png" alt="arrow down" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import SearchInput from '../input/SearchInput'
import NotificationDropdown from '../dropdown/NotificationDropdown'

export default {
  name: 'navbar',
  components: {
    SearchInput,
    NotificationDropdown
  },
  data () {
    return {
      searchTerm: '',
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
  },
  methods: {
    search () {
      console.log(this.searchTerm)
    }
  }
}
</script>
