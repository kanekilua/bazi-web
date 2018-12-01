<template>
    <div class="header">
        <div class="back icon" @click="back"></div>
        <div class="title"><slot></slot></div>
        <div class="icon"><slot name="icon"></slot></div>
    </div>
</template>
<script>
export default {
    name : 'TitleHeader',
    props : ['backLink'],
    methods : {
        back : function () {
            if(this.backLink != null) {
                this.$jump(this.backLink);
            }else {
                this.$router.go(-1);
            }
        }
    }
}
</script>
<style lang="less" scoped>
.header {
    .flex-between();
    padding: 20/75rem 32/75rem;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    .back {
        background: url('../../assets/image/title-header/back.png') no-repeat center center / 100% 100%;
    }
    .title {
        font-weight: bold;
        font-size: 34/75rem;
        color : #333;
    }
    .icon{
        width: 44/75rem;
        height: 44/75rem;
    }
}
</style>


