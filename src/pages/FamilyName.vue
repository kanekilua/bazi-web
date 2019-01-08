<template>
     <div class="wrap">
        <v-title-header :backLink="backLink">
            姓名大全
        </v-title-header>
        <div class="content-wrap">
            <div class="search-box">
                <input type="text" placeholder="搜索姓氏" v-model="firstName">
                <button @click="search()">搜索</button>
            </div>
            <div class="table">
                <div class="td" 
                    v-for="(item,index) in nameList" 
                    :key="index"
                >
                    <button class="item" @click.stop="toInner(item)">{{item}}</button>
                </div>
            </div>
        </div>
        <!-- 弹框 -->
        <div v-transfer-dom>
            <x-dialog v-model="showDialogStyle" hide-on-blur :dialog-style="{'max-width': '100%', width: '100%', height: '48%', 'background-color': 'transparent'}">
                <div class="search-dialog">
                    <div class="top">
                        <div class="tips">温馨提示</div>
                        <button class="exit" @click="showDialogStyle=false"></button>
                    </div>
                    <div class="bottom">暂无此数据</div>
                </div>
            </x-dialog>
        </div>
    </div>
</template>
<script>
import {XDialog,TransferDomDirective as TransferDom,Picker} from 'vux'
export default {
    directives: {
        TransferDom
    },
    data () {
        return {
            backLink: "/nameHome",
            nameList: [],
            firstName: "",
            showDialogStyle: false,
        }
    },
    created () {
        this.getData();
    },
    methods: {
        getData: function () {
            let params = {
                cid : '104'
            }
            this.$http.post('/suan/apidata',params,'cesuan',null,this.success,this.failure);
        },
        success: function (res) {
            for(let i of res.data){
                this.nameList.push(i.xing);
            }
        },
        search: function () {
            if(this.nameList.toString().includes(this.firstName)){ //百家姓里是否存在输入的字符串。
               this.toInner(this.firstName);
            }else {
               this.showDialogStyle = true;
            }
        },
        toInner: function (item) {
            this.$router.push({
                path: '/familyNameInner',
                query: {
                    xing: item,
                }
            })
        }
    }
}
</script>
<style lang="less" scoped>
.content-wrap{
    padding: 200/75rem 24/75rem 24/75rem 24/75rem;
    .border-box();
    .search-box{
        position: fixed;
        top: 90/75rem;
        left: 0;
        right: 0;
        margin: auto;
        z-index: 10;
        .flex-between();
        width: 96%;
        height: 100/75rem;
        padding: 23/75rem auto 36/75rem auto;
        background: #fff;
        input{
            width: 88%;
            height: 50/75rem;
            text-align: center;
            .my-input();
            background: #f1f1f1;
            font-size: 30/75rem;
            .round(10/75rem);
        }
        button{
            .my-button();
            background: none;
            color: #000;
            font-size: 32/75rem;
            font-weight: bold;
        }
    }
    .table{
        .flex-start();
        flex-wrap: wrap;
        .td{
            .flex-center();
            .border-box();
            width: 100/6%;
            height: 90/75rem;
            font-weight: bold;
            .item{
                width: 84/75rem;
                height: 84/75rem;
                line-height: 84/75rem;
                text-align: center;
                .boxshadow();
                .round(50%);
                letter-spacing: 8/75rem;
                font-size: 50/75rem;
                color: @baseLightColor;
                border: none;
                background: none;
                &:active{
                    background: @baseBoldColor;
                    color: #fff;
                }
            }
        }
    }
}
.search-dialog{
    width: 500/75rem;
    height: 138/75rem;
    margin: 0 auto;
    .round(10/75rem);
    background: #fff;
    color: @baseBoldColor;
    .top{
        .flex-between();
        padding: 14/75rem;
        .border-box();
        font-size: 24/75rem;
        .exit{
           width: 28/75rem;
           height: 28/75rem;
            .my-button();
           background: url('../assets/image/name/exit.png') center center / 100% 100%;
        }
    }
    .bottom{
        font-size: 36/75rem;
    }
}
</style>