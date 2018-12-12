<template>
     <div class="wrap">
        <v-header></v-header>
        <v-title-header :backLink="backLink">
            测试结果
        </v-title-header>
        <div class="content-wrap">
            <div class="banxin">
                <v-title-nav><h2 slot="title">测试结果</h2><div slot="more"></div></v-title-nav>
                <div class="name-box">
                    <div class="name">
                        <div class="test-name">万空零</div>
                        <div class="fanti-name">繁体: 万空零</div>
                    </div>
                    <div class="score">66</div>
                    <div class="bihua">
                        <div class="jianti-bihua">简体笔画:6 13 5</div>
                        <div class="fanti-bihua">繁体笔画:15 20 16</div>
                    </div>
                </div>
                <div class="title">
                    <i></i>
                    <span class="title-msg">总格: 中吉</span>
                </div>
                <div class="tag-list">
                    <div class="tag-item">天格: 大吉</div>
                    <div class="tag-item">人格: 大吉</div>
                    <div class="tag-item">地格: 大吉</div>
                    <div class="tag-item">外格: 大吉</div>
                </div>
                <div class="wuxing">五行: 火火火</div>
                    这里是数据内容
                    这里是数据内容
                    这里是数据内容
                <v-title-nav><h2 slot="title">更多</h2><div slot="more"></div></v-title-nav>
                    这里是数据内容
                    这里是数据内容
                    这里是数据内容

            </div>
        </div>
        <div class="share-btn">立即分享</div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            backLink: '/nameHome'
        }
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
    .banxin{
        padding: 32/75rem 14/75rem  32/75rem 24/75rem;
        .border-box();
        .name-box{
            width: 100%;
            position: relative;
            margin-top: 20/75rem;
            font-size: 28/75rem;
            font-weight: bold;
            .flex-between();
            .name{
                margin-left: 60/75rem;
            }
            .test-name,.jianti-bihua{
                margin-bottom: 32/75rem;
            }
            .score{
                position: absolute;
                left: 0;
                bottom: -60/75rem;
                right: 0;
                margin: 0 auto;
                width: 160/75rem;
                height: 160/75rem;
                line-height: 160/75rem;
                text-align: center;
                font-size: 80/75rem;
                color: #fff;
                .round(50%);
                background: @baseColor;
            }
        }
        .title{
            .flex-start();
            margin: 70/75rem 0 32/75rem 0;
            & > i{
                display: inline-block;
                width: 33/75rem;
                height: 44/75rem;
                margin-right: 33/75rem;
                vertical-align: middle;
                background: url('../assets/image/name/nav-ico@2x.png') no-repeat center center / 100% 100%;
            }
            .title-msg{
                font-size: 32/75rem;
                font-weight: bold;
            }
        }
        .tag-list{
            .flex-around();
            .tag-item{
                width: 168/75rem;
                height: 81/75rem;
                line-height: 81/75rem;
                text-align: center;
                .round(40/75rem);
                .boxshadow(0,3/75rem,6/75rem, rgba(0,0,0,0.16));
            }
        }
        .wuxing{
            width: 300/75rem;
            height: 80/75rem;
            margin: 40/75rem auto;
            .round(40/75rem);
            text-align: center;
            line-height: 80/75rem;
            background: @baseColor;
            color: #fff;
            font-size: 32/75rem;
        } 
    }
}
.share-btn{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100/75rem;
    line-height: 100/78rem;
    text-align: center;
    font-size: 28/75rem;
    color: #fff;
    background: @baseColor;
}
</style>