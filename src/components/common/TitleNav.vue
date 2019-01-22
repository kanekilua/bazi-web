<template>
    <div class="title-nav">
        <div class="nav-left">
            <div class="color-line"></div>
            <div class="title">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<style lang="less" scoped>
.title-nav{
    width: 100%;
    height: 70/75rem;
    line-height: 70/75rem;
    padding: 0 20/75rem;
    .border-box();
    .flex-between();
    .nav-left{
        height: 70/75rem;
        line-height: 70/75rem;
        .flex-center();
        .color-line{
            width: 6/75rem;
            height: 30/75rem;
            background: url('../../assets/image/common/line.png') no-repeat center center /100% 100%;
            margin-right: 10/75rem;
        }
        .title{
            font-size: 32/75rem;
            color: @baseBoldColor;
            font-weight: bold;
        }
    }
}
</style>

