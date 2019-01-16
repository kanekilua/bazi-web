<template>
    <div class="name-home-wrap">
        <v-header></v-header>
        <v-title-header :backLink="backLink">
            姓名大全
        </v-title-header>
        <div class="swiper-top">
            <v-nav :navList="navList" :nowIndex="navIndex" @updateNavIndex="updateNavIndex"></v-nav>
            <div class="right"></div>
        </div>
        <div class="content-wrap">
            <div class="swiper-container">
                <swiper :options="swiperOption" ref="mySwiper">
                    <swiper-slide v-for="(outItem,outIndex) in list" :key="outIndex">
                        <img v-show="outIndex===1" :src="outItem.imgUrl" class="item-img" @click="$jump(outItem.route)">
                        <div class="name-test-bg" v-show="outIndex===0">
                            <input type="text" class="name-input" v-model="inputName" placeholder="请输入您的姓名">
                            <input type="button" class="begin-test" value="开始测试" @click="beginTest">
                        </div>
                        <div class="h-list">
                            <div class="hItem" 
                                v-for="(innerItem,innerIndex) in outItem.val" 
                                :key="innerIndex"  
                                @click="toArtical(innerItem.id)">
                                <h2>{{innerItem.title}}</h2><i></i>
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
export default {
    computed : {
        ...mapState('nameHome',['navIndex']),
        swiper () {
            return this.$refs.mySwiper.swiper;
        },
    },
    watch : {
        'navIndex' (val) {
            this.swiper.slideTo(val, 0, false);
        }
    },
    created() {
        this.getData();
        this.getData1();
    },
    data () {
        return {
            backLink: "/main/home",
            navList: ["姓名测试","姓名大全"],
            swiperOption : { initialSlide: this.navIndex ,autoHeight : true },
            list : [
                {
                    route: '/nameTest',
                    val:[]
                },
                {
                    route: '/familyName',
                    imgUrl: require("../assets/image/name/banner3@2x.png"),
                    val:[]
                },
            ],
            inputName: "",
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
    methods: {
        ...mapMutations('nameHome',['updateNavIndex']),
        getData: function () {
            let params = {
                cid : '96',
                tid : '601',
            }
            this.$http.post('/suan/apidata',params,'cesuan',null,this.success,this.failure);
        },
        getData1:function () {
            let params = {
                cid : '96',
                tid : '602',
            }
            this.$http.post('/suan/apidata',params,'cesuan',null,this.success1,this.failure);
        },
        success: function (res) {
            for(let i of res.data){
                this.list[0].val.push(i);
            }
        },
        success1: function (res) {
            for(let i of res.data){
                this.list[1].val.push(i);
            }
        },
        toArtical: function (id) {
            this.$router.push({
                name: 'article',
                query: {
                    cid : '95',
                    id : id
                }
            })
        },
        beginTest: function () {
            if(!this.$utils.checkName(this.inputName,this)){
                return;
            }
            else {
                this.inputName = "";
                this.$router.push({
                    path: '/nameTestResult',
                    query: {
                        name : this.inputName,
                    }
                })
            }
        }
    }
}
</script>
<style lang="less" scoped>
.swiper-top{
    /deep/ .nav{
        width: 100%;
        padding: 0 40/75rem;
        .border-box();
        .nav-list{
            .flex-around();
        }
    }
    
}
.name-home-wrap{
    .content-wrap{
        .swiper-container{
            width: 100%;
            margin: 0 auto;
            /deep/ .nav .nav-list{
                padding: 0 40/75rem;
                .border-box();
                .item{
                    margin-right: 80/75rem;
                }
            }
            /deep/ .swiper-slide{
                width: 100%;
            }
            .item-img{
                width: 675/75rem;
                height: 298/75rem;
                display: block;
                margin: 0 auto 20/75rem auto;
            }
            .h-list{
                padding: 0 40/75rem;
                .border-box();
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
                    width: 13/75rem;
                    height: 25/75rem;
                    background: url("../assets/image/common/more.png") no-repeat center center / 100% 100%;
                }
            }
        }
        .name-test-bg{
            width: 100%;
            height: 744/75rem;
            overflow: hidden;
            margin-bottom: 30/75rem;
            background: url('../assets/image/name/name-test-bg.png') no-repeat center center / 100% 100%;
            .name-input{
                display: block;
                width: 462/75rem;
                height: 80/75rem;
                margin: 325/75rem auto 70/75rem auto;
                .border-box();
                border: none;
                outline: none;
                .round(10/75rem);
                text-align: center;
            }
            .begin-test{
                display: block;
                width: 500/75rem;
                height: 98/75rem;
                margin: 0 auto;
                .round(50/75rem);
                border: none;
                background: @baseBoldColor;
                font-size: 34/75rem;
                color: #fff;
                outline: none;
                &:active{
                    background: #eee;;
                }
            }
        } 
    }
}

</style>


