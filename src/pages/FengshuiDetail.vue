<template>
    <div class="wrap">
        <v-header></v-header>
        <v-title-header>家居风水</v-title-header>
        <div class="content">
            <div class="header">
                <h2>{{itemTitle}}</h2>
                <div class="time">时间：{{publicTime}}</div>
            </div>
            <div class="item-message">                    
                <p>{{itemArtical}}<img :src="imgSrc" class="item-img">{{itemArtical}}</p>
                <!-- 获得真实数据后要做图片插入数据中间处理 -->
            </div>
            <div class="btn-list">
                <button class="luck-good">开运物品</button>
                <button class="ask-master">问大师</button>
                <button class="share select-btn">分享</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            imgSrc: require('../assets/image/fengshui/jiaju1@2x.png'),
            itemTitle:  "风水三见三不见，应该知道的事情",
            publicTime: "2016-10-03 16:57:50",
            itemArtical: "许多人对风水的印象都还停留在江湖术士和风水先生的一些故弄玄虚的把戏上，觉得这事一种缺乏科学精神的封建产物。其实主要是这门学问历史悠久，文字又晦涩难懂，配合古代的一."
        }
    }
}
</script>
<style lang="less" scoped>
.content{
    .header{
        padding: 32/75rem 0;
        text-align: center;
        border-bottom: 1px solid rgba(0,0,0,0.1);
        & > h2{
            font-size: 32/75rem;
        }      
    }
    .item-message{
        padding: 32/75rem 0;
        & > p{
            text-indent: 2em;
            font-size: 24/75rem;
            padding:  0 32/75rem;
        }
        .item-img{
            display: block;
            width: 704/75rem;
            height: 280/75rem;
            margin: 20/75rem auto;
        }   
    }
    .btn-list{
        .flex-around();
        & > button{
            width: 177/75rem;
            height: 66/75rem;
        }
    }
    
}
</style>

