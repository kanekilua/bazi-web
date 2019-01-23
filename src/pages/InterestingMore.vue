<template>
    <div class="knowledge-wrap">
        <v-title-header
            :backLink="backLink"
        >
            趣味测试
        </v-title-header>
        <div class="content-wrap">
            <div class="knowledge">
                <div class="knowledge-cells">
                    <div class="knowledge-cell"
                        ref="content"
                        v-for="(item,index) in testArr"
                        :key="index"
                        @click="toTest(item.id)"
                    >
                        <div class="img-box">
                            <img :src="item.img" alt="image">
                        </div>
                        <div class="right">
                            <h2>{{item.title}}</h2>
                            <p v-html="item.shorttext"></p>
                        </div>
                    </div>
                    <load-more :tip="tip" :show-loading="showLoading" :class="showIco ? 'show': 'hide'"></load-more>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { LoadMore } from 'vux'
export default {
    components: {
        LoadMore
    },
    data () {
        return {
            backLink: '/main/home',
            testArr: [],
            tip: "正在加载...",
            showIco: false, //加载动画
            showLoading: true,  //加载ico
            loading: false, //加载状态
            limit: 0,//下拉加载，++请求下10条数据
        }
    },
    created () {
        this.getData();
    },
    mounted () {
        this.pullDown();
    },
    methods: {
        
        getData: function () {
            let params = {
                cid : '107',
                limit : '0'
            }
            this.$http.post('/suan/apidata',params,'cesuan',null,this.testSuccess,this.failure);
        },
        testSuccess: function(res) {
            this.testArr = res.data;
        },
        toTest: function (id) {
            let testArr = this.testArr[id-1]; 
            this.$router.push({
                name: 'interestingInner',
                query: {
                    id : testArr.id,
                    img : testArr.img,
                    title : testArr.title,
                    shorttext : testArr.shorttext,
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
               if(scrollTop+windowHeight===scrollHeight && this.loading===false){ //loading防止正在加载时发送多次请求
                this.showIco = true; //显示loading动画
                this.loading = true; 
                // 请求数据
                this.limit++;
                let params = {
                    cid : '107',
                    tid: '404',
                    limit: this.limit
                }
                this.$http.post('/suan/apidata',params,'cesuan',null,this.loadMoreSuccess,null);
                // console.log("距顶部"+scrollTop+"可视区高度"+windowHeight+"滚动条总高度"+scrollHeight);
                }   
            },false)
        },
        loadMoreSuccess: function (res) {
            if(res.data.length < 10){ //没有更多数据
                for(let i of res.data){
                    this.testArr.push(i)
                }
                this.showLoading = false;
                this.tip = "没有更多数据！"
            } else {
                for(let i of res.data){
                    this.testArr.push(i)
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
<style lang="less" scoped>
.hide{
    display: none;
}
.knowledge-wrap{
    .content-wrap{
        padding-top: 100/75rem;
        .border-box();
        .knowledge {
            margin: 10/75rem;
            .more{
                .flex-end();
                & > h2 {
                    margin-right: 24/75rem;
                }
            }
            .knowledge-cells {
                div:nth-last-child(1) {
                    border-bottom: 0;   
                }
                .knowledge-cell:nth-child(1){
                    padding-top: 0;
                }
                .knowledge-cell {
                    width: 100%;
                    overflow: hidden;
                    padding: 23/75rem 0;
                    border-bottom: 1px solid #eee;
                    .flex-between-only();
                    .img-box{
                        .flex-center;
                        width: 40%;
                        height: 180/75rem;
                        .round(10/75rem);
                        margin-left: 14/75rem;
                        overflow: hidden;
                        & > img{
                            width: 100%;
                        }
                    }
                    .right {
                        width: 55%;
                        margin-left: 20/75rem;
                        margin-right: 14/75rem;
                        & > h2{
                            width: 100%;
                            height: 40/75rem;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            font-size: 28/75rem;
                        }
                        & > p{
                            width: 100%;
                            height: 120/75rem;
                            margin-top: 17/75rem;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            font-size: 22/75rem;
                            line-height: 40/75rem;
                            & > strong {
                                display: none;
                                & + div{
                                    display: none;
                                }
                            }
                            img{
                                display: none;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>

