<template>
    <div class="header">
        <div class="back" @click="back"></div>
        <div class="title"><slot></slot></div>
        <div class="right"><slot name="right-ico"></slot></div>
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
    overflow: hidden;
    position: fixed;
    top: 0;
    z-index: 100;
    .flex-between();
    width: 100%;
    height: 90/75rem;
    padding: 0 32/75rem;
    .border-box();
    border-bottom: 1px solid rgba(0,0,0,0.1);
    background: #fff;
    .boxshadow(0,2/75rem,6/75rem,rgba(48,148,148,0.14));
    .back {
        width: 22/75rem;
        height: 40/75rem;
        background: url('../../assets/image/common/back.png') no-repeat center center / 100% 100%;
    }
    .title {
        font-weight: bold;
        font-size: 34/75rem;
        color : @baseBoldColor;
    }
}
</style>


