<template>
    <div class="first-guider">
        <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide v-for="(item,index) in list" :key="index">
                <div :style="{background: 'url('+item + ') no-repeat center center / auto 100%'}" class="background">
                    <div v-if="index === 2" class="start" @click="$jump('/main/home')"></div>
                </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
export default {
    data () {
        return  {
            list : [
                require('../assets/image/first-guider/page1.png'),
                require('../assets/image/first-guider/page2.png'),
                require('../assets/image/first-guider/page3.png')
            ],
            swiperOption : {
                pagination: {
                    el: '.swiper-pagination'
                }
            }
        }
    },
    mounted() {
        localStorage.setItem(global.APP_FIRST_OPEN,true);
    }
}
</script>
<style lang="less" scoped>
.first-guider {
    width: 100%;
    height: 100%;
    & /deep/ .swiper-container {
        width: 100%;
        height: 100%;
    }
    .background {
        width: 100%;
        height: 100%;
        .start {
            height: 84/75rem;
            width: 453/75rem;
            position: absolute;
            left: 0;
            right: 0;
            bottom: 150/75rem;
            margin :0 auto;
            background: url('../assets/image/first-guider/button.png') no-repeat center center / 100% auto;
        }
    }
}

</style>



