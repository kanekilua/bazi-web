<template>
    <div class="wrap">
        <v-header></v-header>
        <v-title-header>生肖</v-title-header>
        <div class="content-wrap">
            <div class="pair">
                <img src="../assets/image/shengxiao/shengxiao-text.png" alt="生肖配对" class="pair-img">
                <div class="form">
                    <div>
                        <input placeholder="请输入男方名字" v-model="maleName">
                        <input placeholder="请输入出生日期" v-model="maleBirth" @click="showDatePlugin(1)">
                    </div>
                    <div>
                        <input placeholder="请输入女方名字" v-model="femaleName">
                        <input placeholder="请输入出生日期" v-model="femaleBirth" @click="showDatePlugin(0)">
                    </div>
                    <button @click="$jump('/shengxiao/detail')">开始配对</button>
                </div>
            </div>
            <div class="pair-article">
                <div class="article-cell" v-for="(item,index) in pairArticles" :key="index">
                    <h2>{{item}}</h2><i></i>
                </div>
                <div class="more-cell">
                    <h2>更多生肖配对</h2><i></i>
                </div>
            </div>
            <div class="knowledge">
                <v-title-nav>
                    <div slot="title" class="title-nav">生肖知识</div>
                    <div slot="more" class="more">
                        <h2>更多知识</h2><i></i>
                    </div>
                </v-title-nav>
                <div class="knowledge-cells">
                    <div class="knowledge-cell" v-for="(item,index) in knowledges" :key="index" @click="showArticle(item)">
                        <img :src="item.img" alt="image">
                        <div>
                            <h2>{{item.title}}</h2>
                            <p>{{item.content}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="famous">
                <v-title-nav>
                    <h2 slot="title" class="title-nav">风水名人解生肖</h2>
                    <div slot="more"></div>
                </v-title-nav>
                <div class="swiper-wrap">
                    <v-nav :navList="famousList" :nowIndex="navIndex" @updateNavIndex="updateNavIndex"></v-nav>
                    <swiper :options="swiperOption" ref="mySwiper">
                        <swiper-slide v-for="(item,index) in famousArticle" :key="index">
                            <div class="article-cell" v-for="(articleItem,articleIndex) in item" :key="articleIndex">
                                <h2>{{articleItem}}</h2><i></i>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { dateFormat } from 'vux'
export default {
    data () {
        return {
            pairArticles : ["属猪和什么属相最相配，看看","属鸡和什么属相最相配，看看","属羊和什么属相最相配，看看"],
            knowledges : [],
            famousList : ['麦玲玲','苏民峰','李居明','宋韶光','董易林'],
            famousArticle : [
                ['麦玲玲2016年属鼠运程','麦玲玲2016年属鼠运程','麦玲玲2016年属鼠运程','麦玲玲2016年属鼠运程','麦玲玲2016年属鼠运程','麦玲玲2016年属鼠运程','麦玲玲2016年属鼠运程'],
                ['苏民峰2016年属鼠运程','苏民峰2016年属鼠运程','苏民峰2016年属鼠运程','苏民峰2016年属鼠运程','苏民峰2016年属鼠运程','苏民峰2016年属鼠运程','苏民峰2016年属鼠运程'],
                ['李居明2016年属鼠运程','李居明2016年属鼠运程','李居明2016年属鼠运程','李居明2016年属鼠运程','李居明2016年属鼠运程','李居明2016年属鼠运程','李居明2016年属鼠运程'],
                ['宋韶光2016年属鼠运程','宋韶光2016年属鼠运程','宋韶光2016年属鼠运程','宋韶光2016年属鼠运程','宋韶光2016年属鼠运程','宋韶光2016年属鼠运程','宋韶光2016年属鼠运程'],
                ['董易林2016年属鼠运程','董易林2016年属鼠运程','董易林2016年属鼠运程','董易林2016年属鼠运程','董易林2016年属鼠运程','董易林2016年属鼠运程','董易林2016年属鼠运程']
            ],
            navIndex : 0,
            swiperOption : { initialSlide: this.navIndex },
            maleName : "",
            maleBirth : "",
            maleBirthArray : [],
            femaleName : "",
            femaleBirth : "",
            femaleBirthArray : []
        }
    },
    computed : {
        swiper () {
            return this.$refs.mySwiper.swiper;
        }
    },
    watch : {
        'navIndex' (val) {
            this.swiper.slideTo(val, 0, false);
        }
    },
    created() {
        this.getData();
    },
    mounted() {
        this.swiper.on('slideChange', () => {
            this.updateNavIndex(this.swiper.activeIndex);
        });
    },  
    methods : {
        updateNavIndex : function (val) {
            this.navIndex = val;
        },
        showDatePlugin : function (genderType) {
            this.$vux.datetime.show({
                ...global.DATETIME_OPTION,
                endDate :  dateFormat(new Date(), 'YYYY-MM-DD'),
                onHide : (type) => {
                    if(type === 'cancel') {
                        if(genderType) {
                            this.maleBirth = "";
                            this.maleBirthArray = [];
                        }else {
                            this.femaleBirth = "";
                            this.femaleBirthArray = [];
                        }
                    }
                },
                onConfirm:(val) => {
                    // 点击确定，将年月日赋值给dateArray，将格式化的日期赋值给birthDate
                    let valArray = val.split('-');
                    let dateArray = [];
                    for(let i=0;i<valArray.length ; ++i) {
                        dateArray[i] = parseInt(valArray[i]);
                    }
                    let birthDate = dateArray[0] + '年' + dateArray[1] + '月' + dateArray[2] + '日' + ' ' + dateArray[3] + '点' + dateArray[4] + '分';
                    if(genderType) {
                        this.maleBirth = birthDate;
                        this.maleBirthArray = dateArray;
                    }else {
                        this.femaleBirth = birthDate;
                        this.femaleBirthArray = [];
                    }
                }
            });
        },
        getData: function () {
            let sendData = {
                cid : '96',
                tid: '404',
            }
            this.$http.post('/suan/apidata',sendData,'cesuan',null,this.success,this.failure);
        },
        success: function(res) {
            console.log(res);
            this.knowledges = res.data.splice(0,2);
            for( let i of this.knowledges){
                i.img = 'https://mingli.szmonster.com' + i.img;
            }
        },
        showArticle : function (article) {
            this.$router.push({
                name: "article",
                params : {
                    article : article
                }
            });
        }
    }
}
</script>
<style lang="less" scoped>
h2 {
    font-size: 28/75rem;
    font-weight: normal;
}
.article-cell {
    .flex-between();
    margin-top: 32/75rem;
}
i{
    display: block;
    width: 44/75rem;
    height: 44/75rem;
    background: url("../assets/image/common/right@2x.png") no-repeat center center / 100% 100%;
}
.title-nav{
    font-size: 28/75rem;
    color:rgba(0,0,0,0.7);
    font-weight: bold;
}

.content-wrap {
    position: absolute;
    top: 169/75rem;
    bottom: 0;
    width: 100%;
    overflow: auto;
    /deep/ .title-nav{
        padding: 0;
    }
    .pair {
        background: url(../assets/image/shengxiao/shengxiao-bg.png) no-repeat center center / 100% 100%;
        width: 100%;
        height: 631/75rem;
        overflow: hidden;
        .pair-img {
            width: 302/75rem;
            height: 70/75rem;
            display: block;
            margin: 125/75rem auto 0 auto;
        }
        .form {
            width: 690/75rem;
            margin : 42/75rem auto 0 auto;
            div:nth-child(2){
                margin-top: 32/75rem;
            }
            & > div {
                .flex-between();
                & > input {
                    width: 320/75rem;
                    height: 56/75rem;
                    .round(21/75rem);
                    box-shadow:0px 3px 6px rgba(0,0,0,0.16);
                    border: 0;
                    padding-left: 16/75rem;
                    font-size: 24/75rem;
                }
            }
            & > button {
                width: 500/75rem;
                height: 98/75rem;
                display: block;
                margin: 71/75rem auto 0 auto;
                .round(40/75rem);
                background-color: @baseColor;
                border: 0;
                box-shadow:0px 3px 6px rgba(0,0,0,0.16);
                color: #fff;
                font-size: 28/75rem;
            }
        }
    }
    .pair-article {
        margin : 0 32/75rem;
        color:rgba(0,0,0,0.7);
        .more-cell {
            .flex-end();
            margin-top: 32/75rem;
            & > h2 {
                margin-right: 24/75rem;
            }
        }
    }
    .knowledge {
        margin: 10/75rem 32/75rem 0 32/75rem;
        .more{
            .flex-end();
            & > h2 {
                margin-right: 24/75rem;
            }
        }
        .knowledge-cells {
            div:nth-last-child(1) {
                border-bottom: 0;
            }
            .knowledge-cell {
                padding: 23/75rem 0;
                border-bottom: 1px solid #eee;
                .flex-start();
                & > img {
                    width: 258/75rem;
                    height: 198/75rem;
                    .round(27/75rem);
                }
                & > div {
                    margin-left: 16/75rem;
                    & > h2 {
                        margin-bottom: 17/75rem;
                        font-weight: bold;
                        color : rgba(3,3,3,0.8);
                        font-size: 28/75rem;
                    }
                    & > p {
                        .ellipsis();
                        font-size: 26/75rem;
                    }
                }
            }
        }
    }
    .famous {
        margin: 0 32/75rem;
        /deep/ .nav {
            margin-bottom: 0;
        }
    }
}
</style>


