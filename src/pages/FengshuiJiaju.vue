<template>
    <div class="wrap">
        <v-active-header>家居风水</v-active-header>
        <v-title-header>家居风水</v-title-header>
        <div class="content">
            <div class="jiaju-item" :key="index" v-for="(item,index) in itemList" @click="$jump('/fengshuidetail')">
                <img :src="item.imgSrc" class="item-img">
                <div class="item-message">
                    <h2>{{item.itemTitle}}</h2>
                    <p>{{item.itemArtical}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            itemList: [
                {
                    imgSrc: require('../assets/image/fengshui/jiaju1@2x.png'),
                    itemTitle:  "风水三见三不见，应该知道的事情",
                    itemArtical: "许多人对风水的印象都还停留在江湖术士和风水先生的一些故弄玄虚的把戏上，觉得这事一种缺乏科学精神的封建产物。其实主要是这门学问历史悠久，文字又晦涩难懂，配合古代的一."
                },
                {
                    imgSrc: require('../assets/image/fengshui/jiaju1@2x.png'),
                    itemTitle:  "风水三见三不见，应该知道的事情",
                    itemArtical: "许多人对风水的印象都还停留在江湖术士和风水先生的一些故弄玄虚的把戏上，觉得这事一种缺乏科学精神的封建产物。其实主要是这门学问历史悠久，文字又晦涩难懂，配合古代的一."
                },
                {
                    imgSrc: require('../assets/image/fengshui/jiaju1@2x.png'),
                    itemTitle:  "风水三见三不见，应该知道的事情",
                    itemArtical: "许多人对风水的印象都还停留在江湖术士和风水先生的一些故弄玄虚的把戏上，觉得这事一种缺乏科学精神的封建产物。其实主要是这门学问历史悠久，文字又晦涩难懂，配合古代的一."
                },
                {
                    imgSrc: require('../assets/image/fengshui/jiaju1@2x.png'),
                    itemTitle:  "风水三见三不见，应该知道的事情",
                    itemArtical: "许多人对风水的印象都还停留在江湖术士和风水先生的一些故弄玄虚的把戏上，觉得这事一种缺乏科学精神的封建产物。其实主要是这门学问历史悠久，文字又晦涩难懂，配合古代的一."
                },
            ]
        }
    }
}
</script>
<style lang="less" scoped>
.content{
    .jiaju-item{
        .flex-start();
        padding: 20/75rem 0 20/75rem 23/75rem;
        border-bottom: 1px solid rgba(0,0,0,0.1);
        .item-img{
            display: inline-block;
            width: 258/75rem;
            height: 198/75rem;
            margin-right: 24/75rem
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
                word-break: break-all;
                display: -webkit-box;
                -webkit-line-clamp: 3;  /*限制在一个块元素显示的文本的行数*/
                -webkit-box-orient: vertical;
                 overflow: hidden;
            }
        }
    }
    
}
</style>

