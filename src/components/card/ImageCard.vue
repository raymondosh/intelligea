<template>
  <!-- <section class="galleries-container"> -->
  <!-- <div class="galleries"> -->

  <!---First gallery-->
  <div class="gallery">
    <div class="image-frame pictures">
      <img :src="image.user.profile_image.small.split('?')[0]" alt="gallery" />
    </div>
    <div class="overlay">
      <h4 class="white f14">
        {{ image.user.name.split(" ")[0] }}, {{ image.user.total_photos }}
      </h4>
      <div class="location">
        <div class="image-frame icon">
          <img src="../../assets/icons/white_location.png" alt="gallery" />
        </div>
        <span class="white f14">{{ image.user.location }}</span>
      </div>
    </div>

    <footer>
      <div class="main">
        <h4 class="blue-100 f14">
          {{ image.user.name.split(" ")[0] }}, {{ image.user.total_photos }}
        </h4>
        <div class="location">
          <div class="image-frame icon">
            <img src="../../assets/icons/location.png" alt="gallery" />
          </div>
          <span class="grey-200 f14">{{ image.user.location }}</span>
        </div>
        <div class="button">
          <button class="button-primary">
            <div class="image-frame icon">
              <img src="../../assets/icons/love.png" alt="gallery" />
            </div>
          </button>
          <button class="button-danger">
            <div class="image-frame icon">
              <img src="../../assets/icons/thumbs-down.png" alt="gallery" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  </div>

  <!-- <div class="gallery">
        <div class="image-frame pictures">
          <img src="../../assets/icons/boy.png" alt="gallery" />
        </div>
        <div class="overlay">
          <h4 class="white f14">Williams, 28</h4>
          <div class="location">
            <div class="image-frame icon">
              <img src="../../assets/icons/white_location.png" alt="gallery" />
            </div>
            <span class="white f14">New York</span>
          </div>
        </div>
        <footer>
          <div class="main">
            <h4 class="blue-100 f14">Williams, 28</h4>
            <div class="location">
              <div class="image-frame icon">
                <img src="../../assets/icons/location.png" alt="gallery" />
              </div>
              <span class="grey-200 f14">New York</span>
            </div>
            <div class="button">
              <button class="button-primary">
                <div class="image-frame icon">
                  <img src="../../assets/icons/love.png" alt="gallery" />
                </div>
              </button>
              <button class="button-danger">
                <div class="image-frame icon">
                  <img src="../../assets/icons/thumbs-down.png" alt="gallery" />
                </div>
              </button>
            </div>
          </div>
        </footer>
      </div> -->
  <!-- </div> -->
  <!-- </section> -->
</template>

<script>
export default {
  name: 'image-card',
  props: {
    image: {
      type: Object,
      required: true
    }
  }
}
</script>
