<template>
    <div class="xiangshu-wrap">
        <v-header></v-header>
        <v-title-header>
            相术解析
        </v-title-header>
        <div class="content-wrap" ref="content">
            <div class="swiper-container">
                <div class="swiper-top">
                    <v-nav :navList="navList" :nowIndex="navIndex" @updateNavIndex="updateNavIndex"></v-nav>
                </div>
                <swiper :options="swiperOption" ref="mySwiper">
                        <swiper-slide ref="slideone" v-for="(item,index) in list" :key="index">
                            <div class="hItem" v-for="(innerItem,innerIndex) in item.data" :key="innerIndex" @click="toInner(innerItem.id)">
                                <img :src="innerItem.img">
                                <div class="right">
                                    <h2>{{innerItem.title}}</h2>
                                    <p v-html="innerItem.content"></p>
                                </div>
                            </div>
                            <load-more :tip="tip" :show-loading="showLoading" :class="showIco? 'show': 'hide'"></load-more>  
                        </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>
</template>
<script>
import { LoadMore } from 'vux'
import {mapState,mapMutations} from 'vuex'

export default {
    components: {
        LoadMore
    },
    data () {
        return {
            navList: ["面相图解","手相解析","痣向解析","相学大全",],
            swiperOption : { initialSlide: this.navIndex ,autoHeight : true},
            list : [
                {data: [],scrollPosition: 0,limit: 0,loading: false,switchBack: false},
                {data: [],scrollPosition: 0,limit: 0,loading: false,switchBack: false},
                {data: [],scrollPosition: 0,limit: 0,loading: false,switchBack: false},
                {data: [],scrollPosition: 0,limit: 0,loading: false,switchBack: false},
            ],
            nowIndex: 0,
            tip: "正在加载",
            showIco: false,
            // loading: false,
            showLoading: true,
            limit: 0,//下拉加载，++请求下10条数据
        }
    },
    computed : {
        ...mapState('xiangshu',['navIndex']),
        swiper () {
            return this.$refs.mySwiper.swiper;
        },
    },
    watch : {
        'navIndex' (val) {
            this.swiper.slideTo(val, 0, false); 
            this.pullDown();
        }
    },
    created() {
        this.getData();
    },
    mounted () {
        if(this.navIndex != 0) { 
            this.swiper.slideTo(this.navIndex, 0, false);
        }
        this.swiper.on('slideChange', () => {
            this.updateNavIndex(this.swiper.activeIndex);
        });
        // console.log(this.nowIndex)
        this.pullDown();
    },
    methods : {
        ...mapMutations('xiangshu',['updateNavIndex']),
        getData: function () {
            let sendData = {
                cid : 96,
                tid: '501',
            }
            this.$http.post('/suan/apidata',sendData,'cesuan',null,this.success);
            let sendData1 = {
                    cid : 96,
                    tid: '502',
                }
            this.$http.post('/suan/apidata',sendData1,'cesuan',null,this.success1);
            let sendData2 = {
                    cid : 96,
                    tid: '503',
                }
            this.$http.post('/suan/apidata',sendData2,'cesuan',null,this.success2);
             let sendData3 = {
                    cid : 96,
                    tid: '504',
                }
            this.$http.post('/suan/apidata',sendData3,'cesuan',null,this.success3);
        },
        // 取第一张照片
        pickFirstPicture: function (data) {
            for (let i of data){
                i.img = i.img.split(' ')//取第一张照片
                i.img = 'https://mingli.szmonster.com'+ i.img[0];
            }
        },
        success: function(res) {
            this.list[0].data = res.data;
            this.pickFirstPicture(res.data)
        },
        success1: function(res) {
            this.list[1].data = res.data;
            this.pickFirstPicture(res.data)
        },
        success2: function(res) {
            this.list[2].data = res.data;
            this.pickFirstPicture(res.data)
        },
        success3: function(res) {
            this.list[3].data = res.data;
            this.pickFirstPicture(res.data)
        },
        toInner: function (id) {
            this.$router.push({
                name: 'article',
                query: {
                    id : id
                }
            }) 
        },
        //下拉加载更多
        pullDown: function () {
            this.nowIndex= this.navIndex;
            let content = this.$refs.content;
            content.addEventListener('scroll',() => {
                // console.log(content.scrollTop)
                if(this.nowIndex===0){
                    if(this.list[0].switchBack===false){//首次切换时设置滚动条在顶部
                        content.scrollTop = 0;
                        this.list[0].switchBack=true
                    }
                    this.list[0].scrollPosition = content.scrollTop;
                    //滚动条触底且没有在发送状态时
                    if(content.scrollTop+content.offsetHeight>=content.scrollHeight*0.99 && this.list[0].loading===false){
                        this.tip="正在加载";
                        this.showLoading = true; //显示加载ico
                        this.list[0].loading = true; //加载中停止发送更多请求
                        this.list[0].limit++;//请求10条数据
                        let sendData = {
                            cid : 96,
                            tid: '501',
                            limit: this.list[0].limit,
                        }
                        this.$http.post('/suan/apidata',sendData,'cesuan',null,this.loadmore,null);
                        this.showIco = true;//显示加载更多动画
                    }
                }
                if(this.nowIndex===1){
                    if(this.list[1].switchBack===false){
                        content.scrollTop = 0;
                        this.list[1].switchBack=true
                    }
                    // content.scrollTop = this.list[1].scrollPosition;          
                    if(content.scrollTop+content.offsetHeight>=content.scrollHeight*0.99 && this.list[1].loading===false){ //触底且没有在发送状态
                        // console.log('到底了');
                        this.tip="正在加载";
                        this.showLoading = true;
                        this.list[1].loading = true; 
                        this.list[1].limit++;
                        let sendData = {
                            cid : 96,
                            tid: '502',
                            limit: this.list[1].limit,
                        }
                        this.$http.post('/suan/apidata',sendData,'cesuan',null,this.loadmore1,null);
                        this.showIco = true;//显示加载更多动画
                    }
                }
                if(this.nowIndex===2){ 
                    if(this.list[2].switchBack===false){
                        content.scrollTop = 0;
                        this.list[2].switchBack=true
                    }
                    // this.list[2].scrollPosition = content.scrollTop;
                    if(content.scrollTop+content.offsetHeight>=content.scrollHeight*0.99 && this.list[2].loading===false){ //触底且没有在发送状态
                        this.tip="正在加载";
                        this.showLoading = true;
                        this.list[2].loading = true; //加载中停止发送更多请求
                        this.list[2].limit++;//请求10条数据
                        let sendData = {
                            cid : 96,
                            tid: '503',
                            limit: this.list[2].limit,
                        }
                        this.$http.post('/suan/apidata',sendData,'cesuan',null,this.loadmore2,null);
                        this.showIco = true;//显示加载更多动画
                    }
                }
                if(this.nowIndex===3){ 
                    if(this.list[3].switchBack===false){
                        content.scrollTop = 0;
                        this.list[3].switchBack=true
                    }
                    // this.list[2].scrollPosition = content.scrollTop;
                    if(content.scrollTop+content.offsetHeight>=content.scrollHeight*0.99 && this.list[3].loading===false){ //触底且没有在发送状态
                        this.tip="正在加载";
                        this.showLoading = true;
                        this.list[3].loading = true; //加载中停止发送更多请求
                        this.list[3].limit++;//请求10条数据
                        let sendData = {
                            cid : 96,
                            tid: '504',
                            limit: this.list[3].limit,
                        }
                        this.$http.post('/suan/apidata',sendData,'cesuan',null,this.loadmore3,null);
                        this.showIco = true;//显示加载更多动画
                    }
                }            
            })  
        },
        loadmore: function (res) {
            for (let i of res.data){
                i.img = i.img.split(' ') //取第一张照片
                i.img = 'https://mingli.szmonster.com'+ i.img[0];//替换url
                this.list[0].data.push(i); //添加10条数据
            }
            if(res.data.length===10){
                //数据渲染完成后关闭加载动画
                this.$nextTick(function () {
                    this.list[0].loading=false;
                    this.showIco = false;
                })  
            }
            if(res.data.length!=10 && this.nowIndex===0){
                this.showIco = true;
                this.tip="没有更多数据！";
                this.showLoading = false;
            }   
        },
        loadmore1: function (res) {
            for (let i of res.data){
                i.img = i.img.split(' ') //取第一张照片
                i.img = 'https://mingli.szmonster.com'+ i.img[0];
                this.list[1].data.push(i); //添加10条数据
            }
           if(res.data.length===10){
                //数据渲染完成后关闭加载动画
                this.$nextTick(function () {
                    this.list[1].loading=false;
                    this.showIco = false;
                })  
            }
            if(res.data.length!=10 && this.nowIndex===1){
                this.showIco = true;
                this.tip="没有更多数据！";
                this.showLoading = false;
            }  
                
        },
        loadmore2: function (res) {
            for (let i of res.data){
                i.img = i.img.split(' ') //取第一张照片
                i.img = 'https://mingli.szmonster.com'+ i.img[0];
                this.list[2].data.push(i); //添加10条数据
            }
            if(res.data.length===10){
                //数据渲染完成后关闭加载动画
                this.$nextTick(function () {
                    this.list[2].loading=false;
                    this.showIco = false;
                })  
            }
            if(res.data.length!=10 && this.nowIndex===2){
                this.showIco = true;
                this.tip="没有更多数据";
                this.showLoading = false;
                this.list[2].loading=true;
            }  
        },
        loadmore3: function (res) {
            for (let i of res.data){
                i.img = i.img.split(' ') //取第一张照片
                i.img = 'https://mingli.szmonster.com'+ i.img[0];
                this.list[3].data.push(i); //添加10条数据
            }
            if(res.data.length===10){
                //数据渲染完成后关闭加载动画
                this.$nextTick(function () {
                    this.list[3].loading=false;
                    this.showIco = false;
                })  
            }
            if(res.data.length!=10 && this.nowIndex===3){
                this.showIco = true;
                this.tip="没有更多数据";
                this.showLoading = false;
                this.list[3].loading=true;
            }  
        },
    }
    
}
</script>
<style lang="less">
.xiangshu-wrap{
    .vux-loadmore{
        margin-bottom: 50/75rem;
    }
    .show{
        display: block;
    }
    .hide{
        display: none;
    }
    .content-wrap{
        position: absolute;
        top: 285/75rem;
        bottom: 0;
        left: 0;
        width: 100%;
        overflow: auto;
        .nav{
            width: 100%;
            position: fixed;
            top: 169/75rem;
            left: 0;
            background: #fff;
            z-index: 100;
        }
        .swiper-container{
            width: 100%;
            box-sizing: content-box;
            /deep/ .nav .nav-list{
                .flex-between();
                width: 94%;
                margin: 0 auto;
            }
            /deep/ .nav .nav-list .item{
                height:85/75rem;
            }
            .hItem{
                width: 98%;
                margin:  0 auto;
                .flex-start-only();
                margin-bottom: 32/75rem;
                & > img{
                    width: 258/75rem;
                    height: 198/75rem;
                    .round(27/75rem);
                    margin-left: 14/75rem;
                }
                .right{
                    margin-left: 20/75rem;
                    & > h2{
                        width: 400/75rem;
                        height: 40/75rem;
                        margin-top: 10/75rem;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        font-size: 28/75rem;
                    }
                    & > p{
                        width: 400/75rem;
                        height: 120/75rem;
                        margin-top: 17/75rem;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 3;
                        -webkit-box-orient: vertical;
                        font-size: 26/75rem;
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
</style>


