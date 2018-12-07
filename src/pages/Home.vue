
<template>
    <div class="main">
        <swiper class="swiper-box" :options="swiperOption">
            <swiper-slide v-for="(imgItem,index) in imgList" :key="index">
                <img :src="imgItem.url" alt="swiper">
            </swiper-slide>
            <div class="swiper-pagination"></div>
        </swiper>
        <div class="content-wrap">
            <v-title-nav>
                <h2 slot="title">测算</h2>
                <div slot="more"></div>
            </v-title-nav>
            <div class="table-list">           
                <div class="table-item" @click="jumpBazi">
                    <div class="item-box">
                        <img src="../assets/image/home/bazi@2x.png">
                        <div class="item-txt">八字排盘</div>
                    </div>
                </div>
                <div class="table-item" @click="$jump('/love')">
                    <div class="item-box">
                        <img class="love-ico" src="../assets/image/home/love@2x.png">
                        <div class="item-txt">婚恋爱情</div>
                    </div>
                </div>
                <div class="table-item" @click="$jump('/fengshui')">
                    <div class="item-box">
                        <img class="fengshui-ico" src="../assets/image/home/fengshui@2x.png">
                        <div class="item-txt">风水常识</div>
                    </div>
                </div>
                <div class="table-item" @click="$jump('/ziwei')">
                    <div class="item-box">
                        <img class="ziwei-ico" src="../assets/image/home/ziwei-ico@2x.png">
                        <div class="item-txt">紫薇排盘</div>
                    </div>
                </div>
                <div class="table-item" @click="$jump('/xiangshu')">
                    <div class="item-box">
                        <img src="../assets/image/home/bazi@2x.png">
                        <div class="item-txt">相术解析</div>
                    </div>
                </div>
                <div class="table-item" @click="$jump('/zhougongHome')">
                    <div class="item-box">
                        <img src="../assets/image/home/bazi@2x.png">
                        <div class="item-txt">周公解梦</div>
                    </div>
                </div>
                <div class="table-item" @click="$jump('/bazi')">
                    <div class="item-box">
                        <img src="../assets/image/home/bazi@2x.png">
                        <div class="item-txt">八字排盘</div>
                    </div>
                </div>
                <div class="table-item" @click="$jump('/bazi')">
                    <div class="item-box">
                        <img src="../assets/image/home/bazi@2x.png">
                        <div class="item-txt">八字排盘</div>
                    </div>
                </div>
                <div class="table-item" @click="$jump('/bazi')">
                    <div class="item-box">
                        <img src="../assets/image/home/bazi@2x.png">
                        <div class="item-txt">八字排盘</div>
                    </div>
                </div>
            </div>
            <v-title-nav>
                <h2 slot="title">趣味测试</h2>
            </v-title-nav>
            <div class="interst-test">
                <div class="img-box">
                    <img src="../assets/image/home/test@2x.png" alt="趣味测试">
                    <h3>总想找你聊天，还不是因为我在乎你！</h3>
                </div>
                <div class="article-cell">
                    <h2>总想找你聊天，还不是因为我在乎你！</h2>
                    <i></i>
                </div>
                <div class="article-cell">
                    <h2>总想找你聊天，还不是因为我在乎你！</h2>
                    <i></i>
                </div>
                <div class="article-cell">
                    <h2>总想找你聊天，还不是因为我在乎你！</h2>
                    <i></i>
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
        ...mapMutations('bazi',['updateBaziUserInfo']),
        jumpBazi : function () {
            let userInfo;
            if(localStorage.hasOwnProperty(global.APP_ACCOUNT_INFO)) {
                userInfo = JSON.parse(localStorage.getItem(global.APP_ACCOUNT_INFO))[this.loginAccount];
            }
            if(userInfo  === undefined) {
                this.$vux.toast.text('请先登录','top');
                this.$jump('/login');
                return ;
            }
            let birthArray = userInfo.birthday.split(' ');
            let dateArray = birthArray[0].split('-');
            let hour = birthArray[1].split(':')[0];
            let baziPaiPanData = {
                'cid' : 48,
                'name' : userInfo.realname,
                'sex' : userInfo.gender,
                'year' : dateArray[0],
                'month' : dateArray[1],
                'date' : dateArray[2],
                'hour' : hour,
                'yezis' : 10
            };
            this.updateBaziUserInfo(baziPaiPanData);
            this.$jump('/bazi');
        }
    }
}
</script>

<style lang="less" scoped>
.main{
    margin-bottom: 140/75rem;
}
.swiper-box{
    width: 95%;
    position: relative;
    border-radius: 43/75rem;
    margin-top: 24/75rem;
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
.content-wrap{
    padding: 0 24/75rem;
    .table-list{
        width: 100%;
        .flex-start();
        flex-wrap: wrap;
        .boxshadow(0,0,8/75rem,rgba(0,0,0,0.16));
        .table-item{
            width: 33.33%;
            .boxshadow(1/75rem,1/75rem,0,rgba(0,0,0,0.13));
            .item-box{
                width: 234/75rem;
                height: 234/75rem;
                .flex-col();
                img {
                    width: 100/75rem;
                    height: 100/75rem;
                    margin: 45/75rem auto 33/75rem auto; 
                }
                .ico1{
                    width: 67/75rem;
                    height: 88/75rem;
                }
                .love-ico{
                    width: 102/75rem;
                    height: 81/85rem;
                }
                .fengshui-ico{
                    width: 75/75rem;
                    height: 88/85rem;
                }
                .ziwei-ico{
                    width: 105/75rem;
                    height: 88/75rem;
                }
                .item-txt{
                    margin-bottom: 33/75rem;
                }
            }
        }
        
    }
    .interst-test{
        padding-bottom: 13/75rem;
        border-bottom: 1px solid rgba(112,112,112,0.1);
        .img-box{
            position: relative;
            width: 100%;
            img{
                width: 100%;
                height: 268/75rem;
            }
            h3{
                position: absolute;
                bottom: 18/75rem;
                left: 0;
                right: 0;
                margin: auto;
                width: 98%;
                height: 86/75rem;
                line-height: 86/75rem;
                text-align: center;
                background: rgba(0,0,0,0.2);
                color: #fff;
                border-bottom-right-radius: 30/75rem;
                border-bottom-left-radius: 30/75rem;
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

