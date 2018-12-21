<template>
    <div class="content">
        <div class="step">
            <div class="step1 active">个人信息</div>
            <i class="step-ico1"></i>
            <div class="step2">专业相关</div>
            <i class="step-ico2"></i>
            <div class="step3">平台相关</div>
        </div>
        <div class="form">
            <div class="form-item">
                <div class="key">真实姓名</div>
                <input type="text" class="form-input" v-model="masterName" placeholder="与身份证上一致">
            </div>
            <div class="form-item">
                <div class="key">手机号码</div>
                <input type="text"  class="form-input" v-model="masterPhone" placeholder="请填写您的手机号码">
            </div>
            <div class="form-item">
                <div class="key">QQ号码</div>
                <input type="text" class="form-input" v-model="masterQQ" placeholder="1945192493">
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
                        <input type="radio" name="job" id="full-time" value="1" v-model="job">
                        <i></i>
                        <div>全职</div>
                    </label>
                        <label for="part-time">
                        <input type="radio" name="job" id="part-time"  value="0" v-model="job">
                        <i></i>
                        <div>兼职</div>
                    </label>
                </div>
            </div>
            <button class="next-btn" @click="nextStep">下一步</button>
        </div>
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
export default {
    data () {
        return {
            gender: '1',
            job: '1',
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
    methods: {
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
            this.$jump('/main/mine/recruitment/recruitmentStep2')
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
        .active{
            background: @baseColor;
        }
    }
    .form{
        padding: 50/75rem;
        font-size: 26/75rem;
        .border-box();
        .form-item{
            width: 100%;
            .flex-between();
            margin-bottom: 24/75rem;
            .form-input{
                width: 78%;
                height: 60/75rem;
                line-height: 60/75rem;
                padding-left: 24/75rem;
                .border-box();
                .my-input();
                .round(11/75rem);
                .boxshadow(0,3/75rem,6/75rem,rgba(0,0,0,0.16));
            }
        }
        .radio-box,.city-box{
            .flex-start();
            margin-top: 50/75rem;
            margin-bottom: 66/75rem;
            .radio-list{
                .flex-start();
                margin-left: 93/75rem;
                label{
                    .flex-start();
                    margin-right: 58/75rem;
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
            .radio-list3{
                margin-left: 48/75rem;
            }
            .select-list{
                .flex-start();
                & > div{
                    .flex-start();
                    margin: 0 52/75rem;
                    & > i{
                        display: inline-block;
                        width: 22/75rem;
                        height: 22/75rem;
                        margin-left: 32/75rem;
                        margin-top: 8/75rem;
                        background: url('../assets/image/common/select@2x.png') no-repeat center center / 100% 100%;
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
            .round(30/75rem);
            background: @baseColor;
        }
    }
}
</style>


