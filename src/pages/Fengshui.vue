<template>
    <div class="wrap">
        <v-title-header>风水常识</v-title-header>
        <div class="content-wrap">
            <div class="content-box">
                <div class="content">
                    <div class="btn-row">
                        <button class="fengshui-btn select-btn" @click="toList('301','家居风水')">家居风水</button>
                        <button class="fengshui-btn" @click="toList('302','办公室风水','办公室风水')">办公风水</button>
                        <button class="fengshui-btn" @click="toList('301','感情风水','感情风水')">感情风水</button>
                    </div>
                    <div class="btn-row">
                        <button class="fengshui-btn" @click="toList('303','房屋风水')">房屋风水</button>
                        <button class="fengshui-btn" @click="toList('301','招财风水','招财风水')">招财风水</button>
                    </div>
                    <div class="btn-row">
                        <button class="fengshui-btn" @click="toList('301','风水摆设','风水摆设')">风水摆设</button>
                        <button class="fengshui-btn" @click="toList('302','商业风水')">商业风水</button>
                        <!-- <button class="fengshui-btn">风水大师</button>暂时无风水大师数据 -->
                    </div>
                </div>
            </div>
            <div class="swiper-container">
                <div class="swiper-top" ref="swiperTop">
                    <v-nav :navList="navList" :nowIndex="navIndex" @updateNavIndex="updateNavIndex"></v-nav>
                </div>
                <swiper :options="swiperOption" ref="mySwiper">
                    <swiper-slide v-for="(outItem,key,outIndex) of list" :key="outIndex">
                        <div class="hItem" v-for="(innerItem,innerIndex) in outItem" :key="innerIndex" @click="toInner(innerItem.id)">
                            <h2>{{innerItem.title}}</h2><i></i>
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
        ...mapState('peach',['navIndex']),
        swiper () {
            return this.$refs.mySwiper.swiper;
        },
    },
    data () {
        return {
            navList: ["家居风水","房屋风水","办公风水","感情风水","风水摆设","商业风水","招财风水"],
            swiperOption : { initialSlide: this.navIndex ,autoHeight : true},
            list : {},
        }
    },
    watch : {
        'navIndex' (val) {
            this.swiper.slideTo(val, 0, false);
            // 保持swipertop滚动位置
            if (val >3){
                this.$refs.swiperTop.scrollLeft = this.$refs.swiperTop.scrollWidth;
            }
            else{
                this.$refs.swiperTop.scrollLeft = 0;
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
     methods : {
        ...mapMutations('peach',['updateNavIndex']),
        getData: function () {
            let sendData = {
                cid: '99',
            }
            this.$http.post('/suan/apidata',sendData,'cesuan',null,this.success,this.failure);
        },
        success: function(res) {
            this.list = res;
        },
        // 跳转文章页面
        toInner: function (innerId) {
            let id = innerId;
            this.$router.push({
                name: 'article',
                query: {
                    id : id
                }
            })
        },
        toList : function(tid,navTitle,category) {
            if(!arguments[2]){
                this.$router.push({
                    path : '/jiaju',
                    query : {
                        tid: tid,
                        navTitle: navTitle,
                    }
                })
            }else{
                this.$router.push({
                    path : '/jiaju',
                    query : {
                        tid: tid,
                        navTitle: navTitle,
                        category : category,
                    }
                })
            }
        }
    }
}
</script>
<style lang="less" scoped>
.content-wrap{
    padding: 90/75rem 40/75rem 0 40/75rem;
    .border-box();
    .content-box{
        width: 670/75rem;
        height: 507/75rem;
        margin: 0 auto;
        .content{
            width: 80%;
            margin-bottom: 80/75rem;
        }
        .flex-center();
        background: url('../assets/image/fengshui/fengshui@2x.png') no-repeat center center / 100% 100%;
        .btn-row{
            margin-top: 80/75rem;
            .flex-between();
            .fengshui-btn{
                width: 120/75rem;
                height: 50/75rem;
                font-size: 26/75rem;
                border-radius: 13/75rem;
                background: #fff;
                border: none;
                box-shadow: 0 3/75rem 6/75rem rgba(0,0,0,0.16);
                outline: none;
                &:active{
                    background: #eee;
                }
                @media screen  and (max-width: 320px) {
                    width: 130/75rem;
                    font-size: 20/75rem;
                }
            }
            .select-btn{
                background: @baseBoldColor;
                color: #fff;
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
            width: 160%;
            overflow-x: scroll; 
        }
        .nav-list{
            .flex-start();
        }
        /deep/ .nav .nav-list .item{
            height: 85/75rem;
        }
        .hItem{
            .flex-between();
            margin-bottom: 32/75rem;
            & > h2{
                font-size: 28/75rem;
                font-weight: normal;
                .ellipsis(1);
            }
            & > i{
                display: inline-block;
                width: 13/75rem;
                height: 25/75rem;
                background: url("../assets/image/common/more.png") no-repeat center center / 100% 100%;
            }
         }
    }
}
</style>


