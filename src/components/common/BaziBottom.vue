<template>
    <div class="wrap">
        <x-button class="lock">
            <span class="lock-ico"></span>
            解锁查看更多
        </x-button>
        <x-button class="share-button">分享</x-button>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
.wrap{
    width: 90%;
    margin: 45/75rem auto 0 auto;
    .flex-between-only();
    .lock{
        width: 297/75rem;
        height: 66/75rem;
        line-height: 66/75rem;
        font-size: 26/75rem;
        background-color: #fff;
        vertical-align: middle;
        box-shadow:0px 3px 6px rgba(0,0,0,0.16);
        .flex-center();
        .lock-ico{
            display: block;
            width: 35/75rem;
            height: 44/75rem;
            background: url('../../assets/image/bazi/lock@2x.png') no-repeat center center / 100% 100%;
            margin-right: 25/75rem;
        }
    }
    .share-button{
        width: 177/75rem;
        height: 66/75rem;
        font-size: 26/75rem;
        color: #fff;
    }
    .weui-btn + .weui-btn{
        margin-top: 0;
    }
}
</style>


