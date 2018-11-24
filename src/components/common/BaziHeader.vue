<template>
    <div class="header">
        <div class="return" @click="back"></div>
        <div class="title">
            <slot></slot>
        </div>
        <div class="switchUser"></div>
    </div>
</template>
<script>
export default {
    methods: {
        back : function () {
            this.$router.go(-1);
        }
    }
}
</script>
<style lang="less" scoped>
.header{
    padding: 20/75rem 32/75rem;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    .flex-between();
    .return{
        width: 44/75rem;
        height: 44/75rem;
        background: url('../../assets/image/bazi/return@2x.png') no-repeat center center / 100% 100%;
    }
    .title{
        font-size: 34/75rem;
    }
    .switchUser{
        width: 41/75rem;
        height: 44/75rem;
        background: url('../../assets/image/bazi/switchUser@2x.png') no-repeat center center / 100% 100%;
    }
}
</style>


