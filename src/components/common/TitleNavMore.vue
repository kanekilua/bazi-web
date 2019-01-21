<template>
    <div class="title-nav">
        <div class="nav-left">
            <div class="color-line"></div>
            <div class="title">
                <slot name="title"></slot>
            </div>
        </div>
        <div class="nav-right">
            <div class="more-txt">
                <slot name="more"></slot>
            </div>   
            <i class="right"></i>
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
    padding: 18/75rem 20/75rem;
    .border-box();
    .flex-between();
    .nav-left{
        height: 35/75rem;
        line-height: 35/75rem;
        .flex-center();
        .color-line{
            width: 6/75rem;
            height: 30/75rem;
            background: url('../../assets/image/common/line.png') no-repeat center center /100% 100%;
            margin-right: 10/75rem;
        }
        .title{
            font-size: 32/75rem;
            color: #121212;
            font-weight: bold;
        }
    }
    .nav-right{
        font-size: 20/75rem;
        color: @baseBoldColor;
        .flex-end();
        .more-txt{
            font-size: 20/75rem;
        }
        .right{
            display: block;
            width: 11/75rem;
            height: 20/75rem;
            margin: 0 0 0 10/75rem;
            background: url('../../assets/image/common/more.png') no-repeat center center /100% 100%;
        }
    }
}
</style>

