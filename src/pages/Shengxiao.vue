<template>
    <div class="shengxiao-wrap">
        <v-title-header>
            十二生肖
        </v-title-header>
        <div class="content-wrap">
            <div class="pair">
                <div class="form">
                    <div class="form-box">
                        <div class="form-left">
                            <div class="male-input-box input-item">
                                <img src="../assets/image/common/male.png">
                                <input placeholder="男方名字" v-model="maleName">
                            </div>
                            <div class="date-box input-item">
                                <img src="../assets/image/common/calendar.png">
                                <input readonly="true" placeholder="选择出生日期" v-model="maleBirth" @click="showDatePlugin(1)">
                            </div>
                        </div>
                        <div class="form-right">
                            <div class="female-input-box input-item">
                                <img src="../assets/image/common/female.png">
                                <input placeholder="女方名字" v-model="femaleName">
                            </div>
                            <div class="date-box input-item">
                                <img src="../assets/image/common/calendar.png">
                                <input readonly="true" placeholder="选择出生日期" v-model="femaleBirth" @click="showDatePlugin(0)">
                            </div>
                        </div>
                    </div>
                    <button @click="beginMatch">开始测试</button>
                </div>
            </div>
            <v-title-nav-more>
                <div slot="title">生肖知识</div>
                <span slot="more"
                    @click="$jump('/shengxiao/knowledge')"
                >
                    更多
                </span>
            </v-title-nav-more>
            <div class="knowledge">
                <div class="knowledge-cells">
                    <div class="knowledge-cell"
                        v-for="(item,index) in knowledges"
                        :key="index"
                        @click="showArticle(item)"
                    >
                        <img :src="item.img" alt="image">
                        <div>
                            <h2>{{item.title}}</h2>
                            <p>{{item.content}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <v-title-nav>
                风水名人解生肖
            </v-title-nav>
            <div class="famous">
                <div class="famous-person-list">
                    <div class="famous-person-item"
                        v-for="(item,index) in famousPersonList"
                        :key="index"
                        @click="toInner(index)"
                    >
                        <img :src="item.imgUrl">
                        <div class="msg">
                            <div class="name">
                                <div>{{item.name}}</div>
                                <i class="more"></i>
                            </div>
                            <div class="short-tag">
                                <div class="tag-item" v-for="(tagItem,tagIndex) in item.tag" :key="tagIndex">{{tagItem}}</div>
                            </div>
                            <div class="introduction">
                                <p>{{item.introduction}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import solarLunar from 'solarLunar'
import { dateFormat } from 'vux'
export default {
    data () {
        return {
            knowledges : [],
            maleName : "",
            maleBirth : "",
            maleBirthArray : [],
            femaleName : "",
            femaleBirth : "",
            femaleBirthArray : [],
            maleSolar : "",
            femaleSolar : "",
            maleShengxiao : "",
            femaleShengxiao : "",

            // 风水名人
            famousPersonList: [
                {
                    imgUrl: require("../assets/image/shengxiao/person1.png"),
                    name: "麦玲玲",
                    tag: ["易学大师","堪舆学家"],
                    introduction: "香港著名易学大师、堪舆学家，为报纸杂志撰写风水命理专栏，如《苹果日报》、《快周刊》、《新假期》、《壹本便利》亦有在TVB、有线电视、MyRadio及新城电台主持玄学节目。",
                    identify: "香港著名易学大师、堪舆学家",
                    works: "《麦玲玲2010虎年运程》《家择好风水》",
                    experience: "1987年收听风水专家林真的电台节目，继而向他学艺。1992年大专毕业后任职秘书，后到吴伯仲律师行当律师文员，并兼职算命。1996年起转型为全职风水师，客户包括证券行及大型地产公司。麦玲玲同时为各报章杂志撰写风水命理专栏，也曾到不同的电视台及电台主持玄学节目，近年还间中亦在电影中客串演出。",
                },
                {
                    imgUrl: require("../assets/image/shengxiao/person2.png"),
                    name: "苏民峰",
                    tag: ["当代赖布衣","风水命理"],
                    introduction: "人称当代赖布衣。对风水命理等术数有独特之个人见解。凭天赋之聪明及术数的缘份，对于风水命理之判断既快且准。往往一针见血，疑难尽释。",
                    identify: "香港著名易学大师、人称当代赖布衣",
                    works: "《峰生水起精读班掌相篇》节目、《顺峰顺水》节目",
                    experience: "与一般传统玄学师不同，非潜心于古代流传下来的风水命理标准，而是结合现代人文生活和环境仔细观察统计作为依据。凭天赋之聪明及术数的缘份，对于风水命理之判断既快且准。往往一针见血，疑难尽释。",
                },
                {
                    imgUrl: require("../assets/image/shengxiao/person3.png"),
                    name: "李居明",
                    tag: ["李居士","风水术数"],
                    introduction: "国际风水术数名师，诞生于中国香港，肄业于香港浸会大学传理系，曾任职报界及电影圈长达十年后，于八十年代中期全身投入命理术数工作，九十年代中期以业余时间，与陈帅佛一起开展佛教教育工作，由于李氏具心怀正信及爱港爱国之情操，对自己要求极其严厉，虽为术师，但处处追求「说迷信破迷信」之科学精神，",
                    identify: "国际风水术数名师、堪舆学家",
                    works: "《风水之道》、《文昌风水秘笈》",
                    experience: "李居明，国际风水术数名师，诞生于中国香港，肄业于香港浸会大学传理系，曾任职报界及电影圈长达十年后，于八十年代中期全身投入命理术数工作，九十年代中期以业余时间，与陈帅佛一起开展佛教教育工作，由于李氏具心怀正信及爱港爱国之情操，对自己要求极其严厉，虽为术师，但处处追求「说迷信破迷信」之科学精神，李氏以其宗教心成功拓展「般若心经」之普及潮，早有「李居士」之美誉，李氏推广「子平命学」，又重新辩证术数及堪舆学上的预测讯息，著书立言，以正视听，提升中华古文化之社会地位，受到推广及尊重。",
                },
                {
                    imgUrl: require("../assets/image/shengxiao/person4.png"),
                    name: "宋韶光",
                    tag: ["历史系学硕士","风水术数"],
                    introduction: "国立台湾大学历史系学士、美国伊利诺州大学历史系研究所硕士。曾任教于香港珠海书院、浸会大学历史系。",
                    identify: "名师学院（领域学院副院长）、中国易经协会名誉会长",
                    works: "《风水百宝箱》、《风生水起 》节目",
                    experience: "曾担任香港无线电视的“风生水起”、“红星掌相”以及亚洲电视的“谈风论水”、“风水面面观”、“句句妙”等节目主持，深受广大观众欢迎。自从1985年《虎年运程》一书开始，年年撰写的流年运程均深受欢迎，销量节节上升。始终在同类书中独占鳌头。此书的英文版，行销世界各地，使我国术数得以传扬海外。其传略被收录《中国风水家辞典》（高占全主编）现任中国易经协会名誉会长。",
                }
            ]
        }
    },
    computed : {
        swiper () {
            return this.$refs.mySwiper.swiper;
        }
    },
    created() {
        this.getData();
        
    }, 
    methods : {
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
                    let birthDate = dateArray[0] + '-' + dateArray[1] + '-' + dateArray[2] + ' '  + dateArray[3] + ':' + dateArray[4];
                    if(genderType) {
                        this.maleBirth = birthDate;
                        this.maleBirthArray = dateArray;
                        let solar = solarLunar.lunar2solar(parseInt(this.maleBirthArray[0]),parseInt(this.maleBirthArray[1]),parseInt(this.maleBirthArray[2]));
                        this.maleSolar = solar.yearCn + ' ' + solar.monthCn + ' ' + solar.dayCn;
                        this.maleShengxiao = solar.animal;
                    }else {
                        this.femaleBirth = birthDate;
                        this.femaleBirthArray = dateArray;
                        let solar= solarLunar.lunar2solar(parseInt(this.femaleBirthArray[0]),parseInt(this.femaleBirthArray[1]),parseInt(this.femaleBirthArray[2]));
                        this.femaleSolar = solar.yearCn + ' ' + solar.monthCn + ' ' + solar.dayCn;
                        this.femaleShengxiao = solar.animal;
                    }
                }
            });
        },
        // 获取生肖知识data
        getData: function () {
            let sendData = {
                cid : '96',
                tid: '404',
            }
            this.$http.post('/suan/apidata',sendData,'cesuan',null,this.success,this.failure);
        },
        success: function(res) {
            // console.log(res);
            this.knowledges = res.data.splice(0,2);
            for( let i of this.knowledges){
                i.img = global.APP_DOMIAN + i.img;
            }
        },
        // 获取pairArticles
        showArticle : function (article) {
            this.$router.push({
                name: "article",
                query: {
                    cid : '95',
                    id : article.id
                }
            });
        },
        // 开始匹配
        beginMatch: function () {
            // 表单验证
            if(!this.$utils.checkName(this.maleName,this) || !this.$utils.checkName(this.femaleName,this)){
                return;
            }
            if(this.maleBirthArray.length === 0 || this.maleBirthArray === '' || this.femaleBirthArray.length === 0 || this.femaleBirthArray === '' ) {
                this.$vux.toast.text('请选择出生日期','top');
                return;
            }
            // 跳转
            this.$router.push({
                name : 'shengxiaoDetail',
                // 传递参数
                query : {
                    cid : "102",
                    y1 : this.maleBirthArray[0],
                    m1 : this.maleBirthArray[1],
                    d1 : this.maleBirthArray[2],
                    y2 : this.femaleBirthArray[0],
                    m2 : this.femaleBirthArray[1],
                    d2 : this.femaleBirthArray[2],
                },
                // 传递数据
                params: {
                    maleName: this.maleName,
                    maleBirth: this.maleBirth,
                    maleSolar: this.maleSolar,
                    maleShengxiao: this.maleShengxiao,
                    femaleName: this.femaleName,
                    femaleBirth: this.femaleBirth,
                    femaleSolar: this.femaleSolar,
                    femaleShengxiao: this.femaleShengxiao,
                }
            })
        },
        // 跳转名人页面
        toInner: function (index) {
            this.$router.push({
                name: 'shengxiaoFamous',
                params: {
                    name: this.famousPersonList[index].name,
                    imgUrl: this.famousPersonList[index].imgUrl,
                    identify: this.famousPersonList[index].identify,
                    works: this.famousPersonList[index].works,
                    experience: this.famousPersonList[index].experience,
                }
            })
        }
    },
}
</script>
<style lang="less" scoped>
.shengxiao-wrap{
    h2 {
        font-size: 28/75rem;
        font-weight: normal;
    }
    .article-cell {
        .flex-between();
        padding-top: 90/75rem;
        .border-box();
    }
    .content-wrap {
        padding-top: 90/75rem;
        .border-box();
        .pair {
            background: url(../assets/image/shengxiao/background.png) no-repeat center center / 100% 100%;
            width: 100%;
            height: 440/75rem;
            overflow: hidden;
            .form {
                width: 86%;
                margin : 150/75rem auto 0 auto;
                .form-box{
                    .flex-between();
                    .male-input-box,
                    .female-input-box{
                        .flex-start();
                        & > img{
                            width: 32/75rem;
                            height: 32/75rem;
                            margin: 0 10/75rem 0 15/75rem;
                        }        
                    }
                    .date-box{
                        .flex-start();
                        & > img{
                            width: 28/75rem;
                            height: 25/75rem;
                            margin: 0 14/75rem 0 15/75rem;
                        }
                    }
                    .input-item{
                        width: 300/75rem;
                        height: 55/75rem;
                        .round(14/75rem);
                        margin-bottom: 40/75rem;
                        background: #fff;
                        & > input{
                            width: 75%;
                            .my-input(); 
                            border-left: 1px solid #D6D6D6;
                            padding-left: 10/75rem;
                        }
                    } 
                }            
                & > button {
                    width: 320/75rem;
                    height: 66/75rem;
                    display: block;
                    margin: 0 auto 40/75rem auto;
                    .round(40/75rem);
                    background-color: #FF9A9A;
                    border: 0;
                    box-shadow:0px 3px 6px rgba(0,0,0,0.16);
                    color: #fff;
                    font-size: 28/75rem;
                    outline: none;
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
                .knowledge-cell:nth-child(1){
                    padding-top: 0;
                }
                .knowledge-cell {
                    padding: 23/75rem 0;
                    border-bottom: 1px solid #eee;
                    .flex-start-only();
                    & > img {
                        width: 300/75rem;
                        height: 170/75rem;
                        .round(10/75rem);
                    }
                    & > div {
                        width: 52%;
                        margin-left: 16/75rem;
                        & > h2 {
                            width: 100%;
                            margin: 0 0 20/75rem 20/75rem;
                            font-weight: bold;
                            color : rgba(3,3,3,0.8);
                            font-size: 28/75rem;
                            overflow: hidden;
                            text-overflow:ellipsis;
                            white-space: nowrap;
                            .border-box();
                        }
                        & > p {
                            position: relative;
                            width: 100%;
                            line-height: 30/75rem;
                            height: 90/75rem;
                            font-size: 22/75rem;
                            overflow: hidden;
                        }
                        & > p::after {
                            position: absolute;
                            content: "...";
                            bottom: 0;
                            right: 0;
                            font-weight: bolder;
                        }
                    }
                }
            }
        }
        .famous{
            padding: 20/75rem;
            .border-box();
            .famous-person-list{
                width: 100%;
                .famous-person-item{
                    overflow: hidden;
                    .flex-start();
                    .boxshadow(0,3/75rem,15/75rem,rgba(0,0,0,0.14));
                    .round(10/75rem);
                    margin-bottom: 20/75rem;
                    img{
                        width: 190/75rem;
                        height: 190/75rem;
                        .boxshadow(0,3/75rem,15/75rem,rgba(0,0,0,0.14));
                        .round(10/75rem);
                        margin: 0 30/75rem;
                    }
                    .msg{
                        flex: 1;
                        overflow: hidden;
                        position: relative;
                        padding: 50/75rem 0;
                        .name{
                            font-size: 30/75rem;
                            font-weight: bold;
                            .flex-between();
                            .more{
                                display: inline-block;
                                width: 40/75rem;
                                height: 10/75rem;
                                margin-right: 20/75rem;
                                background: url('../assets/image/common/more-point.png') no-repeat center center / 100% 100%;
                            }
                        }
                        .short-tag{
                            margin: 10/75rem 0;
                            .flex-start();
                            .tag-item{
                                font-size: 16/75rem;
                                padding: 0 18/75rem;
                                background: @baseLightColor;
                                margin-right: 10/75rem;
                                .round(12/75rem);
                                color: #fff;
                            }
                        }
                        .introduction{
                            & > p{
                                position: relative;
                                width: 96%;
                                line-height: 33/75rem;
                                height: 100/75rem;
                                font-size: 22/75rem;
                                overflow: hidden;
                                font-size: 1em;
                                padding-right: 10/75rem;
                            }
                            & > p::after {
                                position: absolute;
                                content: "...";
                                bottom: 0;
                                right: 0;
                                font-weight: bolder;
                            }
                        }
                    }
                }
            }
            
        }
    }
}
</style>
