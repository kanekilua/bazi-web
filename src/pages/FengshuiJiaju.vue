<template>
    <div class="jiaju-wrap">
        <v-title-header>{{title}}</v-title-header>
        <div class="content-wrap">
            <div class="jiaju-item" :key="index" v-for="(item,index) in itemList" @click="toInner(item.id)">
                <img :src="item.img" class="item-img">
                <div class="item-message">
                    <h2>{{item.title}}</h2>
                    <p v-html="item.content"></p>
                </div>
            </div>
            <load-more :tip="tip" :show-loading="showLoading" :class="showIco ? 'show': 'hide'"></load-more>
        </div>
    </div>
</template>
<script>
import { LoadMore } from 'vux'
export default {
    data () {
        return {
            title: this.$route.query.navTitle,
            itemList: [],
            tip: "正在加载...",
            showIco: false, //加载动画
            showLoading: true,  //加载ico
            loading: false, //加载状态
            limit: 0,//下拉加载，++请求下10条数据
        }
    },
    created(){
        this.getData();
    },
    mounted() {
        this.pullDown();
    },
    methods: {
        getData: function () {
            let params = this.$route.query;//接收参数
            params.cid = '96'
            params.limit = 0;
            this.$http.post('/suan/apidata',params,'cesuan',null,this.success)
        },
        success: function (res) {
            this.itemList = res.data;
            for(let i of this.itemList){
                let imgArr = i.img.split(' ');
                i.img = 'https://mingli.szmonster.com' + imgArr[0];//拼接第一张img链接
            }
        },
        toInner: function (innerId) {
            let id = innerId;
            this.$router.push({
                name: 'article',
                query: {
                    id : id
                }
            })
        },
        // 下拉加载更多
        pullDown: function () {
            window.addEventListener('scroll',()=>{
           		let scrollTop = document.documentElement.scrollTop||document.body.scrollTop;      
           		let windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
           		let scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight;
               //滚动条到底部的条件
               if(this.$route.name==="jiaju" && scrollTop+windowHeight===scrollHeight && this.loading===false){ //route.name确保监听的是当前页面,loading防止正在加载时发送多次请求
                    this.showIco = true; //显示loading动画
                    this.loading = true; 
                    // 请求数据
                    this.limit++;
                    let params = this.$route.query;//接收参数
                    params.cid = '96'
                    params.limit = this.limit;
                    this.$http.post('/suan/apidata',params,'cesuan',null,this.loadMoreSuccess,null);
                    // console.log("距顶部"+scrollTop+"可视区高度"+windowHeight+"滚动条总高度"+scrollHeight);
                }   
            },false)
        },
        loadMoreSuccess: function (res) {
            console.log(res);
            if(res.data.length < 10){ //没有更多数据
                this.showLoading = false;
                this.tip = "没有更多数据！";
                this.loading = true; 
            } else {
                for(let i of res.data){
                    i.img = 'https://mingli.szmonster.com' + i.img; //拼接url
                    i.content = i.content.replace(/(<\/?a.*?>)|(<\/?span.*?>)/g, '');//过滤a标签
                    this.itemList.push(i)
                }
                this.loading = false; 
                this.showIco = false;
            } 
        },
        
    },
    // 移除监听事件
    beforeDestroy() {
        window.removeEventListener("scroll",null);
    },
}
</script>
<style lang="less">
.jiaju-wrap{
    .content-wrap{
        padding-top: 90/75rem;
        .border-box();
        .jiaju-item{
            .flex-start();
            padding: 20/75rem 0 20/75rem 23/75rem;
            border-bottom: 1px solid rgba(0,0,0,0.1);
            .item-img{
                display: inline-block;
                width: 310/75rem;
                height: 180/75rem;
                margin-right: 24/75rem;
                .round(10/75rem);
            }
            .item-message{
                & > h2{
                    width: 370/75rem;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    -o-text-overflow: ellipsis;
                    -webkit-text-overflow: ellipsis;
                    -moz-text-overflow: ellipsis;
                    white-space: nowrap;  /*规定段落中的文本不进行换行*/
                    font-size: 28/75rem;
                    margin-bottom: 28/75rem;
                }
                & > p{
                    width: 362/75rem;
                    height: 118/75rem;
                    line-height: 40/75rem;
                    font-size: 26/75rem;
                    overflow: hidden;
                    & > strong{
                        display: none;
                    }
                    & > div{
                        display: none;
                    }
                }
            }
        }
        
    }
}

</style>

