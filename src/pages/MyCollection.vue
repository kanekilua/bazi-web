<template>
    <div class="wrap">
        <v-title-header>我的收藏</v-title-header>
        <div class="content-wrap" v-if="flag">
            <v-title-nav>文章</v-title-nav>
            <div class="article-list">
                <div class="article" v-for="(item,index) in articleList" :key="index" @click="jumpArticle(item)">
                    <div class="upper" :style="{backgroundImage : 'url(' + item.image + ')'}">
                        <div class="overlay"></div>
                        <div class="content">
                            <div class="title">
                                {{item.title}}
                            </div>
                            <div class="tip">
                                <i></i>
                                文章
                            </div>
                        </div>
                    </div>
                    <div class="under">
                        <p>{{item.summary}}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="none-content-wrap" v-else>
            <div class="none-tip">暂无收藏</div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            showDialogStyle: false,
            articleList : [],
            flag : false
        }
    },
    created() {
        this.init();
    },
    methods: {
        init : function () {
            let header = {
                'Authorization' : localStorage.getItem(global.APP_TOKEN)
            }
            this.$http.post('/features/mycoll',null,null,header,this.success,null);
        },
        success : function (res) {
            console.log(res.data);
            if(res.code === "success") {
                if(res.data.rows.length === 0) {
                    this.flag = false;
                }else {
                    this.flag = true;
                    this.articleList = res.data.rows;
                    for( let i of this.articleList){
                        if(i.image === "") {
                            i.image = require("../assets/image/activity/banner.png")
                        }
                    }
                }
            }
        },
        jumpArticle : function (article) {
            let paramArr = article.param.split('&');
            let cid = "";
            let articleId = "";
            let category = "";
            let name = "";
            let imgUrl = "";
            for(let param of paramArr) {
                if(param.split('=')[0] === 'cid'){
                    cid = param.split('=')[1];
                }else if(param.split('=')[0] === 'id') {
                    articleId = param.split('=')[1];
                }else if(param.split('=')[0] === 'category') {
                    category = param.split('=')[1];
                }else if(param.split('=')[0] === 'name') {
                    name = param.split('=')[1];
                }else if(param.split('=')[0] === 'imgUrl') {
                    imgUrl = param.split('=')[1];
                }
            }
            if(cid === "95") {
                this.$router.push({
                    name: "article",
                    query: {
                        cid : cid,
                        id : articleId
                    },
                    params : {
                        coll_id : article.id
                    }
                });
            }else if (cid === "98") {
                this.$router.push({
                    name: 'article',
                    query : {
                        cid : cid,
                    },
                    params: {
                        category: category,
                        name: name,
                        img: imgUrl,
                        coll_id : article.id
                    }
                })
            }
        }
    }
}
</script>
<style lang="less" scoped>
.content-wrap{
    padding-top: 90/75rem;
    background-color: rgb(241, 241, 241);
    .border-box();
    /deep/ .title-nav {
        background-color: #fff;
    }
    .article-list {
        .article:nth-child(1){
            padding-top: 0;
        }
        .article {
            height: 510/75rem;
            margin : 0 auto 10/75rem auto;
            padding: 24/75rem 5%;
            .border-box();
            background-color: #fff;
            .upper {
                position: relative;
                width: 100%;
                height: 280/75rem;
                .round(8/75rem);
                background-repeat: no-repeat;
                background-position: top;
                background-size: cover;
                .overlay {
                    position: absolute;
                    bottom: 0;
                    width: 100%;
                    height: 100%;
                    .round(8/75rem);
                    background: linear-gradient(to top, rgba(88, 88, 88, 0.9), rgba(255,255,255,0));
                }
                .content {
                    position: absolute;
                    left: 0;
                    right: 0;
                    bottom: 15/75rem;
                    width: 95%;
                    margin : 0 auto;
                    .flex-between();
                    .title {
                        width: 85%;
                        font-size: 32/75rem;
                        color: #fff;
                        font-weight: bold;
                    }
                    .tip {
                        width: 15%;
                        text-align: right;
                        color: #fff;
                        font-size: 24/75rem;
                        i {
                            display: inline-block;
                            width: 18/75rem;
                            height: 19/75rem;
                            background: url('../assets/image/activity/article-icon.png') no-repeat center center / 100% 100%;
                        }
                    }
                }
                
            }
            .under {
                height: 160/75rem;
                margin-top: 24/75rem;
                overflow: hidden;
                font-size: 28/75rem;
                & > p {
                    text-indent:2em;
                }
            }
        }
    }
}
.none-content-wrap {
    padding-top: 90/75rem;
    .border-box();
    .none-tip {
        margin-top: 300/75rem;
        font-size: 40/75rem;
        text-align: center;
        color: rgba(0,0,0,0.3);
    }
}
</style>