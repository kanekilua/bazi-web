<template>
    <div class="wrap">
        <v-header></v-header>
        <v-title-header :backLink="backLink">
            桃花运
            <div slot="icon" class="switchUser" @click="$jump('/baziBirth')"></div>
        </v-title-header>
        <div class="content-wrap">
            <div class="content">
                <div class="input-box">
                    <input type="text" class="name-input first-name" placeholder="请输入您的姓氏" placeholder-align="left">
                    <div class="select-btn" @click="ShowSelect">
                        <input v-model="selectValue" disabled>
                        <i></i>
                    </div>
                </div>
                <div class="select-box">
                    <div :class="showSelect? 'select': 'hideSelect'">
                        <div class="option"  @click="selectOption(1)">单</div>
                        <div class="option"  @click="selectOption(2)">双</div>
                    </div>
                </div>
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
                <input id="dateInput" type="text" class="name-input input-born" placeholder="请选择您的出生日期" @click="showDatePlugin" readonly="readonly" v-model="birthDate">
                <button class="begin-test" @click="$jump('/peachBlossom')">开始起名</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return{
            backLink: "/love",
            birthDate : "",
            dateType : "1",
            dateArray : [],
            showSelect: false,
            selectValue: "单/双",
        }
    },
    methods: {
        showDatePlugin : function () {
            this.$vux.datetime.show({
                cancelText: '取消',
                confirmText: '确定',
                format: 'YYYY-M-D-H',
                yearRow : '{value}年',
                monthRow : '{value}月',
                dayRow : '{value}日',
                hourRow : '{value}点',
                minYear: '1890',
                maxYear: '2090',
                
                onHide : (type) => {
                    if(type === 'cancel') {
                        this.birthDate = "";
                        this.dateArray = [];
                    }
                },
                onConfirm:(val) => {
                    // 点击确定，将年月日赋值给dateArray，将格式化的日期赋值给birthDate
                    let valArray = val.split('-');
                    for(let i=0;i<valArray.length ; ++i) {
                        this.dateArray[i] = parseInt(valArray[i]);
                    }
                    this.birthDate = this.dateArray[0] + '年' + this.dateArray[1] + '月' + this.dateArray[2] + '日' + ' ' + this.dateArray[3] + '点';
                }
            });
        },
        ShowSelect : function () {
            if(this.showSelect == false){
                this.showSelect = true;
            }else {
                this.showSelect = false;
            }
        },
        selectOption : function (e) {
            let val = e;
            setTimeout((e)=>{
                this.showSelect = false;
                if(val===1){
                    this.selectValue = '单'
                }else{
                    this.selectValue = '双'
                }
            },100)
        }
    }
}
</script>
<style lang="less" scoped>
.content-wrap{
    position: absolute;
    top: 169/75rem;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow-y: hidden;
    background: url('../assets/image/name/name-bg@2x.png') no-repeat center center / 100% 100%;
    .content{
        position: relative;
        margin-top: 254/75rem;
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
            font-size: 26/75rem;
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
                color: #5D728D;
                font-size: 28/75rem;
            }
            input[type="radio"]:checked + label{
                background: #5D728D;
                color: #fff;
            }
        }
        .begin-test{
            width: 518/75rem;
            height: 116/75rem;
            display: block;
            margin: 50/75rem auto 85/75rem auto;
            .round(36/75rem);
            background:#5D728D;
            color: #fff;
            font-size: 28/75rem;
            border: none;
            &:active{
                background: #eee;
            }
        }  
        .input-box{
            .flex-between();
            width: 500/75rem;
            margin: 0 auto;
            .first-name{
                width: 250/75rem;
                margin: 0;
            }
            .select-btn{
                width: 160/75rem;
                height: 80/75rem;
                line-height: 80/75rem;
                background: #fff;
                color: @inputColor;
                .round(40/75rem);
                text-align: center;
                & > i{
                    display: inline-block;
                    vertical-align: middle;
                    // margin-left: 22/75rem;
                    width: 22/75rem;
                    height: 22/75rem;
                    background: url('../assets/image/name/select-ico@2x.png') no-repeat center center / 100% 100%;
                }
                & > input {
                    width: 80/75rem;
                    background: none;
                    outline: none;
                    border: none;
                    text-align: center;
                }
            }
        }
        .select-box{
            position: relative;
            width: 500/75rem;
            margin: 0 auto;
            & > .select{
                position: absolute;
                right: 0;
                top: 00/75rem;
                color: #000;
                background: #fff;
                width: 160/75rem;
                .round(10/75rem);
                .option{
                    color: #000!important;
                    padding-left: 20/75rem;
                    height: 50/75rem;
                    line-height: 50/75rem;
                    border-bottom:  1px solid #eee;
                }
                .option:hover{
                    background: #5D728D;
                }
            }
            .hideSelect{
                display: none;
            }
        }
    }
}
</style>


