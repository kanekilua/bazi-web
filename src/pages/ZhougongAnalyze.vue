<template>
    <div class="zg-analyze-wrap">
        <v-title-header :backLink="backLink">周公解梦</v-title-header>
        <div class="content-wrap">
            <div class="header">
                <h2>{{itemTitle}}</h2>
            </div>
            <div class="item-message">                    
                <p v-html="itemArtical"></p>
            </div>
            <div class="bottom">
                <h2 class="bottom-title">你是否还梦见？</h2>
                <div class="bottom-list">
                    <div class="tag-item" v-show="index<10" v-for="(item,index) in objList" :key="index" @click="result(item.id,item.title)">
                        {{item.title}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    created () {
        this.getData({cid : '68',id: this.$route.query.id,});
        this.getAdviceData();
    },
    data () {
        return {
            backLink: '/zhougongHome',
            imgSrc: require('../assets/image/fengshui/jiaju1@2x.png'),
            itemTitle:  "",
            itemArtical: "",
            objList: [],
            id: "",
        }
    },
    methods:{
        getData: function(id){
            this.$http.post('/suan/apidata',id,'cesuan',null,this.success,null);
        },
        // 获取底部推荐标签数据
        getAdviceData: function() {
            // console.log(this.$route.query)
            // 取关键词第一个字来查找类似标签
            let keyWord = this.$route.query.q.substring(0,1);
            this.$http.post('/suan/apidata',{cid : '67',q: keyWord},'cesuan',null,this.adviceSuccess,null);
        },
        success: function (res) {
            this.itemArtical = res.data[0].content.replace(/(<\/?a.*?>)/g, '');//正则去除a标签
            this.itemTitle = res.data[0].title.replace(/&#8203;/g,'');
        },
        adviceSuccess: function (res) {
            let resData = JSON.stringify(res).replace(/&#8203;/g,'');
            resData = JSON.parse(resData);
            this.objList = resData.list;
        },
        //跳转空路由再跳转回来模拟刷新页面效果
        result: function (id,title) {
            this.$router.push({
                name: 'empty',
                params : {
                    name: 'zhougongAnalyze',
                    query: {id: id,q: title}
                }
            })
        }
    }
}
</script>
<style lang="less">
.zg-analyze-wrap{
    .content-wrap{
        padding-top: 90/75rem;
        .border-box();
        .header{
            padding: 32/75rem 0;
            text-align: center;
            border-bottom: 1px solid rgba(0,0,0,0.1);
            & > h2{
                padding-left: 32/75rem;
                .border-box();
                font-size: 36/75rem;
                text-align: left;
            }      
        }
        .item-message{
            width: 100%;
            border-bottom: 1px solid rgba(0,0,0,0.1);
            padding: 32/75rem 0;
            & > p{
                text-indent: 2em;
                font-size: 24/75rem;
                padding:  0 32/75rem;
                img{
                    display: none;
                }
            } 
        }
        .bottom{
            width: 100%;
            box-sizing: border-box;
            padding: 33/75rem;
            .bottom-title{
                font-size: 32/75rem;
            }
            .bottom-list{
                .flex-start();
                width: 100%;
                flex-wrap: wrap;
                .tag-item{
                    margin-left:16/75rem;
                    margin-top:32/75rem;
                    padding: 8/75rem 5/75rem;
                    background: #fff;
                    box-sizing: border-box;
                    .boxshadow(0,3/75rem,6/75rem,rgba(0,0,0,0.16));
                    .round(13/75rem)
                }
            }
        }
    }
}

</style>

