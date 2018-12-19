<template>
    <div class="wrap">
        <v-header></v-header>
        <v-title-header>生肖配对</v-title-header>
        <div class="content-wrap">
            <div class="article">
                <header class="article-header">
                    <h2>{{article.title}}</h2>
                    <div class="date">时间：{{article.date}}</div>
                </header>
                <div class="content">
                    <p>{{article.content}}</p>
                </div>
                <button class="save-btn">立即分享</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    mounted () {
        this.article = this.$route.params.article;
    },
    data () {
        return {
            article : {}
        }
    }
}
</script>
<style lang="less" scoped>
.content-wrap{
    position: absolute;
    top: 169/75rem;
    bottom: 0;
    width: 100%;
    overflow: auto;
}
.article {
    .article-header {
        width: 100%;
        height: 140/75rem;
        border-bottom: 1px solid #eee;
        & > h2 {
            height: 45/75rem;
            margin-top : 32/75rem;
            text-align: center;
            font-size: 36/75rem;
            font-weight: bold;
            color: rgba(0, 0, 0, 0.7);  
        }
        .date {
            margin-top : 16/75rem;
            text-align: center;
            font-size: 26/75rem;
            color:rgba(0,0,0,0.7);
        }
    }
    .content {
        width: 93.33%;
        margin : 0 auto;
        & > p {
            text-indent:2em;
            font-size: 24/75rem;
        }
    }
}
</style>