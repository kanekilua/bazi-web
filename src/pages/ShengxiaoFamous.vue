<template>
    <div class="famous-wrap">
        <v-title-header
            :backLink="backLink"
        >{{name}}</v-title-header>
        <div class="content-wrap">
            <div class="person-box">
                <div class="msg">
                    <div class="top">
                        <img :src="imgUrl" class="person-img">
                        <div class="right">
                            <div class="name">{{name}}</div>
                            <div class="identify">{{identify}}</div>
                            <div>代表作品：</div>
                            <div>{{works}}</div>
                        </div>
                    </div>
                    <div class="exprience">
                        <p>{{experience}}</p>
                    </div>
                </div>
            </div>
            <h2 class="title">{{name}}2019年生肖运势</h2>
            <div class="ico-list">
                <div class="ico-item" 
                    v-for="(item,index) in icoList"
                    :key="index"
                    @click="toArtical(item.category)"
                >
                    <img :src="item.img">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            backLink: "/shengxiao",
            // 接收router数据
            name: this.$route.params.name,
            imgUrl: this.$route.params.imgUrl,
            identify: this.$route.params.identify,
            works: this.$route.params.works,
            experience: this.$route.params.experience,
            
            icoList: [
                {img: require("../assets/image/shengxiao/rat-active.png"),category: "shu"},
                {img: require("../assets/image/shengxiao/cow-active.png"),category: "niu"},
                {img: require("../assets/image/shengxiao/tigger-active.png"),category: "hu"},
                {img: require("../assets/image/shengxiao/rabbit-active.png"),category: "tu"},
                {img: require("../assets/image/shengxiao/dragon-active.png"),category: "long"},
                {img: require("../assets/image/shengxiao/snake-active.png"),category: "she"},
                {img: require("../assets/image/shengxiao/horse-active.png"),category: "ma"},
                {img: require("../assets/image/shengxiao/goat-active.png"),category: "yang"},
                {img: require("../assets/image/shengxiao/monkey-active.png"),category: "hou"},
                {img: require("../assets/image/shengxiao/rooster-active.png"),category: "ji"},
                {img: require("../assets/image/shengxiao/dog-active.png"),category: "gou"},
                {img: require("../assets/image/shengxiao/pig-active.png"),category: "zhu"},
            ]

        }
    },
    methods:  {
        toArtical(category){
            this.$router.push({
                name: 'article',
                query : {
                    cid : '98',
                },
                params: {
                    category: category,
                    name: this.name,
                    img: this.imgUrl,
                },
            })
        }
    },
}
</script>

<style lang="less" scoped>
.famous-wrap{
    .content-wrap{
        padding-top: 90/75rem;
        .border-box();
        overflow: hidden;
        .person-box{
            width: 700/75rem;
            margin: 30/75rem auto;
            .boxshadow(0,3/75rem,6/75rem,rgba(0,0,0,0.16));
            .msg{
                padding: 40/75rem 30/75rem;
                .top{
                    .flex-start-only();
                    .person-img{
                        width:170/75rem;
                        height: 170/75rem;
                        margin: 5/75rem 30/75rem 30/75rem 0;
                        .round(50%); 
                        .boxshadow(0,3/75rem,6/75rem,rgba(0,0,0,0.16));
                    }
                    .right{
                        font-size: 22/75rem;
                        color: @baseBoldColor;
                        .name{
                            font-size: 35/75rem;
                            font-weight: bold;
                            margin: 10/75rem 0;
                            color: #000;
                        }
                        .identify{
                            margin-bottom: 10/75rem;
                        }
                    }
                }
                .exprience{
                    font-size: 26/75rem;
                }
            }
        }
        .title{
            width: 400/75rem;
            height: 100/75rem;
            margin: 0 auto;
            line-height: 100/75rem;
            background: url('../assets/image/shengxiao/border.png') no-repeat center center / 100% 100%;
            text-align: center;
            font-size: 32/75rem;
            color: @baseBoldColor;
        }
        .ico-list{
            .flex-between();
            flex-wrap: wrap;
            width: 88%;
            margin: 30/75rem auto 0 auto;
            .ico-item{
                width: 130/75rem;
                height: 130/75rem;
                margin-right: 20/75rem;
                margin-bottom: 24/75rem;
                background: url("../assets/image/shengxiao/rat.png") no-repeat center center / 100% 100%;
                img{
                    width: 100%;
                    height: 100%;
                    visibility: hidden;
                }
            }
            .ico-item:nth-child(2){
                background: url("../assets/image/shengxiao/cow.png") no-repeat center center / 100% 100%;
            }
            .ico-item:nth-child(3){
                background: url("../assets/image/shengxiao/tiger.png") no-repeat center center / 100% 100%;
            }
            .ico-item:nth-child(4){
                background: url("../assets/image/shengxiao/rabbit.png") no-repeat center center / 100% 100%;
                margin-right: 0;
            }
            .ico-item:nth-child(5){
                background: url("../assets/image/shengxiao/dragon.png") no-repeat center center / 100% 100%;
            }
            .ico-item:nth-child(6){
                background: url("../assets/image/shengxiao/snake.png") no-repeat center center / 100% 100%;
            }
            .ico-item:nth-child(7){
                background: url("../assets/image/shengxiao/horse.png") no-repeat center center / 100% 100%;
            }
            .ico-item:nth-child(8){
                background: url("../assets/image/shengxiao/goat.png") no-repeat center center / 100% 100%;
                margin-right: 0;
            }
            .ico-item:nth-child(9){
                background: url("../assets/image/shengxiao/monkey.png") no-repeat center center / 100% 100%;
            }
            .ico-item:nth-child(10){
                background: url("../assets/image/shengxiao/rooster.png") no-repeat center center / 100% 100%;
            }
            .ico-item:nth-child(11){
                background: url("../assets/image/shengxiao/dog.png") no-repeat center center / 100% 100%;
            }
            .ico-item:nth-child(12){
                background: url("../assets/image/shengxiao/pig.png") no-repeat center center / 100% 100%;
                margin-right: 0;
            }
            .ico-item:active{
                background: none;
                img{
                  visibility:  visible; 
                }
            }
        }
    }
}
</style>

