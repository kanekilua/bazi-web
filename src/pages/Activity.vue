<template>
    <div class="activity-wrap">
        <h1 class="activity-header">2019</h1>
        <div class="content-wrap">
            <swiper class="swiper-box" :options="swiperOption">
                <swiper-slide v-for="(imgItem,index) in imgList" :key="index">
                    <img :src="imgItem.url" alt="swiper" >
                </swiper-slide>
                <div class="swiper-pagination"></div>
            </swiper>
            <div class="menu">
                <div class="menu-wrap">
                    <div class="menu1" @click="$jump('/love')">
                        <div class="left">
                            <div class="title">八字合婚</div>
                            <div class="text">八字鉴定你们<br>爱情合拍指数</div>
                        </div>
                        <div class="right"></div>
                    </div>
                    <div class="menu2" @click="$jump('/love')">
                        <div class="left">
                            <div class="title">桃花运</div>
                            <div class="text">
                                预测情场运势<br>桃花儿朵朵开
                            </div>
                        </div>
                        <div class="right"></div>
                    </div>
                </div>
                <div class="menu-wrap">
                    <div class="menu3" @click="$jump('/shengxiao')">
                        <div class="left">
                            <div class="title">生肖配对</div>
                            <div class="text">
                                金鸡怕玉犬<br>猪猴不到头 
                            </div>
                        </div>
                        <div class="right"></div>
                    </div>
                    <div class="menu4" @click="$jump('/nameTest')">
                        <div class="left">
                            <div class="title">姓名测试</div>
                            <div class="text">
                                缘分匹配测试<br>开启幸福大门
                            </div>
                        </div>
                        <div class="right"></div>
                    </div>
                </div>
            </div>
            <div class="article-list">
                <div class="article" v-for="(item,index) in articleList" :key="index" @click="jumpArticle(item)">
                    <div class="upper" :style="{backgroundImage : 'url(' + item.img + ')'}">
                        <div class="overlay"></div>
                        <div class="content">
                            <div class="title">
                                {{item.title}}
                            </div>
                            <div class="tip">
                                <i></i>
                                文章
                            </div>
                        </div>
                    </div>
                    <div class="under">
                        <p>{{item.content}}</p>
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
            swiperOption: {
                slidesPerView: 'auto',
                direction:"horizontal",/*横向滑动*/ 
                loop: true,
                pagination:{
                    el: '.swiper-pagination',
                    bulletClass : 'my-bullet',
                    bulletActiveClass: 'my-bullet-active',
                },
                autoplay:{
                    delay: 3000
                }
            },
            imgList : [
                {url: require('../assets/image/activity/banner.png')},
                {url: require('../assets/image/activity/banner.png')},
                {url: require('../assets/image/activity/banner.png')},
                {url: require('../assets/image/activity/banner.png')}
            ],
            articleList : []
        }
    },
    created() {
        this.init();
    },
    methods: {
        init : function () {
            let sendData = {
                cid : '96',
                tid: '2019',
            }
            this.$http.post('/suan/apidata',sendData,'cesuan',null,this.success,this.failure);
        },
        success : function (res) {
            this.articleList = res.data;
            for( let i of this.articleList){
                i.img = global.APP_DOMIAN + i.img;
                i.content = this.$utils.Trim(this.$utils.delHtmlTag(i.content));
            }
        },
        jumpArticle : function (article) {
            this.$router.push({
                name: "article",
                query: {
                    cid : '95',
                    id : article.id
                }
            });
        }
    }
}
</script>

<style lang="less" scoped>
.activity-wrap {
    .activity-header {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10;
        width: 100%; 
        height: 90/75rem;
        line-height: 90/75rem;
        font-size: 38/75rem;
        text-align: center;
        color: @baseBoldColor;
        background: #fff;
    }
    .content-wrap {
        padding-top: 90/75rem;
        background-color: rgb(241, 241, 241);
        margin-bottom: 130/75rem;
        .swiper-box{
            width: 100%;
            position: relative;
            .swiper-slide{
                width: 100%;
                height: 270/75rem;
                &> img{
                    display: block;
                    width: 100%;
                }
            }
            .swiper-pagination{
                left: 80/75rem;
                bottom: 30/75rem;
                text-align: left;
                height: 25/75rem;
            }  
        }
        .menu {     
            margin : 20/75rem 0;
            .menu-wrap {
                .flex-start();
                & > div {
                    .flex-between();
                    width: 50%;
                    height: 182/75rem;
                    padding: 0 36/75rem;
                    .border-box();
                    background-color: #fff;
                    .left {
                        .title {
                            font-size: 32/75rem;
                            font-weight: bold;
                            color: @baseBoldColor;
                            line-height: 42/75rem;
                        }
                        .text {
                            font-size: 23/75rem;
                            width: 150/75rem;
                        }
                    }
                    .right {
                        width: 100/75rem;
                        height: 100/75rem;
                    }
                }
                .menu1 {
                    width: calc(50% + 1px);
                    border-right: 1px solid #eee;
                    border-bottom: 1px solid #eee;
                    .right {
                        background: url('../assets/image/activity/hehun.png') no-repeat center center / 100% 100%;
                    }
                }
                .menu2 {
                    border-bottom: 1px solid #eee;
                    .right {
                        background: url('../assets/image/activity/peach.png') no-repeat center center / 100% 100%;
                    }
                }
                .menu3 {
                    width: calc(50% + 1px);
                    border-right: 1px solid #eee;
                    .right {
                        background: url('../assets/image/activity/pig.png') no-repeat center center / 100% 100%;
                    }
                }
                .menu4 {
                    .right {
                        background: url('../assets/image/activity/name.png') no-repeat center center / 100% 100%;
                    }
                }
            }
        }
        .article-list {
            margin-top : 20/75rem;
            .article {
                height: 510/75rem;
                margin : 0 auto 10/75rem auto;
                padding: 24/75rem 5%;
                .border-box();
                background-color: #fff;
                .upper {
                    position: relative;
                    width: 100%;
                    height: 280/75rem;
                    .round(8/75rem);
                    background-repeat: no-repeat;
                    background-position: top;
                    background-size: cover;
                    .overlay {
                        position: absolute;
                        bottom: 0;
                        width: 100%;
                        height: 100%;
                        .round(8/75rem);
                        background: linear-gradient(to top, rgba(88, 88, 88, 0.9), rgba(255,255,255,0));
                    }
                    .content {
                        position: absolute;
                        left: 0;
                        right: 0;
                        bottom: 15/75rem;
                        width: 95%;
                        margin : 0 auto;
                        .flex-between();
                        .title {
                            font-size: 32/75rem;
                            color: #fff;
                            font-weight: bold;
                        }
                        .tip {
                            color: #fff;
                            font-size: 24/75rem;
                            i {
                                display: inline-block;
                                width: 18/75rem;
                                height: 19/75rem;
                                background: url('../assets/image/activity/article-icon.png') no-repeat center center / 100% 100%;
                            }
                        }
                    }
                    
                }
                .under {
                    height: 160/75rem;
                    margin-top: 24/75rem;
                    overflow: hidden;
                    font-size: 28/75rem;
                    & > p {
                        text-indent:2em;
                    }
                }
            }
        }
    }
}
</style>
