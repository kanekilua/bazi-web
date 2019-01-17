<template>
    <div class="mine-wrap">
        <div class="mine-header">
                <i class="message"></i>
                <h2 class="title">我的</h2>
                <i class="setting"
                    @click="$jump('/main/mine/setting')"
                >
                </i>
            </div>
        <div class="content-wrap">
            <div class="user-bg">
                <div class="transition-bg">
                    <div class="user-box" @click="loginFlag ? '' : $jump('/login')">
                        <div class="avatar-box">
                            <img  class= "avatar" :src="avanta">
                        </div>
                        <div class="nick-name">{{name}}</div>
                    </div>
                </div>
            </div>
            <div class="table">
                <div class="table-cell recommend" @click="showShare = true">
                    <i></i>
                    <div>推荐好友</div>
                </div>
                <div class="table-cell recruitment" @click="$jump('/main/mine/recruitment/recruitmentStep1')">
                    <i></i>
                    <div>大师招募</div>
                </div>
                <div class="table-cell attention" @click="jump('/main/mine/myCollection')">
                    <i></i>
                    <div>我的收藏</div>
                </div>
                <div class="table-cell service" @click="jump('/main/mine/contactService')">
                    <i></i>
                    <div>联系客服</div>
                </div>
            </div>
            <div class="feedback" @click="jump('/main/mine/feedback')">
                <div class="left">
                    <i></i>
                    <div>意见反馈</div>
                </div>
                <i class="right"></i>
            </div>
            <div class="about" @click="$jump('/main/mine/about')">
                <div class="left">
                    <i></i>
                    <div>关于我们</div>
                </div>
                <i class="right"></i>
            </div>
        </div>
        <v-tab-bar></v-tab-bar>
        <v-share-popup :showShare='showShare' :shareData='shareData' @switchShowShare='switchShowShare'></v-share-popup>
    </div>
</template>

