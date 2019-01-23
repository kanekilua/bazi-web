<template>
    <div class="bazi-wrap">
        <v-title-header :backLink="backLink">
            八字排盘
            <div slot="right-ico" class="switchUser" @click="$jump('/baziBirth')"></div>
        </v-title-header>
        <div class="content-wrap">
            <div class="swiper-top">
                <v-nav :navList="navList" :nowIndex="navIndex" @updateNavIndex="updateNavIndex"></v-nav>
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
            navList: ["命盘","感情","事业","财运","健康","亲子"],
            list: [BaziMingpan,BaziEmotion,BaziCareer,BaziFortune,BaziHealth,BaziKids],
            swiperOption : { initialSlide: this.navIndex, height : window.innerHeight,},
            resData: {"data":{"career":'',"character":'',"d": '',"elements":'',"family":'',"finance":'',"h":'',"health":'',"id":'',"life":'',"love":'',"m":'',"remedy":'',"y":'',}},
        }
    },
    created() {
        this.init();
        this.getData();
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
        ...mapMutations('bazi',['updateNavIndex','updateHideText']),
        init : function () {
            let app_bazi_share_str = localStorage.getItem(global.APP_BAZI_SHARE);
            if(app_bazi_share_str === null) {
                return ;
            }
            for(let shareData of JSON.parse(app_bazi_share_str)) {
                if(shareData.name === this.baziUserInfo.name &&
                    shareData.year === this.baziUserInfo.year &&
                    shareData.month === this.baziUserInfo.month &&
                    shareData.date === this.baziUserInfo.date &&
                    shareData.hour === this.baziUserInfo.hour) {
                        this.updateHideText(false);
                        return ;
                    }
            }
            this.updateHideText(true);
        },
        getData: function () {
            let userInfo = {
                cid : '93',
                // y : '1910',
                // m : '2',
                // d : '28',
                y : this.baziUserInfo.year,
                m : this.baziUserInfo.month[0] === '0' ? this.baziUserInfo.month[1] : this.baziUserInfo.month,
                d : this.baziUserInfo.date[0] === '0' ? this.baziUserInfo.date[1] : this.baziUserInfo.date,
                h : this.baziUserInfo.hour[0] === '0' ? this.baziUserInfo.hour[1] : this.baziUserInfo.hour
            };
            this.$http.post('/suan/apidata',userInfo,'cesuan',null,this.success,this.failure) ;
        },
        success : function (res) {
            if(res.code === 'error') {
                this.$vux.alert.show({
                    title : '系统提示',
                    content : '暂无该数据'
                });
                return ;
            }
            let str = JSON.stringify(res);
            str = str.replace(/★/g,"卍<br>★");
            str = str.replace(/◆/g,"卍<br>◆");
            this.resData = JSON.parse(str);
            // 改变res为对象，添加可见文字区域和不可见区域两个属性            
            this.resData.data.character = this.getEmotionData(this.resData.data.character);
            this.resData.data.career = this.getEmotionData(this.resData.data.career);
            this.resData.data.finance = this.getEmotionData(this.resData.data.finance);
            this.resData.data.family = this.getEmotionData(this.resData.data.family);
            this.resData.data.health = this.getEmotionData(this.resData.data.health);
            this.resData.data.life = this.getEmotionData(this.resData.data.life)
            this.resData.data.love = this.getEmotionData(this.resData.data.love)
        },
        // 处理内容函数
        getEmotionData: function (artical) {
            let content = this.$utils.Trim(artical); //去除空格
            let visitableText = "";
            let unvisitableText = "";
             //截取前三段可见文字
            let unvisitableArr = content.split(/卍/g,3);//截取前三段
            for(let i of unvisitableArr){
                visitableText += i;
            }
            //截取不可见文字
            let visitableContent = content.split(/卍/g);
            visitableContent.forEach((item,i) =>{
                if(i>3){    //截取后三段
                    unvisitableText += item;
                }
            })
            artical = {},
            artical.visitableText = visitableText;
            artical.unvisitableText = unvisitableText;
            return artical;
        }
    }
}
</script>
<style lang="less" scoped>
.bazi-wrap{
    background: #fff;
    .switchUser{
        width: 44/75rem;
        height: 44/75rem;
        background: url('../assets/image/common/switch.png') no-repeat center center / 100% 100%;
    }
    .content-wrap{
        padding-top: 90/75rem;
        .border-box();
        .swiper-container{
            margin-bottom: 32/75rem;
            .swiper-slide{
                height: auto!important;
            }
        }
        .content-box{
            width: 100%;
        }
    }
}
</style>

