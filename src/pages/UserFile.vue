<template>
    <div class="wrap">
        <v-title-header>
            设置
        </v-title-header>
        <div class="content-wrap">
            <div class="list">
                <div class="item" @click="showDialogStyle = true">
                    <div class="left">
                        <div>头像</div>
                    </div>
                    <div class="right">
                        <div class="right-item"><img src="../assets/image/mine/avatar.png"></div>
                        <i class="right-ico"></i>
                    </div>
                </div>
                <div class="item">
                    <div class="left">
                        <div>姓名</div>
                    </div>
                    <div class="right">
                        <input type="text" class="right-item nick-input" v-model="nickName">
                        <i class="right-ico"></i>
                    </div>
                </div>
                <div class="item" @click="$jump('/birth')">
                    <div class="left">
                        <div>生辰八字</div>
                    </div>
                    <div class="right">
                        <div class="right-item">已完善</div>
                        <i class="right-ico"></i>
                    </div>
                </div>
                <!-- <div class="item" @click="showDialogStyle = true">
                    <div class="left">
                        <div>背景图片</div>
                    </div>
                    <div class="right">
                        <div class="right-item"><img src="../assets/image/mine/transition-bg.png"></div>
                        <i class="right-ico"></i>
                    </div>
                </div> -->
            </div>
            <!-- 弹窗 -->
            <div v-transfer-dom>
                <x-dialog v-model="showDialogStyle" hide-on-blur :dialog-style="{'max-width': '100%', width: '100%', height: '30%', 'background-color': 'transparent'}">
                    <div class="img-dialog">
                        <button class="takePhoto">拍照</button>
                        <button class="camera">从相册中选择</button>
                    </div>
                </x-dialog>
            </div>
        </div>
    </div>
</template>
<script>
import {XDialog,TransferDomDirective as TransferDom,Picker} from 'vux'
export default {
    directives: {
        TransferDom
    },
    data () {
        return {
            showDialogStyle: false,//弹窗显示
            nickName: "天道酬勤",
        }
    }
}
</script>
<style lang="less" scoped>
.wrap{
    width: 100%;
    height: 100%;
    background: #f1f1f1;
    .content-wrap{
        padding-top: 90/75rem;
        .border-box();
        .list{
            margin-top: 10/75rem;
            .item{
                .flex-between();
                padding: 32/75rem 23/75rem;
                .border-box();
                width: 100%;
                height: 100/75rem;
                margin: 0 auto 10/75rem auto;
                font-size: 30/75rem;
                background: #fff;
                .right{
                    .flex-around();
                    font-size: 28/75rem;
                    .right-item{
                        .flex-col();
                        margin-right: 20/75rem;
                        font-size: 26/75rem;
                        & > img{
                            width: 72/75rem;
                            height: 72/75rem;
                            .round(50%);
                        }
                    }
                    .right-ico{
                        display: block;
                        width: 20/75rem;
                        height: 32/75rem;
                        background: url(../assets/image/common/right@2x.png) no-repeat center center / 100% 100%;
                    }
                    .nick-input{
                        width: 100%;
                        text-align: right;
                        border: none;
                        outline: none;
                    }
                }
            }
        }
    }
}

/deep/ .weui-dialog{
    .flex-center();
    .img-dialog{
        width: 90%;
        margin: 0 auto;
        .flex-col();
        & > button {
            display: block;
            width: 440/75rem;
            height: 86/75rem;
            border: none;
            outline: none;
            font-size: 34/75rem;
            font-weight: bold;
            &:active{
                background: #eee;
            }
        }
        .takePhoto{
            .round(10/75rem 10/75rem 0 0);
            background: #fff;
        }
        .camera{
            .round(0 0 10/75rem 10/75rem);
            background: @baseBoldColor;
            color: #fff;
        }
    }
}
</style>

