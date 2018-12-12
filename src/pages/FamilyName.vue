<template>
     <div class="wrap">
        <v-header></v-header>
        <v-title-header :backLink="backLink">
            姓名大全
        </v-title-header>
        <div class="content-wrap">
            <div class="table">
                <div class="td" v-for="(item,index) in nameList" :key="index" @click="$jump('/familyNameInner')">
                    {{item}}
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
            nameList: [
                "赵钱孙李","赵钱孙李","赵钱孙李","赵钱孙李","赵钱孙李","赵钱孙李","赵钱孙李","赵钱孙李","赵钱孙李","赵钱孙李","赵钱孙李","赵钱孙李","赵钱孙李","赵钱孙李","赵钱孙李","赵钱孙李","赵钱孙李","赵钱孙李","赵钱孙李","赵钱孙李","赵钱孙李","赵钱孙李","赵钱孙李","赵钱孙李","赵钱孙李","赵钱孙李","赵钱孙李","赵钱孙李","赵钱孙李","赵钱孙李","赵钱孙李","赵钱孙李","赵钱孙李","赵钱孙李","赵钱孙李","赵钱孙李","赵钱孙李","赵钱孙李","赵钱孙李","赵钱孙李","赵钱孙李","赵钱孙李","赵钱孙李","赵钱孙李","赵钱孙李","赵钱孙李","赵钱孙李","赵钱孙李","赵钱孙李","赵钱孙李","赵钱孙李","赵钱孙李","赵钱孙李","赵钱孙李","赵钱孙李","赵钱孙李","赵钱孙李","赵钱孙李","赵钱孙李","赵钱孙李","赵钱孙李","赵钱孙李","赵钱孙李","赵钱孙李","赵钱孙李","赵钱孙李","赵钱孙李","赵钱孙李","赵钱孙李","赵钱孙李","赵钱孙李","赵钱孙李",
            ]
        }
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
    padding: 24/75rem;
    .border-box();
    .table{
        .flex-start();
        flex-wrap: wrap;
        border-left: 1px solid rgba(112,112,112,0.2);
        border-top: 1px solid rgba(112,112,112,0.2);
        .td{
            .border-box();
            width: 25%;
            height: 90/75rem;
            line-height: 90/75rem;
            text-align: center;
            border-right: 1px solid rgba(112,112,112,0.2);
            border-bottom: 1px solid rgba(112,112,112,0.2);
            letter-spacing: 8/75rem;
            font-size: 26/75rem;
            font-weight: bold;
        }
    }
}
</style>