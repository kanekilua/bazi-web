<template>
    <div class="wrap">
        <v-header></v-header>
        <v-title-header>
            相术解析
        </v-title-header>
        <div class="content-wrap">
            <div class="head">
                <h2>眉毛淡的男人命运好吗，眉毛</h2>
                <div class="public-time">时间：2016-10-03 16:57:50</div>
            </div>
            <div class="banxin">
                <p>眉毛在相学中又被视为保寿官，从这个寿字就可以知道，眉毛与我们的寿命有关，通过观察一个人的眉相，可以知道一个人的寿命长短和心性如何，面相中认为眉毛长垂，高寿无疑，就</p>
                <img src="../assets/image/xiangshu/innerImg@2x.png" class="innerImg">
                <div class="analyze-list">
                    <div class="analyze-item" v-for="(item,index) in analyzeList" :key="index">
                        <h2>{{index+1}}.{{item.title}}</h2>
                        <p>{{item.artical}}</p>
                    </div>
                </div>
            </div>
        </div>
        <button class="share-btn">立刻分享</button>
    </div>    
</template>
<script>
export default {
    data () {
        return {
            analyzeList: [
                {
                    title: "浓眉粗犷刚强，淡眉心性狭小多思",
                    artical: "眉毛淡的人的事业心一般，对于自己想要达到的目标缺少很强目的性和计划性，比较随遇而安，很少会主动参与竞争，眉毛淡的男人在事业上很难成为领导型的人，因为他们做事缺少魄力，遇事喜欢偏安一隅，踏踏实实，而很少会主动力争上游"
                },
                {
                    title: "浓眉粗犷刚强，淡眉心性狭小多思",
                    artical: "眉毛淡的人的事业心一般，对于自己想要达到的目标缺少很强目的性和计划性，比较随遇而安，很少会主动参与竞争，眉毛淡的男人在事业上很难成为领导型的人，因为他们做事缺少魄力，遇事喜欢偏安一隅，踏踏实实，而很少会主动力争上游"
                },
                {
                    title: "浓眉粗犷刚强，淡眉心性狭小多思",
                    artical: "眉毛淡的人的事业心一般，对于自己想要达到的目标缺少很强目的性和计划性，比较随遇而安，很少会主动参与竞争，眉毛淡的男人在事业上很难成为领导型的人，因为他们做事缺少魄力，遇事喜欢偏安一隅，踏踏实实，而很少会主动力争上游"
                },
                {
                    title: "浓眉粗犷刚强，淡眉心性狭小多思",
                    artical: "眉毛淡的人的事业心一般，对于自己想要达到的目标缺少很强目的性和计划性，比较随遇而安，很少会主动参与竞争，眉毛淡的男人在事业上很难成为领导型的人，因为他们做事缺少魄力，遇事喜欢偏安一隅，踏踏实实，而很少会主动力争上游"
                },
                {
                    title: "浓眉粗犷刚强，淡眉心性狭小多思",
                    artical: "眉毛淡的人的事业心一般，对于自己想要达到的目标缺少很强目的性和计划性，比较随遇而安，很少会主动参与竞争，眉毛淡的男人在事业上很难成为领导型的人，因为他们做事缺少魄力，遇事喜欢偏安一隅，踏踏实实，而很少会主动力争上游"
                },
            ]
        }
    }
}
</script>
<style lang="less" scoped>
.wrap{
    .content-wrap{
        position: absolute;
        top: 169/75rem;
        bottom: 0;
        left: 0;
        width: 100%;
        overflow: auto;
        padding-bottom: 80/75rem;

        .head{
            width: 100%;
            border-bottom: 1px solid rgba(0,0,0,0.1);
            & > h2{
                width: 100%;
                margin: 32/75rem auto 16/75rem auto;
                font-size: 32/75rem;
                text-align: center;
            }
            .public-time{
                text-align: center;
                margin-bottom: 32/75rem;
                font-size: 24/75rem;
            }
        }
        .banxin{
            width: 100%;
            box-sizing: border-box;
            padding: 32/75rem;
            p{
                text-indent: 2em;
            }
            .innerImg{
                width: 704/75rem;
                height: 274/75rem;
                margin: 34/75rem auto;
            }
            .analyze-item{
                & > h2{
                    font-size: 28/75rem;
                }
                & > p{
                    margin: 32/75rem 0;
                    font-size: 24/75rem;
                    line-height: 40/75rem;
                }
            }
        }
    }
    .share-btn{
        position: fixed;
        bottom: 0;
        left: 0;
        background: @baseColor;
        width: 100%;
        height: 84/75rem;
        color: #fff;
        border: none;
    }
}
</style>


