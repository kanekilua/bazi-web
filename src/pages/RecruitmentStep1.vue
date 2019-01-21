<template>
    <div class="content">
        <div class="step">
            <div class="step-item">
                <img src="../assets/image/master/step1-active.png">
                <div class="num active">1</div>
            </div>
             <div class="step-item">
                <img src="../assets/image/master/step2.png">
                <div class="num">2</div>
            </div>
             <div class="step-item">
                <img src="../assets/image/master/step3.png">
                <div class="num">3</div>
            </div>
        </div>
        <div class="line">
            <div class="part active"></div>
            <div class="part"></div>
            <div class="part"></div>
            <div class="part"></div>
        </div>
        <div class="form">
            <div class="form-item">
                <div class="key">真实姓名</div>
                <input type="text" class="form-input" v-model="masterName" placeholder="请与身份证上一致">
            </div>
            <div class="form-item">
                <div class="key">手机号码</div>
                <input type="text"  class="form-input" v-model="masterPhone" placeholder="请填写您的手机号码">
            </div>
            <div class="form-item">
                <div class="key">QQ号码</div>
                <input type="text" class="form-input" v-model="masterQQ" placeholder="请输入您的QQ号码">
            </div>
            <div class="radio-box">
                <div class="key">性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别</div>
                <div class="radio-list">
                    <label for="male">
                        <input type="radio" name="gender" id="male" value="1" v-model="gender">
                        <i></i>
                        <div>男</div>
                    </label>
                        <label for="female">
                        <input type="radio" name="gender" id="female" value="0" v-model="gender">
                        <i></i>
                        <div>女</div>
                    </label>
                </div>
            </div>
            <div class="city-box">
                <div class="key">所在城市</div>
                <div class="select-list">
                    <div @click="showProvince=true"><div id="province">{{province}}</div><i></i></div>
                    <div @click="showCity=true"><div id="city">{{city}}</div><i></i></div>
                </div>
            </div>
            <div class="radio-box">
                <div class="key">目前职业</div>
                <div class="radio-list radio-list3">
                    <label for="full-time">
                        <input type="radio" name="job" id="full-time" value="0" v-model="job">
                        <i></i>
                        <div>全职</div>
                    </label>
                        <label for="part-time">
                        <input type="radio" name="job" id="part-time"  value="1" v-model="job">
                        <i></i>
                        <div>兼职</div>
                    </label>
                </div>
            </div>
        </div>
        <button class="next-btn" @click="nextStep">下一步</button>
        <!-- 选择省份的弹出框 -->
        <div transfer-dom>
            <popup v-model="showProvince" position="bottom" height="50%">
                <group>
                    <cell v-for="(item,index) in provinceList" :key="index" :title="item.name" @click.native="selectProvince(item)"></cell>
                </group>
            </popup>
        </div>
        <!-- 选择城市的弹出框 -->
        <div transfer-dom>
            <popup v-model="showCity" position="bottom" height="50%">
                <group>
                    <cell v-for="(item,index) in cityList" :key="index" :title="item.name" @click.native="selectCity(item)"></cell>
                </group>
            </popup>
        </div>
    </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex'
export default {
    data () {
        return {
            gender: '1',
            job: '0',
            province : "选择省",
            city : "选择市",
            showProvince : false,
            showCity : false,
            provinceList : global.PROVINCE_LIST,
            cityList : global.CITY_LIST['0'],

            masterName: "",
            masterPhone: "",
            masterQQ: "",
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
                this.masterName = this.masterInfo.real_name;
                this.masterPhone = this.masterInfo.phone;
                this.masterQQ = this.masterInfo.qq;
                this.gender = this.masterInfo.sex_data;
                this.province = this.masterInfo.province_from;
                this.city = this.masterInfo.city_from;
                this.job = this.masterInfo.career_data;
            }
        },
        selectProvince : function (item) {
            this.province = item.name;
            this.cityList = global.CITY_LIST[item.id];
            this.showProvince = false;
        },
        selectCity : function (item) {
            this.city = item.name;
            this.showCity = false;
        },
        nextStep : function () {
            // 检查名字
            if(!this.$utils.checkName(this.masterName,this)){
                return;
            }
            // 检查手机号
            if(!this.$utils.checkPhone(this.masterPhone,this)){
                return;
            }
            // 检查qq号
            if(!this.$utils.checkQQ(this.masterQQ,this)){
                return;
            }
            let masterInfoTmp = this.masterInfo;
            if(masterInfoTmp === null) {
                masterInfoTmp  = {};
            }
            masterInfoTmp.real_name = this.masterName;
            masterInfoTmp.phone = this.masterPhone;
            masterInfoTmp.qq = this.masterQQ;
            masterInfoTmp.sex_data = this.gender;
            masterInfoTmp.province_from = this.province;
            masterInfoTmp.city_from = this.city;
            masterInfoTmp.career_data = this.job;
            this.updateMasterInfo(masterInfoTmp);
            this.$jump('/main/mine/recruitment/recruitmentStep2')
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
                width: 14px;
                height: 14px;
                line-height: 14px;
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
        .form-item{
            .flex-between();
            margin-bottom: 24/75rem;
            .form-input{
                width: 330/75rem;
                height: 60/75rem;
                line-height: 60/75rem;
                padding-left: 24/75rem;
                .border-box();
                .my-input();
                border-bottom: 1px solid rgba(204,204,204,1);
            }
        }
        .key{
            font-size: 32/75rem;
        }
        .radio-box,.city-box{
            .flex-start();
            margin-top: 30/75rem;
            margin-bottom: 30/75rem;
            .radio-list{
                .flex-start();
                margin-left: 70/75rem;
                font-size: 28/75rem;
                label{
                    .flex-start();
                    margin-right: 58/75rem;
                    & > i{
                        display: block;
                        width: 10px;
                        height: 10px;
                        margin-right: 32/75rem;
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
            .radio-list3{
                margin-left: 50/75rem;
            }
            .select-list{
                .flex-start();
                & > div{
                    .flex-start();
                    margin-left: 50/75rem;
                    & > i{
                        display: inline-block;
                        width: 22/75rem;
                        height: 12/75rem;
                        margin-left: 11/75rem;
                        margin-top: 8/75rem;
                        background: url('../assets/image/common/select@2x.png') no-repeat center center / 100% 100%;
                    }
                }
            }
        }
    }
    .next-btn{
        display: block;
        width: 320/75rem;
        height: 80/75rem;
        margin: 0 auto;
        .my-button();
        .round(35/75rem);
        background: @baseBoldColor;
        font-size: 34/75rem;
    }
}
</style>


