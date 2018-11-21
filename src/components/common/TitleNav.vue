<template>
    <div class="title-nav">
        <div class="nav-left">
            <div class="color-line"></div>
            <div class="title">
                <slot name="title"></slot>
            </div>
        </div>
        <div class="nav-right">
            <slot name="more">
                <div class="more-txt">更多</div>
                <i class="right"></i>
            </slot>
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
    padding: 18/75rem 0;
    .flex-between();
    .nav-left{
        .flex-start();
        .color-line{
            width: 9/75rem;
            height: 37/75rem;
            background: @baseColor;
            .round(5/75rem);
            margin-right: 32/75rem;
        }
        .title{
            font-size: 20/75rem;
        }
    }
    .nav-right{
        .flex-end();
        .more-txt{
            font-size: 28/75rem;
            font-weight: bold;
        }
        .right{
            display: inline-block;
            width: 44/75rem;
            height: 44/75rem;
            background: url('../../assets/image/home/more@2x.png') no-repeat center center /100% 100%;
        }
    }
}
</style>

