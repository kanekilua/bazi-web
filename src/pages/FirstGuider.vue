<template>
    <div class="first-guider">
        <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide v-for="(item,index) in list" :key="index">
                <div :style="{backgroundImage: 'url('+item + ')', backgroundSize:'contain'}" class="background">
                    <x-button v-if="index === 3" :gradients="[gradientStart, gradientEnd]" @click.native="$jump('/main/home')">开始体验</x-button>
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
            gradientStart : global.GRADIENT_START,
            gradientEnd : global.GRADIENT_END,
            list : [
                require('../assets/image/first-guider/mine-1.png'),
                require('../assets/image/first-guider/animal-2.png'),
                require('../assets/image/first-guider/ziwei-3.png'),
                require('../assets/image/first-guider/peach-4.png')
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
        & /deep/ .weui-btn {
            .round(25px);
            font-size: 28/75rem;
            height: 90/75rem;
            width: 300/75rem;
            position: absolute;
            left: 0;
            right: 0;
            bottom: 150/75rem;
            margin :0 auto;
        }
    }
}

</style>



