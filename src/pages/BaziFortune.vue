<template>
    <div class="wrap">
        <p class="result-message" v-html="this.resData.data.finance.visitableText"></p>
        <div class="unvisitableText">
            <p 
                v-html="this.resData.data.finance.unvisitableText"
                :class="this.$store.state.bazi.hideText ? 'hide-text' : ''"
            ></p>
        </div>
        <div :class="this.$store.state.bazi.hideText ? 'mask' : 'hide'">
            <div class="share-btn" @click="$emit('switchShowShare',true)">
                <i></i>
                <span>分享解锁</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props : ['resData']
}
</script>
<style lang="less" scoped>
.hide{
    display: none;
}
.wrap{
    width: 100%;
    height: 100%;
    position: relative;
    .share-btn{
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        margin: auto;
        width: 230/75rem;
        height: 80/75rem;
        background: @baseLightColor;
        .round(10/75rem);
        color: #fff;
        font-size: 32/75rem;
        .flex-center();
        i{
            display: inline-block;
            width: 44/75rem;
            height: 44/75rem;
            .round(50%);
            margin-right: 17/75rem;
            background: url('../assets/image/common/share-btn.png') no-repeat center center / 100% 100%;
        }
    }
    p{
        padding: 0 20/75rem;
    }
    font-size: 28/75rem; 
    .unvisitableText{
        position: relative;
        .hide-text{
           
            color: transparent;
            text-shadow: #111 0 0 5px;
        }
        .mask{
            position: absolute;
            top: 0;
            left: 0;
            .flex-center();
            width: 100%;
            height: 100%;
            background: rgba(255,255,255,0.6);
        }
    }
}
</style>
