
<template>
    <div class="main">
        <swiper class="swiper-box" :options="swiperOption">
            <swiper-slide v-for="(imgItem,index) in imgList" :key="index">
                <img :src="imgItem.url" alt="swiper">
            </swiper-slide>
            <div class="swiper-pagination"></div>
        </swiper>
        <!-- <v-module-title>
            <h2 slot="moudule-title">预约大师</h2>
        </v-module-title> -->
        <div class="table-list">           
            <div class="tableItem" @click="$jump('/bazi')">
                <img src="../assets/image/home/bazi@2x.png">
                <div>八字排盘</div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data () {
        return {
            // navTitle: "首页",
            imgList: [
                {url: require('../assets/image/home/banner@2x.png')},
                {url: require('../assets/image/home/banner@2x.png')},
                {url: require('../assets/image/home/banner@2x.png')},               
            ],
            swiperOption: {
                slidesPerView: 'auto',
                direction:"horizontal",/*横向滑动*/ 
                loop: true,
                pagination:{
                    el: '.swiper-pagination',
                    bulletClass : 'my-bullet',
                    bulletActiveClass: 'my-bullet-active',
                },
                autoplay:{
                    delay: 3000
                },
            }
        }
    },

    methods: {
        
    }
}
</script>

<style lang="less" scoped>
.swiper-box{
    width: 95%;
    position: relative;
    border-radius: 43/75rem;
    .swiper-slide{
        width: 600/75rem;
        height: 350/75rem;
        margin-right: 16/75rem;
        &> img{
            width: 100%;
            height: 100%;
        }
    }
    .swiper-pagination{
        left: 80/75rem;
        bottom: 30/75rem;
        text-align: left;
        height: 25/75rem;
    }  
}
.table-list{
    width: 100%;
    .flex-around();
    flex-wrap: wrap;
    .tableItem{
        width: 33.33%;
        .flex-col();
        & > img {
            width: 100/75rem;
            height: 100/75rem; 
        }
        .ico1{
            width: 67/75rem;
            height: 88/75rem;
        }
    }
}       
</style>

