<template>
    <div class="today-wrap">
        <x-button @click.native="wechatPay">微信支付</x-button>
        <x-button @click.native="aliPay">支付宝支付</x-button>
    </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex'
export default {
    computed : {
        ...mapState(['loginAccount'])
    },
    methods : {
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
                    this.$vux.toast.text('支付成功','bottom');
                }, function (reason) {
                    this.$vux.toast.text('支付失败','bottom');
                });
            },null);
        },
        aliPay : function() {
            let token = localStorage.getItem(global.APP_TOKEN);
            let header = {'Authorization':token};
            this.$http.get('/aliAppPay',null,'payst',header,(result) => {
                let payInfo = result.data;
                cordova.plugins.alipay.payment(payInfo, (res) => {
                    this.$vux.toast.text('支付成功','bottom');
                }, (error) => {
                    this.$vux.toast.text('支付失败','bottom');
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

