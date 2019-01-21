<template>
    <div class="interes-result-wrap">
        <v-title-header>
            测试结果
            <div class="right-ico" slot="right-ico" @click="showShare = true"></div>
        </v-title-header>
        <div class="content-wrap">
            <div class="img-box">
                <img :src="resData.img">
            </div>
            <div class="result">{{resData.title}}</div>
            <p>{{resData.result}}</p>
            <div class="bottom">
                <button @click="$router.go(-1);">重新测试</button>
                <button @click="$jump('/interestingMore')">更多测试</button>
            </div>
        </div>
        <v-share-popup :showShare='showShare' :shareData='shareData' @switchShowShare='switchShowShare' @shareSuccess='showShare = false' @shareFail='showShare = false'></v-share-popup>
    </div>
</template>
<script>
export default {
    data () {
        return {
            resData: {},
            showShare : false,
            shareData : global.APP_SHARE_APP
        }
    },
    created() {
        this.getResult();
    },
    methods: {
        getResult: function () {
            let params = {
                cid : '109',
                tid : this.$route.query.id,
                num : this.$route.query.resultNum, 
            }
            this.$http.post('/suan/apidata',params,'cesuan',null,this.showAnswer,this.failure);
        },
        showAnswer: function (res) {
            this.resData = res.data[0];
        },
        switchShowShare : function (val) {
            this.showShare = val;
        }
    }
}
</script>
<style lang="less" scoped>
.right-ico{
    width: 38/75rem;
    height: 38/75rem;
    background: url('../assets/image/common/share.png')no-repeat center center / 100% 100%;
}
.content-wrap{
    padding-top: 90/75rem;
    .border-box();
    .img-box{
        width: 100%;
        height: 290/75rem;
        position: relative;
        overflow: hidden;
        & > img{
            position: absolute;
            top: -140/75rem;
            left: 0;
        }
    }
    .result{
        margin: 25/75rem auto 34/75rem auto;
        text-align: center;
        font-size: 34/75rem;
    }
    p{
        padding: 0 40/75rem;
        .border-box();
        text-indent: 2em;
        font-size: 30/75rem;
    }
    .bottom{
        position: fixed;
        bottom: 0;
        left: 0;
        .flex-start();
        width: 100%;
        button {
            .my-button();
            width: 50%;
            height: 100/75rem;
            background: @baseBoldColor;
            font-size: 34/75rem;
        }
        button:nth-child(1){
            background: rgba(0,0,0,0.2);
        }
    }
}
</style>


