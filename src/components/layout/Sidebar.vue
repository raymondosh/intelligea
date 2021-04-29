<template>
  <div class="drawer-wrap" v-if="isSidebar">
    <!-- overlay. This section should only be visible when the drawer is open,  and should contain the even handler that will close the drawer-->
    <!-- <div class="drawer-overlay"></div> -->
    <nav class="drawer">
      <!-- company logo and name -->
      <h1 class="blue-100">
        <div class="image-frame logo">
          <img src="../../assets/icons/bluecube.png" alt="" />
        </div>
        bluecube
      </h1>

      <div class="drawer-items">
        <ul>
          <li
            v-for="(item, index) in items.slice(0, 2)"
            :key="index"
            class="grey-200 f16"
          >
            <div class="image-frame icon">
              <img
                :src="require(`../../assets/icons/${item.icon}.png`)"
                :alt="`${item.title} image`"
              />
            </div>
            <span>{{ item.title }}</span>
          </li>
        </ul>

        <h4 class="f16 grey-300 share">Share</h4>

        <ul>
          <li
            v-for="(item, index) in items.slice(2)"
            :key="index"
            class="grey-200 f16"
          >
            <div class="image-frame icon">
              <img
                :src="require(`../../assets/icons/${item.icon}.png`)"
                :alt="`${item.title} image`"
              />
            </div>
            <span>{{ item.title }}</span>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'sidebar',
  props: {
    isSidebar: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home'
        },
        {
          title: 'Message',
          icon: 'message'
        },
        {
          title: 'Ranking',
          icon: 'ranking'
        },
        {
          title: 'Challenge',
          icon: 'challenge'
        },
        {
          title: 'Party',
          icon: 'party'
        },
        {
          title: 'Connect',
          icon: 'connect'
        },
        {
          title: 'Parade',
          icon: 'parade'
        },
        {
          title: 'Group',
          icon: 'group'
        }
      ]
    }
  }
}
</script>

<style scoped>
.drawer {
  position: fixed;
  width: 240px;
  left: 0;
  top: 0;
  padding: 20px 30px 30px 50px;
  bottom: 0;
  border-right: 1px solid #e5e5e7;
  background-color: #fafafc;
  z-index: 10;
}
.drawer-wrap > .drawer-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #00000087;
  z-index: 10;
  display: none;
}
@media (max-width: 600px) {
  .drawer-wrap > .drawer-overlay {
    display: block;
  }
}
@media (max-width: 600px) {
  .drawer {
    /* display: none; */
  }
}
.drawer h1 {
  display: flex;
}
.drawer h1 .logo {
  height: 30px;
  width: 30px;
  margin-right: 10px;
}
.drawer .drawer-items {
  margin-top: 50px;
}
.drawer .drawer-items .share {
  margin: 10px;
  font-weight: 600;
}
.drawer .drawer-items ul li {
  padding: 10px;
  margin: 2px auto;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 6px;
  display: flex;
  align-items: center;
}
.drawer .drawer-items ul li .icon {
  width: 20px;
  height: 20px;
  margin-right: 10px;
  opacity: 0.5;
}
.drawer .drawer-items ul li:hover {
  border: 1px solid #e5e5e7;
  color: #404042;
}
.drawer .drawer-items ul li:hover .icon {
  opacity: 1;
}
</style>
