<template>
    <div class="wrap" v-cloak>
        <v-title-header>
            {{cid === '95' ? article.data.category : cid === '98' ? this.$route.params.name + '2019年生肖运势' : ''}}
            <div class="right-ico" slot="right-ico"></div>
        </v-title-header>
        <div class="content-wrap">
            <div class="article">
                <header :class="cid === '95' ? 'article-header-normal' : cid === '98' ? 'article-header-shengxiao' : ''">
                    <h2>{{article.data.title}}</h2>
                    <div v-if="cid === '95'">
                        <button @click="collect" :class="isCollet === true ? 'is-collect':'is-not-collect'">{{isCollet === true?'已收藏':'收藏'}}</button>
                    </div>
                    <div v-if="cid === '98'">
                        <img :src="this.$route.params.img" alt="">
                        <div class="person-name">{{this.$route.params.name}}</div>
                        <button @click="collect" :class="isCollet === true ? 'is-collect':'is-not-collect'">{{isCollet === true?'已收藏':'收藏'}}</button>
                    </div>
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
            cid : '95',
            article : {
                data : {
                    category : "",
                    title : "",
                    content : "",
                    id : ""
                }
            },
            isCollet : null
        }
    },
    methods: {
        init : function () {
            this.cid = this.$route.query.cid;
            if(this.$route.query.cid === '95') {
               this.article.data.id = this.$route.query.id;
                let params = {
                    cid : '95',
                    id : this.$route.query.id
                }
                this.$http.post('/suan/apidata',params,'cesuan',null,this.success);
            }else if(this.$route.query.cid === '98'){
                let tid = "";
                switch(this.$route.params.name){
                    case "麦玲玲":
                        tid = '407';
                        break;
                    case "苏民峰":
                        tid = '410';
                        break;
                    case "李居明":
                        tid = '408';
                        break;
                    case "宋韶光":
                        tid = '409';
                        break;
                }
                let params = {
                    cid: '98',
                    tid : tid,
                    category : this.$route.params.category,
                }
                this.$http.post('/suan/apidata',params,'cesuan',null,this.shengxiaoSuccess);
            }
            
        },
        success: function (res) {
            let header = {
                'Authorization' : localStorage.getItem(global.APP_TOKEN)
            }
            let params = {
                ident_id : "95_" + res.data.id
            }
            this.$http.post('/features/isColl',params,null,header,(res) => {
                this.isCollet = res.data.is_coll;
            });

            this.article = res;
            if(res.data.category === "八字合婚") {
                res.data.content = res.data.content.replace('<strong>' + res.data.title +'</strong>','');
            }
            let content = res.data.content;
            if(res.data.img !== null) {
                let Img = res.data.img.split(' ');
                let reg = /src="http:\/\/www([^"]+)|src="https:\/\/www([^"]+)/gi;  //匹配src="http://www.zhouyi.cc或者src="https://www.zhouyi.cc
                let srcArr = res.data.content.match(reg);
                for(let i=0; i<srcArr.length; i++){
                    content = content.replace(/(<\/?a.*?>)|(<\/?span.*?>)/g, '');//过滤a标签
                    srcArr[i] ='src='+'"'+'https://mingli.szmonster.com'+Img[i];//拼接服务器图片地址
                    content = content.replace(/src="http:\/\/www([^"]+)|src="https:\/\/www([^"]+)/,srcArr[i])//替换图片url
                };
            }
            this.article.data.content = content;
        },
        shengxiaoSuccess : function(res) {
            this.article.data.title = res.data[0].title;
            this.article.data.content = res.data[0].content;
            this.article.data.id = res.data[0].id;

            let header = {
                'Authorization' : localStorage.getItem(global.APP_TOKEN)
            }
            let params = {
                ident_id : "98_" + res.data[0].id
            }
            this.$http.post('/features/isColl',params,null,header,(res) => {
                this.isCollet = res.data.is_coll;
            });
        },
        collect : function ()  {
            if(this.isCollet) {
                let params = {
                    coll_id : this.$route.params.coll_id
                }
                let header = {
                    'Authorization' : localStorage.getItem(global.APP_TOKEN)
                }
                this.$http.post('/features/cancelColl',params,null,header,(res) => {
                    if(res.code === "success") {
                        this.isCollet = false;
                    }
                },null);
                return ;
            }
            let header = {
                'Authorization' : localStorage.getItem(global.APP_TOKEN)
            }
            let params = {
                url : this.article.data.img ? this.article.data.img : "",
                param : 'cid=' + this.cid + '&id=' + this.article.data.id + '&category=' + this.$route.params.category + '&name=' + this.$route.params.name + '&imgUrl=' + this.$route.params.img,
                title : this.article.data.title,
                summary : this.article.data.content.substring(0,300),
                ident_id : this.cid + '_' + this.article.data.id
            }
            this.$http.post('/features/coll',params,null,header,this.collectSuccess,null);
        },
        collectSuccess : function (res) {
            if(res.code === "success") {
                this.isCollet = true;
                console.log('123');
            }
        }
    }
}
</script>
<style lang="less" scoped>
[v-cloak] {
  display: none;
}
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
            .border-box();
            text-align: left;
            border-bottom: 1px solid rgba(0,0,0,0.1);
            & > h2 {
                font-size: 36/75rem;
                .border-box();
            }
            & > div {
                button {
                    .my-button();
                    width: 106/75rem;
                    height: 46/75rem;
                    .round(7/75rem);
                    .boxshadow(0,3px,6px,rgba(0,0,0,0.16));
                    display: inline-block;
                }
                .is-not-collect {
                    color: #fff;
                    background : @baseLightColor;
                }
                .is-collect {
                    color: @baseLightColor;
                    background : #fff;
                }
            }
        }
        .article-header-normal {
            padding: 32/75rem 50/75rem 32/75rem 32/75rem;
            .article-header();
            .flex-start();
            & > h2 {
                width: 80%;
            }
            & > div {
                width: 20%;
                margin-top: 40/75rem;
                text-align: right;
            } 
        }
        .article-header-shengxiao {
            padding: 32/75rem 50/75rem 0 32/75rem;
            .article-header();
            & > div {
                .flex-between();
                padding: 20/75rem 0;
                .border-box();
                & > img {
                    width: 100/75rem;
                    height: 100/75rem;
                    .round(50%);
                    .boxshadow();
                }
                .person-name{
                    width: 60%;
                    font-size: 34/75rem;
                    font-weight: bold;
                    margin-bottom: 30/75rem;
                }
            }
        }
        .content {
            padding: 32/75rem 0;
            & > p{
                font-size: 30/75rem;
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