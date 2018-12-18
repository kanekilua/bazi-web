<template>
    <div class="content">
        <div class="step">
            <div class="step1 active">个人信息</div>
            <i class="step-ico1"></i>
            <div class="step2 active">专业相关</div>
            <i class="step-ico2"></i>
            <div class="step3 active">平台相关</div>
        </div>
        <div class="content-item">
            <div class="title">通过什么渠道了解我们平台(可多选)</div>
            <div class="checkbox-list">
                <label for="advertise">
                    <input type="checkbox" name="way" id="advertise" value="1" v-model="way">
                    <i></i>
                    <div>网络广告</div>
                </label>
                    <label for="friend">
                    <input type="checkbox" name="way" id="friend" value="2" v-model="way">
                    <i></i>
                    <div>亲朋好友推荐</div>
                </label>
                <label for="customer">
                    <input type="checkbox" name="way" id="customer" value="3" v-model="way">
                    <i></i>
                    <div>测算客户推荐</div>
                </label>
                    <label for="network">
                    <input type="checkbox" name="way" id="network" value="4" v-model="way">
                    <i></i>
                    <div>网络搜索</div>
                </label>
                <label for="networkAdvertise">
                    <input type="checkbox" name="way" id="networkAdvertise" value="5" v-model="way">
                    <i></i>
                    <div>网络广告</div>
                </label>
                    <label for="else">
                    <input type="checkbox" name="way" id="else" value="6" v-model="way">
                    <i></i>
                    <div>其他</div>
                </label>
            </div>
        </div>
        <div class="content-item">
            <div class="title">入驻平台期望月收入</div>
            <div class="radio-list">
                <label for="pay1">
                    <input type="radio" name="pay" id="pay1" value="1" v-model="pay">
                    <i></i>
                    <div>0.5-0.8万</div>
                </label>
                    <label for="pay2">
                    <input type="radio" name="pay" id="pay2" value="2" v-model="pay">
                    <i></i>
                    <div>0.8-1万</div>
                </label>
                <label for="pay3">
                    <input type="radio" name="pay" id="pay3" value="3" v-model="pay">
                    <i></i>
                    <div>1万-2万</div>
                </label>
                    <label for="pay4">
                    <input type="radio" name="pay" id="pay4" value="4" v-model="pay">
                    <i></i>
                    <div>2万-5万</div>
                </label>
                <label for="pay5">
                    <input type="radio" name="pay" id="pay5" value="5" v-model="pay">
                    <i></i>
                    <div>5万-10万</div>
                </label>
                    <label for="pay6">
                    <input type="radio" name="pay" id="pay6" value="6" v-model="pay">
                    <i></i>
                    <div>10万以上</div>
                </label>
            </div>
        </div>
        <div class="btn-list">
            <button class="next-btn" @click="preStep">上一步</button>
            <button class="next-btn next-step" @click="nextStep">提交</button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return{
            way: [1],
            pay: "1",
        }
    },
    methods: {
        preStep: function () {
            this.$jump('/main/mine/recruitment/recruitmentStep2')
        },
        nextStep: function () {
            // this.$jump('/main/mine/recruitment/recruitmentStep3')
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
            background: url('../assets/image/common/step-active.png') no-repeat center center / 100% 100%;
        }
        .active{
            background: @baseColor;
        }
    }
    .content-item{
        padding: 40/75rem;
        .border-box();
        font-size: 26/75rem;
        border-top: 1px solid rgba(0,0,0,0.1);
        border-bottom: 1px solid rgba(0,0,0,0.1);
        .checkbox-list,.radio-list{
            .flex-center();
            flex-wrap: wrap;
            label{
                width: 40%;
                margin-right: 5%;
                .flex-start();
                margin-top: 32/75rem;
                & > i{
                    display: block;
                    width: 44/75rem;
                    height: 44/75rem;
                    margin-right: 32/75rem;
                    line-height: 44/75rem;
                    text-align: center;
                    border: 1px solid rgba(112,112,112,1);
                    .round(50%);
                }
                &>input{
                    display: none;
                }
                &>input:checked + i{
                    background: @baseColor;
                    border-color: @baseColor;
                }
            }       
        }
    }
    .content-item:nth-of-type(3){
        border-top: none;
    }
    .btn-list{
        .flex-between();
        margin-top: 80/75rem;
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


