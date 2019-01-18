<template>
     <div class="hehunAnalyze">
        <v-title-header>命盘分析</v-title-header>
        <div class="content-wrap">
            <div class="content-top">
                <div class="score"></div>
                <div class="gender-title">
                    <div class="gender-box">
                        <div class="gender">男方八字</div>
                    </div>
                    <div class="gender-box">
                        <div class="gender">女方八字</div>
                    </div>
                </div>
                <div class="gender-msg">
                    <div class="gender-msg-table">
                        <div class="table-header">
                            <div class="header-td">年柱</div>
                            <div class="header-td">月柱</div>
                            <div class="header-td">日柱</div>
                            <div class="header-td">时柱</div>
                        </div>
                        <div class="row first-row">
                            <div class="shishen" v-html="this.shishenm"></div>
                        </div>
                        <div class="bazi">
                            <div class="td" v-for="(item,index) in this.maleBazi" :key="index">{{item}}</div>
                        </div>
                    </div>
                     <div class="gender-msg-table">
                        <div class="table-header">
                            <div class="header-td">年柱</div>
                            <div class="header-td">月柱</div>
                            <div class="header-td">日柱</div>
                            <div class="header-td">时柱</div>
                        </div>
                        <div class="row first-row">
                            <div class="shishen" v-html="this.shishenw"></div>
                        </div>
                        <div class="bazi">
                            <div class="td" v-for="(item,index) in this.femaleBazi" :key="index">{{item}}</div>
                        </div>
                    </div>
                </div>
            </div>
            <p class="analyze-p">
                乙命对甲命有{{res.data.jdy}}的补益作用力，甲命对乙命有{{res.data.ydj}}的补益作用力。<br>
                {{res.data.xys}}<br>
                {{res.data.rydp}}<br>
                {{res.data.sn}}<br>
                {{res.data.zntt}}<br>
                {{res.data.yl}}<br>
                {{res.data.jzy}}<br>
                {{res.data.yzj}}
            </p>
            <v-title-nav>男命八字信息</v-title-nav>
            <p class="analyze-p" v-html="res.data.character1">
            </p>
             <v-title-nav>婚姻择偶</v-title-nav>
            <p class="analyze-p" v-html="res.data.love1">
            </p>
            <v-title-nav>女命八字信息</v-title-nav>
            <p class="analyze-p" v-html="res.data.character2">
            </p>
            <v-title-nav>婚姻择偶</v-title-nav>
            <p class="analyze-p" v-html="res.data.love2">
            </p>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            maleBazi: [],
            femaleBazi: [],
            res:{
                data: {
                    jdy: "",
                }
            },
            shishenw: "",
            shishenm: ""
        }
    },
    created () {
        this.init();
    },
    methods: {
        init:function () {
            let params = {
                //测试数据
                cid : '100',
                year1 : '1912',
                month1 : '1',
                date1 : '2',
                hour1 : '15',
                minute : '17',
                year2 : '1913',
                month2 : '1',
                date2 : '11',
                hour2 : '13',
                minute2 : '10'
                // year1 : this.$route.params.maleDateArr[0],
                // month1 : this.$route.params.maleDateArr[1],
                // date1 : this.$route.params.maleDateArr[2],
                // hour1 : this.$route.params.maleDateArr[3],
                // minute : this.$route.params.maleDateArr[4],
                // year2 : this.$route.params.femaleDateArr[0],
                // month2 : this.$route.params.femaleDateArr[1],
                // date2 : this.$route.params.femaleDateArr[2],
                // hour2 : this.$route.params.femaleDateArr[3],
                // minute2 : this.$route.params.femaleDateArr[4]
            }

            this.$http.post('/suan/apidata',params,'cesuan',null,this.success,this.failure);
        },
        success : function (res) {
            let str = JSON.stringify(res);
            str = str.replace(/★/g,"<br>★");
            str = str.replace(/◆/g,"<br>◆");
            this.res = JSON.parse(str);
            this.maleBazi = res.bz1.split('');
            this.femaleBazi = res.bz2.split('');
            this.shishenw = res.shishenw + res.shishenw1 + res.shishenw2; //女十神
            this.shishenm = res.shishenm + res.shishenm1 + res.shishenm2; //男十神
        }
    },
}
</script>
<style lang="less">
.hehunAnalyze{
    .content-wrap{
        width: 100%;
        padding: 90/75rem 0 50/75rem 0;
        .border-box();
        .content-top{
            width: 100%;
            background: url('../assets/image/love/hehunAnalyze-bg@2x.png') no-repeat center center / 100% 100%;
            overflow: hidden;
            box-sizing: border-box;
            padding: 0 10/75rem;
            .score{
                width: 160/75rem;
                height: 160/75rem;
                line-height: 160/75rem;
                text-align: center;
                margin: 79/75rem auto 0 auto;
                font-size: 80/75rem;
                font-weight: 600;
                color: @baseBoldColor;
            }
            .gender-title{
                width: 100%;
                margin-top: -20/75rem;
                .flex-around();
                .gender-box{
                    flex: 1;
                    .gender{
                        width: 206/75rem;
                        height: 80/75rem;
                        margin: 0 auto;
                        line-height:  80/75rem;
                        .round(40/75rem);
                        text-align: center;
                        font-size: 32/75rem;
                        color: @baseBoldColor;
                        box-shadow:0px 3px 6px rgba(0,0,0,0.16);
                        background: #fff;
                        font-weight: 600;
                    }
                }
            }
            .gender-msg{
                width: 100%;
                height: 290/75rem;
                margin-top: 16/75rem;
                margin-bottom: 20/75rem;
                background: #fff;
                .flex-between();
                .gender-msg-table{
                    width: 49%;
                    height: 100%;
                    border:1px solid rgba(112,112,112,1);
                    text-align: center;
                    .table-header{
                        width: 100%;
                        height: 57/75rem;
                        line-height: 57/75rem;
                        .flex-around();
                        .header-td{
                            flex: 1;
                            font-weight: bold;
                            font-size: 28/75rem;
                            border-bottom: 1px solid rgba(112,112,112,1);
                        }
                    }
                    .row{
                        .flex-start();
                        width: 100%;
                        height: 75/75rem;
                        padding-top: 4/75rem;
                        .shishen{
                            width: 100%;
                            .flex-around();
                            font{
                                display: block;
                                width: 25%;
                                color: #000;
                                font-size: 28/75rem;
                            }
                        }
                    }
                    .bazi{
                        width: 100%;
                        .flex-start();
                        flex-wrap: wrap;                    
                        .td{
                            width: 25%;
                            padding: 25/75rem 0 0 0;
                        }
                    }
                    .first-row{
                        border-bottom: 1px solid rgba(112,112,112,1);
                    }
                    .td{
                        width: 25%;
                        padding: 25/75rem 0;
                        font-size: 28/75rem;
                    }
                }
            }
        }
        .analyze-p{
            width: 100%;
            box-sizing: border-box;
            padding: 0 25/75rem;
            margin: 20/75rem 0;
            font-size: 26/75rem;
        }
        .title-nav{
            box-sizing: border-box;
            padding: 0 25/75rem;
        }
    }
}

</style>


