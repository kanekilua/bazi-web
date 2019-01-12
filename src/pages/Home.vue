
<template>
    <div class="home-wrap">
        <h1 class="header">每日一占</h1>
        <div class="content-wrap">
            <swiper class="swiper-box" :options="swiperOption">
                <swiper-slide v-for="(imgItem,index) in imgList" :key="index">
                    <img :src="imgItem.url" alt="swiper">
                </swiper-slide>
                <div class="swiper-pagination"></div>
            </swiper>
            <div class="content">
                <div class="cell"></div>
                <v-title-nav>
                    今日测算
                </v-title-nav>
                <div class="table-list">           
                    <div class="table-item" @click="jumpBazi">
                        <div class="item-box">
                            <img src="../assets/image/home/bazi.png">
                            <div class="item-txt">八字排盘</div>
                        </div>
                    </div>
                <div class="table-item" @click="jumpPage('/love')">
                        <div class="item-box">
                            <img src="../assets/image/home/love.png">
                            <div class="item-txt">婚恋爱情</div>
                        </div>
                    </div>
                    <div class="table-item" @click="jumpPage('/fengshui')">
                        <div class="item-box">
                            <img src="../assets/image/home/fengshui.png">
                            <div class="item-txt">风水常识</div>
                        </div>
                    </div>
                    <div class="table-item" @click="jumpPage('/shengxiao')">
                        <div class="item-box">
                            <img src="../assets/image/home/shengxiao.png">
                            <div class="item-txt">十二生肖</div>
                        </div>
                    </div>
                    <div class="table-item" @click="jumpPage('/ziwei')">
                        <div class="item-box">
                            <img src="../assets/image/home/ziwei.png">
                            <div class="item-txt">紫微斗数</div>
                        </div>
                    </div>
                    <div class="table-item" @click="jumpPage('/zhougongHome')">
                        <div class="item-box">
                            <img src="../assets/image/home/dream.png">
                            <div class="item-txt">周公解梦</div>
                        </div>
                    </div>
                    <div class="table-item" @click="jumpPage('/xiangshu')">
                        <div class="item-box">
                            <img src="../assets/image/home/hand.png">
                            <div class="item-txt">相术解析</div>
                        </div>
                    </div>
                    <div class="table-item" @click="jumpPage('/nameHome')">
                        <div class="item-box">
                            <img src="../assets/image/home/name.png">
                            <div class="item-txt">姓名大全</div>
                        </div>
                    </div>
                    <div class="table-item" @click="jumpPage('/qimenFile')">
                        <div class="item-box">
                            <img src="../assets/image/home/qimen.png">
                            <div class="item-txt">奇门遁甲</div>
                        </div>
                    </div>
                </div>
                <div class="cell"></div>
                <v-title-nav>
                    趣味测试
                </v-title-nav>
                <div class="interst-test">
                    <div class="img-box">
                        <img src="../assets/image/home/test.png" alt="趣味测试">
                        <div class="mask">
                            <h3>总想找你聊天，还不是因为我在乎你！</h3>
                            <div><a href="#">免费揭晓答案 ></a></div>
                        </div>
                    </div>
                    <div class="img-box">
                        <img src="../assets/image/home/test.png" alt="趣味测试">
                        <div class="mask">
                            <h3>总想找你聊天，还不是因为我在乎你！</h3>
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
            imgList: [
                {url: require('../assets/image/home/banner1.png')},
                {url: require('../assets/image/home/banner1.png')},
                {url: require('../assets/image/home/banner1.png')},               
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
        ...mapMutations('bazi',['updateBaziUserInfo']),
        jumpBazi : function () {
            let userInfo;
            if(localStorage.hasOwnProperty(global.APP_ACCOUNT_INFO)) {
                userInfo = JSON.parse(localStorage.getItem(global.APP_ACCOUNT_INFO))[this.loginAccount];
            }
            if(userInfo  === undefined) {
                this.$vux.toast.text('请先登录','top');
                this.jumpPage('/login');
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
            this.jumpPage('/bazi');
        },
        jumpPage : function (path) {
            const pathList = [
                '/bazi','/love','/fengshui','/shengxiao','/ziwei','/zhougongHome','/xiangshu','/nameHome','/qimenFile'
            ];
            const eventList = [
                'home_bazi','home_love','home_fengshui','home_shengxiao','home_ziwei','home_zhougong','home_xiangshu','home_name','home_qimen'
            ];
            for(let i = 0; i< pathList.length ; ++i) {
                if(pathList[i] === path) {
                    MobclickAgent.onEvent(eventList[i]);
                }
            }
            this.$jump(path);
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
    margin-top: 24/75rem;
    .swiper-slide{
        width: 100%;
        height: 350/75rem;
        &> img{
            display: block;
            width: 96%;
            height: 100%;
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
        .img-box{
            position: relative;
            width: 90%;
            margin: 0 auto;
            img{
                width: 100%;
                height: auto;
            }
            .mask{
                position: absolute;
                bottom: 18/75rem;
                left: 0;
                right: 0;
                margin: auto;
                width: 98%;
                height: 86/75rem;
                text-align: left;
                background: rgba(0,0,0,0.2);
                color: #fff;
                border-bottom-right-radius: 30/75rem;
                border-bottom-left-radius: 30/75rem;
                &> h3{
                    font-size: 28/75rem;
                    padding: 8/75rem 0 0 13/75rem;
                    .border-box();
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

