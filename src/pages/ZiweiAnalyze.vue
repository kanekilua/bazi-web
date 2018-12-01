<template>
  <div class="wrap">
    <v-title-header>一生运程分析</v-title-header>
    <div>
        <v-nav :navList="navList" :nowIndex="navIndex" @updateNavIndex="updateNavIndex"></v-nav>
        <swiper class="swiper-box" :options="swiperOption" ref="mySwiper">
            <swiper-slide><div>11111</div></swiper-slide>
            <swiper-slide><div>2222</div></swiper-slide>
            <swiper-slide><div>333311</div></swiper-slide>
            <swiper-slide><div>44444</div></swiper-slide>
            <swiper-slide><div>55555</div></swiper-slide>
        </swiper>
    </div>
  </div>
</template>

<i18n>
set bar-active-color:
  zh-CN: 设置bar颜色
</i18n>

<script>

export default {
    computed : {
        swiper () {
            return this.$refs.mySwiper.swiper;
        }
    },
    mounted() {
        this.swiper.on('slideChange', () => {
            // loop无限轮播模式下取余tab个数,更改tab数需手动更改取余数。
            this.updateNavIndex((this.swiper.activeIndex)%5);
        });
    },
  data () {
    return {
       swiperOption: {
            slidesPerView: 'auto',
            loop: true,
            direction:"horizontal",/*横向滑动*/ 
        },
        navList: ["自身状况","精神德行","婚姻感情","子女状况","事业发展"],
        navIndex: 0
    }
  },
  methods: {
    updateNavIndex : function (val) {
        this.navIndex = val;
    }
  },

  watch : {
        'navIndex' (val) {
            this.swiper.slideTo(val, 0, false);
        }
    },
}
</script>

<style lang="less" scoped>
.wrap{
    padding-left: 33/75rem;
}
.swiper-slide{
        width: 298/75rem;
        height: 296/75rem;
        margin-right: 16/75rem;
        background:green;
}
</style>