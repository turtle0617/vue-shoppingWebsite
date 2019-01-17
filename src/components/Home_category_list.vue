<template>
  <div class="Home_category_list">
    <div class="container category">
      <div class="category__title">
        分類
      </div>
      <ul class="category__list">
        <li class="category__item">
          <div class="category__item--pic">
            <img src="/girl_cloth.png" alt="">
          </div>
          <span>女生衣著</span>
        </li>
        <li class="category__item">
          <div class="category__item--pic">
            <img src="/men_cloth.png" alt="">
          </div>
          <span>男生衣著</span>
        </li>
        <li class="category__item">
          <div class="category__item--pic">
            <img src="/live_life.png" alt="">
          </div>
          <span>居家生活</span>
        </li>
        <li class="category__item">
          <div class="category__item--pic">
            <img src="/phone.png" alt="">
          </div>
          <span>手機平板與周邊</span>
        </li>
        <li class="category__item">
          <div class="category__item--pic">
            <img src="/3c.png" alt="">
          </div>
          <span>3C</span>
        </li>
        <li class="category__item">
          <div class="category__item--pic">
            <img src="/home_appliance.png" alt="">
          </div>
          <span>家電影音</span>
        </li>
        <li class="category__item">
          <div class="category__item--pic">
            <img src="/makeups.png" alt="">
          </div>
          <span>美妝保健</span>
        </li>
        <li class="category__item">
          <div class="category__item--pic">
            <img src="/men_shoes.png" alt="">
          </div>
          <span>男鞋</span>
        </li>
        <li class="category__item">
          <div class="category__item--pic">
            <img src="/girl_shoes.png" alt="">
          </div>
          <span>女鞋</span>
        </li>
        <li class="category__item">
          <div class="category__item--pic">
            <img src="/apple.png" alt="">
          </div>
          <span>Apple手機與周邊</span>
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
export default {
  name: "category_list"
};
</script>
<style lang="scss" scoped>
.category {
  background-color: white;
  margin-top: 50px;
  background-color: #ffffff;
  &__title {
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    color: rgba(0, 0, 0, 0.54);
    font-weight: 500;
    padding: 1.5rem 0 1.5rem 1.25rem;
  }
  &__list {
    list-style: none;
    display: flex;
    justify-content: space-between;
  }
  &__item {
    flex-basis: 10%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    cursor: pointer;
    box-sizing: border-box;
    padding: 1rem 0;
    border: 1px solid rgba(0, 0, 0, 0.05);
    font-size: 0.875rem;
    &--pic {
      display: flex;
      align-items: center;
    }
    img {
      width: 100%;
    }
    span {
      align-self: flex-end;
    }
    &:hover {
      box-shadow: 1px -1px 5px 0px rgba(0, 0, 0, 0.2);
    }
  }
}
</style>
