<template>
     <div class="wrap">
        <v-header></v-header>
        <v-title-header :backLink="backLink">
            王
        </v-title-header>
        <div class="head">
            <v-title-nav><h2 slot="title">百家姓</h2><div slot="more"></div></v-title-nav>
            <div class="swiper-top">
                <v-nav :navList="navList" :nowIndex="navIndex" @updateNavIndex="updateNavIndex"></v-nav>
                <div class="right"></div>
            </div>
            <div class="fillter" @click="showDialogStyle = true">
                <i></i>
                <span>筛选</span>
            </div>
        </div>
        <div v-transfer-dom>
            <x-dialog v-model="showDialogStyle" hide-on-blur :dialog-style="{'max-width': '100%', width: '100%', height: '50%', 'background-color': 'transparent'}">
                <div class="fillter-dialog">
                    <div class="exit" @click="showDialogStyle=false">X</div>
                    <h2>单双名筛选</h2>
                    <div class="name-num">
                        <label for="double-name">
                            <input type="radio" name="name-num" id="double-name" checked>
                            <div class="name-btn">双名</div>
                        </label>
                        <label for="single-name">
                            <input type="radio" name="name-num" id="single-name">
                            <div class="name-btn">单名</div>
                        </label>
                    </div>
                    <h2>名字笔画数量筛选</h2>
                    <div class="pick-box">
                        <div class="select" @click="ShowSelect">
                            <div>{{selectNum}}</div>
                            <i :class="showSelect ? 'select-up' :'select-down'"></i>
                        </div>
                        <picker :data='numArr' v-model='num' @on-change='changeNum' v-show="showSelect"></picker>
                    </div>
                    <h2>五行筛选</h2>
                    <div class="checkbox-list">
                        <input type="checkbox" id="jin" value="金" v-model="checkboxArr">
                        <label for="jin">金</label>
                        <input type="checkbox" id="mu" value="木" v-model="checkboxArr">
                        <label for="mu">木</label>
                        <input type="checkbox" id="shui" value="水" v-model="checkboxArr">
                        <label for="shui">水</label>
                        <input type="checkbox" id="huo" value="火" v-model="checkboxArr">
                        <label for="huo">火</label>
                        <input type="checkbox" id="tu" value="土" v-model="checkboxArr">
                        <label for="tu">土</label>
                    </div>
                    <h2>自筛选</h2>
                    <input type="text" placeholder="输入您命中要带的字" class="fillter-input">
                    <input type="button" value="开始筛选" class="fillter-btn">
                </div>
            </x-dialog>
        </div>
        <div class="content-wrap">
            <div class="swiper-container">
                <swiper :options="swiperOption" ref="mySwiper">
                    <swiper-slide v-for="(outItem,outIndex) in list" :key="outIndex">
                        <div class="banxin">
                            <div class="name-list">
                                <div class="name-item" v-for="(innerItem,innerIndex) in outItem.val" :key="innerIndex"  @click="$jump('/nameTestInner')">
                                    {{innerItem}}
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
import {XDialog,TransferDomDirective as TransferDom,Picker} from 'vux'
let numArr = [];
for (var i = 1; i <= 50; i++) {
    numArr.push({
        name: i ,
        value: i 
    })
}
export default {
    directives: {
        TransferDom
    },
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
            navList: ["姓名测试","起名大全","姓名大全"],
            swiperOption : { initialSlide: this.navIndex ,autoHeight : true},
            list: [
                {val: ["王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明",]},
                {val: ["王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明",]},
                {val: ["王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明","王小明",]},
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
    }
}
</script>
<style lang="less" scoped>
.head{
    padding: 20/75rem 32/75rem 20/75rem 32/75rem;
    /deep/ .nav .nav-list{
        .flex-between();
        .item{
            margin-top: 0;
        }
    }
    .fillter{
        margin-top: 50/75rem;
        margin-bottom: 32/75rem;
        .flex-start();
        & > i{
            display: inline-block;
            width: 46/75rem;
            height: 44/75rem;
            margin-right: 33/75rem;
            background: url('../assets/image/name/fillter@2x.png') no-repeat center center / 100% 100%;
        }
    }
}
.content-wrap{
   position: absolute;
    top: 470/75rem;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: auto;
    .banxin{
        padding: 0 32/75rem;
    }
    .name-list{
        .flex-start();
        flex-wrap: wrap;
        .name-item{
            width: 100%/6;
            text-align: center;
            margin-bottom: 32/75rem;
            font-size: 26/75rem;
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