<template>
    <div class="xiangshuInner-wrap">
        <v-header></v-header>
        <v-title-header>
            相术解析
        </v-title-header>
        <div class="content-wrap">
            <div class="head">
                <h2>{{analyzeList.title}}</h2>
                <div class="public-time">时间：{{analyzeList.uptime}}</div>
            </div>
            <div class="banxin">
                <div class="analyze-list">
                    <div class="analyze-item">
                        <p v-html="content"></p>
                    </div>
                </div>
            </div>
        </div>
        <button class="share-btn">立刻分享</button>
    </div>    
</template>
<script>
export default {
    data () {
        return {
            analyzeList: {},
            content: "",
        }
    },
    created() {
        this.getData();
    },
    methods: {
        getData: function () {
            let params = {
                cid: '95',
                // id: this.$route.query.querys.id,
                id: '2756',//测试id
                tid: '501',
                category: '面相图'
        
            }
            this.$http.post('/suan/apidata',params,'cesuan',null,this.success);
        },
        success: function (res) {
            let Img = res.data.img.split(' ');
            let reg = /src="http:([^"]+)/gi;  //匹配src="http"
            let srcArr = res.data.content.match(reg);
            let content = res.data.content;
            for(let i=0; i<srcArr.length; i++){
                content = content.replace(/(<\/?a.*?>)|(<\/?span.*?>)/g, '');
                srcArr[i] ='src='+'"'+'https://mingli.szmonster.com'+Img[i];//拼接服务器图片地址
                content = content.replace(/src="http:([^"]+)/,srcArr[i])//替换图片
            };
            this.content = content;
        }
    }
}
</script>
<style lang="less">
.xiangshuInner-wrap{
    .content-wrap{
        position: absolute;
        top: 169/75rem;
        bottom: 0;
        left: 0;
        width: 100%;
        overflow: auto;
        padding-bottom: 80/75rem;

        .head{
            width: 100%;
            border-bottom: 1px solid rgba(0,0,0,0.1);
            & > h2{
                width: 80%;
                margin: 32/75rem auto 16/75rem auto;
                font-size: 32/75rem;
                text-align: center;
            }
            .public-time{
                text-align: center;
                margin-bottom: 32/75rem;
                font-size: 24/75rem;
            }
        }
        .banxin{
            width: 100%;
            box-sizing: border-box;
            padding: 32/75rem;
            .border-box();
            p{
                text-indent: 2em;
            }
            .innerImg{
                display: block;
                width: 80%;
                height: 274/75rem;
                margin: 34/75rem auto;
                .round(27/75rem);
            }
            .analyze-item{
                & > h2{
                    font-size: 28/75rem;
                }
                & > p{
                    margin: 32/75rem 0;
                    font-size: 24/75rem;
                    line-height: 40/75rem;
                }
            }
        }
    }
    .share-btn{
        position: fixed;
        bottom: 0;
        left: 0;
        background: @baseColor;
        width: 100%;
        height: 84/75rem;
        color: #fff;
        border: none;
    }
    img{
        width: 90%!important;
        height: 300/75rem!important;
        .round(27/75rem;)
    }
}
</style>


