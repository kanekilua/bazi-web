<template>
    <div class="wrap">
        <v-header></v-header>
        <v-title-header>
            设置
        </v-title-header>
        <div class="content-wrap">
            <div class="list">
                <div class="item" v-for="(item,index) in List" :key="index" @click="$jump(item.route)">
                    <div class="left">
                        <div>{{item.title}}</div>
                    </div>
                    <i class="right"></i>
                </div>
            </div>
            <button class="exit-btn" @click="showDialogStyle = true">退出登入</button>
        </div>
        <!-- 弹窗 -->
        <div v-transfer-dom>
            <x-dialog :show="showDialogStyle" hide-on-blur :dialog-style="{'max-width': '100%', width: '100%', height: '30%', 'background-color': 'transparent'}">
                <div class="img-dialog">
                    <img class="fan" src="../assets/image/mine/fan.png">
                    <button class="ask">确定退出登入？</button>
                    <div class="btn-list">
                        <button class="cancel" @click="showDialogStyle = false">取消</button>
                        <button class="confirm" @click="showDialogStyle = false">确认</button>
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
                {title: "个人资料", route: "/main/mine/setting/userFile"},
                {title: "账户与安全", route: "/main/mine/setting/security"},
                {title: "用户协议", route: "/userAgreement"},
                {title: "检测更新", route: "/main/mine/setting"},
            ],
        }
    }
}
</script>
<style lang="less" scoped>
.content-wrap{
    position: absolute;
    top: 169/75rem;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: auto;
    .list{
        margin-top: 32/75rem;
        .item{
            .flex-between();
            .round(30/75rem);
            padding: 32/75rem 23/75rem;
            .border-box();
            .boxshadow(0,3/75rem,6/75rem,rgba(5, 0, 0, 0.16));
            width: 96%;
            margin: 0 auto 32/75rem auto;
            font-size: 26/75rem;
            .right{
                width: 44/75rem;
                height: 44/75rem;
                background: url(../assets/image/common/right@2x.png) no-repeat center center / 100% 100%;
            }
        }
    }
    .exit-btn{
        width: 500/75rem;
        height: 100/75rem;
        display: block;
        margin: 70/75rem auto;
        background:@baseColor;
        .round(30/75rem);
        border: none;
        color: #fff;
        font-size: 28/75rem;
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
        position: relative;
        width: 90%;
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
            height: 154/75rem;
            .round(45/75rem 45/75rem 0 0);
            background: #fff;
            font-size: 28/75rem;
        }
        .btn-list{
            .flex-start();
            width: 100%;
            height: 87/75rem;
            line-height: 87/75rem;
            .round(0 0 45/75rem 45/75rem);
            & > button{
                .my-button();
                width: 50%;
                height: 100%;
                font-size: 28/75rem;
            }
            .cancel{
                .round(0 0 0 45/75rem);
                color: #000;
            }
            .confirm{
                .round(0 0 45/75rem 0);
                background: @baseColor;
            }
        }
        .fan{
            position: absolute;
            right: 68/75rem;
            top: -78/75rem;
            width: 158/75rem;
            height: 118/75rem;   
        }
    }
}
</style>

