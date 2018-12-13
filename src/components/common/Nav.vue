<template>
    <div class="nav">
        <ul class="nav-list">
            <li class="item" v-for="(item,index) in navList" :key="index" :class="{'active': nowIndex===index}" @click="tabClick(index)">
                {{item}}
                <div :class="{'point' : nowIndex===index}"></div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props : ['navList','nowIndex'],
    methods: {
        tabClick(index) {
            this.$emit('updateNavIndex',index);
        }
    }
}
</script>
<style lang="less" scoped>

.nav{
    margin-bottom: 20/75rem;
    .nav-list{
        width: 100%;
        overflow: hidden;
        .flex-start();
        .item{
            padding: 0 10/75rem;
            display: block;
            text-align: center;
            height: 86/75rem;
            line-height: 70/75rem;
            margin-top: 20/75rem;
            font-size: 28/75rem;
            font-weight:400;
            opacity: 0.8;
            position: relative;
            &.active{
                opacity: 1;
                font-weight: bold;
                font-size: 34/75rem;
            }
            & > .point {
                width: 8/75rem;
                height: 8/75rem;
                background: @baseColor;
                .round(50%);
                margin: 0 auto;
            }
        }
        
    }
}
</style>