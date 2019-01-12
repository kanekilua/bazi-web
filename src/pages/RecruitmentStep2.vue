<template>
    <div class="content">
        <div class="step">
            <div class="step-item">
                <img src="../assets/image/master/step1-active.png">
                <div class="num active">1</div>
            </div>
             <div class="step-item">
                <img src="../assets/image/master/step2-active.png">
                <div class="num active">2</div>
            </div>
             <div class="step-item">
                <img src="../assets/image/master/step3.png">
                <div class="num">3</div>
            </div>
        </div>
        <div class="line">
            <div class="part active"></div>
            <div class="part active"></div>
            <div class="part"></div>
            <div class="part"></div>
        </div>
        <div class="form">
            <div class="form-item">
                <div class="key">擅长术数</div>
                <input type="text" placeholder="填写术数名称，示例：八字，六爻..." v-model="technique">
            </div>
            <div class="form-item">
                <div class="key">个人头衔</div>
                <input type="text" placeholder="非必填，限20字以内，示例：xx协会会长" v-model="honor">
            </div>
             <div class="form-item">
                <div class="key">学习经历</div>
                <textarea placeholder="请填写您的学习经历" v-model="learning"></textarea>
            </div>
            <div class="form-item">
                <div class="key">从业年限</div>
                <input type="text" placeholder="请填写您的工作你年龄" v-model="working_years">
                <div class="year">年</div>
            </div>
            <div class="form-item">
                <div class="key">从业经验</div>
                <input type="text" placeholder="填写预测实践中的经验" v-model="working_exp">
            </div>
            <div class="form-item">
                <div class="key">擅长领域</div>
                <input type="text" placeholder="示例：短期内断事、男女合婚、起名、看风水等" v-model="merit">
            </div>
            <div class="form-item">
                <div class="key">收费情况</div>
                <input type="text" placeholder="填写目前通过何种形式接单，收费情况" v-model="charges">
            </div>
            <div class="btn-list">
                <button class="next-btn" @click="preStep">上一步</button>
                <button class="next-btn next-step" @click="nextStep">下一步</button>
            </div>
        </div>
    </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex'
export default {
    data() {
        return{
            technique : "",
            honor : "",
            learning : "",
            working_years : "",
            working_exp : "",
            merit : "",
            charges : ""
        }
    },
    computed: {
        ...mapState('recruitment',['masterInfo'])
    },
    created () {
        this.init();
    },
    methods: {
        ...mapMutations('recruitment',['updateMasterInfo']),
        init : function () {
            if(this.masterInfo) {
                this.technique = this.masterInfo.technique;
                this.honor = this.masterInfo.honor;
                this.learning = this.masterInfo.learning;
                this.working_years = this.masterInfo.working_years;
                this.working_exp = this.masterInfo.working_exp;
                this.merit = this.masterInfo.merit;
                this.charges = this.masterInfo.charges;
            }
        },
        preStep: function () {
            this.$jump('/main/mine/recruitment/recruitmentStep1')
        },
        nextStep: function () {
            let masterInfoTemp = {
                ...this.masterInfo
            }
            masterInfoTemp.technique = this.technique;
            masterInfoTemp.honor = this.honor;
            masterInfoTemp.learning = this.learning;
            masterInfoTemp.working_years = this.working_years;
            masterInfoTemp.working_exp = this.working_exp;
            masterInfoTemp.merit = this.merit;
            masterInfoTemp.charges = this.charges;
            this.updateMasterInfo(masterInfoTemp);
            this.$jump('/main/mine/recruitment/recruitmentStep3')
        }
    }
}
</script>
<style lang="less" scoped>
.content{
    .step{
        .flex-between();
        width: 74%;
        margin: 0 auto;
        padding: 40/75rem 48/75rem 0 48/75rem;
        .border-box();
        img{
            width: 80/75rem;
            height: 80/75rem;
        }
        & > div{
            & > div{
                width: 28/75rem;
                height: 28/75rem;
                line-height: 28/75rem;
                .round(50%);
                text-align: center;
            }
        }
    }
    .step-item{
        .flex-col();
        .num{
            .translate(0,14/75rem);
            background: #cccccc;
            color: #fff;
        }
    }
    .active{
        background: @baseBoldColor!important;
    }
    .line{
        width: 100%;
        height: 4/75rem;
        background: #cccccc;
        .flex-start();
        .part{
            flex: 1;
            height: 100%;
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
                font-size: 32/75rem;
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
            width: 250/75rem;
            height: 70/75rem;
            margin: 50/75rem auto;
            .my-button();
            .round(35/75rem);
        }
        .next-step{
            background: @baseBoldColor;
        }
    }
}
</style>


