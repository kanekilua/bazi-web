<template>
    <div class="fengshui-wrap">
        <v-title-header>风水常识</v-title-header>
        <div class="content-wrap">
            <div class="top" ref="header"></div>
            <div class="bannar"></div>
            <div class="article-wrap" ref="article">
                <div class="swiper-container">
                    <div class="swiper-top" ref="swiperTop" :class="fixFlag ? 'nav-fixed' : ''">
                        <v-nav :navList="navList" :nowIndex="navIndex" @updateNavIndex="updateNavIndex"></v-nav>
                    </div>
                    <swiper :options="swiperOption" ref="mySwiper">
                        <swiper-slide v-for="(outItem,outIndex) of list" :key="outIndex" :class="fixFlag ? 'hItem-fixed' : ''">
                            <div class="hItem" v-for="(innerItem,innerIndex) in outItem" :key="innerIndex" @click="toInner(innerItem.id) ">
                                <img :src="innerItem.img">
                                <div class="right">
                                    <h2>{{innerItem.title}}</h2>
                                    <p v-html="innerItem.content"></p>
                                </div>
                            </div>
                            <load-more :tip="tip" :show-loading="showLoading" :class="showIco ? 'show': 'hide'"></load-more>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex'

export default {
    data () {
        return {
            navList: ["家居风水","房屋风水","办公室风水","感情风水","风水摆设","商业风水","招财风水"],
            // postList的每一个item的参数:1.tid 2. category 3. limit 4. position 5. 作为是否传category的标识
            postList : [["301","家居风水",0,0],["303","房屋风水",0,0],["302","办公室风水",0,0,"办公室风水"],["301","感情风水",0,0,"感情风水"],["301","风水摆设",0,0,"风水摆设"],["302","商业风水",0,0],["301","招财风水",0,0,"招财风水"]],
            swiperOption : { initialSlide: this.navIndex ,autoHeight : true},
            list : [],
            loading : false,
            fixFlag : false,
            tip: "正在加载...",
            showIco: false, //加载动画
            showLoading: true,  //加载ico,
            scrollInit : 0
        }
    },
    computed : {
        ...mapState('fengshuiKnowledge',['navIndex','activeBtn']),
        swiper () {
            return this.$refs.mySwiper.swiper;
        },
    },
    watch : {
        'navIndex' (val) {
            this.swiper.slideTo(val, 0, false);
            // 保持swipertop滚动位置
            if (val > 3){
                this.$refs.swiperTop.scrollLeft = this.$refs.swiperTop.scrollWidth;
            }
            else{
                this.$refs.swiperTop.scrollLeft = 0;
            }

            if(this.scrollInit > 0) {
                let scrollTop = document.documentElement.scrollTop;
                // console.log('当前的位置:' + scrollTop + 'nav的位置:' + this.scrollInit + '下一个的位置:' + this.postList[val][3]);
                document.documentElement.scrollTop  = this.postList[val][3] > this.scrollInit ? this.postList[val][3] : this.scrollInit;
            }
        }
    },
    created () {
        this.getData();
    },
    mounted () {
        if(this.navIndex != 0) { 
            this.swiper.slideTo(this.navIndex, 0, false);
        }
        this.swiper.on('slideChange', () => {
            this.updateNavIndex(this.swiper.activeIndex);
        });
        window.addEventListener('scroll',this.scrollListener);
    },
    beforeDestroy() {
        window.removeEventListener("scroll",this.scrollListener);
    },
    methods : {
        ...mapMutations('fengshuiKnowledge',['updateNavIndex']),
        getData : function () {
            for(let i = 0; i< this.postList.length; ++i) {
                let postItem = this.postList[i];
                let params = {};
                if(postItem.length === 5) {
                    params = {
                        cid : '96',
                        tid : postItem[0],
                        category : postItem[1],
                        limit : postItem[2] + ''
                    }
                }else {
                    params = {
                        cid : '96',
                        tid : postItem[0],
                        limit : postItem[2] + ''
                    }
                }
                this.$http.post('/suan/apidata',params,'cesuan',null,(res) => {
                   this.$set(this.list,i,res.data);
                },null);
            }
        },
        // 跳转文章页面
        toInner: function (innerId) {
            let id = innerId;
            this.$router.push({
                name: 'article',
                query: {
                    cid : '95',
                    id : id
                }
            })
        },
        scrollListener: function () {
            let scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
       		let windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
       		let scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight;
            let articleHeight = this.$refs.article.clientHeight;
            let headerHeight = this.$refs.header.clientHeight;
            // console.log("距顶部"+scrollTop+"可视区高度"+windowHeight+"滚动条总高度"+scrollHeight);
            if(scrollTop + articleHeight + headerHeight  >= scrollHeight) {
                this.fixFlag = true;
                if(this.scrollInit === 0) {
                    this.scrollInit = scrollHeight - headerHeight - articleHeight;
                }
                this.postList[this.navIndex][3] = scrollTop;
            }else {
                this.fixFlag = false;
            }
            //滚动条到底部的条件
            if(scrollTop !==0 && scrollTop+windowHeight===scrollHeight && this.loading===false){ //loading防止正在加载时发送多次请求
                this.showIco = true; //显示loading动画
                this.loading = true; 
                // 请求数据
                this.$set(this.postList[this.navIndex],2,this.postList[this.navIndex][2] + 1);
                let params = {};
                if(this.postList[this.navIndex].length === 5) {
                    params = {
                        cid : '96',
                        tid : this.postList[this.navIndex][0],
                        category : this.postList[this.navIndex][1],
                        limit: this.postList[this.navIndex][2]
                    }
                }else {
                    params = {
                        cid : '96',
                        tid : this.postList[this.navIndex][0],
                        category : this.postList[this.navIndex][1],
                        limit: this.postList[this.navIndex][2]
                    }
                }
                this.$http.post('/suan/apidata',params,'cesuan',null,this.loadMoreSuccess,null);
            }else {
                this.showIco = this.showIco ? !this.showIco : this.showIco;
            }
        },
        loadMoreSuccess: function (res) {
            if(res.data.length < 10){ //没有更多数据
                for(let i of res.data){
                    this.list[this.navIndex].push(i)
                }
                this.showLoading = false;
                this.tip = "没有更多数据！"
            } else {
                for(let i of res.data){
                    i.content = i.content.replace(/(<\/?a.*?>)|(<\/?span.*?>)/g, '');//过滤a标签
                    this.list[this.navIndex].push(i)
                }
                this.loading = false; 
                this.showIco = false;
            } 
        }
    }
}
</script>
<style lang="less" scoped>
.fengshui-wrap {
    .content-wrap {
        background-color: #F1F1F1;
        .top {
            height: 90/75rem;
        }
        .bannar {
            width: 100%;
            height: 283/75rem;
            background: url('../assets/image/fengshui/bannar.png') center center / 100% 100%;
        }
        .nav-fixed {
            position: fixed;
            top : 90/75rem;
            left: 0;
            width: 100%;
            height: 135/75rem;
            background-color: #fff;
            z-index: 999;
        }
        .article-wrap {
            margin-top : 10/75rem;
            background-color: #fff;
            .swiper-container{
                width: 100%;
                margin: 0 auto;
                .swiper-top{
                    width: 100%;
                    overflow-x: scroll;
                    &::-webkit-scrollbar{
                        width: 0!important;
                    }
                }
                /deep/ .nav{
                    width: 160%;
                    overflow-x: scroll; 
                }
                .nav-list{
                    .flex-start();
                }
                /deep/ .nav .nav-list .item{
                    height: 85/75rem;
                }
                .hItem-fixed {
                    padding-top: 145/75rem;
                    .border-box();
                }
                .hItem{
                    width: 98%;
                    margin:  0 auto;
                    .flex-start-only();
                    margin-bottom: 32/75rem;
                    & > img{
                        // width: 300/75rem;
                        width: 40%;
                        height: 180/75rem;
                        .round(10/75rem);
                        margin-left: 14/75rem;
                    }
                    .right{
                        width: 55%;
                        margin-left: 20/75rem;
                        & > h2{
                            height: 40/75rem;
                            margin-top: 10/75rem;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            font-size: 28/75rem;
                        }
                        & > p{
                            height: 120/75rem;
                            margin-top: 17/75rem;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            // display: -webkit-box;
                            // -webkit-line-clamp: 3;
                            // -webkit-box-orient: vertical;
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


