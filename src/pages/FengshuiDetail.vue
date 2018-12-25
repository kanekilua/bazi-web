<template>
    <div class="fsDetail-wrap">
        <v-header></v-header>
        <v-title-header>{{res.data.category}}</v-title-header>
        <div class="content-wrap">
            <div class="header">
                <h2>{{res.data.title}}</h2>
                <div class="time">时间：{{res.data.uptime}}</div>
            </div>
            <div class="item-message">                   
                <p v-html="res.data.content"></p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            res: {
                data: {
                    category: "",
                    content: "",
                    title: "",
                    uptime: "",
                }
            },
        }
    },
    created () {
        this.getData()
    },
    methods: {
        getData: function () {
            let params = {
                cid : '95',
                id : this.$route.query.id
            }
            this.$http.post('/suan/apidata',params,'cesuan',null,this.success);
        },
        success: function (res) {
            console.log(res);
            this.res = res;
            let Img = res.data.img.split(' ');
            let reg = /src="http:\/\/www([^"]+)|src="https:\/\/www([^"]+)/gi;  //匹配src="http://www.zhouyi.cc或者src="https://www.zhouyi.cc
            let srcArr = res.data.content.match(reg);
            // console.log(srcArr)
            let content = res.data.content;
            for(let i=0; i<srcArr.length; i++){
                content = content.replace(/(<\/?a.*?>)|(<\/?span.*?>)/g, '');//过滤a标签
                srcArr[i] ='src='+'"'+'https://mingli.szmonster.com'+Img[i];//拼接服务器图片地址
                content = content.replace(/src="http:\/\/www([^"]+)|src="https:\/\/www([^"]+)/,srcArr[i])//替换图片url
            };
            this.res.data.content = content;
        },
    }
}
</script>
<style lang="less">
.fsDetail-wrap{
    .content-wrap{
        position: absolute;
        top: 169/75rem;
        bottom: 0;
        left: 0;
        width: 100%;
        overflow: auto;
        .header{
            padding: 32/75rem 0;
            text-align: center;
            border-bottom: 1px solid rgba(0,0,0,0.1);
            & > h2{
                font-size: 32/75rem;
                margin-bottom: 16/75rem;
                padding: 0 50/75rem;
                .border-box();
            }      
        }
        .item-message{
            padding: 32/75rem 0;
            & > p{
                font-size: 24/75rem;
                padding:  0 32/75rem;
                .border-box();
                strong + div> br{
                    display: none;
                }
                img{
                    display: block;
                    width: 90%!important;
                    height: auto!important;
                    margin: 0 auto;
                    .round(27/75rem)
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

