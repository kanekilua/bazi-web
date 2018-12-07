<template>
    <div class="wrap">
        <v-header></v-header>
        <v-title-header :backLink="backLink">周公解梦</v-title-header>
        <div class="content-wrap">
            <div class="content-box">
                <div class="search-bg">
                    <div class="input-box">
                        <input type="text" placeholder="输入您梦到的事情" v-model="keyWord">
                        <i></i>
                    </div>
                </div>
            </div>
            <div class="swiper-container">
                <div class="swiper-top">
                    <v-nav :navList="navList" :nowIndex="navIndex" @updateNavIndex="updateNavIndex"></v-nav>
                </div>
                <swiper :options="swiperOption" ref="mySwiper">
                    <swiper-slide class="tag-list" v-for="(obj,objIndex) in slideList" :key="objIndex">
                        <div class="tag-item" v-for="(item,index) in obj" :key="index" @click="Result(obj,item.id)">
                            {{item.title}}
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
            <!-- 数据来源易安居 -->
            <!-- <v-title-nav><h2 slot="title">解梦文化</h2><div slot="more"></div></v-title-nav> -->
             <v-title-nav><h2 slot="title">孕妇的梦</h2><div slot="more"></div></v-title-nav>
             <div class="hList">
                <div class="hItem" v-for="(item,index) in pregnantList" :key="index">
                    <h2>{{item}}</h2><i></i>
                </div>
             </div>
        </div>
    </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex'

export default {
    computed : {
        ...mapState('xiangshu',['navIndex']),
        swiper () {
            return this.$refs.mySwiper.swiper;
        },
    },
    watch : {
        'navIndex' (val) {
            this.swiper.slideTo(val, 0, false);
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
    },
    data () {
        return {
            backLink: '/main/home',
            navList: ["人物","动物","物品","植物","鬼神","生活","其他"],
            swiperOption : { initialSlide: this.navIndex },
            slideList: [],
            pregnantList: [],
            keyWord: "",
        }
    },
    methods : {
        ...mapMutations('xiangshu',['updateNavIndex']),
        //获取swiper数据
        getData: function () {
            let sendData = {
                cid: '94',
            }
            this.$http.post('/suan/apidata',sendData,'cesuan',null,this.success,this.failure);
        },
        success: function (res) {
            let resData = JSON.stringify(res).replace(/&#8203;/g,'');
            resData = JSON.parse(resData);
            // 渲染swiper数据
            for(let j in resData){
                // 剔除孕妇数据
                if (j != "pregnant"){
                    this.slideList.push(resData[j]);
                }
            }
            // 渲染孕妇数据 
            let pregnant = resData.pregnant
            for(let i=0; i<pregnant.length; i++){
                if(i<8){
                    this.pregnantList.push(pregnant[i].title)
                }
            }
        },
        Result: function (obj,id) {
            //传递id,跳转结果页面
            this.$router.push({name: 'zhougongAnalyze',query: {id: id},params:{objList: obj}});
        },
    }
}
</script>
<style lang="less" scoped>
.wrap{
    .content-wrap{
        position: absolute;
        top: 169/75rem;
        bottom: 0;
        left: 0;
        width: 100%;
        overflow: scroll;
        padding: 0 28/75rem;
        box-sizing: border-box;
        .content-box{
            overflow: hidden;
            padding-top: 16/75rem;
            .search-bg{
                width: 700/75rem;
                height: 385/75rem;
                margin: 0 auto;
                overflow: hidden;
                background: url('../assets/image/zhougong/search-bg@2x.png') no-repeat center center / 100% 100%;
                .input-box{
                    .flex-between();
                    width: 538/75rem;
                    height: 50/75rem;
                    margin: 0 auto;
                    margin-top: 278/75rem;
                    background: #fff;
                    padding: 0 22/75rem 0 33/75rem;
                    box-sizing: border-box;
                    .round(25/75rem);
                    input{
                        width: 80%;
                        height: 100%;
                        border: none;
                        font-size: 26/75rem;
                        outline: none;
                    }
                    & > i{
                        display: inline-block;
                        width: 44/75rem;
                        height: 44/75rem;
                        background:url('../assets/image/zhougong/search@2x.png') no-repeat center center / 100% 100%;
                    }
                }
            }
        }
        /deep/ .swiper-container{
            height: 700/75rem;
            overflow: hidden;
            margin-bottom: 20/75rem;
            .nav-list{
                .flex-between();
            }
            /deep/ .tag-list{
                .flex-start();
                width: 100%;
                flex-wrap: wrap;
                .tag-item{
                    margin-left:16/75rem;
                    margin-bottom:32/75rem;
                    padding: 8/75rem 5/75rem;
                    background: #fff;
                    box-sizing: border-box;
                    .boxshadow(0,3/75rem,6/75rem,rgba(0,0,0,0.16));
                    .round(13/75rem)
                }
            }
        }
        .hItem{
            .flex-between();
            margin-bottom: 32/75rem;
            & > h2{
                font-size: 28/75rem;
                font-weight: normal;
            }
            & > i{
                display: inline-block;
                width: 44/75rem;
                height: 44/75rem;
                background: url("../assets/image/common/right@2x.png") no-repeat center center / 100% 100%;
            }
        }
    }
}
</style>


