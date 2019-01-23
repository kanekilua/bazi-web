<template>
    <div class="home-wrap">
        <h1 class="header">每日一占</h1>
        <div class="content-wrap">
            <swiper v-if="imgList.length>1" class="swiper-box" :options="swiperOption">
                <swiper-slide v-for="(imgItem,index) in imgList" :key="index">
                    <img :src="imgItem.image" alt="swiper" @click="clickBannerImg(imgItem.link)">
                </swiper-slide>
                <div class="swiper-pagination"></div>
            </swiper>
            <div class="content">
                <div class="cell"></div>
                <v-title-nav>
                    今日测算
                </v-title-nav>
                <div class="table-list">           
                    <div class="table-item" @click="jump('/bazi')">
                        <div class="item-box">
                            <img src="../assets/image/home/bazi.png">
                            <div class="item-txt">八字排盘</div>
                        </div>
                    </div>
                    <div class="table-item" @click="$jump('/love')">
                        <div class="item-box">
                            <img src="../assets/image/home/love.png">
                            <div class="item-txt">婚恋爱情</div>
                        </div>
                    </div>
                    <div class="table-item" @click="$jump('/fengshui')">
                        <div class="item-box">
                            <img src="../assets/image/home/fengshui.png">
                            <div class="item-txt">风水常识</div>
                        </div>
                    </div>
                    <div class="table-item" @click="$jump('/shengxiao')">
                        <div class="item-box">
                            <img src="../assets/image/home/shengxiao.png">
                            <div class="item-txt">十二生肖</div>
                        </div>
                    </div>
                    <div class="table-item" @click="jump('/ziwei')">
                        <div class="item-box">
                            <img src="../assets/image/home/ziwei.png">
                            <div class="item-txt">紫微斗数</div>
                        </div>
                    </div>
                    <div class="table-item" @click="$jump('/zhougongHome')">
                        <div class="item-box">
                            <img src="../assets/image/home/dream.png">
                            <div class="item-txt">周公解梦</div>
                        </div>
                    </div>
                    <div class="table-item" @click="$jump('/xiangshu')">
                        <div class="item-box">
                            <img src="../assets/image/home/hand.png">
                            <div class="item-txt">相术解析</div>
                        </div>
                    </div>
                    <div class="table-item" @click="$jump('/nameHome')">
                        <div class="item-box">
                            <img src="../assets/image/home/name.png">
                            <div class="item-txt">姓名大全</div>
                        </div>
                    </div>
                    <div class="table-item" @click="$jump('/qimenFile')">
                        <div class="item-box">
                            <img src="../assets/image/home/qimen.png">
                            <div class="item-txt">奇门遁甲</div>
                        </div>
                    </div>
                </div>
                <div class="cell"></div>
                <v-title-nav-more>
                    <div slot="title">趣味测试</div>
                    <div slot="more" @click="$jump('/interestingMore')">更多</div>
                </v-title-nav-more>
                <div class="interst-test">
                    <div class="interest-item"
                        @click="toTest(item.id)"
                        v-for = "(item,index) in testList"
                        :key = "index"
                        v-show = "index < 4"
                    >
                        <div class="img-box">
                            <img :src="item.img" alt="趣味测试">
                        </div>
                        <div class="mask">
                            <h4>{{item.title}}</h4>
                            <div><a href="#">免费揭晓答案 ></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex'
