<template>
    <div class="wrap">
        <div class="content-wrap">
            <img src="../assets/image/love/love-blossoms@2x.png" class="title-img">
            <input type="text" class="name-input" placeholder="请输入您的姓名" placeholder-align="left" v-model="userName">
            <div class="check-box">
                <input type="radio" id="male" value="1" name="sex" v-model="gender">
                <label for="male">男</label>
                <input type="radio" id="female" value="0" name="sex" v-model="gender">
                <label for="female">女</label>
                <input type="radio" id="gongli" value="1" name="date" v-model="calendar">
                <label for="gongli">公历</label>
                <input type="radio" id="nongli" value="0" name="date" v-model="calendar">
                <label for="nongli">农历</label>
            </div>
            <input id="dateInput" type="text" class="name-input input-born" placeholder="请选择您的出生日期" @click="showDatePlugin" readonly="readonly" v-model="birthDate">
            <button class="begin-test" @click="beginTest">开始测算</button>
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
        <div class="article">
            <div class="nav">
                <div class="color-line"></div>
                <div class="title">桃花运文章</div>
            </div>
            <div class="hItem" v-for="(item,index) in article" :key="index">
                <h2>{{item}}</h2><i></i>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props : ['article'],
    data () {
        return{
            backLink: "/love",
            birthDate : "",
            userName: "",
            gender: "1",
            calendar: "1",
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
        beginTest: function () {
            // 检查名字
            if(!this.$utils.checkName(this.userName,this)){
                return;
            }
            if(this.dateArray.length === 0 || this.birthDate === '') {
                this.$vux.toast.text('请选择出生日期','top');
                return;
            }
            this.$router.push({
                name: 'peachBlossom',
                query: {
                    cid: '101',
                    y : this.dateArray[0],
                    m : this.dateArray[1],
                    d : this.dateArray[2],
                    h : this.dateArray[3],
                    // 测试数据
                    // y : '1975',
                    // m : '6',
                    // d : '30',
                    // h : '14',
                }
            })
        }
    }
}
</script>
<style lang="less" scoped>
.content-wrap{
    top: 169/75rem;
    bottom: 0;
    left: 0;
    width: 100%;
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
        border: none;
        outline: none;
        &:active{
            background: #eee;
        }
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
                    font-size: 28/75rem;
                }
            }
        }
        .user-list{
            width: 100%;
            .user-item{
                padding-top: 0;
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
                    background: #fff;
                    color: #000;
                    border: none;
                    .round(15/75rem;);
                    outline: none;
                    &:active{
                        background: #EB87A8;
                        color: #fff;
                    }
                }
            }
        }  
    }   
}
.article {
    margin-left : 21/75rem;
    margin-right: 27/75rem;
    & > .nav {
        margin-top: 29/75rem;
        margin-left: 16/75rem;
        .flex-start();
        & > .color-line {
            width: 9/75rem;
            height: 37/75rem;
            background-color: @baseColor;
            .round(5/75rem);
            margin-right:24/75rem;
        }
        & > .title {
            font-size: 28/75rem;
        }
    }
    .hItem{
        margin-top: 30/75rem;
        .flex-between();
        margin-bottom: 32/75rem;
        & > h2{
            font-size: 28/75rem;
            font-weight: normal;
        }
        & > i{
            display: inline-block;
            width: 44/75rem;
            height: 44/75rem;
            background: url("../assets/image/common/right@2x.png") no-repeat center center / 100% 100%;
        }
    }
}
</style>


