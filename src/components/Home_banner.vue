<template>
<div class="Home_banner">
  <div class="container banner">
    <div class="banner__main carousel">
      <img v-if="carouseImageURL" v-bind:src="carouseImageURL" alt="">
      <i v-else class="animation__load fas fa-spinner"></i>
      <div class="carousel__arrow carousel__arrow--prev" v-on:click="changeCarouselImage(-1)">
        <i class="fas fa-angle-left"></i>
      </div>
      <div class="carousel__arrow carousel__arrow--next" v-on:click="changeCarouselImage(1)">
        <i class="fas fa-angle-right"></i>
      </div>
    </div>
    <div class="banner__right">
      <div class="banner__right--AD">
      </div>
      <div class="banner__right--AD">
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Home_banner",
  data() {
    return {
      carouselSelectInedx: 0,
      imageList: [
        "https://picsum.photos/800/250?image=0",
        "https://picsum.photos/800/250?image=10",
        "https://picsum.photos/800/250?image=20",
        "https://picsum.photos/800/250?image=30",
        "https://picsum.photos/800/250?image=40",
        "https://picsum.photos/800/250?image=50",
        "https://picsum.photos/800/250?image=60",
        "https://picsum.photos/800/250?image=70",
        "https://picsum.photos/800/250?image=80"
      ],
      carouseImageURL: "https://picsum.photos/800/250?image=0"
    };
  },
  methods: {
    changeCarouselImage: function(number) {
      const carouselImage = new Image();
      this.carouseImageURL = "";
      this.carouselSelectInedx += number;

      if (this.carouselSelectInedx > 8) {
        this.carouselSelectInedx = 0;
      }
      if (this.carouselSelectInedx < 0) {
        this.carouselSelectInedx = 8;
      }

      carouselImage.src = this.imageList[this.carouselSelectInedx];
      carouselImage.onload = () => {
        this.carouseImageURL = carouselImage.src;
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.Home_banner {
  padding-top: 20px;
}
.animation__load {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%);
  font-size: 2rem;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

.banner {
  display: flex;
  height: 35vh;
  min-height: 250px;
  flex-wrap: wrap;
  img {
    width: 100%;
  }
  &__main {
    box-sizing: border-box;
    flex-basis: 66.5%;
  }
  &__right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-basis: 33.5%;
    box-sizing: border-box;
    padding-left: 5px;
    &--AD {
      background-repeat: no-repeat;
      background-size: cover;
      cursor: pointer;
      &:first-child {
        background-image: url("https://picsum.photos/400/125?image=90");
        height: 50%;
      }
      &:last-child {
        margin-top: 5px;
        background-image: url("https://picsum.photos/400/125?image=100");
        height: 50%;
      }
    }
  }
}
.carousel {
  position: relative;
  &__arrow {
    color: white;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    font-size: 2rem;
    background-color: rgba(0, 0, 0, 0.5);
    width: 2.1rem;
    height: 3rem;
    text-align: center;
    line-height: 3rem;

    &--prev {
      left: 0;
    }
    &--next {
      right: 0;
    }
  }
}
</style>
