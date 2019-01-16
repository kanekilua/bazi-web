<template>
    <div class="setting-wrap">
        <v-title-header>
            设置
        </v-title-header>
        <div class="content-wrap">
            <div class="list">
                <div class="item" v-for="(item,index) in List" :key="index" @click="jump(item.route)">
                    <div class="left">
                        <img :src="item.img">
                        <div>{{item.title}}</div>
                    </div>
                    <i class="right"></i>
                </div>
            </div>
            <button class="exit-btn" @click="loginFlag ? showDialogStyle = true : $jump('/login')">{{loginFlag ? '退出登录' : '登录'}}</button>
        </div>
        <!-- 弹窗 -->
        <div v-transfer-dom>
            <x-dialog :show="showDialogStyle" hide-on-blur :dialog-style="{'max-width': '100%', width: '100%', height: '30%', 'background-color': 'transparent'}">
                <div class="img-dialog">
                    <button class="ask">确定退出登录？</button>
                    <div class="btn-list">
                        <button class="cancel" @click="showDialogStyle = false">取消</button>
                        <button class="confirm" @click="logout">确认</button>
                    </div>
                </div>
            </x-dialog>
        </div>
    </div>
</template>
<script>
import {XDialog,TransferDomDirective as TransferDom} from 'vux'
export default {
    directives: {
        TransferDom
    },
    data () {
        return {
            showDialogStyle: false,
            List: [
                {title: "个人资料", img: require('../assets/image/mine/person-file.png'), route: "/main/mine/setting/userFile"},
                {title: "账户与安全", img: require('../assets/image/mine/save.png'), route: "/main/mine/setting/security"},
                {title: "用户协议", img: require('../assets/image/mine/agreement.png'), route: "/userAgreement"},
                {title: "检测更新", img: require('../assets/image/mine/update.png'), route: "/main/mine/setting"},
            ],
            loginFlag : true,
        }
    },
    created () {
        this.init();
    },
    methods: {
        init : function () {
            if(this.$store.state.loginAccount === '') {
                this.loginFlag = false
            }
        },
        jump : function (path) {
            if((path === "/main/mine/setting/userFile" || path === "/main/mine/setting/security") && !this.loginFlag) {
                path = "/login";
            }
            this.$jump(path);
        },
        logout :function () {
            let token = localStorage.getItem(global.APP_TOKEN);
            let header = {'Authorization':token};
            this.$http.get('/logout',null,'app',header,this.logoutSuccess,null);
            
            this.showDialogStyle = false;
        },
        logoutSuccess : function (result) {
            this.$store.commit("updateLoginAccount",'');
            localStorage.setItem(global.APP_TOKEN,result.data.token);
            this.$jump('/login');
        },
    },
}
</script>
<style lang="less" scoped>
.setting-wrap{
    width: 100%;
    height: 100%;
    background: #f1f1f1;
}
.content-wrap{
    padding-top: 90/75rem;
    .border-box();
    .list{
        margin-top: 10/75rem;
        .item{
            .flex-between();
            padding: 32/75rem 23/75rem;
            .border-box();
            .boxshadow(0,3/75rem,6/75rem,rgba(5, 0, 0, 0.16));
            width: 100%;
            margin: 0 auto 10/75rem auto;
            font-size: 30/75rem;
            background: #fff;
            .left{
                .flex-start();
                img{
                    margin-right: 30/75rem;
                }
            }
            .right{
                width: 20/75rem;
                height: 32/75rem;
                background: url(../assets/image/common/right@2x.png) no-repeat center center / 100% 100%;
            }
        }
        .item:nth-child(1){
            img{
                width: 48/75rem;
                height: 40/75rem;
            } 
        }
        .item:nth-child(2){
            img{
                width: 41/75rem;
                height: 48/75rem;
            } 
        }
        .item:nth-child(3){
            img{
                width: 37/75rem;
                height: 47/75rem;
            } 
        }
        .item:nth-child(4){
            img{
                width: 46/75rem;
                height: 46/75rem;
            } 
        }
    }
    .exit-btn{
        width: 640/75rem;
        height: 80/75rem;
        display: block;
        margin: 175/75rem auto;
        background:@baseBoldColor;
        .round(60/75rem);
        border: none;
        color: #fff;
        font-size: 34/75rem;
        outline: none;
        &:active{
            background: #eee;
        }
    }
}
// 弹窗
/deep/ .weui-dialog{
    .flex-center();
    .img-dialog{
        width: 440/75rem;
        margin: 0 auto;
        .flex-col();
        & > button {
            display: block;
            width: 100%;
            height: 105/75rem;
            border: none;
            outline: none;
            &:active{
                background: #eee;
            }
        }
        .ask{
            height: 105/75rem;
            .round(10/75rem 10/75rem 0 0);
            background: #fff;
            font-size: 34/75rem;
            font-weight: bold;
            border-bottom: 1px solid #cccccc;
            .border-box();
        }
        .btn-list{
            .flex-start();
            width: 100%;
            height: 65/75rem;
            line-height: 65/75rem;
            .round(0 0 10/75rem 10/75rem);
            & > button{
                .my-button();
                width: 50%;
                height: 100%;
                font-size: 28/75rem;
            }
            .cancel{
                .round(0 0 0 10/75rem);
                color: #000;
                background: #fff;
            }
            .confirm{
                .round(0 0 10/75rem 0);
                background: @baseBoldColor;
            }
        }
    }
}
</style>

