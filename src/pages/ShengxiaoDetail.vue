<template>
    <div class="wrap">
        <v-header></v-header>
        <v-title-header>生肖配对</v-title-header>
        <div class="content-wrap">
            <div class="profile-wrap">
                <v-title-nav>
                    <div slot="title" class="title-nav">男方资料</div>
                    <div slot="more"></div>
                </v-title-nav>
                <div class="male-profile">
                    <div>男生姓名：{{params.maleName}}</div>
                    <div>出生公历：{{params.maleBirth}}</div>
                    <div>农历：{{params.maleSolar}}</div>
                    <div>男方星座：{{resData.nan.xingzuo}}</div>
                    <div>男方生肖：属{{params.maleShengxiao}}</div>
                    <div class="title-hunpei">男方属相婚配</div>
                    <div>婚姻宜配：{{resData.nan.appropriate}}</div>
                    <div>婚姻忌配：{{resData.nan.avoid}}</div>
                    <div>三合生肖：{{resData.nan.three}}</div>
                    <div>六合生肖：{{resData.nan.six}}</div>
                    <div>相冲生肖：{{resData.nan.punching}}</div>
                    <div>相害生肖：{{resData.nan.calamity}}</div>
                    <div> 相刑生肖：{{resData.nan.penalty}}</div>
                </div>
            </div>
            <div class="profile-wrap">
                <v-title-nav>
                    <div slot="title" class="title-nav">女方资料</div>
                    <div slot="more"></div>
                </v-title-nav>
                <div class="female-profile">
                    <div>女生姓名：{{params.femaleName}}</div>
                    <div>出生公历：{{params.femaleBirth}}</div>
                    <div>农历：{{params.femaleSolar}}</div>
                    <div>女方星座：{{resData.nv.xingzuo}}</div>
                    <div>女方生肖：属{{params.femaleShengxiao}}</div>
                    <div class="title-hunpei">女方属相婚配</div>
                    <div>婚姻宜配：{{resData.nv.appropriate}}</div>
                    <div>婚姻忌配：{{resData.nv.avoid}}</div>
                    <div>三合生肖：{{resData.nv.three}}</div>
                    <div>六合生肖：{{resData.nv.six}}</div>
                    <div>相冲生肖：{{resData.nv.punching}}</div>
                    <div>相害生肖：{{resData.nv.calamity}}</div>
                    <div> 相刑生肖：{{resData.nv.penalty}}</div>
                </div>
            </div>
            <div class="profile-wrap">
                <v-title-nav>
                    <div slot="title" class="title-nav">男女生肖配对结果</div>
                    <div slot="more"></div>
                </v-title-nav>
                <div class="result-profile">
                    <h2>男{{params.maleShengxiao}}女{{params.femaleShengxiao}}十二生肖配对结果</h2>
                    <p>{{resData.jie[0].content}}</p>
                </div>
            </div>
        </div>
        <button class="save-btn">立刻分享</button>
    </div>
</template>
<script>

export default {
    data () {
        return {
            params: {},
            // 初始化数据
            resData: {
                "nan": {
                    "sx": "",
                    "appropriate": "",
                    "avoid": "",
                    "three": "",
                    "punching": "",
                    "calamity": "",
                    "penalty": "",
                    "xingzuo": ""
                },
                "nv": {
                    "sx": "",
                    "appropriate": "",
                    "avoid": "",
                    "three": "",
                    "six": "",
                    "punching": "",
                    "calamity": "",
                    "penalty": "",
                    "xingzuo": ""
                },
                "jie": [
                    {
                        "content": ""
                    }
                ]
            },
        }
    },
    created () {
        this.getData();
        // console.log(this.$route.params)
    },
    methods : {
        getData () {
            this.$http.post('/suan/apidata',this.$route.query,'cesuan',null,this.success);
        },
        success : function (res) {
            // console.log(res)
            this.resData = res;
            this.params = this.$route.params;
        }
    }
}
</script>
<style lang="less" scoped>
.content-wrap{
    position: absolute;
    top: 169/75rem;
    bottom: 0;
    width: 100%;
    overflow: auto;
}
.profile-wrap {
    padding: 0 32/75rem;
}
.title-nav{
    font-size: 28/75rem;
    color:rgba(0,0,0,0.7);
    font-weight: bold;
}
.profile {
    width:100%;
    box-shadow:0px 3px 6px rgba(0,0,0,0.16);
    .round(33/75rem);
    padding: 8/75rem 0 24/75rem 24/75rem;
    .border-box();
    & > div {
        margin-top: 24/75rem;
        font-size: 26/75rem;
    }
    .title-hunpei {
        .title-nav();
        color:rgba(0,0,0,0.9);
    }
}
.wrap {
    .male-profile {
        .profile();
        background:rgba(241,249,255,1);
    }
    .female-profile {
        .profile();
        background:rgba(255,241,241,1);
    }
    .result-profile {
        .profile();
        margin: 0 0 160/75rem 0;
        background:rgba(255,255,255,1);
        & > h2 {
            margin-top: 32/75rem;
            .title-nav();
            color:rgba(0,0,0,0.9);
        }
        & > p {
            margin: 25/75rem 0 0 0;
            text-indent:2em;
            font-size: 28/75rem;
        }
    }
}


</style>