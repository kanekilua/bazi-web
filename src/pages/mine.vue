<template>
    <div class="wrap">
        <v-header></v-header>
        <div class="user-bg">
            <transition name="trans">
                <div class="transition-bg" v-if="showTrans">
                    <div class="user-box">
                        <img  class= "avatar" src="../assets/image/mine/avatar.png">
                        <div class="nick-name">ANKGLG</div>
                    </div>
                </div>
            </transition>
        </div>
        <div class="content">
            <div class="mine-header">
                <div>我的</div>
                <div class="ico-list">
                    <i class="setting" @click="$jump('/main/mine/setting')"></i>
                    <i class="message" @click="$jump('/main/mine/UserMessage')"></i>
                </div>
            </div>
            <div class="table">
                <div class="table-cell recommend">
                    <i></i>
                    <div>推荐好友</div>
                </div>
                <div class="table-cell recruitment" @click="$jump('/main/mine/recruitment/recruitmentStep1')">
                    <i></i>
                    <div>大师招募</div>
                </div>
                <div class="table-cell attention" @click="$jump('/main/mine/myCollection')">
                    <i></i>
                    <div>我的收藏</div>
                </div>
                <div class="table-cell service" @click="$jump('/main/mine/contactService')">
                    <i></i>
                    <div>联系客服</div>
                </div>
            </div>
            <div class="feedback" @click="$jump('/main/mine/feedback')">
                <div class="left">
                    <i></i>
                    <div>意见反馈</div>
                </div>
                <i class="right"></i>
            </div>
            <div class="about">
                <div class="left">
                    <i></i>
                    <div>关于我们</div>
                </div>
                <i class="right"></i>
            </div>
        </div>
        <v-tab-bar></v-tab-bar>
    </div>
</template>

<script>
export default {
    data () {
        return {
            showTrans: false,
        }
    },
    mounted() {
        this.showTrans=true;
    }
}
</script>
<style lang="less" scoped>
button{
    width: 100%;
    height: 100px;
    margin-top: 300px;
}
.wrap{
    width:100%;
    overflow-x: hidden;
    .user-bg{
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        .transition-bg{
            width: 110%;
            height: 383/75rem;
            .translate(-220/75rem,0);
            background: url('../assets/image/mine/transition-bg.png') no-repeat center center / 100% 100%;
            .flex-end();
           .user-box{
                margin-top: 20/75rem;
                margin-right: 122/75rem;
                .avatar{
                    width: 150/75rem;
                    height: 150/75rem;
                    border-radius: 50%;
                }
                .nick-name{
                    margin-top: 20/75rem;
                    font-size: 26/75rem;
                    font-weight: bold;
                    text-align: center;
                }
           }
        }
        .trans-enter{
            .translate(-800/75rem,0);
        }
        .trans-enter-to{
            .translate(-220/75rem,0);
        }
        .trans-enter-active{
            transition: all 1s;
        }
    }
    .content{
        .translate(0,-40/75rem);
        .mine-header{
            width: 100%;
            padding: 0 40/75rem;
            .border-box();
            .flex-between();
            font-size: 40/75rem;
            color: @baseColor;
            font-weight: 600;
            .setting{
                display: inline-block;
                width: 45/75rem;
                height: 44/75rem;
                background: url('../assets/image/mine/setting.png') no-repeat center center / 100% 100%;
            }
            .message{
                display: inline-block;
                margin-left: 20/75rem;
                width: 43/75rem;
                height: 38/75rem;
                background: url('../assets/image/mine/message.png') no-repeat center center / 100% 100%;
            }
        }
        .table{
            & :active{
                background: #FFF6F6;
            }
            width: 96%;
            margin: 360/75rem auto 64/75rem auto;
            .flex-around();
            .table-cell{
                .flex-col;
                width: 25%;
                padding-bottom: 28/75rem;
                font-size: 26/75rem;
                & > i {
                    margin: 32/75rem 0;
                }
            }
            .recommend{
                .round(30/75rem 0 0 30/75rem);
                .boxshadow(0,3/75rem,6/75rem,rgba(5, 0, 0, 0.16));
                & > i{
                    display: inline-block;
                    width: 45/75rem;
                    height: 44/75rem;
                    background: url('../assets/image/mine/recommend.png') no-repeat center center / 100% 100%;
                }
            }
            .recruitment{
                .boxshadow(0,0,8/75rem,rgba(5, 0, 0, 0.16));
                & > i{
                    display: inline-block;
                    width: 58/75rem;
                    height: 44/75rem;
                    background: url('../assets/image/mine/recruitment.png') no-repeat center center / 100% 100%;
                }
            }
            .attention{
                .boxshadow(0,0,8/75rem,rgba(5, 0, 0, 0.16));
                & > i{
                    display: inline-block;
                    width: 44/75rem;
                    height: 44/75rem;
                    background: url('../assets/image/mine/attention.png') no-repeat center center / 100% 100%;
                }
            }
             .service{
                .round(0 30/75rem 30/75rem 0);
                .boxshadow(0,3/75rem,6/75rem,rgba(5, 0, 0, 0.16));
                & > i{
                    display: inline-block;
                    width: 36/75rem;
                    height: 44/75rem;
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
            margin: 0 auto 32/75rem auto;
            font-size: 26/75rem;
            &:active{
                background: #FFF6F6;
            }
            .right{
                width: 44/75rem;
                height: 44/75rem;
                background: url(../assets/image/common/right@2x.png) no-repeat center center / 100% 100%;
            }
        }
        .feedback{
            .left{
                .flex-start();
                & > i {
                    display: inline-block;
                    width: 57/75rem;
                    height: 44/75rem;
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
                    width: 37/75rem;
                    height: 44/75rem;
                    margin-right: 34/75rem;
                    background: url('../assets/image/mine/about.png') no-repeat center center / 100% 100%;
                }
            }
        }
    }
}
</style>