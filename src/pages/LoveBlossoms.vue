<template>
    <div class="wrap">
        <v-active-header>桃花运</v-active-header>
        <v-title-header>桃花运</v-title-header>
        <div class="content">
            <img src="../assets/image/love/love-blossoms@2x.png" class="title-img">
            <input type="text" class="name-input" placeholder="请输入您的姓名" placeholder-align="left">
            <div class="check-box">
                <input type="radio" checked id="male" name="sex">
                <label for="male">男</label>
                <input type="radio" id="female" name="sex">
                <label for="female">女</label>
                <input type="radio" id="gongli" checked name="date">
                <label for="gongli">公历</label>
                <input type="radio" id="nongli" name="date">
                <label for="nongli">农历</label>
            </div>
            <button>开始测算</button>
        </div>
        
    </div>
</template>
<script>
export default {
    data () {
        return{
           
        }
    }
}
</script>
<style lang="less" scoped>
.content{
    width: 100%;
    height: 600px;
    background: url('../assets/image/love/love-blossoms-bg@2x.png') no-repeat center center / 100% 100%;
    .title-img{
        display: block;
        margin: 35/75rem auto;
        width: 408/75rem;
        height: 168/75rem;
    }
    .name-input{
        display: block;
        width: 448/75rem;
        height: 80/75rem;
        margin: 0 auto;
        border-radius: 20px;
        border: none;
        outline: none;
        padding-left: 32/75rem;
    }
    .check-box{
        width: 480/75rem;
        margin: 25/75rem auto;
        .flex-between();
        input[type="radio"]{
            display: none;
        }
        input[type="radio"] + label{
            display: inline-block;
            width: 88/75rem;
            height: 88/75rem;
            line-height: 88/75rem;
            .boxshadow(0,3/75rem,6/75rem,rgba(0,0,0,0.16));
            .round(50%);
            text-align: center;
            background: #fff;
            color: #EB87A8;
        }
        input[type="radio"]:checked + label{
            background: #EB87A8;
            color: #fff;
        }
    }
        

}
</style>


