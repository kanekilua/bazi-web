<template>
    <div class="bazi-birth-wrap">
        <v-title-header :title='headerTitle'></v-title-header>
        <div class="birth-form">
            <h2 class="form-title">生辰八字</h2>
            <input type="text" class="input-name" placeholder="请输入您的姓名" v-model="name">
            <div class="gender">
                <div class="male">
                    <input type="radio" id="male" name='gender' checked>
                    <label for="male"></label>
                    <div class="gender-txt">男</div>
                </div>
                <div class="female">
                    <input type="radio" id="female" name='gender'>
                    <label for="female"></label>
                    <div  class="gender-txt">女</div>
                </div>
            </div>
            <div class="birthPlace">
                出生地点：
                <span @click="showProvince=true"><span id="province">{{province}}</span><i></i></span>
                <span @click="showCity=true"><span id="city">{{city}}</span><i></i></span>
            </div>
            <div class="dateType">
                日期类型：
                <div class="gregorian">
                    <input type="radio" id="gregorian" name='dateType' checked>
                    <label for="gregorian"></label>
                    <div class="date-txt">公历</div>
                </div>
                <div class="lunar">
                    <input type="radio" id="lunar" name='dateType'>
                    <label for="lunar"></label>
                    <div  class="date-txt">农历</div>
                </div>
            </div>
            <input id="dateInput" type="text" class="input-born" placeholder="请选择您的出生日期" @click="showDatePlugin" readonly="readonly" v-model="birthDate">
            <x-button :gradients="[gradientStart, gradientEnd]" id="save-confirm">确认保存</x-button>

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
    </div>
</template>
<script>
export default  {
    data () {
        return  {
            name : "",
            headerTitle : '生辰八字',
            gradientStart : global.GRADIENT_START,
            gradientEnd : global.GRADIENT_END,
            birthDate : "",
            province : "忽略",
            provinceId : 0,
            city : "忽略",
            provinceList : global.PROVINCE_LIST,
            cityList : global.CITY_LIST['0'],
            showProvince : false,
            showCity : false
        }
    },
    methods : {
        showDatePlugin : function () {
            this.$vux.datetime.show({
                cancelText: '取消',
                confirmText: '确定',
                format: 'YYYY年M月D日 H点',
                value: '2017-05-20 18',
                onConfirm:(val) => {
                    this.birthDate = val;
                }
            })
        },
        selectProvince : function (item) {
            this.province = item.name;
            this.provinceId = item.id;
            this.cityList = global.CITY_LIST[this.provinceId];
            this.showProvince = false;
        },
        selectCity : function (item) {
            this.city = item.name;
            this.showCity = false;
        }
    }
}
</script>
<style lang="less" scoped>
.bazi-birth-wrap {
    .birth-form{
        width: 640/75rem;
        height: 847/75rem;
        margin: 24/75rem auto 0 auto;
        box-sizing: border-box;
        padding: 50/75rem;
        .round(50/75rem);
        background: #fff;
        box-shadow: 0 10/75rem 10/75rem #eee;
    }
    .form-title{
        font-size: 32/75rem;
        margin-bottom: 57/75rem;
    }
    .input-name, .input-born{
        width: 100%;
        height: 65/75rem;
        line-height: 65/75rem;
        padding-left: 15/75rem;
        border: none;
        border-bottom: 1px solid #eee; 
        font-weight: 400;
        font-size: 34/75rem;
        font-weight:400;
        color:rgba(0,0,0,1);
        outline: none;
    }
    .input-born{
        margin-bottom: 80/75rem;
    }
    .gender{
        .flex-between();
        width: 80%;
        margin: 40/75rem;
        font-size: 34/75rem;
        .male,.female{
            .flex-start();
        }
        input[type="radio"]{
            display: none;
        }
        input[type="radio"] + label{
            width: 44/75rem;
            height: 44/75rem;
            .round(50%);
            margin-right: 40/75rem;
            border: 1px solid #eee;
        }
        input[id="male"]:checked  + label{
           background: url('../assets/image/birth/man.png') no-repeat center center / 100% 80%;
           & + div{
                color:rgba(0,0,0,1);
                opacity:0.8;
           }
        }
        input[id="female"]:checked  + label{
           background: url('../assets/image/birth/woman.png') no-repeat center center / 40% 100%;
           & + div{
                color:rgba(0,0,0,1);
                opacity:0.8;
           }
        }
        .gender-txt{
            color:rgba(0,0,0,1);
                opacity:0.2;
        }
    }
    .birthPlace {
        font-size: 34/75rem;
        padding-left: 7.5/75rem;
        color:@inputColor;
        #city {
            margin-left: 30/75rem;
        }
        & > span > i {
            display: inline-block;
            width: 22/75rem;
            height: 22/75rem;
            margin-left: 24/75rem;
            background: url('../assets/image/bazi-birth/unfold.png') no-repeat center center / 100% 100%;
        }
    }
    .birthType {
        margin-top: 28/75rem;
        font-size: 34/75rem;
        padding-left: 7.5/75rem;
        color:@inputColor;
    }
    .dateType {
        .flex-start();
        margin-top: 28/75rem;
        font-size: 34/75rem;
        padding-left: 7.5/75rem;
        color:@inputColor;
        .gregorian{
            .flex-start();
        }
        .lunar {
            .flex-start();
            margin-left: 55/75rem;
        }
        input[type="radio"]{
            display: none;
        }
        input[type="radio"] + label{
            width: 22/75rem;
            height: 22/75rem;
            .round(50%);
            margin-right: 26/75rem;
            border: 1px solid #eee;
        }
        input[name="dateType"]:checked  + label{
            background-color: @baseColor;
           & + div{
                color:rgba(0,0,0,1);
                opacity:0.8;
           }
        }
    }
    #dateInput {
        margin-top: 28/75rem;
    }
    #save-confirm{
        width: 504/75rem;
        height: 90/75rem;
        border-radius: 40/75rem;
        font-size: 28/75rem;
    }
}
</style>

