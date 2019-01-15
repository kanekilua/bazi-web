<template>
    <div class="interes-inner-wrap">
         <v-title-header>
            趣味测试
            <div class="right-ico" slot="right-ico"></div>
        </v-title-header>
        <div class="banner">
            <img :src="data.img" alt="">
            <h2>{{data.title}}</h2>
        </div>
        <p class="shortText">{{data.shorttext}}</p>
        <button class="begin-test" @click="beginTest">开始测算</button>
        <div class="tips">(本测试共15道题，有4个答案，系统自动跳转。仅供娱乐，非专业心理指导)</div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            data: this.$route.params.testList
        }
    },
    mounted(){
        console.log(this.data)
    },
    methods: {
        beginTest: function () {
            this.$router.push({
                name: 'interestingTest',
                query: {
                    id: this.data.id,
                },
                params: {
                    title: this.data.title,
                }
            })
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
.interes-inner-wrap{
    .banner{
        width: 100%;
        height: 418/75rem;
        overflow: hidden;
        position: relative;
        img{
            width: 100%;
            height: auto;
        }
        h2{
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 82/75rem;
            line-height: 82/75rem;
            padding-left: 30/75rem;
            .border-box();
            background: rgba(0,0,0,0.7);
            font-size: 40/75rem;
            color: #fff;
        }
    }
    .shortText{
        width: 100%;
        padding: 50/75rem 30/75rem;
        .border-box();
        font-size: 30/75rem;
        text-indent: 2em;
    }
    .begin-test{
        display: block;
        margin: 170/75rem auto;
        width: 360/75rem;
        height: 78/75rem;
        .my-button();
        font-size: 34/75rem;
        .round(50/75rem);
        background: @baseBoldColor;
    }
    .tips{
        text-indent: 2em;
        font-size: 26/75rem;
        color: @baseBoldColor;
        margin: auto 30/75rem auto 50/75rem;
    }
}
</style>


