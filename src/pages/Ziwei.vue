<template>
    <div class="ziwei-wrap">
        <v-title-header>
            一生运程分析
            <div class="right-ico" slot="right-ico" @click="$jump('/baziBirth')"></div>
        </v-title-header>
        <div class="content-wrap">
            <div class="top">
                <div class="table">
                    <div class="table-cell"
                        v-for="(item,index) in tableList"
                        :key="index"
                        @click="selectItem(item,index)"
                    >
                        <div class="table-cell-box">
                            <div class="table-cell-box">
                                <img class="item-img" 
                                    :src="isSelect === item.title ? item.activeImg : item.img"
                                >
                            </div>
                            <div class="title" :class="isSelect === item.title ? 'active-title' : ''">{{item.title}}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="jj">
                <h2 class="h2">【{{this.isSelect}}】</h2>
                <div class="content" v-html="content.jj"></div>
            </div>
            <div class="characteristics">
                <h2 class="h2">{{this.isSelect}}的特性</h2>
                <div class="content" v-html="content.characteristics"></div>
            </div>
            <div class="analysis" v-show="content.analysis">
                <h2 class="h2">{{this.isSelect}}位置解析</h2>
                <div class="content" v-html="content.analysis"></div>
            </div>
        </div>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    data () {
        return {
            isSelect: "命宫",
            selectIndex: "0",
            gong: "life",
            content: "",
            tableList: [
                {
                    img: require('../assets/image/ziwei/ico1.png'),
                    activeImg: require('../assets/image/ziwei/ico1-active.png'),
                    title: "命宫",
                    gong: "life",
                    isFirst: true,
                    content: ""
                },
                {
                    img: require('../assets/image/ziwei/ico2.png'),
                    activeImg: require('../assets/image/ziwei/ico2-active.png'),
                    title: "迁移宫",
                    gong : "migration",
                    isFirst: true,
                    content: ""
                },
                {
                    img: require('../assets/image/ziwei/ico3.png'),
                    activeImg: require('../assets/image/ziwei/ico3-active.png'),
                    title: "财帛宫",
                    gong : "money",
                    isFirst: true,
                    content: ""
                },
                {
                    img: require('../assets/image/ziwei/ico4.png'),
                    activeImg: require('../assets/image/ziwei/ico4-active.png'),
                    title: "福德宫",
                    gong : "ford",
                    isFirst: true,
                    content: ""
                },
                {
                    img: require('../assets/image/ziwei/ico5.png'),
                    activeImg: require('../assets/image/ziwei/ico5-active.png'),
                    title: "事业宫",
                    gong : "career",
                    isFirst: true,
                    content: ""
                },
                {
                    img: require('../assets/image/ziwei/ico6.png'),
                    activeImg: require('../assets/image/ziwei/ico6-active.png'),
                    title: "夫妻宫",
                    gong : "haw",
                    isFirst: true,
                    content: ""
                },
                {
                    img: require('../assets/image/ziwei/ico7.png'),
                    activeImg: require('../assets/image/ziwei/ico7-active.png'),
                    title: "田宅宫",
                    gong : "tz",
                    isFirst: true,
                    content: ""
                },
                {
                    img: require('../assets/image/ziwei/ico8.png'),
                    activeImg: require('../assets/image/ziwei/ico8-active.png'),
                    title: "子女宫",
                    gong : "children",
                    isFirst: true,
                    content: ""
                },
                {
                    img: require('../assets/image/ziwei/ico9.png'),
                    activeImg: require('../assets/image/ziwei/ico9-active.png'),
                    title: "疾厄宫",
                    gong : "jie",
                    isFirst: true,
                    content: ""
                },
                {
                    img: require('../assets/image/ziwei/ico10.png'),
                    activeImg: require('../assets/image/ziwei/ico10-active.png'),
                    title: "父母宫",
                    gong : "parent",
                    isFirst: true,
                    content: ""
                },
                {
                    img: require('../assets/image/ziwei/ico11.png'),
                    activeImg: require('../assets/image/ziwei/ico11-active.png'),
                    title: "兄弟宫",
                    gong : "brother",
                    isFirst: true,
                    content: ""
                },
                {
                    img: require('../assets/image/ziwei/ico12.png'),
                    activeImg: require('../assets/image/ziwei/ico12-active.png'),
                    title: "朋友宫",
                    gong : "friend",
                    isFirst: true,
                    content: ""
                },
            ],
        }
    },
    computed : {
        ...mapState ('bazi',['baziUserInfo'])
    },
    created () {
        this.init()
    },
    methods: {
        init: function () {
            let userData = {
                cid : '106',
                // y : '2002',
                // m : '1',
                // d : '1',
                // h : '2',
                y : this.baziUserInfo.year,
                m : this.baziUserInfo.month,
                d : this.baziUserInfo.date,
                h : this.baziUserInfo.hour,
                gong : this.gong, 
            } 
            this.$http.post('/suan/apidata',userData,'cesuan',null,this.success,this.failure) 
        },  
        selectItem: function (item,index) {
            this.isSelect = item.title;
            this.gong = item.gong; 
            this.selectIndex = index;
            if(item.isFirst === true){  //第一次点击时发送请求
                this.init();
                item.isFirst = false;
            }else {  //若不是第一次点击渲染缓存的content
                this.content = this.tableList[this.selectIndex].content
            }
        },
        success: function (res) {
            if(res.code === "error") {
                this.$vux.alert.show({
                    title : '系统提示',
                    content : '暂无该数据'
                });
                return ;
            }

            let content = res.data[0];
            for(let i in content){
                for(let j in content[i]){
                    content[i][j] = content[i][j].replace(/(<\/?a.*?>)/g, ''); //去除a标签
                    }
                this.content = content[i];  //渲染
                this.tableList[this.selectIndex].content = this.content; //缓存请求结果，避免重复点击时发送请求
            }
        }
    },
}
</script>
<style lang="less">
.bg-white{
    background: #fff;
}
.active-title{
    color: @baseBoldColor;
}
.ziwei-wrap{
    width: 100%;
    height: 100%;
    .right-ico{
        width: 38/75rem;
        height: 38/75rem;
        background: url('../assets/image/common/switch.png')no-repeat center center / 100% 100%;
    }
    .content-wrap{
        background: #f1f1f1;
        overflow: hidden;
        padding-top: 90/75rem;
        .border-box();
        .top{
            overflow: hidden;
            .bg-white();
            .table{
                .flex-start();
                flex-wrap: wrap;
                width: 660/75rem;
                margin: 45/75rem auto;
                .table-cell{
                    width: 25%;
                    height: 157/75rem;
                    .flex-center();
                    border-right: 1px solid rgba(112,112,112,0.39);
                    border-bottom: 1px solid rgba(112,112,112,0.39);
                    .border-box();
                    .table-cell-box{
                        .flex-col();
                        width: 120/75rem;
                        height: 120/75rem;
                    }
                }
                .table-cell:nth-child(1){
                    .item-img{
                        width: 80/75rem;
                        height: 60/75rem;
                    }
                }
                .table-cell:nth-child(2){
                    .item-img{
                        width: 53/75rem;
                        height: 62/75rem;
                    }
                }
                .table-cell:nth-child(3){
                    .item-img{
                        width: 60/75rem;
                        height: 60/75rem;
                    }
                }
                .table-cell:nth-child(4){
                    border-right: none;
                    .item-img{
                        width: 52/75rem;
                        height: 63/75rem;
                    }
                }
                .table-cell:nth-child(5){
                    .item-img{
                        width: 64/75rem;
                        height: 56/75rem;
                    }
                }
                .table-cell:nth-child(6){
                    .item-img{
                        width: 64/75rem;
                        height: 54/75rem;
                    }
                }

                .table-cell:nth-child(7){
                    .item-img{
                        width: 64/75rem;
                        height: 61/75rem;
                    }
                }
                .table-cell:nth-child(8){
                    border-right: none;
                    .item-img{
                        width: 60/75rem;
                        height: 52/75rem;
                    }
                }
                .table-cell:nth-child(9){
                    border-bottom: none;
                    .item-img{
                        width: 58/75rem;
                        height: 58/75rem;
                    }
                }
                .table-cell:nth-child(10){
                    border-bottom: none;
                    .item-img{
                        width: 83/75rem;
                        height: 34/75rem;
                    }
                }
                .table-cell:nth-child(11){
                    border-bottom: none;
                    .item-img{
                        width: 77/75rem;
                        height: 51/75rem;
                    }
                }
                .table-cell:nth-child(12){
                    border-bottom: none;
                    border-right: none;
                    .item-img{
                        width: 68/75rem;
                        height: 61/75rem;
                    }
                }

            }
        }
        // 数据过滤
        .characteristics, .jj, .analysis{
            padding-bottom: 30/75rem;
            background: #fff;
            margin-top: 15/75rem;
            overflow: hidden;
            .grid_1, .grid_2, .grid_3, .news-quote, img, .palaceGuide, .dbRecord{
                display: none;
            }
        }
        .h2{
            overflow: hidden;
            padding: 30/75rem 40/75rem;
            .border-box();
            color: @baseBoldColor;
            font-size: 36/75rem;
            border-bottom: 1px solid #f1f1f1;
        }
        .content{
            width: 94%;
            margin: 30/75rem auto 0 auto;
            padding: 30/75rem 35/75rem;
            .border-box();
            .boxshadow();
            .round(10/75rem);
            background: #FFFCF8;
        }  
    }
}

</style>