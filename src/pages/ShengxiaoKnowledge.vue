<template>
    <div class="knowledge-wrap">
        <v-title-header
            :backLink="backLink"
        >
            十二生肖
        </v-title-header>
        <div class="content-wrap">
            <v-title-nav>
                生肖知识
            </v-title-nav>
            <div class="knowledge">
                <div class="knowledge-cells">
                    <div class="knowledge-cell"
                        ref="content"
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
                    <load-more :tip="tip" :show-loading="showLoading" :class="showIco? 'show': 'hide'"></load-more>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { LoadMore } from 'vux'
export default {
    components: {
        LoadMore
    },
    data () {
        return {
            backLink: '/shengxiao',
            knowledges: "",
            tip: "正在加载...",
            showIco: false,
            showLoading: true,
            limit: 0,//下拉加载，++请求下10条数据
        }
    },
    created () {
        this.getData();
    },
    mounted () {
        // this.pullDown();
    },
    methods: {
        showArticle : function (article) {
            this.$router.push({
                name: "article",
                params : {
                    article : article
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
            // console.log(res);
            this.knowledges = res.data;
            for( let i of this.knowledges){
                i.img = 'https://mingli.szmonster.com' + i.img;
            }
        },
    }
}
</script>
<style lang="less" scoped>
.knowledge-wrap{
    .content-wrap{
        padding-top: 90/75rem;
        .border-box();
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
                        margin-left: 16/75rem;
                        & > h2 {
                            margin: 0 0 20/75rem 20/75rem;
                            font-weight: bold;
                            color : rgba(3,3,3,0.8);
                            font-size: 28/75rem;
                            .ellipsis(1);
                        }
                        & > p {
                            .ellipsis();
                            font-size: 22/75rem;
                        }
                    }
                }
            }
        }
    }
}
</style>

