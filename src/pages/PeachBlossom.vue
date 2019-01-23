<template>
    <div class="wrap">
        <v-title-header :backLink="backLink">
            桃花运
        </v-title-header>
        <div class="content-wrap">
            <v-title-nav>命中桃花</v-title-nav>
            <div class="pink-bg">
                <div class="pink-header">
                    <h2>命中带{{resData.totalNum}}朵桃花:</h2>
                    <img class="small-flower" src="../assets/image/peachBlossom/smallFlower@2x.png" v-for="(item,index) in resData.totalNum" :key="index">
                </div>
                <div class="pink-item" v-for="(item,index) in pinkList" :key="index">
                    <div class="row">
                        <h2>{{item.title}}{{item.num}}朵:</h2>
                        <img class="small-flower" src="../assets/image/peachBlossom/smallFlower@2x.png" v-for="(flowerItem,flowerIndex) in parseInt(item.num)" :key="flowerIndex">
                    </div>
                    <div class="artical">
                        {{item.content}}
                    </div>
                </div>
            </div>
            <v-title-nav>命花命盘</v-title-nav>
            <div class="form">
                <div class="form-header">
                    <div class="form-td" v-for="(item,index) in formHeader" :key="index">{{item.title}}</div>
                </div>
                <div class="form-row" v-for="(item,index) in formContent" :key="index">
                    <div class="form-td">{{item.idNum}}</div>
                    <div class="form-td">{{item.sort}}</div>
                    <div class="form-td formSymbol">
                        <span class="red-color">{{item.symbolOne}}</span>
                        <span class="blue-color">{{item.symbolTwo}}</span>
                    </div>
                    <div class="form-td">{{item.flowerNum}}</div>
                </div>
            </div>
            <v-title-nav>桃花解释</v-title-nav>
            <div class="swiper-container">
                <div class="swiper-top" ref="swiperTop">
                    <v-nav :navList="navList" :nowIndex="navIndex" @updateNavIndex="updateNavIndex"></v-nav>
                </div>
                <swiper :options="swiperOption" ref="mySwiper">
                    <swiper-slide v-for="(item,index) in pList" :key="index">
                        <p>{{item[0]}}</p>
                        <p>{{item[1]}}</p>
                        <p>{{item[2]}}</p>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>    
</template>
<script>
import {mapState,mapMutations} from 'vuex'