<script>
export default {
    data () {
        return {
            loginFlag : false,
            avanta : require('../assets/image/mine/avatar.png'),
            name : '未注册/登录',
            showShare : false,
            shareData : global.APP_SHARE_APP ,
        }
    },
    created() {
        this.init();
    },
    methods: {
        init :function () {
            let login_account = this.$store.state.loginAccount;
            if(login_account === '') {
                return ;
            }
            let account_info_str = localStorage.getItem(global.APP_ACCOUNT_INFO);
            if(account_info_str === null) {
                return ;
            }
            let account_info_arr = JSON.parse(account_info_str);
            let account_info = account_info_arr[login_account];
            if(account_info.avatar === "") {
                account_info.avatar = account_info.gender + '' === '1' ? require('../assets/image/common/man.png') : require('../assets/image/common/woman.png');
            }
            this.avanta = account_info.avatar ;
            this.name = account_info.realname;
            this.$store.commit('updateLoginAccountInfo',account_info);
            this.loginFlag = true;
        },
        switchShowShare : function (val) {
            this.showShare = val;
        },
        jump : function (path) {
            if(this.loginFlag) {
                this.$jump(path);
            }else {
                this.$jump('/login');
            }
        }
    },
}
</script>
<style lang="less" scoped>
button{
    width: 100%;
    height: 100px;
    margin-top: 300px;
}
.mine-wrap{
    width:100%;
    height: 100%;
    overflow-x: hidden;
    background: #f1f1f1;
    .mine-header{
        position: fixed;
        top: 0;
        z-index: 10;
        .flex-between();
        padding: 0 20/75rem;
        .border-box();
        width: 100%;
        height: 90/75rem;
        font-size: 30/75rem;
        color: @baseBoldColor;
        background: #fff;
        .message{
            display: block;
            width: 43/75rem;
            height: 41/75rem;
            // background: url('../assets/image/mine/message.png') no-repeat center center / 100% 100%;
        }
        .title {
            font-size: 38/75rem;
        }
        .setting{
            display: block;
            width: 43/75rem;
            height: 43/75rem;
            background: url('../assets/image/mine/setting.png') no-repeat center center / 100% 100%;
        }
    }
   
    .content-wrap{
        padding-top: 90/75rem;
        .border-box();
        .user-bg{
            width: 100%;
            .transition-bg{
                width: 100%;
                height: 254/75rem;
                background: url("../assets/image/mine/transition-bg.png") no-repeat center center / 100% 100%;
                .round(0 0 10/75rem 10/75rem);
                .flex-center();
                .user-box{
                        .avatar-box{
                            position: relative;
                            text-align: center;
                            .avatar{
                                display: inline-block;
                                width: 125/75rem;
                                height: 125/75rem;
                                border-radius: 50%;
                            }
                        }
                        .nick-name{
                            font-size: 30/75rem;
                            font-weight: bold;
                            text-align: center;
                        }
                }
            }
        }
        .table{
            width: 96%;
            .flex-around();
            margin: 30/75rem auto 20/75rem auto;
            & :active{
                background: #eee;
            }
            .table-cell{
                background: #fff;
                .flex-col;
                width: 25%;
                height: 150/75rem;
                padding-bottom: 10/75rem;
                font-size: 26/75rem;
                & > i {
                    margin: 16/75rem 0;
                }
            }
            .recommend{
                .round(30/75rem 0 0 30/75rem);
                .boxshadow(0,3/75rem,6/75rem,rgba(5, 0, 0, 0.16));
                & > i{
                    display: inline-block;
                    width: 60/75rem;
                    height: 63/75rem;
                    background: url('../assets/image/mine/recommend.png') no-repeat center center / 100% 100%;
                }
            }
            .recruitment{
                .boxshadow(0,0,8/75rem,rgba(5, 0, 0, 0.16));
                & > i{
                    display: inline-block;
                    width: 58/75rem;
                    height: 67/75rem;
                    background: url('../assets/image/mine/recruitment.png') no-repeat center center / 100% 100%;
                }
            }
            .attention{
                .boxshadow(0,0,8/75rem,rgba(5, 0, 0, 0.16));
                & > i{
                    display: inline-block;
                    width: 67/75rem;
                    height: 65/75rem;
                    background: url('../assets/image/mine/attention.png') no-repeat center center / 100% 100%;
                }
            }
             .service{
                .round(0 30/75rem 30/75rem 0);
                .boxshadow(0,3/75rem,6/75rem,rgba(5, 0, 0, 0.16));
                & > i{
                    display: inline-block;
                    width: 80/75rem;
                    height: 60/75rem;
                    background: url('../assets/image/mine/service.png') no-repeat center center / 100% 100%;
                }
            }
        }
        .feedback,.about{
            .flex-between();
            .round(30/75rem);
            padding: 32/75rem 23/75rem;
            .border-box();
            .boxshadow(0,3/75rem,6/75rem,rgba(5, 0, 0, 0.16));
            width: 96%;
            margin: 0 auto 20/75rem auto;
            font-size: 26/75rem;
            background: #fff;
            &:active{
                background: #FFF6F6;
            }
            .right{
                width: 23/75rem;
                height: 40/75rem;
                background: url(../assets/image/common/right@2x.png) no-repeat center center / 100% 100%;
            }
        }
        .feedback{
            .left{
                .flex-start();
                & > i {
                    display: inline-block;
                    width: 50/75rem;
                    height: 53/75rem;
                    margin-right: 34/75rem;
                    background: url('../assets/image/mine/feedback.png') no-repeat center center / 100% 100%;
                }
            }
        }
        .about{
            .left{
                .flex-start();
                & > i {
                    display: inline-block;
                    width: 58/75rem;
                    height: 50/75rem;
                    margin-right: 34/75rem;
                    background: url('../assets/image/mine/about.png') no-repeat center center / 100% 100%;
                }
            }
        }
    }
}
</style>