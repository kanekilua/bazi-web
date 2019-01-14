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
        </div>
        <div class="user-manage" v-if="userList.length > 0">
            <v-title-nav>
                用户管理
            </v-title-nav>
            <div class="user-list">
                <div class="user-item" v-for="(item,index) in userList" :key="index">
                    <img :src="item.avantaUrl" class="avanta">
                    <div class="user-message">
                        <div class="name"><span class="title">姓名：</span>{{item.name}}</div>
                        <div class="birthday"><span class="title">生辰：</span>{{item.dateArr[0]}}年{{item.dateArr[1]}}月{{item.dateArr[2]}}日 {{item.dateArr[3]}}点</div>
                    </div>
                    <button class="switch-btn" @click="selectUser(item,index)">开始测算</button>
                </div>
            </div>
        </div>
        <div class="article">
            <v-title-nav>
                相关文章
            </v-title-nav>
            <div class="hItem" v-for="(item,index) in article" :key="index" @click="jumpArticle(item)">
                <h2>{{item.title}}</h2><i></i>
            </div>
        </div>
    </div>
</template>
<script>
import { dateFormat } from 'vux'
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
            userList: []
        }
    },
    created() {
        this.init();
    },
    methods: {
        init : function () {
            let app_peach_data = localStorage.getItem(global.APP_PEACH_DATA);
            if(app_peach_data != undefined) {
                this.userList = JSON.parse(app_peach_data);
            }
        },
        showDatePlugin : function () {
            this.$vux.datetime.show({
                ...global.DATETIME_OPTION,
                endDate :  dateFormat(new Date(), 'YYYY-MM-DD'),
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
                    this.birthDate = this.dateArray[0] + '年' + this.dateArray[1] + '月' + this.dateArray[2] + '日' + ' ' + this.dateArray[3] + '点' + this.dateArray[4] + '分';
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
            // 友盟埋点
            MobclickAgent.onEventWithParameters('cesuan', {'type' : 'peachBlossoms'});

            let peachData = {
                'name' : this.userName,
                'gender' : this.gender,
                'dateArr' : this.dateArray,
                'avantaUrl' : this.gender === '1' ? require('../assets/image/common/man.png') : require('../assets/image/common/woman.png')
            }
            let appPeachData = [];
            // 判断localStorage中是否有global.APP_PEACH_DATA，有的话取出来
            if(localStorage.hasOwnProperty(global.APP_PEACH_DATA)) {
                appPeachData = JSON.parse(localStorage.getItem(global.APP_PEACH_DATA));
            }
            // 判断localStorage中的global.APP_PEACH_DATA的长度是否等于最大值，是的话删除最后一个元素
            if(appPeachData.length === global.APP_BAZI_DATA_MAX){
                appPeachData.splice(global.APP_BAZI_DATA_MAX-1,1);
            }
            appPeachData.unshift(peachData);
            localStorage.setItem(global.APP_PEACH_DATA,JSON.stringify(appPeachData));
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
        },
        selectUser : function (item,index) {
            let app_peach_data = JSON.parse(localStorage.getItem(global.APP_PEACH_DATA));
            // 删除掉点击的item，再在数组的首部添加item -> 将item移至首位的操作
            app_peach_data.splice(index,1);
            app_peach_data.unshift(item);
            localStorage.setItem(global.APP_PEACH_DATA,JSON.stringify(app_peach_data));
            this.$router.push({
                name: 'peachBlossom',
                query: {
                    cid: '101',
                    y : item.dateArr[0],
                    m : item.dateArr[1],
                    d : item.dateArr[2],
                    h : item.dateArr[3],
                }
            })
        },
        jumpArticle : function (article) {
            this.$router.push({
                name : 'article',
                query : {
                    cid : '95',
                    id : article.id
                }
            })
        }
    }
}
</script>
<style lang="less" scoped>
.content-wrap{
    width: 100%;
    padding-bottom: 24/75rem;
    .border-box();
    background: url('../assets/image/love/love-blossoms-bg@2x.png') no-repeat center center / 100% 100%;
    .title-img{
        display: block;
        margin: 35/75rem auto;
        width: 408/75rem;
        height: 168/75rem;
        padding-right: 50/75rem;
    }
    .name-input{
        display: block;
        width: 556/75rem;
        height: 80/75rem;
        margin: 0 auto;
        .round(10/75rem);
        border: none;
        outline: none;
        padding-left: 32/75rem;
        font-size: 30/75rem;
    }
    ::-webkit-input-placeholder { /* WebKit browsers */
        color:    rgba(240,155,178,0.7);
    }
    :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
        color:    rgba(240,155,178,0.7);
    }
    ::-moz-placeholder { /* Mozilla Firefox 19+ */
        color:    rgba(240,155,178,0.7);
    }
    :-ms-input-placeholder { /* Internet Explorer 10+ */
        color:    rgba(240,155,178,0.7);
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
        width: 368/75rem;
        height: 90/75rem;  
        display: block;
        margin: 74/75rem auto 85/75rem auto;
        .round(75/75rem);
        background:#EB87A8;
        color: #fff;
        font-size: 34/75rem;
        border: none;
        outline: none;
        &:active{
            background: #eee;
        }
    }
    
}
.user-manage {
    .user-list{
        width: 100%;
        .user-item{
            padding-top: 0;
            padding: 32/75rem 42/75rem 27/75rem 38/75rem;
            border-bottom: 1px solid rgba(241,241,241,1);
            .flex-between();
            .avanta{
                width: 100/75rem;
                height: 100/75rem;
                .round(50%);
            }
            .user-message { 
                margin-right: 100/75rem;
                .name{
                    margin-bottom: 24/75rem;
                }
                .title{
                    font-weight: bold;
                    color: rgba(0,0,0,0.8)
                }
            }
            .switch-btn{
                width: 122/75rem;
                height: 45/75rem;
                background: #fff;
                color: @baseBoldColor;
                border: none;
                .round(10/75rem);
                .boxshadow(0,0,8/75rem,rgba(0,0,0,0.2));
                outline: none;
                &:active{
                    background: @baseBoldColor;
                    color: #fff;
                }
            }
        }
    }  
}   
.article {
    .hItem:nth-child(2) {
        margin-top: 0;
    }
    .hItem{
        .flex-between();
        margin: 30/75rem 42/75rem 32/75rem 32/75rem;
        & > h2{
            font-size: 28/75rem;
            font-weight: normal;
        }
        & > i{
            display: inline-block;
            width: 13/75rem;
            height: 25/75rem;
            background: url("../assets/image/common/more.png") no-repeat center center / 100% 100%;
        }
    }
}
</style>