export default {
    computed : {
        ...mapState('fengshuiKnowledge',['navIndex']),
        'navList' () {
            let list = [];
            for(let item of this.formContent) {
                list.push(item.sort);
            }
            return list;
        },
        swiper () {
            return this.$refs.mySwiper.swiper;
        },
    },
    watch : {
        'navIndex' (val) {
            this.swiper.slideTo(val, 0, false);
            // 保持swipertop滚动位置
            if (val >4){
                this.$refs.swiperTop.scrollLeft = this.$refs.swiperTop.scrollWidth;
            }
            else{
                this.$refs.swiperTop.scrollLeft = 0;
            }
        }
    },
    created() {
        this.getData();
    },
    mounted () {
        if(this.navIndex != 0) { 
            this.swiper.slideTo(this.navIndex, 0, false);
        }
        this.swiper.on('slideChange',() => {
            this.updateNavIndex(this.swiper.activeIndex);
        });
    },
    data () {
        return{
            backLink : '/love',
            resData: {},
            totalNum: 6,
            pinkList: [],
            formHeader: [{title:"序号"},{title:"类别"},{title:"象征"},{title:"命中有几朵"}],
            formContent: [
                {
                    idNum: "01",
                    sort: "天喜桃花",
                    symbolOne: "爱情顺利",
                    symbolTwo: "婚姻喜庆",
                    flowerNum: "",
                },
                {
                    idNum: "02",
                    sort: "红鸾桃花",
                    symbolOne: "早熟早恋",
                    symbolTwo: "追求情欲",
                    flowerNum: "",
                },
                {
                    idNum: "03",
                    sort: "墙内桃花",
                    symbolOne: "闺房情趣",
                    symbolTwo: "夫妻恩爱",
                    flowerNum: "",
                },
                {
                    idNum: "04",
                    sort: "墙外桃花",
                    symbolOne: "外遇出轨",
                    symbolTwo: "异性缘旺",
                    flowerNum: "",
                },
                {
                    idNum: "05",
                    sort: "沐浴桃花",
                    symbolOne: "性感魅力",
                    symbolTwo: "吸引力强",
                    flowerNum: "",
                },
                {
                    idNum: "06",
                    sort: "正缘桃花",
                    symbolOne: "喜结良缘",
                    symbolTwo: "夫妻恩爱",
                    flowerNum: "",
                },
                {
                    idNum: "07",
                    sort: "红艳桃花",
                    symbolOne: "高雅优美",
                    symbolTwo: "浪漫爱情",
                    flowerNum: "",
                },
                {
                    idNum: "08",
                    sort: "玉门桃花",
                    symbolOne: "观念开放",
                    symbolTwo: "追求情欲",
                    flowerNum: "",
                },
                {
                    idNum: "09",
                    sort: "咸池桃花",
                    symbolOne: "多情多欲",
                    symbolTwo: "风流妖艳",
                    flowerNum: "",
                }
            ],
            swiperOption : { initialSlide: this.navIndex },
            pList : []
        }
    },
    methods : {
        ...mapMutations('fengshuiKnowledge',['updateNavIndex']),
        getData: function () {
            this.$http.post('/suan/apidata',this.$route.query,'cesuan',null,this.success,null)
        },
        success: function (res) {
            if(res.code === 'error') {
                this.$vux.alert.show({
                    title : '系统提示',
                    content : '暂无该数据'
                });
                return ;
            }

            this.resData = res.data;
            this.resData.totalNum = parseInt(this.resData.blossom.match(/\b\w*\d\b/g)[0]);
            let list = this.resData.huajs.split('卍');
            let listObj = [];
            for(let i of list){
                // console.log(i)
                let item = {
                    title:"",
                    num: "",
                    content: "",
                }
                item.title = i.match(/(.*)\S(?=\d)/g)[0]  //匹配数字前的字符串=>title;
                item.num = i.match(/\d/g)[0];   //匹配朵数;
                item.content = i.substring(i.indexOf(' ')).trim();  //处理content数据;
                listObj.push(item);
            }
            this.pinkList = listObj;
            let flowerArr = this.resData.quantity.split('卍');
            for(let i=0; i<this.formContent.length;i++){
               this.formContent[i].flowerNum = flowerArr[i];
            }
            //swiper解释文本
            let pArr = res.data.thjs.split('卍');
            for(let p in pArr) {
                let pStr = pArr[p];
                let pTitle = pStr.substr(0,4);
                let pStrArr = [];
                pStrArr[0] = pStr.substring(0,pStr.indexOf('何时会走'+pTitle+'运'));
                pStrArr[1] = pStr.substring(pStr.indexOf('何时会走'+pTitle+'运'),pStr.indexOf('你走'+pTitle+'运的年份有'));
                pStrArr[2] = pStr.substring(pStr.indexOf('你走'+pTitle+'运的年份有'),pStr.length);
                pArr[p] = pStrArr;
            }
            this.pList = pArr;
        },
    }
}
</script>
<style lang="less" scoped>
.wrap{
    /deep/ .title-nav {
        padding-left: 0;
    }
    .content-wrap{
        width: 100%;
        padding: 90/75rem 32/75rem 32/75rem 32/75rem;
        .border-box();
        .pink-bg{
            position: relative;
            padding: 35/75rem 16/75rem;
            .round(10/75rem);
            background:#FFF8F1;
            .pink-header{
                .flex-start();
            }
            h2{
                font-size: 26/75rem;
            }
            .small-flower{
                width: 44/75rem;
                height: 44/75rem;
                margin-left: 20/75rem;
            }
            .row{
                .flex-start();
                margin-top: 24/75rem;
            }
            .artical{
                margin-top: 16/75rem;
                line-height:40/75rem;;
                color:rgba(0,0,0,0.7);
            }
        }
        .form{
            width: 100%;
            margin-top: 10/75rem;
            border-top: 1px solid rgba(112,112,112,0.3);
            border-left: 1px solid rgba(112,112,112,0.3);
            .form-header{
                width: 100%;
                background: #FFECEC;
                font-weight: bold;
                .flex-start();
                .form-td{
                    width: 25%;
                    height: 80/75rem;
                    line-height: 80/75rem;
                    text-align: center;
                    font-size: 26/75rem;
                    border-right: 1px solid rgba(112,112,112,0.3);
                    border-bottom: 1px solid rgba(112,112,112,0.3);                    
                }
            }
            .form-row{
                width: 100%;
                .flex-start();
                .form-td{
                    width: 25%;
                    height: 80/75rem;
                    line-height: 80/75rem;
                    text-align: center;
                    font-size: 26/75rem;
                    border-right: 1px solid rgba(112,112,112,0.3);
                    border-bottom: 1px solid rgba(112,112,112,0.3);                    
                }
                .formSymbol{
                    .flex-col();
                    line-height: 0;
                    .red-color{
                        color: @baseColor;
                    }
                    .blue-color{
                        color: #009DE2;
                    }
                }
            }
        }
        .swiper-container{
            width: 670/75rem;
            margin: 0 auto;
            .swiper-top{
                width: 100%;
                overflow-x: scroll;
                &::-webkit-scrollbar{
                    width: 0!important;
                }
            }
            /deep/ .nav{
                width: 200%;
                overflow-x: scroll; 
            }
            .nav-list{
                .flex-start();
            }
            /deep/ .nav .nav-list .item{
                height: 85/75rem;
            }
            p {
                font-size: 26/75rem;
            }
        }
    }
}
</style>


