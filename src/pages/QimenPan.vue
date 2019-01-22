<template>
    <div class="qmdj-wrap">
        <v-title-header>奇门遁甲资料</v-title-header>
        <div class="content-wrap">
            <div class="table-wrap">
                <div class="table">
                    <div class="td-item" v-html="qmdj[1]"></div>
                    <div class="td-item" v-html="qmdj[0]"></div>
                    <div class="td-item" v-html="qmdj[7]"></div>
                    <div class="td-item" v-html="qmdj[2]"></div>
                     <div class="td-item td-yi">
                        <div v-html="sqly4"></div>
                    </div>
                    <div class="td-item" v-html="qmdj[6]"></div>
                    <div class="td-item" v-html="qmdj[3]"></div>
                    <div class="td-item" v-html="qmdj[4]"></div>
                    <div class="td-item" v-html="qmdj[5]"></div>
                </div>
            </div>
            <div class="bottom-msg">
                <div>此局为: {{dunju}}</div>
                <div>直符：{{zhifu}}</div>
                <div>直使：{{zhishi}}</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            qmdj: [],
            sqly4: "",
            dunju: "",
            zhifu: "",
            zhishi: ""
        }
    },
    created() {
        this.getData()
    },
    methods : {
        getData () {
            console.log(this.$route.query.data)
            this.$http.post('/suan/apidata',this.$route.query.data,'cesuan',null,this.success,null)
        },
        success: function(res){
            this.qmdj = res.data.qmdj;
            this.sqly4 = res.data.sqly[4];
            this.dunju = res.data.dunju;
            this.zhifu = res.data.zhifu;
            this.zhishi = res.data.zhishi;
        },
    }
}
</script>
<style lang="less">
// 为了覆盖富文本样式去掉scoped属性
.qmdj-wrap{
    .content-wrap{
        padding-top: 90/75rem;
        .border-box();
        .table-wrap{
            width: 100%;
            padding: 41/75rem;
            .border-box();
            .table{
                width: 100%;
                .flex-start();
                flex-wrap: wrap;
                .border-box();
                border-top: 1px solid rgba(112,112,112,0.2);
                border-left: 1px solid rgba(112,112,112,0.2);
                .td-item{
                    .flex-center();
                    width: 33.333%;
                    height: 200/75rem;
                    .border-box();
                    border-right: 1px solid rgba(112,112,112,0.2);
                    border-bottom: 1px solid rgba(112,112,112,0.2);
                    table{
                        width: 100%!important;
                        height: 150/75rem;
                        .border-box();
                        padding: 0 0 0 17/75rem;
                        position: relative;
                        background: none;
                        tbody{
                            tr{
                                .flex-between();
                                td{
                                    flex: 1;
                                    display: inline-block;
                                    height: 52/75rem;
                                    text-align: center;
                                    line-height: 52/75rem;
                                    font-size: 26/75rem;
                                }
                            }
                            tr:nth-child(1){
                                td:nth-child(3){
                                    font{
                                       display: none;
                                    } 
                                }
                            }
                        }
                    }
                }
                .td-yi{
                    position: relative;
                    div{
                        display: inline-block;
                        position: absolute;
                        bottom: 30/75rem;
                        right: 22/75rem;
                        font-size: 26/75rem;
                    }
                }
            }
        }
        .bottom-msg{
            .flex-around();
            font-size: 34/75rem;
        }
    }
}

</style>