export default {
    computed : {
        ...mapState (['loginAccount'])
    },
    data () {
        return {
            imgList: [],
            swiperOption: { 
                loop: true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false, //手动拖拽后仍自动轮播
                },
                observer: true,//修改swiper自己或子元素时，自动初始化swiper 
                observeParents: true,//修改swiper的父元素时，自动初始化swiper 
            },
            testList: [],
        }
    },
    created () {
        this.getBanner();
        this.getInterestingTest();
    },
    methods: {
        ...mapMutations('bazi',['updateBaziUserInfo']),
        jump : function (path) {
            let userInfo;
            if(localStorage.hasOwnProperty(global.APP_ACCOUNT_INFO)) {
                userInfo = JSON.parse(localStorage.getItem(global.APP_ACCOUNT_INFO))[this.loginAccount];
            }
            if(userInfo  === undefined) {
                this.$vux.toast.text('请先登录','top');
                return ;
            }
            let birthArray = userInfo.birthday.split(' ');
            let dateArray = birthArray[0].split('-');
            let hour = birthArray[1].split(':')[0];
            let minute = birthArray[1].split(':')[1];
            let baziPaiPanData = {
                'cid' : 48,
                'name' : userInfo.realname,
                'sex' : userInfo.gender,
                'year' : dateArray[0],
                'month' : dateArray[1],
                'date' : dateArray[2],
                'hour' : hour,
                'minute' : minute,
                'yezis' : 10
            };
            this.updateBaziUserInfo(baziPaiPanData);
            this.$jump(path);
        },
        getBanner: function () {
            this.$http.post('/features/carousel',null,null,null,this.success,this.failure);
        },
        success: function (res) {
            this.imgList = res.data.index.children;
        },
        clickBannerImg: function (path) {
            if(path=='/bazi'){
                this.jump('/bazi')
            }else {
                this.$jump(path);
            }
        },
        getInterestingTest : function () {
            let params = {
                cid : '107',
                limit : '0'
            }
            this.$http.post('/suan/apidata',params,'cesuan',null,this.testSuccess,this.failure);
        },
        testSuccess: function (res) {
            this.testList = res.data;
        },
        toTest: function (id) {
            let testList = this.testList[id-1]; 
            this.$router.push({
                name: 'interestingInner',
                query: {
                    id : testList.id,
                    img : testList.img,
                    title : testList.title,
                    shorttext : testList.shorttext,
                }
            })
        }
    }
}
</script>

<style lang="less" scoped>
.header{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%; 
    height: 90/75rem;
    line-height: 90/75rem;
    font-size: 38/75rem;
    text-align: center;
    color: @baseBoldColor;
    background: #fff;
}
.content-wrap{
    padding-top: 90/75rem;
    .border-box();
    margin-bottom: 140/75rem;
}
.swiper-box{
    width: 100%;
    position: relative;
    .swiper-slide{
        width: 100%;
        &> img{
            display: block;
            width: 100%;
            height: 280/75rem;
            margin: 0 auto;
        }
    }
    .swiper-pagination{
        left: 80/75rem;
        bottom: 30/75rem;
        text-align: left;
        height: 25/75rem;
    }  
}
.cell{
    width: 100%;
    height: 20/75rem;
    background: #f1f1f1;
}
.content{
    /deep/ .title {
        color : #121212 !important;
    }
    .table-list{
        width: 90%;
        margin: 40/75rem auto 20/75rem auto;
        .flex-start();
        flex-wrap: wrap;
        .table-item{
            width: 33.33%;
            .item-box{
                .flex-col();
                margin-bottom: 40/75rem;
                img {
                    display: block;
                    width: 133/75rem;
                    height: 133/75rem;
                    margin: 0 auto 10/75rem auto; 
                }
                .item-txt{
                    text-align: center;
                    font-size: 26/75rem;
                }
            }
        }
        
    }
    .interst-test{
        padding-bottom: 13/75rem;
        overflow: hidden;
        .interest-item{
            position: relative;
            width: 90%;
            height: 223/75rem;
            margin: 20/75rem auto;
            .img-box{
                width: 100%;
                height: 220/75rem;
                .flex-center;
                overflow: hidden;
                .round(10/75rem);
                img{
                    width: 100%;
                    height: auto;
                }
            }
            .mask{
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                margin: auto;
                width: 100%;
                height: 86/75rem;
                text-align: left;
                background: rgba(0,0,0,0.5);
                .round(0 0 10/75rem 10/75rem);
                &> h4{
                    font-size: 28/75rem;
                    padding: 8/75rem 0 0 13/75rem;
                    .border-box();
                    color: rgba(255,255,255,1);
                }
                & > div{
                    margin-right:10/75rem; 
                    text-align: right;
                    text-decoration: underline;
                }
            }
        }
        .article-cell{
            .flex-between();
            & > i{
                display: inline-block;
                width: 44/75rem;
                height: 44/75rem;
                background: url('../assets/image/home/more@2x.png') no-repeat center center / 100% 100%;
            }
            & > h2{
                font-size: 26/75rem;
                font-weight: normal;
                margin-left: 15/75rem;
                padding: 16/75rem 0;
            }
        }
    }       
}

</style>

