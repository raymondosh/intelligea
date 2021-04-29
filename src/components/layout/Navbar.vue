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
        <img src="../../assets/icons/notification.png" alt="" />
      </div>
      <span class="notification-count white button-danger f10">5</span>
      <input type="checkbox" class="notification-check" />
      <div class="notification-modal main-shadow">
        <div class="notification-arrow"></div>
        <ul>
          <li>
            <div class="profile image-frame">
              <img src="../../assets/icons/averter.png" alt="" />
            </div>
            <div class="message">
              <span class="grey-300 f14">Michael Liked you</span>
              <span class="grey-300 f10">Michael Liked you</span>
            </div>
            <div class="notification-type image-frame icons">
              <img src="../../assets/icons/love.svg" alt="" />
            </div>
          </li>
          <li>
            <div class="profile image-frame">
              <img src="../../assets/icons/averter.png" alt="" />
            </div>
            <div class="message">
              <span class="grey-300 f14">Michael Liked you</span>
              <span class="grey-300 f10">Michael Liked you</span>
            </div>
            <div class="notification-type image-frame icons">
              <img src="../../assets/icons/love_red.png" alt="" />
            </div>
          </li>
          <li>
            <div class="profile image-frame">
              <img src="../../assets/icons/averter.png" alt="" />
            </div>
            <div class="message">
              <span class="grey-300 f14">Michael Liked you</span>
              <span class="grey-300 f10">Michael Liked you</span>
            </div>
            <div class="notification-type image-frame icons">
              <img src="../../assets/icons/message.png" alt="" />
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- profile icon-->
    <div class="profile">
      <div class="averter">
        <div class="image-frame averter-image main-shadow">
          <img src="../../assets/icons/averter.png" alt="" />
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
import SearchInput from '../search/SearchInput'

export default {
  name: 'navbar',
  components: {
    SearchInput
  }
}
</script>
