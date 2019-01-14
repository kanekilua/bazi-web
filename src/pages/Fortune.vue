<template>
    <div class="fortune-wrap">
        <v-title-header>
            运势
            <div class="right-ico" slot="right-ico" @click="switchUser"></div>
        </v-title-header>
        <div class="user-message-box">
           <img :src="avatar" alt="用户头像" class="avatar">
           <div class="user-message">
               <div class="user-message-top">
                   <div>名字：{{userName}}</div>
               </div>
               <div class="user-message-bottom">农历：{{birthday}}</div>
           </div>
        </div>
        <div class="content">
            
            <v-nav :navList="navList" :nowIndex="navIndex" @updateNavIndex="updateNavIndex"></v-nav>
            
            <div class="scroll-box">
                <swiper :options="swiperOption" ref="mySwiper">
                    <swiper-slide v-for="(value,key,index) in slideList" :key="index">
                        <div class="content-top">
                            <img :src="luckImg">
                            <ul class="msg">
                                <li><i></i><div v-html="slideList.jinri.num"></div></li>
                                <li><i></i><div v-html="slideList.jinri.color"></div></li>
                                <li><i></i><div v-html="slideList.jinri.jewelry"></div></li>
                                <li><i></i><div v-html="slideList.jinri.elegant"></div></li>
                                <li><i></i><div v-html="slideList.jinri.direction"></div></li>
                            </ul>
                        </div>
                        <div class="slide-content">
                            <div class="item">
                                <div class="title">
                                    <i></i>
                                    <h3 v-html="value.career"></h3>
                                </div>
                                <p>{{value.careerc}}</p>
                            </div>
                            <div class="item">
                                <div class="title">
                                    <i></i>
                                    <h3 v-html="value.riches"></h3>
                                </div>
                                <p>{{value.richesc}}</p>
                            </div>
                            <div class="item">
                                <div class="title" >
                                    <i></i>
                                    <h3 v-html="value.love"></h3>
                                </div>
                                <p>{{value.lovec}}</p>
                            </div>
                            <div class="item" v-if="value.health">
                                <div class="title" >
                                    <i></i>
                                    <h3 v-html="value.health"></h3>
                                </div>
                                <p>{{value.healthc}}</p>
                            </div>
                            <div class="item" v-if="value.overall">
                                <div class="title" >
                                    <i></i>
                                    <h3 v-html="value.overall"></h3>
                                </div>
                                <p>{{value.overallc}}</p>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'

