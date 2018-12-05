<template>
    <div class="today-wrap">
        <x-button>唤起分享popup</x-button>
        <x-button @click.native="shareWechat('0')">微信好友分享</x-button>
        <x-button @click.native="shareWechat('1')">微信朋友圈分享</x-button>
        <x-button @click.native="shareQQ('0')">QQ好友分享</x-button>
        <x-button @click.native="shareQQ('1')">QQ空间分享</x-button>
        <x-button @click.native="wechatPay">微信支付</x-button>
        <x-button @click.native="aliPay">支付宝支付</x-button>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    computed : {
        ...mapState(['loginAccount'])
    },
    methods : {
        shareWechat : function (type) {
            let sceneType;
            if(type === "0"){
                sceneType = Wechat.Scene.SESSION;
            }else if(type === "1") {
                sceneType = Wechat.Scene.TIMELINE;
            }
            var icon = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543927572587&di=8fc2550e1b62ee976840a8ea69f54f8c&imgtype=0&src=http%3A%2F%2Fi-1.52miji.com%2F2018%2F3%2F2%2F8571d41f-3754-4960-b2b1-d116954e30a1.png%3Fwidth%3D360%26height%3D360';
            var title = 'cordova微信分享测试';
            var text = 'Monster';
            var url = 'http://www.szmonster.com/';
            Wechat.share({
                message: {
                    title : title,
                    description : text,
                    thumb : icon,
                    media: {
                        type: Wechat.Type.WEBPAGE,
                        webpageUrl: url
                    }
                },
                scene: sceneType  // share to Timeline
            }, (res) => {
                this.$vux.alert.show({
                    title: '微信好友分享成功辣~~',
                    content: JSON.stringify(res)
                })
            }, (reason) => {
                this.$vux.alert.show({
                    title: '微信朋友圈分享失败辣~~',
                    content: reason
                })
            });
        },
        shareQQ : function (type) {
            let sceneType;
            if(type === "0"){
                sceneType = QQSDK.Scene.QQ;
            }else if(type === "1") {
                sceneType = QQSDK.Scene.QQZone;
            }
            var icon = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543927572587&di=8fc2550e1b62ee976840a8ea69f54f8c&imgtype=0&src=http%3A%2F%2Fi-1.52miji.com%2F2018%2F3%2F2%2F8571d41f-3754-4960-b2b1-d116954e30a1.png%3Fwidth%3D360%26height%3D360';
            var title = 'cordova-QQ分享测试';
            var text = 'Monster';
            var url = 'http://www.szmonster.com/';
            var args = {};
            args.client = QQSDK.ClientType.QQ;//QQSDK.ClientType.QQ,QQSDK.ClientType.TIM;
            args.scene = sceneType;//QQSDK.Scene.QQZone,QQSDK.Scene.Favorite
            args.url = url;
            args.title = title;
            args.description = text;
            args.image = icon;
            QQSDK.shareNews( () => {
                 this.$vux.alert.show({
                    title: 'QQ好友分享成功辣~~',
                    content: 'QQ好友分享成功辣~~'
                })
            }, (failReason) => {
                this.$vux.alert.show({
                    title: 'QQ好友分享失败辣~~',
                    content: JSON.stringify(failReason)
                })
            }, args);
        },
        wechatPay : function() {
            let token = localStorage.getItem(global.APP_TOKEN);
            let header = {'Authorization':token};
            this.$http.get('/wxAppPay',null,'payst',header,(result) => {
                let json = JSON.parse(result.data);
                var params = {
                    partnerid: json.partnerid, // merchant id
                    prepayid: json.prepayid, // prepay id
                    noncestr: json.noncestr, // nonce
                    timestamp: json.timestamp, // timestamp
                    sign: json.sign, // signed string
                };
                this.$vux.alert.show({
                    title: '查看一下参数是否正确/doge',
                    content: JSON.stringify(params)
                })
                Wechat.sendPaymentRequest(params, function () {
                    this.$vux.toast.text('微信支付成功~~','top');
                }, function (reason) {
                    this.$vux.toast.text('微信支付失败原因 ：' + reason,'top');
                });
            },null);
        },
        aliPay : function() {
            let token = localStorage.getItem(global.APP_TOKEN);
            let header = {'Authorization':token};
            this.$http.get('/aliAppPay',null,'payst',header,(result) => {
                let payInfo = result.data;
                cordova.plugins.alipay.payment(payInfo, (res) => {
                    this.$vux.toast.text('支付宝支付成功~~','top');
                }, (error) => {
                    this.$vux.toast.text('支付宝支付失败原因 ：' + error,'top');
                });
            },null);
        }
        
    }
}
</script>

<style lang="less" scoped>
.today-wrap{

    height: 500px;
}
</style>

