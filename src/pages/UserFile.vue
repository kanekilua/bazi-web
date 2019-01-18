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
                        <div class="right-item"><img :src="avanta"></div>
                        <i class="right-ico"></i>
                    </div>
                </div>
                <div class="item">
                    <div class="left">
                        <div>姓名</div>
                    </div>
                    <div class="right" @click="nameDialog = true">
                        <input type="text" class="right-item nick-input" readonly v-model="name">
                        <i class="right-ico"></i>
                    </div>
                </div>
                <div class="item" @click="toBirth">
                    <div class="left">
                        <div>生辰八字</div>
                    </div>
                    <div class="right">
                        <div class="right-item">已完善</div>
                        <i class="right-ico"></i>
                    </div>
                </div>
            </div>
            <!-- 头像弹窗 -->
            <div v-transfer-dom>
                <x-dialog v-model="showDialogStyle" hide-on-blur :dialog-style="{'max-width': '100%', width: '100%', height: '20%', 'background-color': 'transparent'}">
                    <div class="img-dialog">
                        <button class="takePhoto" @click="camera">拍照</button>
                        <button class="camera" @click="photo">从相册中选择</button>
                    </div>
                </x-dialog>
            </div>
            <!-- 姓名弹窗 -->
            <div v-transfer-dom>
                <x-dialog v-model="nameDialog" hide-on-blur :dialog-style="{'max-width': '100%', width: '100%', height: '20%', 'background-color': 'transparent'}">
                    <div class="name-dialog">
                        <div class="top">
                            <input type="text" placeholder="请输入您的姓名" v-model="newName">
                        </div>
                        <div class="bottom">
                            <button @click="nameDialog = false">取消</button>
                            <button @click="changeName">确定</button>
                        </div>
                    </div>
                </x-dialog>
            </div>
        </div>
    </div>
</template>
<script>
import {mapState } from 'vuex'
import {XDialog,TransferDomDirective as TransferDom,Picker} from 'vux'
export default {
    directives: {
        TransferDom
    },
    data () {
        return {
            showDialogStyle: false,//弹窗显示
            nameDialog : false,
            name: "",
            newName : "",
            avanta : require("../assets/image/mine/avatar.png"),
            image : null
        }
    },
    created () {
        this.init();
    },
    methods: {
        init : function () {
            if(this.$store.state.loginAccountInfo !== null ) {
                this.name = this.$store.state.loginAccountInfo.realname;
                this.avanta = this.$store.state.loginAccountInfo.avatar === "" ? this.$store.state.loginAccountInfo.gender + '' === '1' ? require("../assets/image/common/man.png") : require("../assets/image/common/woman.png") :  this.$store.state.loginAccountInfo.avatar;
            }else {
                this.$jump('/login');
            }         
        },
        changeName: function () {
            let header = {
                'Authorization' : localStorage.getItem(global.APP_TOKEN)
            }
            let params = {
                'realname' : this.newName
            }
            this.$http.post('/userInfo',params,'app',header,(res) => {
                if(res.code === 'success') {
                    this.name = this.newName;
                    this.nameDialog = false;
                    this.newName = "";

                    let loginAccountInfo = this.$store.state.loginAccountInfo;
                    loginAccountInfo.realname = this.name;
                    this.$store.commit('updateLoginAccountInfo',loginAccountInfo);
                }
            },this.failure);
        },
        toBirth : function () {
            this.$router.push({
                name : 'birth',
                query : {
                    pre : 'userFile'
                }
            })
        },
        camera : function () {
            this.showDialogStyle = false;
            var cameraOptions={
                quality: 100,
                sourceType:1,
                allowEdit: true,
                targetWidth : 200,
                targetHeight : 200,
                saveToPhotoAlbum : true,
                destinationType: Camera.DestinationType.DATA_URL, 
            };
            navigator.camera.getPicture(this.cameraSuccess, this.cameraError, cameraOptions);
        },
        photo : function () {
            this.showDialogStyle = false;
            var cameraOptions={
                quality: 100,
                sourceType:0,
                targetWidth : 200,
                targetHeight : 200,
                allowEdit: true,
                destinationType:  Camera.DestinationType.DATA_URL, 
            };
            navigator.camera.getPicture(this.cameraSuccess, this.cameraError, cameraOptions);
        },
        cameraSuccess : function (imageData) {
            let imageName = 'avatar' + this.$store.state.loginAccount + '.jpg';
            let imageFile = this.dataURLtoFile('data:image/jpeg;base64,' + imageData,imageName);
            let param = new FormData();
            param.append('file',imageFile,imageName);
            let header = {
                'Authorization':localStorage.getItem(global.APP_TOKEN),
                'Content-Type' : 'multipart/form-data'
            };
            this.$http.post('/features/avatar',param,null,header,(res) => {
                if(res.code === "success") {
                    this.avanta = res.data.upload_url;

                    let loginAccountInfo = this.$store.state.loginAccountInfo;
                    loginAccountInfo.avatar = this.avanta;
                    this.$store.commit('updateLoginAccountInfo',loginAccountInfo);
                }
            },null);
        },
        cameraError : function (message) {
            // console.log(message);
        },
        dataURLtoFile : function (dataurl, filename) {//将base64转换为文件
            var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
            while(n--){
                u8arr[n] = bstr.charCodeAt(n);
            }
            return new File([u8arr], filename, {type:'image/png'});
        }
    },
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
    .name-dialog{
        width: 440/75rem;
        .top{
            .flex-center();
            width: 100%;
            height: 86/75rem;
            text-align: center;
            background: #fff;
            .round(20/75rem 20/75rem 0 0);
            input{
                .my-input();
                height: 60/75rem;
                width: 70%; 
                text-align: center;
                font-size: 34/75rem;
                border-bottom: 1px solid rgba(221,221,221,1);           
            }
        }
        .bottom{
            .flex-start();
            width: 100%;
            border-top: 1px solid @baseBoldColor;
            .border-box();
            button{
                .my-button();
                width: 50%;
                height: 86/75rem;
                background: #fff;
                font-size: 34/75rem;
                color: @baseBoldColor;

            }
            button:nth-child(1){
                .round( 0 0 0 20/75rem);
            }
            button:nth-child(2){
                .my-button();
                background: @baseBoldColor;
                color: #fff;
                .round( 0 0 20/75rem 0);
                font-size: 34/75rem;
            }
        }
    }
}
</style>

