<template>
    <div class="wrap">
        <v-active-header>桃花运</v-active-header>
        <v-title-header>桃花运</v-title-header>
        <div class="content-wrap">
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
            <input id="dateInput" type="text" class="name-input input-born" placeholder="请选择您的出生日期" @click="showDatePlugin" readonly="readonly" v-model="birthDate">
            <button class="begin-test">开始测算</button>
            <div class="user-manage">
                <div class="title-nav">
                    <div class="nav-left">
                        <div class="color-line"></div>
                        <div class="title">用户管理</div>
                    </div>
                </div>
                <div class="user-list">
                    <div class="user-item" v-for="(item,index) in userList" :key="index">
                        <img :src="item.avatarUrl" class="avatar">
                        <div class="user-message">
                            <div class="name"><span class="title">姓名：</span>{{item.name}}</div>
                            <div class="birthday"><span class="title">生辰：</span>{{item.year}}年{{item.month}}月{{item.date}}日 {{item.hour}}点</div>
                        </div>
                        <button class="switch-btn">切换用户</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return{
            birthDate : "",
            dateType : "1",
            dateArray : [],
            userList: [
                {
                    avatarUrl: require('../assets/image/bazi/master-img@2x.png'),
                    name: "杨海彬",
                    year: 1996,
                    month: 1,
                    date: 6,
                    hour: 10,
                },
                {
                    avatarUrl: require('../assets/image/bazi/master-img@2x.png'),
                    name: "杨海彬",
                    year: 1996,
                    month: 1,
                    date: 6,
                    hour: 10,
                },
            ]
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
    }
}
</script>
<style lang="less" scoped>
.content-wrap{
    // position: absolute;
    // top: 250/75rem;
    // bottom: 0;
    // left: 0;
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
            color: #EB87A8;
            font-size: 28/75rem;
        }
        input[type="radio"]:checked + label{
            background: #EB87A8;
            color: #fff;
        }
    }
    .begin-test{
        width: 518/75rem;
        height: 116/75rem;
        display: block;
        margin: 74/75rem auto 85/75rem auto;
        .round(36/75rem);
        background:#EB87A8;
        color: #fff;
        font-size: 28/75rem;
    }
    .user-manage {
        .title-nav{
            margin-left: 38/75rem;
        }
        .title-nav{
            .flex-between();
            .nav-left{
                padding: 18/75rem 0;
                .flex-start();
                .color-line{
                    width: 9/75rem;
                    height: 37/75rem;
                    background: #EB87A8;
                    .round(5/75rem);
                    margin-right: 32/75rem;
                }
                .title{
                    font-size: 20/75rem;
                }
            }
        }
        .user-list{
            .user-item{
                padding: 32/75rem 42/75rem 27/75rem 38/75rem;
                border-bottom: 1px solid rgba(112,112,112,0.35);
                .flex-between();
                .avatar{
                    width: 88/75rem;
                    height: 88/75rem;
                    .round(50%);
                }
                .name{
                    margin-bottom: 24/75rem;
                }
                .title{
                    font-weight: bold;
                    color: rgba(0,0,0,0.8)
                }
                .switch-btn{
                    width: 122/75rem;
                    height: 45/75rem;
                }
            }
            
        }      
    }   
}
</style>


