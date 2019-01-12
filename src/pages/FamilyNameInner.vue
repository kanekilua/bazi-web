<template>
     <div class="wrap">
        <v-title-header :backLink="backLink">
            {{this.$route.query.xing}}
        </v-title-header>
        <div class="head">
            <v-title-nav>百家姓</v-title-nav>
            <div class="swiper-top">
                <v-nav :navList="navList" :nowIndex="navIndex" @updateNavIndex="updateNavIndex"></v-nav>
                <div class="right"></div>
            </div>
        </div>
        <div class="content-wrap">
            <div class="swiper-container">
                <swiper :options="swiperOption" ref="mySwiper">
                    <swiper-slide v-for="(outItem,outIndex) in list" :key="outIndex">
                        <div class="banxin">
                            <div class="name-list">
                                <div class="name-item-box"
                                    v-for="(innerItem,innerIndex) in outItem.val"
                                    :key="innerIndex"  
                                    @click="beginTest(innerItem)"
                                >
                                    <div class="name-item">
                                        {{innerItem}}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex'
let numArr = [];
for (var i = 1; i <= 50; i++) {
    numArr.push({
        name: i ,
        value: i 
    })
}
export default {
    computed : {
        ...mapState('familyNameInner',['navIndex']),
        swiper () {
            return this.$refs.mySwiper.swiper;
        },
    },
    watch : {
        'navIndex' (val) {
            this.swiper.slideTo(val, 0, false);
        },
         selectNum: {
            handler (val) {
                this.num[0] = val
                this.$set(this.num, 0, val)
            },
            deep: true
        },
        changeNum (value) {
            this.selectNum = value[0]
        },
        'checkboxArr' (val) {
            if(this.checkboxArr.length>3){
                this.checkboxArr.shift();
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
    },
    data () {
        return {
            backLink: '/familyName',
            navList: ["男名","女名"],
            swiperOption : { initialSlide: this.navIndex ,autoHeight : true},
            list: [
                {val: []},
                {val: []},
            ],
            // 弹窗
            showDialogStyle: false,
            showSelect : false,
            numArr: [numArr],
            num: ['2005'],
            selectNum: '2005',
            checkboxArr: [],
        }
    },
    methods : {
        ...mapMutations('familyNameInner',['updateNavIndex']),
        changeNum (value) {
            this.selectNum = value[0]
        },
        ShowSelect () {
            if(this.showSelect == false){
                this.showSelect = true;
            } else {
                this.showSelect = false;
            }
        },
        getData: function () {
            let params = {
                cid : '105',
                xing : this. $route.query.xing
            }
            this.$http.post('/suan/apidata',params,'cesuan',null,this.success,this.failure);
        },
        success: function (res) {
            this.list[0].val = res.data[0].nan.split("卍");
            this.list[0].val.pop();
            this.list[1].val = res.data[0].nv.split("卍");
            this.list[1].val.pop();
        },
        beginTest: function (item) {
            this.$router.push({
                path: '/nameTestResult',
                query: {
                    name : item,
                }
            })
        }
    }
}
</script>
<style lang="less" scoped>
.head{
    padding: 90/75rem 32/75rem 20/75rem 32/75rem;
    /deep/ .nav .nav-list{
        .flex-around();
        .item{
            margin-top: 0;
        }
    }
}
.content-wrap{
    .banxin{
        padding: 0 20/75rem;
        .border-box();
    }
    .name-list{
        width: 100%;
        .flex-start();
        flex-wrap: wrap;
        .name-item-box{
            .flex-center();
            width: 25%;
            height: 70/75rem;
            margin-bottom: 42/75rem;
            .name-item{
                width: 80%;
                height: 100%;
                line-height: 70/75rem;
                .boxshadow();
                .round(10/75rem);
                text-align: center;
                font-size: 26/75rem;
            }
        }
    }
}
.fillter-dialog{
    position: relative;
    width: 630/75rem;
    height: 1000/75rem;
    margin: 0 auto;
    padding: 52/75rem;
    .border-box();
    .round(53/75rem);
    background: #fff;
    .exit{
        position: absolute;
        right: 30/75rem;
        top: 10/75rem;
        font-size: 40/75rem;
    }
    & > h2{
        margin-bottom: 40/75rem;
        text-align: left;
        font-size: 32/75rem;
    }
    .name-num{
        margin-bottom: 40/75rem;
        .flex-around();
        label{
            & > input{
                display: none;
            }
            & > input:checked + div{
                background: @baseColor;
                color: #fff;
            }
            
        }
        .name-btn{
            width: 152/75rem;
            height: 60/75rem;
            line-height: 60/75rem;
            .round(27/75rem);
            text-align: center;
            background: #fff;
            .boxshadow(0,3/75rem,6/75rem,rgba(0,0,0,0.16));
            font-size: 32/75rem;
        }
    }
    .select{
        .flex-around();
        width: 138/75rem;
        height: 60/75rem;
        margin: 0 auto 20/75rem auto;
        .round(27/75rem);
        .boxshadow(0,3/75rem,6/75rem,rgba(0,0,0,0.16));
        & > i {
            display: inline-block;
            width: 22/75rem;
            height: 22/75rem;
            background: url('../assets/image/common/select@2x.png') no-repeat center center / 100% 100%;
        }
        .select-up{
            .rotate(-180deg);
            .tran(transform 0.3s ease-in 0s);
        }
        .select-down{
            .rotate(0deg);
            .tran(transform 0.3s ease-in 0s);
        }
    }
    .pick-box{
        position: relative;
        .vux-picker{
            position: absolute;
            top: 70/75rem;
            left: 0;
            right: 0;
            width: 100/75rem;
            margin: 0 auto;
            background: rgba(0,0,0,0.2);
        }
    }
   
    .checkbox-list{
        margin-bottom: 40/75rem;
        font-size: 28/75rem;
        .flex-around();
         & > input{
             display: none;
         }
        & > input + label{
            width: 88/75rem;
            height: 88/75rem;
            line-height: 88/75rem;
            text-align: center;
            .round(50%);
            border: 1px solid rgba(112,112,112,1);
        }
        & > input:checked + label{
            background: @baseColor;
            color: #fff;
        }
    }
    .fillter-input{
        width: 358/75rem;
        height: 80/75rem;
        .round(52/75rem);
        border: none;
        .boxshadow(0,3/75rem,6/75rem,rgba(0,0,0,0.16));
        padding-left: 40/75rem;
        .border-box();
        outline: none;
    }
    .fillter-btn{
        display: block;
        width: 500/75rem;
        height: 98/75rem;
        margin-top: 80/75rem;
        .round(36/75rem);
        background: @baseColor;
        border: none;
        outline: none;
        color: #fff;
    }
}
</style>