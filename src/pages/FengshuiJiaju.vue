<template>
    <div class="jiaju-wrap">
        <v-header></v-header>
        <v-title-header>{{title}}</v-title-header>
        <div class="content-wrap">
            <div class="jiaju-item" :key="index" v-for="(item,index) in itemList" @click="toInner(item.id)">
                <img :src="item.img" class="item-img">
                <div class="item-message">
                    <h2>{{item.title}}</h2>
                    <p v-html="item.content"></p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    created(){
        this.getData();
    },
    data () {
        return {
            title: this.$route.query.navTitle,
            itemList: [
                {
                    itemTitle:  "风水三见三不见，应该知道的事情",
                    itemArtical: "许多人对风水的印象都还停留在江湖术士和风水先生的一些故弄玄虚的把戏上，觉得这事一种缺乏科学精神的封建产物。其实主要是这门学问历史悠久，文字又晦涩难懂，配合古代的一."
                },
            ]
        }
    },
    methods: {
        getData: function () {
            let params = this.$route.query;//接收参数
            params.cid = '96'
            params.limit = 0;
            this.$http.post('/suan/apidata',params,'cesuan',null,this.success)
        },
        success: function (res) {
            this.itemList = res.data;
            for(let i of this.itemList){
                let imgArr = i.img.split(' ');
                i.img = 'https://mingli.szmonster.com' + imgArr[0];//拼接第一张img链接
            }
        },
        toInner: function (innerId) {
            let id = innerId;
            this.$router.push({
                name: 'article',
                query: {
                    cid : '95',
                    id : id
                }
            })
        },
        
    }
}
</script>
<style lang="less">
.jiaju-wrap{
    .content-wrap{
        position: absolute;
        top: 169/75rem;
        bottom: 0;
        left: 0;
        width: 100%;
        overflow: auto;
        .jiaju-item{
            .flex-start();
            padding: 20/75rem 0 20/75rem 23/75rem;
            border-bottom: 1px solid rgba(0,0,0,0.1);
            .item-img{
                display: inline-block;
                width: 258/75rem;
                height: 198/75rem;
                margin-right: 24/75rem;
                .round(27/75rem);
            }
            .item-message{
                & > h2{
                    width: 370/75rem;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    -o-text-overflow: ellipsis;
                    -webkit-text-overflow: ellipsis;
                    -moz-text-overflow: ellipsis;
                    white-space: nowrap;  /*规定段落中的文本不进行换行*/
                    font-size: 28/75rem;
                    margin-bottom: 28/75rem;
                }
                & > p{
                    width: 362/75rem;
                    height: 118/75rem;
                    line-height: 40/75rem;
                    font-size: 26/75rem;
                    overflow: hidden;
                    & > strong{
                        display: none;
                    }
                    & > div{
                        display: none;
                    }
                }
            }
        }
        
    }
}

</style>

