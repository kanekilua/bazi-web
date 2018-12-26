<template>
    <div class="content">
        <div class="step">
            <div class="step1 active">个人信息</div>
            <i class="step-ico1"></i>
            <div class="step2 active">专业相关</div>
            <i class="step-ico2"></i>
            <div class="step3">平台相关</div>
        </div>
        <div class="form">
            <div class="form-item">
                <div class="key">擅长术数</div>
                <input type="text" placeholder="填写术数名称，示例：八字，六爻...">
            </div>
            <div class="form-item">
                <div class="key">个人头衔</div>
                <input type="text" placeholder="非必填，限20字以内，示例：xx协会会长">
            </div>
             <div class="form-item">
                <div class="key">学习经历</div>
                <textarea></textarea>
            </div>
            <div class="form-item">
                <div class="key">从业年限</div>
                <input type="text" placeholder="请填写您的工作你年龄">
                <div class="year">年</div>
            </div>
            <div class="form-item">
                <div class="key">从业经验</div>
                <input type="text" placeholder="填写预测实践中的经验">
            </div>
            <div class="form-item">
                <div class="key">擅长领域</div>
                <input type="text" placeholder="示例：短期内断事、男女合婚、起名、看风水等">
            </div>
            <div class="form-item">
                <div class="key">收费情况</div>
                <input type="text" placeholder="填写目前通过何种形式接单，收费情况">
            </div>
            <div class="btn-list">
                <button class="next-btn" @click="preStep">上一步</button>
                <button class="next-btn next-step" @click="nextStep">下一步</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return{
            data () {
            }
        }
    },
    methods: {
        preStep: function () {
            this.$jump('/main/mine/recruitment/recruitmentStep1')
        },
        nextStep: function () {
            
            this.$jump('/main/mine/recruitment/recruitmentStep3')
        }
    }
}
</script>
<style lang="less" scoped>
.content{
    .step{
        .flex-between();
        width: 100%;
        padding: 40/75rem 48/75rem;
        .border-box();
        & > div{
            width: 142/75rem;
            height: 60/75rem;
            line-height: 60/75rem;
            text-align: center;
            .round(20/75rem);
            background: rgba(0,0,0,0.2);
            color: #fff;
        }
        & > i{
            display: inline-block;
            width: 45/75rem;
            height: 23/75rem;
            background: url('../assets/image/common/step-ico.png') no-repeat center center / 100% 100%;
        }
        .step-ico1{
            background: url('../assets/image/common/step-active.png') no-repeat center center / 100% 100%;
        }
        .active{
            background: @baseColor;
        }
    }
    .form{
        padding: 40/75rem 34/75rem 50/75rem 44/75rem;
        .border-box();
        .form-item{
            position: relative;
            overflow: hidden;
            font-size: 26/75rem; 
            .flex-between();
            margin-bottom: 24/75rem;
            .key{
               font-size: 26/75rem; 
            }
            & >  input[type="text"]{
               width: 79%;
               margin-top: 17/75rem;
               padding-bottom: 17/75rem;
               .border-box();
               .my-input();
               font-size: 26/75rem;
               border-bottom: 1px solid rgba(112,112,112,0.1);
            }
            .year{
                position: absolute;
                right: 0;
            }
            & > textarea{
                width: 78%;
                height: 153/75rem;
                margin: 5/75rem;
                border: none;
                resize: none;
                outline: none;
                padding: 10/75rem 26/75rem;
                .round(11/75rem);
                .border-box();
                .boxshadow(0,3/75rem,6/75rem,rgba(0,0,0,0.16));
            }
        }
    }
    .btn-list{
        .flex-between();
        & > button{
            width: 320/75rem;
            height: 80/75rem;
            margin: 0 auto;
            .my-button();
            .round(30/75rem);
        }
        .next-step{
            background: @baseColor;
        }
    }
}
</style>


