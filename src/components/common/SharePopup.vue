<template>
    <div transfer-dom>
        <popup v-model="show" position="bottom">
            <div class="container">
                <div class="itemList">
                    <div @click="wechatShare('0')">
                        <img src="../../assets/image/login/wechat@3x.png" alt="微信好友">
                        <span>微信好友</span> 
                    </div>
                    <div @click="wechatShare('1')">
                        <img src="../../assets/image/share-popup/timeline.png" alt="微信朋友圈">
                        <span>微信朋友圈</span> 
                    </div>
                    <div @click="QQShare('0')">
                        <img src="../../assets/image/login/qq@3x.png" alt="QQ好友">
                        <span>QQ好友</span> 
                    </div>
                    <div @click="QQShare('1')">
                        <img src="../../assets/image/share-popup/kongjian.png" alt="QQ空间">
                        <span>QQ空间</span> 
                    </div>
                </div>
                <div id="bottom" @click="cancel"><span>取消</span></div>
            </div>
        </popup>
    </div>
</template>
<script>
export default {
    props: ['showShare','shareData'],
    create () {
        this.show = this.showShare;
    },
    data () {
        return {
            show : false
        }
    },
    watch : {
        'showShare' (val) {
            this.show = this.showShare
        },
        'show' (val) {
            this.$emit('switchShowShare',val);
        }
    },
    methods : {
        cancel : function () {
            this.show = false;
        },
        wechatShare : function (type) {
            let sceneType;
            if(type === "0"){
                sceneType = Wechat.Scene.SESSION;
            }else if(type === "1") {
                sceneType = Wechat.Scene.TIMELINE;
            }
            Wechat.share({
                message: {
                    title : this.shareData.title,
                    description : this.shareData.text,
                    thumb : this.shareData.icon,
                    media: {
                        type: Wechat.Type.WEBPAGE,
                        webpageUrl: this.shareData.url
                    }
                },
                scene: sceneType  // share to Timeline
            }, (res) => {
            }, (reason) => {
            });
            this.show = false;
        },
        QQShare: function (type) {
            let sceneType;
            if(type === "0"){
                sceneType = QQSDK.Scene.QQ;
            }else if(type === "1") {
                sceneType = QQSDK.Scene.QQZone;
            }
            var args = {};
            args.client = QQSDK.ClientType.QQ;//QQSDK.ClientType.QQ,QQSDK.ClientType.TIM;
            args.scene = sceneType;//QQSDK.Scene.QQZone,QQSDK.Scene.Favorite
            args.url = this.shareData.url;
            args.title = this.shareData.title;
            args.description = this.shareData.text;
            args.image = this.shareData.icon;
            QQSDK.shareNews( () => {
            }, (failReason) => {
            }, args);
            this.show = false;
        }
    }
}
</script>
<style lang="less" scoped>
.container {
    .itemList {
        padding: 45/75rem 0;
        .flex-around();
        border-bottom: 1px solid rgba(0,0,0,0.1);
        & > div {
            .flex-col();
            & > img {
                width: 80/75rem;
                height: 80/75rem;
            }
            & > span {
                margin-top: 10/75rem;
            }
        }
    }
    #bottom {
        .flex-center();
        height: 85/75rem;
        & > span {
            font-size: 30/75rem;
            display: block;
        }
    }
}
</style>

