<template>
    <div class="ziwei-wrap">
        <v-title-header>
            一生运程分析
            <div class="right-ico" slot="right-ico"></div>
        </v-title-header>
        <div class="content-wrap">
            <div class="top">
                <div class="table">
                    <div class="table-cell"
                        v-for="(item,index) in tableList"
                        :key="index"
                        @click="selectItem(item)"
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
        </div>
    </div>
</template>
<script>

export default {
    data () {
        return {
            isSelect: "命宫",
            tableList: [
                {
                    img: require('../assets/image/ziwei/ico1.png'),
                    activeImg: require('../assets/image/ziwei/ico1-active.png'),
                    title: "命宫",
                },
                {
                    img: require('../assets/image/ziwei/ico2.png'),
                    activeImg: require('../assets/image/ziwei/ico2-active.png'),
                    title: "迁移宫",
                },
                {
                    img: require('../assets/image/ziwei/ico3.png'),
                    activeImg: require('../assets/image/ziwei/ico3-active.png'),
                    title: "财帛宫",
                },
                {
                    img: require('../assets/image/ziwei/ico4.png'),
                    activeImg: require('../assets/image/ziwei/ico4-active.png'),
                    title: "福德宫",
                },
                {
                    img: require('../assets/image/ziwei/ico5.png'),
                    activeImg: require('../assets/image/ziwei/ico5-active.png'),
                    title: "事业宫",
                },
                {
                    img: require('../assets/image/ziwei/ico6.png'),
                    activeImg: require('../assets/image/ziwei/ico6-active.png'),
                    title: "夫妻宫",
                },
                {
                    img: require('../assets/image/ziwei/ico7.png'),
                    activeImg: require('../assets/image/ziwei/ico7-active.png'),
                    title: "田宅宫",
                },
                {
                    img: require('../assets/image/ziwei/ico8.png'),
                    activeImg: require('../assets/image/ziwei/ico8-active.png'),
                    title: "子女宫",
                },
                {
                    img: require('../assets/image/ziwei/ico9.png'),
                    activeImg: require('../assets/image/ziwei/ico9-active.png'),
                    title: "疾厄宫",
                },
                {
                    img: require('../assets/image/ziwei/ico10.png'),
                    activeImg: require('../assets/image/ziwei/ico10-active.png'),
                    title: "父母宫",
                },
                {
                    img: require('../assets/image/ziwei/ico11.png'),
                    activeImg: require('../assets/image/ziwei/ico11-active.png'),
                    title: "兄弟宫",
                },
                {
                    img: require('../assets/image/ziwei/ico12.png'),
                    activeImg: require('../assets/image/ziwei/ico12-active.png'),
                    title: "朋友宫",
                },
            ]
        }
    },
    created () {
        // this.getData()
    },
    methods: {
        // getData: function () {
        //     let userData = {
        //         'cid' : 53,
        //         'name' : '张三',
        //         'sex' : '0',
        //         'DateType' : 1,
        //         'year' : 1980,
        //         'month' : 1,
        //         'date' : 4,
        //         'hour' : 5,
        //         'minute' : 6,
        //         'other' : 1,
        //         'runfen' : 1,
        //     } 
        //     this.$http.post('/suan/apidata',userData,'cesuan',null,this.success,this.failure) 
        // },  
        selectItem: function (item) {
            this.isSelect = item.title;
        }      
    }
}
</script>
<style lang="less" scoped>
.bg-white{
    background: #fff;
}
.active-title{
    color: @baseBoldColor;
}
.ziwei-wrap{
    background: #F1F1F1;
    .right-ico{
        width: 38/75rem;
        height: 38/75rem;
        background: url('../assets/image/common/switch.png')no-repeat center center / 100% 100%;
    }
    .content-wrap{
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
    }
}

</style>