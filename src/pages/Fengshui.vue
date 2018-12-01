<template>
    <div class="wrap">
        <v-title-header>风水常识</v-title-header>
        <div class="content-box">
            <div class="content">
                <div class="btn-row">
                    <button class="fengshui-btn select-btn" @click="$jump('/jiaju')">家居风水</button>
                    <button class="fengshui-btn">办公风水</button>
                    <button class="fengshui-btn">感情风水</button>
                </div>
                <div class="btn-row">
                    <button class="fengshui-btn">房屋风水</button>
                    <button class="fengshui-btn">招财风水</button>
                </div>
                <div class="btn-row">
                    <button class="fengshui-btn">风水摆设</button>
                    <button class="fengshui-btn">商业风水</button>
                    <button class="fengshui-btn">风水大师</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
.content-box{
    width: 670/75rem;
    height: 507/75rem;
    margin: 0 auto;
    .content{
        width: 80%;
        margin-bottom: 80/75rem;
    }
    .flex-center();
    background: url('../assets/image/fengshui/fengshui@2x.png') no-repeat center center / 100% 100%;
    .btn-row{
        margin-top: 80/75rem;
        .flex-between();
        .fengshui-btn{
            width: 120/75rem;
            height: 50/75rem;
            font-size: 26/75rem;
            border-radius: 13/75rem;
            background: #fff;
            border: none;
            box-shadow: 0 3/75rem 6/75rem rgba(0,0,0,0.16);
            outline: none;
            &:active{
                background: #eee;
            }
            @media screen  and (max-width: 320px) {
                width: 130/75rem;
                font-size: 20/75rem;
            }
        }
        .select-btn{
            background: @baseColor;
        }
    }
}
</style>