export default {
    data () {
        return {
            avatar: "",
            userName: "",
            birthday: "",
            navList: ["今日运程","明日运程","本周运势","本月运势"],
            slideList: {
                jinri: {},
                mingri: {},
                zhou: {},
                yue: {},
            },
            luckImg: "",
            swiperOption : { initialSlide: this.navIndex, autoHeight : true}
        }
    },
    created () {
        this.init();
        this.getData();
    },
    components: {

    },
    computed : {
        ...mapState ({
            navIndex : state => state.fortune.navIndex,
            loginAccount : state => state.loginAccount
        }),
        swiper () {
            return this.$refs.mySwiper.swiper;
        }
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
        ...mapMutations('fortune',['updateNavIndex']),
        ...mapMutations(['updateLoginAccount']),
        init: function() {
            let userInfo;
            if(localStorage.hasOwnProperty(global.APP_ACCOUNT_INFO)) {
                userInfo = JSON.parse(localStorage.getItem(global.APP_ACCOUNT_INFO))[this.loginAccount];
            }
            if(userInfo  === undefined) {
                this.userName = '张大海';       
                this.birthday = '1988-11-11 15:53:00';
                this.avatar = require('../assets/image/common/man.png');
            } else {
                this.userName = userInfo.realname;       
                this.birthday = userInfo.birthday;
                this.avatar = userInfo.gender ? require('../assets/image/common/man.png') : require('../assets/image/common/woman.png');
            }
        },
        switchUser :function () {
            let token = localStorage.getItem(global.APP_TOKEN);
            let header = {'Authorization':token};
            this.$http.get('/logout',null,'app',header,this.logoutSuccess,null);
        },
        logoutSuccess : function (result) {
            this.updateLoginAccount("");
            localStorage.setItem(global.APP_TOKEN,result.data.token);
            this.$jump('/login');
        },
        getData: function () {
            let birthdayArr = this.birthday.split('-');
            let [ y,m,d ] = [birthdayArr[0],birthdayArr[1],birthdayArr[2].split(' ')[0]];
            // m,d去0
            m = this.formatMD(m);
            d = this.formatMD(d);
            let params = {
                cid: '103',
                y : y,
                m : m,
                d : d,
            }
            this.$http.post('/suan/apidata',params,'cesuan',null,this.success,null);
        },
        formatMD: function (val) {
            let [firstNum,secondNum] = val;
            if (firstNum==='0'){
                val = secondNum
                return val;
            }
            else {
                return val
            }
        },
        success: function (res) {
            this.luckImg = res.img;
            let data = JSON.stringify(res.data);
            // 匹配星星,目的是改变星星颜色
            let reg = /[★☆]{1,5}/g;
            for(let i of data.match(reg)){ //替换星星，拼接字符串
                data = data.replace(/[★☆]{1,5}(?=")/,`<span class='yellow'>${i}</span>`)
            }
            data = JSON.parse(data);
            data.jinri.num = this.liFormat(data.jinri.num)
            data.jinri.color = this.liFormat(data.jinri.color)
            data.jinri.jewelry = this.liFormat(data.jinri.jewelry)
            data.jinri.elegant = this.liFormat(data.jinri.elegant)
            data.jinri.direction = this.liFormat(data.jinri.direction)
            this.slideList.jinri = data.jinri;
            this.slideList.mingri = data.mingri;
            this.slideList.zhou = data.zhou;
            this.slideList.yue = data.yue;

        },
        liFormat: function (str) {
            let key = str.substring(0,5);
            let value = str.substring(5);
            key = `<h3>${key}</h3>`
            value = `<span class='yellow'>${value}</span>`
            return key + value;
        }
    }
}
</script>

<style lang="less">
.yellow{
        color: #EFCA89;
        font-weight: normal;
        font-size: 28/75rem;
    }
.fortune-wrap{
    width: 100%;
    height: 100%;
    padding-top: 90/75rem;
    .border-box();
    background: #f1f1f1;
    .right-ico{
        width: 38/75rem;
        height: 38/75rem;
        background: url('../assets/image/common/switch.png')no-repeat center center / 100% 100%;
    }
    /deep/ .header{
        .back{
            visibility: hidden;
        }
    }
    .user-message-box{
        width: 100%;
        height: 185/75rem;
        .flex-start();
        padding: 40/75rem;
        .border-box();
        .round(0 0 30/75rem 30/75rem);
        background: #fff;
        .avatar{
            width: 132/75rem;
            height: 132/75rem;
            .round(50%);
            margin-right: 21/75rem;
        }
        .user-message{
            width: 65%;
            .user-message-top{
                .flex-between();
                font-size: 26/75rem;
                margin-bottom: 18/75rem;
                .switchUser{
                    .flex-start();
                    & > i {
                        display: inline-block;
                        width: 43/75rem;
                        height: 44/75rem;
                        background: url('../assets/image/bazi/switchUser@2x.png') no-repeat center center / 100% 100%;
                        margin-left: 16/75rem;
                    }
                }
            }
            .user-message-bottom{
                    font-size: 26/75rem;
            }
        }
    }
    .content{
        width: 96%;
        padding-bottom: 30/75rem;
        margin: 20/75rem auto;
        .round(10/75rem);
        background: #fff;
        .content-top{
            .flex-between();
            padding: 20/75rem 45/75rem;
            .border-box();
            border-bottom: 1px solid rgba(238,238,238,1);
            & > img{
                width: 325/75rem;
                height: 228/75rem;
            }
            li {
                .flex-start();                
                margin-bottom: 6/75rem;
                i{
                    display: inline-block;
                    width: 10/75rem;
                    height: 10/75rem;
                    .round(50%);
                    background: @baseBoldColor;
                    vertical-align: middle;
                    margin-right: 14/75rem;
                }
                & > div{
                    .flex-start();
                    h3{
                        font-size: 28/75rem;
                        margin-right: 10/75rem;
                    }
                }
            }
        }
        .scroll-box{
            width: 96%;
            margin: 0 auto;
            position: absolute;
            top: 400/75rem;
            bottom: 0;
            overflow: auto;
            background: #fff;
            .slide-content{
                width: 100%;
                padding: 20/75rem 0 120/75rem 0;
                .border-box();
                .item{
                    .title{
                        padding-left: 20/75rem;
                        .flex-start();
                        & > h3 {
                            font-size: 30/75rem;
                        }
                        i{
                            display: inline-block;
                            width: 30/75rem;
                            height: 15/75rem;
                            margin: 0 10/75rem;
                            background: url('../assets/image/fortune/title-ico.png') no-repeat center center / 100% 100%;
                        }
                    }
                    & > p{
                        padding: 20/75rem 45/75rem;
                        font-size: 28/75rem;
                    }
                }
            }
        }
    }
}
</style>

