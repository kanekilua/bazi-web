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
                <img src="../assets/image/master/step3-active.png">
                <div class="num active">3</div>
            </div>
        </div>
        <div class="line">
            <div class="part active"></div>
            <div class="part active"></div>
            <div class="part active"></div>
            <div class="part"></div>
        </div>
        <div class="form">
            <div class="title">1.通过什么渠道了解我们平台(可多选)</div>
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
            <div class="title">2.入驻平台期望月收入</div>
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
import {mapState,mapMutations} from 'vuex'
export default {
    data() {
        return{
            way: ['1'],
            pay: "1",
        }
    },
    computed: {
        ...mapState('recruitment',['masterInfo'])
    },
    methods: {
        ...mapMutations('recruitment',['updateMasterInfo']),
        preStep: function () {
            this.$jump('/main/mine/recruitment/recruitmentStep2')
        },
        nextStep: function () {
            let masterInfoTemp = {
                ...this.masterInfo
            }
            let wayStr = "";
            for(let wayItem of this.way) {
                wayStr += wayItem + ',';
            }
            wayStr = wayStr.substring(0,wayStr.length-1);
            masterInfoTemp.channel_data = wayStr;
            masterInfoTemp.salary_data = this.pay;
            this.$http.post('/features/mast',masterInfoTemp,null,null,this.success,this.failure);
        },
        success : function (res) {
            console.log(res);
            if(res.code === 'success') {
                this.$vux.toast.show({
                    width : '15em',
                    text: '提交成功',
                    position : 'center',
                    time : 1500,
                    type : "success",
                    isShowMask : true
                });
                setTimeout(() => {
                    this.$jump('/main/mine');
                },1500)
                this.updateMasterInfo(null);
            }
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
        width: 590/75rem;
        padding: 30/75rem;
        font-size: 26/75rem;
        margin: 60/75rem auto 76/75rem auto;
        .border-box();
        .boxshadow(0,0,10/75rem,rgba(0,0,0,0.16));
        .round(15/75rem);
        .title{
            font-size: 30/75rem;
        }
        .checkbox-list{
            margin-bottom: 48/75rem;
        }
        .checkbox-list,.radio-list{
            .flex-center();
            flex-wrap: wrap;
            label{
                width: 40%;
                margin-right: 5%;
                .flex-start();
                margin-top: 20/75rem;
                & > i{
                    display: block;
                    width: 20/75rem;
                    height: 20/75rem;
                    margin-right: 12/75rem;
                    line-height: 20/75rem;
                    text-align: center;
                    border: 1px solid rgba(112,112,112,1);
                    .round(50%);
                }
                &>input{
                    display: none;
                }
                &>input:checked + i{
                    background: @baseBoldColor;
                    border-color: @baseBoldColor;
                }
            }       
        }
    }
    .content-item:nth-of-type(3){
        border-top: none;
    }
     .btn-list{
        .flex-between();
        & > button{
            width: 250/75rem;
            height: 70/75rem;
            margin: 0 auto;
            .my-button();
            .round(35/75rem);
        }
        .next-step{
            background: @baseBoldColor;
        }
    }
}
</style>


