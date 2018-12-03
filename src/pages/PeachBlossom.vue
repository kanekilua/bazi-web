<template>
    <div class="wrap">
        <v-header></v-header>
        <v-title-header :backLink="backLink">
            桃花运
            <div slot="icon" class="switchUser" @click="$jump('/baziBirth')"></div>
        </v-title-header>
        <div class="content-wrap">
            <v-title-nav><h2 slot="title">命中桃花</h2><div slot="more"></div></v-title-nav>
            <div class="pink-bg">
                <img class="big-flower" src="../assets/image/peachBlossom/bigFlower@2x.png">
                <div class="pink-header">
                    <h2>命中带{{totalNum}}朵桃花:</h2>
                    <img class="small-flower" src="../assets/image/peachBlossom/smallFlower@2x.png" v-for="(item,index) in this.totalNum" :key="index">
                </div>
                <div class="pink-item" v-for="(item,index) in this.pinkList" :key="index">
                    <div class="row">
                        <h2>{{item.title}}{{item.itemNum}}朵</h2>
                        <img class="small-flower" src="../assets/image/peachBlossom/smallFlower@2x.png" v-for="(item,index) in item.itemNum" :key="index">
                    </div>
                    <div class="artical">
                        {{item.artical}}
                    </div>
                </div>
            </div>
            <v-title-nav><h2 slot="title">命花命盘</h2><div slot="more"></div></v-title-nav>
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
            <v-title-nav><h2 slot="title">桃花解释</h2><div slot="more"></div></v-title-nav>
            <div class="swiper-container">
                <div class="swiper-top">
                    <v-nav :navList="navList" :nowIndex="navIndex" @updateNavIndex="updateNavIndex"></v-nav>
                    <div class="right"></div>
                </div>
                <swiper :options="swiperOption" ref="mySwiper">
                    <swiper-slide v-for="(item,index) in list" :key="index">
                        <p>{{item}}</p>
                    </swiper-slide>
                </swiper>
            </div>
            <div class="btn-list">
                <button class="luck-good">开运物品</button>
                <button class="ask-master">问大师</button>
                <button class="share select-btn">分享</button>
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
        return{
            backLink : '/loveBlossoms',
            totalNum: 6,
            pinkList: [
                {
                    title: "天喜桃花",
                    itemNum: 1,
                    artical: "天喜桃花是一朵非常吉祥的桃花，会使恋爱过程减少曲折，带给你婚姻美满、甜蜜又吉利的桃花，命带天喜桃花会让所有爱情问题逢凶化吉！"
                },
                {
                    title: "红艳桃花",
                    itemNum: 1,
                    artical: "命带红艳桃花的人，代表异性缘旺，也很容易促成爱慕者表白爱意。如你的命中不带红艳桃花，但只要掌握爱情窍门，了解自身的魅力所在，同样也能吸引优质情人上门追求哟。"
                },
                {
                    title: "正缘桃花",
                    itemNum: 4,
                    artical: "你的命中带有正缘桃花，象徵情路开花结果。所以，就算目前情路不顺，也不用太过忧虑，那只是一时的情况。只要抱持正面想法，不断修正自己，往更好的方向前进，最后一定能找"
                }
            ],
            formHeader: [{title:"序号"},{title:"类别"},{title:"象征"},{title:"命中有几朵"}],
            formContent: [
                {
                    idNum: "01",
                    sort: "天喜桃花",
                    symbolOne: "爱情顺利",
                    symbolTwo: "婚姻喜庆",
                    flowerNum: "1朵",
                },
                {
                    idNum: "01",
                    sort: "天喜桃花",
                    symbolOne: "爱情顺利",
                    symbolTwo: "婚姻喜庆",
                    flowerNum: "1朵",
                },
                {
                    idNum: "01",
                    sort: "天喜桃花",
                    symbolOne: "爱情顺利",
                    symbolTwo: "婚姻喜庆",
                    flowerNum: "1朵",
                },
                {
                    idNum: "01",
                    sort: "天喜桃花",
                    symbolOne: "爱情顺利",
                    symbolTwo: "婚姻喜庆",
                    flowerNum: "1朵",
                },
                {
                    idNum: "01",
                    sort: "天喜桃花",
                    symbolOne: "爱情顺利",
                    symbolTwo: "婚姻喜庆",
                    flowerNum: "1朵",
                },
                {
                    idNum: "01",
                    sort: "天喜桃花",
                    symbolOne: "爱情顺利",
                    symbolTwo: "婚姻喜庆",
                    flowerNum: "1朵",
                },
                {
                    idNum: "01",
                    sort: "天喜桃花",
                    symbolOne: "爱情顺利",
                    symbolTwo: "婚姻喜庆",
                    flowerNum: "1朵",
                },
                {
                    idNum: "01",
                    sort: "天喜桃花",
                    symbolOne: "爱情顺利",
                    symbolTwo: "婚姻喜庆",
                    flowerNum: "1朵",
                },
                {
                    idNum: "01",
                    sort: "天喜桃花",
                    symbolOne: "爱情顺利",
                    symbolTwo: "婚姻喜庆",
                    flowerNum: "1朵",
                }
            ],
            swiperOption : { initialSlide: this.navIndex },
            list : ["天喜桃花是一朵非常吉祥的桃花，会使恋爱过程减少曲折，带给你婚姻美满、甜蜜又吉利的桃花，命带天喜桃花会让所有爱情问题逢凶化吉！何时会走天喜桃花运：无论你命中有抑或无天喜桃花，但在流年逢天喜，亦会有天喜桃花的效应！你走天喜桃花运的年份有：26岁：2043(癸亥)年 38岁：2055(乙亥)年 50岁：2067(丁亥)年","天喜桃花是一朵非常吉祥的桃花，会使恋爱过程减少曲折，带给你婚姻美满、甜蜜又吉利的桃花，命带天喜桃花会让所有爱情问题逢凶化吉！何时会走天喜桃花运：无论你命中有抑或无天喜桃花，但在流年逢天喜，亦会有天喜桃花的效应！你走天喜桃花运的年份有：26岁：2043(癸亥)年 38岁：2055(乙亥)年 50岁：2067(丁亥)年","天喜桃花是一朵非常吉祥的桃花，会使恋爱过程减少曲折，带给你婚姻美满、甜蜜又吉利的桃花，命带天喜桃花会让所有爱情问题逢凶化吉！何时会走天喜桃花运：无论你命中有抑或无天喜桃花，但在流年逢天喜，亦会有天喜桃花的效应！你走天喜桃花运的年份有：26岁：2043(癸亥)年 38岁：2055(乙亥)年 50岁：2067(丁亥)年","天喜桃花是一朵非常吉祥的桃花，会使恋爱过程减少曲折，带给你婚姻美满、甜蜜又吉利的桃花，命带天喜桃花会让所有爱情问题逢凶化吉！何时会走天喜桃花运：无论你命中有抑或无天喜桃花，但在流年逢天喜，亦会有天喜桃花的效应！你走天喜桃花运的年份有：26岁：2043(癸亥)年 38岁：2055(乙亥)年 50岁：2067(丁亥)年","天喜桃花是一朵非常吉祥的桃花，会使恋爱过程减少曲折，带给你婚姻美满、甜蜜又吉利的桃花，命带天喜桃花会让所有爱情问题逢凶化吉！何时会走天喜桃花运：无论你命中有抑或无天喜桃花，但在流年逢天喜，亦会有天喜桃花的效应！你走天喜桃花运的年份有：26岁：2043(癸亥)年 38岁：2055(乙亥)年 50岁：2067(丁亥)年","天喜桃花是一朵非常吉祥的桃花，会使恋爱过程减少曲折，带给你婚姻美满、甜蜜又吉利的桃花，命带天喜桃花会让所有爱情问题逢凶化吉！何时会走天喜桃花运：无论你命中有抑或无天喜桃花，但在流年逢天喜，亦会有天喜桃花的效应！你走天喜桃花运的年份有：26岁：2043(癸亥)年 38岁：2055(乙亥)年 50岁：2067(丁亥)年","天喜桃花是一朵非常吉祥的桃花，会使恋爱过程减少曲折，带给你婚姻美满、甜蜜又吉利的桃花，命带天喜桃花会让所有爱情问题逢凶化吉！何时会走天喜桃花运：无论你命中有抑或无天喜桃花，但在流年逢天喜，亦会有天喜桃花的效应！你走天喜桃花运的年份有：26岁：2043(癸亥)年 38岁：2055(乙亥)年 50岁：2067(丁亥)年","天喜桃花是一朵非常吉祥的桃花，会使恋爱过程减少曲折，带给你婚姻美满、甜蜜又吉利的桃花，命带天喜桃花会让所有爱情问题逢凶化吉！何时会走天喜桃花运：无论你命中有抑或无天喜桃花，但在流年逢天喜，亦会有天喜桃花的效应！你走天喜桃花运的年份有：26岁：2043(癸亥)年 38岁：2055(乙亥)年 50岁：2067(丁亥)年","天喜桃花是一朵非常吉祥的桃花，会使恋爱过程减少曲折，带给你婚姻美满、甜蜜又吉利的桃花，命带天喜桃花会让所有爱情问题逢凶化吉！何时会走天喜桃花运：无论你命中有抑或无天喜桃花，但在流年逢天喜，亦会有天喜桃花的效应！你走天喜桃花运的年份有：26岁：2043(癸亥)年 38岁：2055(乙亥)年 50岁：2067(丁亥)年"]
        }
    },
    methods : {
        ...mapMutations('fengshuiKnowledge',['updateNavIndex'])
    }
}
</script>
<style lang="less" scoped>
.wrap{
    .switchUser{
        width: 44/75rem;
        height: 44/75rem;
        background: url('../assets/image/bazi/switchUser@2x.png') no-repeat center center / 100% 100%;
    }
    .content-wrap{
        position: absolute;
        top: 170/75rem;
        bottom: 0;
        left: 0;
        width: 100%;
        box-sizing: border-box;
        overflow-y: scroll;
        padding: 0 32/75rem 32/75rem 32/75rem;
        .pink-bg{
            position: relative;
            padding: 35/75rem 16/75rem;
            .round(27/75rem);
            background:#FFECEC;
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
            .big-flower{
                position: absolute;
                top: -97/75rem;
                right: 29/75rem;
                width: 175/75rem;
                height: 167/75rem;
            }
        }
        .form{
            width: 100%;
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
                    padding-left: 25/75rem;
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
                    padding-left: 25/75rem;
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
            margin-bottom: 40/75rem; 
        }
        .btn-list{
            .flex-around();
            & > button{
                width: 177/75rem;
                height: 66/75rem;
            }
        }
    }
}
</style>


