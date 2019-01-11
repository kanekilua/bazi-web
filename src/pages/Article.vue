<template>
    <div class="wrap">
        <v-title-header>
            {{article.data.category}}
            <div class="right-ico" slot="right-ico"></div>
        </v-title-header>
        <div class="content-wrap">
            <div class="article">
                <header class="article-header">
                    <h2>{{article.data.title}}</h2>
                </header>
                <div class="content">
                    <p v-html="article.data.content"></p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    created () {
        this.init();
    },
    data () {
        return {
            article : {
                data : {
                    category : "",
                    title : "",
                    content : ""
                }
            }
        }
    },
    methods: {
        init : function () {
            let params = {
                cid : '95',
                id : this.$route.query.id
            }
            this.$http.post('/suan/apidata',params,'cesuan',null,this.success);
        },
        success: function (res) {
            this.article = res;
            let Img = res.data.img.split(' ');
            let reg = /src="http:\/\/www([^"]+)|src="https:\/\/www([^"]+)/gi;  //匹配src="http://www.zhouyi.cc或者src="https://www.zhouyi.cc
            let srcArr = res.data.content.match(reg);
            let content = res.data.content;
            if(srcArr){
                for(let i=0; i<srcArr.length; i++){
                    content = content.replace(/(<\/?a.*?>)|(<\/?span.*?>)/g, '');//过滤a标签
                    srcArr[i] ='src='+'"'+'https://mingli.szmonster.com'+Img[i];//拼接服务器图片地址
                    content = content.replace(/src="http:\/\/www([^"]+)|src="https:\/\/www([^"]+)/,srcArr[i])//替换图片url
                };
            }
            this.article.data.content = content;
        },
    }
}
</script>
<style lang="less" scoped>
.content-wrap{
    padding-top: 90/75rem;
    .border-box();
    .right-ico{
        width: 38/75rem;
        height: 38/75rem;
        background: url('../assets/image/common/share.png')no-repeat center center / 100% 100%;
    }
    .article {
        .article-header {
            padding: 32/75rem 0;
            text-align: left;
            border-bottom: 1px solid rgba(0,0,0,0.1);
            & > h2 {
                font-size: 32/75rem;
                padding: 0 26/75rem;
                .border-box();
            }
        }
        .content {
            padding: 32/75rem 0;
            & > p{
                font-size: 24/75rem;
                padding:  0 32/75rem;
                .border-box();
                strong + div>  br{
                    display: none;
                }
                /deep/ img{
                    display: block;
                    width: 98%!important;
                    height: auto!important;
                    margin: 20/75rem auto;
                    .round(10/75rem)
                }
            }
            .item-img{
                display: block;
                width: 80%;
                height: 280/75rem;
                margin: 20/75rem auto;
                .round(50/75rem);
            }   
        }
    }
}
</style>