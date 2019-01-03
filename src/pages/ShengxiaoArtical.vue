<template>
    <keep-alive>
        <div class="artical-wrap">
            <v-title-header>
                {{this.$route.params.name}}
                <div class="right-ico" slot="right-ico"></div>
            </v-title-header>
            <div class="content-wrap">
                <div class="top">
                    <h2>{{title}}</h2>
                    <div class="person-msg">
                        <img :src="this.$route.params.img" alt="">
                        <div class="person-name">{{this.$route.params.name}}</div>
                        <button>收藏</button>
                    </div>
                </div>
                <div class="artical" 
                    v-html="content"
                >
                </div>
            </div>
        </div>
    </keep-alive>
</template>

<script>
export default {
    data () {
        return {
            title: "",
            content: "",
        }
    },
    created() {
        this.getData();
        // console.log(this.$route.params); 
    },
    methods: {
        getData () {
            let tid = "";
            switch(this.$route.params.name){
                case "麦玲玲":
                    tid = '407';
                    break;
                case "苏民峰":
                    tid = '410';
                    break;
                case "李居明":
                    tid = '408';
                    break;
                case "宋韶光":
                    tid = '409';
                    break;
            }
            let params = {
                cid: '98',
                tid : tid,
                category : this.$route.params.category,
            }
            this.$http.post('/suan/apidata',params,'cesuan',null,this.success,null);
        },
        success : function (res) {
            this.title = res. data[0].title;
            this.content = res.data[0].content;
            console.log(res);
        }
    }
}
</script>

<style lang="less" scoped>
.artical-wrap{ 
    .right-ico{
        width: 38/75rem;
        height: 38/75rem;
        background: url('../assets/image/common/share.png')no-repeat center center / 100% 100%;
    }
    .content-wrap{
        width: 100%;
        padding-top: 90/75rem;
        .border-box();
        .top{
            width: 100%;
            padding: 30/75rem 30/75rem 10/75rem 30/75rem;
            .border-box();
            border-bottom: 1px solid rgba(241,241,241,1);
            .person-msg{
                .flex-between();
                padding: 20/75rem 30/75rem 20/75rem 40/75rem;
                .border-box();
                & > img {
                    width: 100/75rem;
                    height: 100/75rem;
                    .round(50%);
                    .boxshadow();
                }
                & > button {
                    .my-button();
                    width: 100/75rem;
                    height: 40/75rem;
                    line-height: 40/75rem; 
                    font-size: 12px;
                    .round(7/75rem);
                    background: @baseBoldColor;
                }
                .person-name{
                    font-size: 30/75rem;
                    font-weight: bold;
                }
            }
        }
        .artical{
            padding: 30/75rem 50/75rem;
            .border-box();
        }
    }
}
</style>


