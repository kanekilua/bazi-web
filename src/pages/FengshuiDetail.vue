<template>
    <div class="wrap">
        <v-header></v-header>
        <v-title-header>{{res.data.category}}</v-title-header>
        <div class="content-wrap">
            <div class="header">
                <h2>{{res.data.title}}</h2>
                <div class="time">时间：{{res.data.uptime}}</div>
            </div>
            <div class="item-message">
                <img :src="res.data.img" class="item-img">                    
                <p v-html="res.data.content"></p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            res: {
                data: {
                    category: "",
                    content: "",
                    title: "",
                    uptime: "",
                    img: "",
                }
            },
        }
    },
    created () {
        this.getData()
    },
    methods: {
        getData: function () {
            let params = {
                cid : '95',
                id : this.$route.query.id
            }
            this.$http.post('/suan/apidata',params,'cesuan',null,this.success);
        },
        success: function (res) {
            console.log(res);
            this.res = res;
            this.res.data.img= 'https://mingli.szmonster.com'+res.data.img;
        },
    }
}
</script>
<style lang="less" scoped>
.content-wrap{
    position: absolute;
    top: 169/75rem;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: auto;
    .header{
        padding: 32/75rem 0;
        text-align: center;
        border-bottom: 1px solid rgba(0,0,0,0.1);
        & > h2{
            font-size: 32/75rem;
            margin-bottom: 16/75rem;
            padding: 0 50/75rem;
            .border-box();
        }      
    }
    .item-message{
        padding: 32/75rem 0;
        & > p{
            text-indent: 2em;
            font-size: 24/75rem;
            padding:  0 32/75rem;
            .border-box();
        }
        .item-img{
            display: block;
            width: 80%;
            height: 280/75rem;
            margin: 20/75rem auto;
            .round(50/75rem);
        }   
    }
    
}
</style>

