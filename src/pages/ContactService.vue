<template>
    <div class="wrap">
        <v-header></v-header>
        <v-title-header>
            联系客服
        </v-title-header>
        <div class="content-wrap">
            <div class="wechat">
                <div class="wechat-key">客服微信</div>
                <div>400121542</div>
            </div>
            <img class="wechat-code" src="../assets/image/common/wechat-code.png">
            <div>扫码加客服</div>
            <v-title-nav><h2 slot="title">客服留言</h2><div slot="more"></div></v-title-nav>
            <textarea placeholder="请输入您的问题，客服将会尽快为你解答"></textarea>
            <button class="conmit">确认提交</button>
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
            
        }
    },
    methods: {
        
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
    padding: 38/75rem 32/75rem;
    .border-box();
    .wechat{
        .flex-start();
        width: 100%;
        height: 90/75rem;
        line-height: 90/75rem;
        .boxshadow(0,3/75rem,6/75rem,rgba(0,0,0,0.16));
        .round(26/75rem);
        font-size: 26/75rem;
        .wechat-key{
            margin: 0 40/75rem;
        }
    }
    .wechat-code{
        display: block;
        width: 205/75rem;
        height: 205/75rem;
        margin: 40/75rem auto 24/75rem auto; 
        & + div{
            text-align: center;
            font-size: 26/75rem;
        }
    }
    textarea{
        overflow: hidden;
        width: 686/75rem;
        height: 285/75rem;
        .boxshadow(0,3/75rem,6/75rem,rgba(0,0,0,0.16));
        .round(26/75rem);
        resize: none;
        border: none;
        margin-top: 17/75rem;
        padding: 32/75rem;
        .border-box();
        outline: none;
    }
    .conmit{
        width: 500/75rem;
        height: 100/75rem;
        .my-button();
        background: @baseColor;
        margin: 80/75rem auto;
        .round(30/75rem);
        font-size: 28/75rem;
    }
}

</style>