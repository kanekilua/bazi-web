<template>
    <div class="wrap">
        <v-header></v-header>
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
                        <div class="right-item"><img :src="avatar"></div>
                        <i class="right-ico"></i>
                    </div>
                </div>
                <div class="item">
                    <div class="left">
                        <div>昵称</div>
                    </div>
                    <div class="right">
                        <input type="text" class="right-item nick-input" v-model="nickName">
                        <i class="right-ico"></i>
                    </div>
                </div>
                <div class="item" @click="$jump('/baziBirth')">
                    <div class="left">
                        <div>生辰八字</div>
                    </div>
                    <div class="right">
                        <div class="right-item">已完善</div>
                        <i class="right-ico"></i>
                    </div>
                </div>
                <div class="item" @click="showDialogStyle = true">
                    <div class="left">
                        <div>背景图片</div>
                    </div>
                    <div class="right">
                        <div class="right-item"><img src="../assets/image/mine/avatar.png"></div>
                        <i class="right-ico"></i>
                    </div>
                </div>
            </div>
            <!-- 弹窗 -->
            <div v-transfer-dom>
                <x-dialog v-model="showDialogStyle" hide-on-blur :dialog-style="{'max-width': '100%', width: '100%', height: '30%', 'background-color': 'transparent'}">
                    <div class="img-dialog">
                        <img class="fan" src="../assets/image/mine/fan.png">
                        <button class="takePhoto" @click="camera">拍照</button>
                        <button class="camera" @click="photo">从相册中选择</button>
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
            image : null,
            avatar : require('../assets/image/mine/avatar.png')
        }
    },
    methods: {
        camera : function () {
            this.showDialogStyle = false;
            var cameraOptions={
                quality: 30,
                sourceType:1,
                allowEdit: true,
                saveToPhotoAlbum : true,
                destinationType: Camera.DestinationType.DATA_URL, 
            };
            navigator.camera.getPicture(this.cameraSuccess, this.cameraError, cameraOptions);
        },
        photo : function () {
            this.showDialogStyle = false;
            var cameraOptions={
                quality: 30,
                sourceType:0,
                allowEdit: true,
                destinationType:  Camera.DestinationType.DATA_URL, 
            };
            navigator.camera.getPicture(this.cameraSuccess, this.cameraError, cameraOptions);
        },
        cameraSuccess : function (imageData) {
            return this.avatar = 'data:image/jpeg;base64,' + imageData;
        },
        cameraError : function (message) {
            // console.log(message);
        }
    },
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
                .flex-around();
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
                    width: 44/75rem;
                    height: 44/75rem;
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
        .takePhoto{
            .round(30/75rem 30/75rem 0 0);
            background: #fff;
        }
        .camera{
            .round(0 0 30/75rem 30/75rem);
            background: @baseColor;
            color: #fff;
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

