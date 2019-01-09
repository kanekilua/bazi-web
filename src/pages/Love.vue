<template>
    <div class="wrap">
        <v-title-header :backLink="backLink">
            婚恋爱情
            <div slot="icon" class="switchUser" @click="$jump('/baziBirth')"></div>
        </v-title-header>
        <div class="content-wrap">
            <div class="swiper-top">
                <v-nav :navList="navList" :nowIndex="navIndex" @updateNavIndex="updateNavIndex"></v-nav>
                <div class="right"></div>
            </div>
            <div class="swiper-container">
                <swiper :options="swiperOption" ref="mySwiper">
                    <swiper-slide v-for="(item,index) in list" :key="index">
                        <keep-alive>
                            <component :is="item" :article="articleList[index]"></component>
                        </keep-alive>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
        <!-- 选择省份的弹出框 -->
        <div transfer-dom>
            <popup v-model="showProvinceFlag" position="bottom" height="50%">
                <group>
                    <cell v-for="(item,index) in provinceList" :key="index" :title="item.name" @click.native="selectProvince(item)"></cell>
                </group>
            </popup>
        </div>
        <!-- 男性选择城市的弹出框 -->
        <div transfer-dom>
            <popup v-model="showMaleCityFlag" position="bottom" height="50%">
                <group>
                    <cell v-for="(item,index) in maleCityList" :key="index" :title="item.name" @click.native="selectCity(item)"></cell>
                </group>
            </popup>
        </div>
            <!-- 女性选择城市的弹出框 -->
        <div transfer-dom>
            <popup v-model="showFemaleCityFlag" position="bottom" height="50%">
                <group>
                    <cell v-for="(item,index) in femaleCityList" :key="index" :title="item.name" @click.native="selectCity(item)"></cell>
                </group>
            </popup>
        </div>
    </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex'
import LoveBlossoms from './LoveBlossoms'
import Hehun from './Hehun'

export default {
    data () {
        return {
            backLink: "/main/home",
            navList: ["桃花运","八字合婚"],
            swiperOption : { initialSlide: this.navIndex ,autoHeight : true},
            list : [LoveBlossoms,Hehun],
            articleList: [],
            // 八字合婚的弹窗
            showProvinceFlag : false,
            provinceList : global.PROVINCE_LIST,
            showMaleCityFlag : false,
            showFemaleCityFlag : false,
            maleProvince : '',
            femaleProvince : '',
        }
    },
    created () {
      this.init();
    },
    computed : {
        ...mapState('love',['navIndex','hehunInputFlag','showProvince','showMaleCity','showFemaleCity','maleCityList','femaleCityList']),
        swiper () {
            return this.$refs.mySwiper.swiper;
        },
    },
    components : {
        LoveBlossoms , Hehun
    },
    mounted () {
        this.updateMaleCityList(global.CITY_LIST['0']);
        this.updateFemaleCityList(global.CITY_LIST['0']);
        if(this.navIndex != 0) { 
            this.swiper.slideTo(this.navIndex, 0, false);
        }
        this.swiper.on('slideChange', () => {
            this.updateNavIndex(this.swiper.activeIndex);
        });
    },
    watch : {
        'navIndex' (val) {
            this.swiper.slideTo(val, 0, false);
            if(val === 0) {
                this.updateMaleCityList([]);
                this.updateFemaleCityList([]);
                this.updateMaleProvince('省份');    
                this.updateFemaleProvince('省份');
                this.updateMaleCity('城市');
                this.updateFemaleCity('城市');
            }
        },
        'showProvinceFlag' (val) {
            if(this.showProvince !== val) {
                this.updateShowProvince(val);
            }
        },
        'showProvince' (val) {
            if(this.showProvinceFlag !== val) {
                this.showProvinceFlag = val;
            }
        },
        'showMaleCityFlag' (val) {
            if(this.showMaleCity !== val) {
                this.updateShowMaleCity(val);
            }
        },
        'showMaleCity' (val) {
            if(this.showMaleCityFlag !== val) {
                this.showMaleCityFlag = val;
            }
        },
        'showFemaleCityFlag' (val) {
            if(this.showFemaleCity !== val) {
                this.updateShowFemaleCity(val);
            }
        },
        'showFemaleCity' (val) {
            if(this.showFemaleCityFlag !== val) {
                this.showFemaleCityFlag = val;
            }
        },
    },
     methods : {
        ...mapMutations('love',[
            'updateNavIndex','updateShowProvince','updateShowMaleCity','updateShowFemaleCity',
            'updateMaleCityList','updateFemaleCityList','updateMaleProvince','updateFemaleProvince',
            'updateMaleCity','updateFemaleCity'
        ]),
        init : function () {
            let sendData = {
                cid : '96',
                tid: '702',
                limit : '0'
            }
            this.$http.post('/suan/apidata',sendData,'cesuan',null,this.success,this.failure);
            sendData = {
                cid : '96',
                tid: '702',
                limit : '1'
            }
             this.$http.post('/suan/apidata',sendData,'cesuan',null,this.success,this.failure);
        },
        success : function (res) {
            this.articleList.push(res.data);
        },
        selectProvince : function (item) {
            if(this.hehunInputFlag === '1') {
                this.updateMaleProvince(item.name);
                this.updateMaleCityList(global.CITY_LIST[item.id]);
            }else if (this.hehunInputFlag === '0') {
                this.updateFemaleProvince(item.name);
                this.updateFemaleCityList(global.CITY_LIST[item.id]);
            }
            this.showProvinceFlag = false;
        },
        selectCity : function (item) {
            if(this.hehunInputFlag === '1') {
                this.updateMaleCity(item.name);
                this.showMaleCityFlag = false;
            }else if (this.hehunInputFlag === '0') {
                this.updateFemaleCity(item.name);
                this.showFemaleCityFlag = false;
            }
        }
    }
}
</script>
<style lang="less" scoped>
.content-wrap{
    padding-top: 90/75rem;
    width: 100%;
    .swiper-top{
        padding: 0 40/75rem;
        .border-box();
        /deep/ .item{
            margin-right: 40/75rem;
        }
    }
    .swiper-container{
        width: 100%;
        margin: 0 auto;
        /deep/ .nav .nav-list{
            padding: 0 40/75rem;
            .border-box();
            .item{
                margin-right: 80/75rem;
            }
        }
        /deep/ .swiper-slide{
            width: 100%;
        }
        .item-img{
            width: 675/75rem;
            height: 298/75rem;
            display: block;
            margin: 34/75rem auto 20/75rem auto;
        }
    }
}
</style>

