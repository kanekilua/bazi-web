<template>
     <div class="wrap">
        <v-title-header :backLink="backLink">
            姓名大全
            <div class="right-ico" slot="right-ico"></div>
        </v-title-header>
        <div class="content-wrap">
            <div class="banxin">
                <v-title-nav>测试结果</v-title-nav>
                <div class="name-box">
                    <div class="name">
                        <div class="test-name">姓名：{{name}}</div>
                    </div>
                    <div class="score">{{res.xmdf}}</div>
                    <div class="bihua">
                        <div class="jianti-bihua">
                            康熙笔画:
                            <span v-if="res.name1">{{res.name1.bihua}}</span>
                            <span v-if="res.name2">{{res.name2.bihua}}</span>
                            <span v-if="res.name3">{{res.name3.bihua}}</span>
                            <span v-if="res.name4">{{res.name4.bihua}}</span>
                            <span v-if="res.name5">{{res.name5.bihua}}</span>
                        </div>
                    </div>
                </div>
                <div class="title">
                    <i></i>
                    <span class="title-msg">总格: {{res.zonggearr.jx}}</span>
                </div>
                <div class="tag-list">
                    <div class="tag-item">天格: {{res.tiangearr.jx}}</div>
                    <div class="tag-item">人格: {{res.rengearr.jx}}</div>
                    <div class="tag-item">地格: {{res.digearr.jx}}</div>
                    <div class="tag-item">外格: {{res.waigearr.jx}}</div>
                </div>
                <div class="wuxing">五 行:
                    <span v-if="res.name1">{{res.name1.hzwh}}</span>
                    <span v-if="res.name2">{{res.name2.hzwh}}</span>
                    <span v-if="res.name3">{{res.name3.hzwh}}</span>
                    <span v-if="res.name4">{{res.name4.hzwh}}</span>
                    <span v-if="res.name5">{{res.name5.hzwh}}</span>
                </div>
                <div class=list>
                    <div class="item">
                        <h3>天格数理  {{res.tiangearr.tiange}}({{res.tiangearr.wx}})</h3>
                        <div class="introduction">
                            [又称先格，是祖先留下来的，对人生影响不大]
                        </div>
                        <p>暗示：{{res.tiangearr.yy}}</p>
                    </div>
                    <div class="item">
                        <h3>地格数理  {{res.digearr.dige}}({{res.digearr.wx}})</h3>
                        <div class="introduction">
                            [又称前运，是前半生的命运，会影响中年以前]
                        </div>
                        <p>暗示：{{res.digearr.yy}}</p>
                    </div>
                    <div class="item">
                        <h3>总格数理  {{res.zonggearr.zongge}}({{res.zonggearr.wx}})</h3>
                        <div class="introduction">
                            [又称后运，是后半生的命运，影响中年到老年]
                        </div>
                        <p>暗示：{{res.zonggearr.yy}}</p>
                    </div>
                    <div class="item">
                        <h3>外格数理  {{res.waigearr.waige}}({{res.waigearr.wx}})</h3>
                        <div class="introduction">
                            [又称灵运，主管命运之灵力、社交能力和智慧]
                        </div>
                        <p>暗示：{{res.waigearr.yy}}</p>
                    </div>
                    <div class="item">
                        <h3>天、地、人三才  {{res.rssancai.trds_s}}({{res.rssancai.sancai}})</h3>
                        <p>{{res.rssancai.yy}}({{res.rssancai.jx}})</p>
                        <div v-html="res.rssancai.content"></div>
                    </div>
                </div>
                <v-title-nav>更多</v-title-nav>
                <div class="item renge">
                    <h3>人格数理  {{res.rengearr.renge}}({{res.rengearr.wx}})</h3>
                    <p>暗示性格为：{{res.rengearr.character}}<br>
                        人格与外格：({{res.career[0].collocation}})<br>
                        暗示人际关系、社交能力、事业等信息为：{{res.career[0].pae}}
                        暗示成功运:{{res.success[0].pah}}<br>
                        暗示基础运：{{res.basis[0].pal}}<br>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            backLink: '/nameHome',
            name: this.$route.query.name,
            // 返回数据
            res:{
                    name1: {
                        bihua: "",
                        hzwh: ""
                    },
                    name2: {
                        bihua: "",
                        hzwh: ""
                    },
                    name3: {
                        bihua: "",
                        hzwh: ""
                    },
                    name5: {
                        bihua: "",
                        hzwh: ""
                    },
                    name4: {
                        bihua: "",
                        hzwh: ""
                    },
                    tiangearr: {
                        yy: "",
                        jx: "",
                        tiange: '',
                        wx: ""
                    },
                    rengearr: {
                        yy: "",
                        jx: "凶",
                        personality: "",
                        character: "",
                        renge: 12,
                        wx: ""
                    },
                    digearr: {
                        yy: "",
                        jx: "",
                        dige: 20,
                        wx: ""
                    },
                    waigearr: {
                        yy: "",
                        jx: "",
                        waige: 30,
                        wx: ""
                    },
                    zonggearr: {
                        yy: "",
                        jx: "",
                        zongge: 42,
                        wx: ""
                    },
                    rssancai: {
                        yy: "",
                        jx: "",
                        content: "",
                        jx1: "",
                        jx2: "",
                        jx3: "",
                        trds_s: "",
                        sancai: ""
                    },
                    xmdf: 64.35,
                    career: [
                        {
                            pae: "",
                            collocation: ""
                        }
                    ],
                    success: [
                        {
                            pah: "",
                            collocation: ""
                        }
                    ],
                    basis: [
                        {
                            pal: "",
                            collocation: ""
                        }
                    ]
            }
        }
    },
    created() {
        this.getData();
        
    },
    methods: {
        getData: function () {
            let params = {
                cid : "26",
                name : this.$route.query.name,
            }
            this.$http.post('/suan/apidata',params,'cesuan',null,this.success,this.failure);
        },
        success: function (res) {
            this.res = res;
        },
    }
}
</script>
<style lang="less" scoped>
.right-ico{
    width: 38/75rem;
    height: 38/75rem;
    background: url('../assets/image/common/share.png')no-repeat center center / 100% 100%;
}
.content-wrap{
    padding-top: 90/75rem;
    .border-box();
    overflow: hidden;
    .banxin{
        padding: 32/75rem 0;
        .border-box();
        .name-box{
            width: 100%;
            position: relative;
            margin: 64/75rem 0;
            font-size: 28/75rem;
            font-weight: bold;
            .flex-between();
            .name{
                margin-left: 60/75rem;
            }
            .score{
                position: absolute;
                left: 0;
                bottom: -60/75rem;
                right: 0;
                margin: 0 auto;
                width: 160/75rem;
                height: 160/75rem;
                line-height: 160/75rem;
                text-align: center;
                font-size: 80/75rem;
                color: #fff;
                .round(50%);
                background: @baseBoldColor;
            }
            .bihua{
                margin-right: 32/75rem;
            }
        }
        .title{
            .flex-start();
            margin: 70/75rem 0 32/75rem 0;
            padding: 0 20/75rem;
            .border-box();
            & > i{
                display: inline-block;
                width: 33/75rem;
                height: 44/75rem;
                margin-right: 33/75rem;
                vertical-align: middle;
                background: url('../assets/image/name/nav-ico@2x.png') no-repeat center center / 100% 100%;
            }
            .title-msg{
                font-size: 32/75rem;
                font-weight: bold;
            }
        }
        .tag-list{
            .flex-around();
            .tag-item{
                width: 168/75rem;
                height: 81/75rem;
                line-height: 81/75rem;
                text-align: center;
                .round(10/75rem);
                .boxshadow(0,3/75rem,6/75rem, rgba(0,0,0,0.16));
            }
        }
        .wuxing{
            width: 300/75rem;
            height: 80/75rem;
            margin: 40/75rem auto;
            .round(10/75rem);
            text-align: center;
            line-height: 80/75rem;
            background: @baseBoldColor;
            color: #fff;
            font-size: 32/75rem;
        }
        .list{
            padding: 0 30/75rem;
            .border-box();
        }
        .item,.renge{
            line-height: 40/75rem;
            font-size: 26/75rem;
            letter-spacing: 3/75rem;
            h3{
                margin: 40/75rem 0 16/75rem 0;
            }
            .introduction{
                margin-bottom: 32/75rem;
            }
        }
        .renge{
            padding: 0 30/75rem;
            .border-box();
            line-height: 40/75rem;
            font-size: 26/75rem;
            letter-spacing: 3/75rem;
            h3{
                margin: 20/75rem 0 16/75rem 0;;
            }
        }
    }
}
</style>