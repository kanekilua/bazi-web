<template>
    <div class="fortune-wrap">
        <v-header></v-header>
        <v-title-header :backLink="backLink">
            八字排盘
            <div slot="icon" class="switchUser" @click="$jump('/baziBirth')"></div>
        </v-title-header>
        <div class="container">
            <div class="swiper-top">
                <v-nav :navList="navList" :nowIndex="navIndex" @updateNavIndex="updateNavIndex"></v-nav>
                <div class="right"></div>
            </div>
            <div class="content-box">
                <swiper :options="swiperOption" ref="mySwiper">
                    <swiper-slide v-for="(item,index) in list" :key="index">
                        <keep-alive>
                            <component :is="item" :resData='resData'></component>
                        </keep-alive>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>    
</template>
<script>
import {mapState,mapMutations} from 'vuex'
import BaziMingpan from './BaziMingpan'
import BaziEmotion from './BaziEmotion'
import BaziCareer from './BaziCareer'
import BaziFortune from './BaziFortune'
import BaziHealth from './BaziHealth'
import BaziKids from './BaziKids'
import BaziDecade from './BaziDecade'

export default {
    components: {
        BaziMingpan,
        BaziDecade
    },
    data () {
        return {
            backLink : '/main/home',
            navList: ["命盘","感情","事业","财运","健康","亲子","十年大运"],
            list: [BaziMingpan,BaziEmotion,BaziCareer,BaziFortune,BaziHealth,BaziKids,BaziDecade],
            swiperOption : { initialSlide: this.navIndex },
            resData: {"data":{"career":'',"character":'',"d": '',"elements":'',"family":'',"finance":'',"h":'',"health":'',"id":'',"life":'',"love":'',"m":'',"remedy":'',"y":'',}},
        }
    },
    created() {
        this.getData()         
    },
    computed : {
        ...mapState ('bazi',['navIndex']),
        ...mapState ('bazi',['baziUserInfo']),
        swiper () {
            return this.$refs.mySwiper.swiper;
        },
    },
    watch : {
        'navIndex' (val) {
            this.swiper.slideTo(val, 0, false);
        }
    },
    mounted() {
        if(this.navIndex != 0) { 
            this.swiper.slideTo(this.navIndex, 0, false);
        }
        this.swiper.on('slideChange', () => {
            this.updateNavIndex(this.swiper.activeIndex);
        });
    },  
    methods : {
        ...mapMutations('bazi',['updateNavIndex']),
        getData: function () {
            // console.log(this.baziUserInfo)
            let userInfo = {
                cid : '93',
                y : '1910',
                m : '01',
                d : '01',
                h : '1',
            };
            this.$http.post('/suan/apidata',userInfo,'cesuan',null,this.success,this.failure) ;
        },
        success : function (res) {
            let str = JSON.stringify(res);
            str = str.replace(/★/g,"<br>★");
            str = str.replace(/◆/g,"<br>◆");
            this.resData = JSON.parse(str);
        }
    }
}
</script>
<style lang="less" scoped>
.fortune-wrap{
    .switchUser{
        width: 44/75rem;
        height: 44/75rem;
        background: url('../assets/image/bazi/switchUser@2x.png') no-repeat center center / 100% 100%;
    }
    .container{
        padding: 0 25/75rem;
        .swiper-top{
            .flex-between();
            .right{
                width: 44/75rem;
                height: 44/75rem;
                background: url('../assets/image/bazi/right@2x.png') no-repeat center center / 100% 100%;
            }
        }
        /deep/ .nav .nav-list .item{
            padding: 5/75rem 13/75rem;
        }
        .swiper{
            margin-top: 32/75rem;
            .swiper-slide{
                height: auto!important;
            }
        }
        .content-box{
            width: 100%;
            position: absolute;
            top:300/75rem;
            bottom: 0px;
            left: 0px;
            overflow-y: scroll;
        }
    }
}
/deep/ .nav .nav-list .item{
    padding: 30px;
}
</style>

