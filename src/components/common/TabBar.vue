<template>
    <div class="tab-bar">
        <div class="tab-bar-list">
            <div class="tab-bar-item" v-for="(tab,index) in tabs" :key="index" @click="jumpRoute(tab)">
                <img :src="isSelect === tab.route ? tab.icoUrlActive : tab.icoUrl" class="ico master-ico" :class="setClass(index)">
                <div class="tab-title"  :class="isSelect === tab.route ? 'active-name' : ''">{{tab.name}}</div>    
            </div>        
        </div>
    </div>    
</template>

<script>
import {mapState} from 'vuex'
export default {
    computed : {
        ...mapState (['loginAccount']),
        'isSelect' () {
            return this.$route.path;
        }
    },
    data() {
        return {
            tabs: [
                {
                    icoUrl: require("../../assets/image/tab-bar/home.png"),
                    icoUrlActive: require("../../assets/image/tab-bar/home-active.png"),
                    name: "首页",
                    route: "/main/home"
                },
                {
                    icoUrl:  require("../../assets/image/tab-bar/fortune.png"),
                    icoUrlActive: require("../../assets/image/tab-bar/fortune-active.png"),
                    name: "运势",
                    route: "/main/fortune"
                },
                {
                    icoUrl:  require("../../assets/image/tab-bar/2019.png"),
                    icoUrlActive: require("../../assets/image/tab-bar/2019-active.png"),
                    name: "2019",
                    route: "/main/activity"
                },
                {
                    icoUrl:  require("../../assets/image/tab-bar/calendar.png"),
                    icoUrlActive: require("../../assets/image/tab-bar/calendar-active.png"),
                    name: "黄历",
                    route: "/main/calendar"
                },
                {
                    icoUrl:  require("../../assets/image/tab-bar/mine.png"),
                    icoUrlActive: require("../../assets/image/tab-bar/mine-active.png"),
                    name: "我的",
                    route: "/main/mine"                    
                }
            ]
        }
    },
    methods: {
        // 动态赋值class,目的是为每个ico设置具体的样式
        setClass(index) {
            let obj = {tabIco: true}
            obj[`tabIco${index+1}`] = true
            return obj
        },
        jumpRoute(tab) {
            // if(tab.name === "运势" && this.loginAccount === "") {
            //     this.$vux.toast.text('请先登录','top');
            //     return ;
            // }else {
                this.$jump(tab.route);
            // }
        }
    }
}
</script>

<style lang="less">
.active-name{
    color: @baseBoldColor;
}
.tab-bar{
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 10;
    background: #fff;
    border-top: 1px solid rgba(112,112,112,0.1);
    .tab-bar-list{
        width: 100%;
        height: 110/75rem;
        .flex-around();
        .tab-bar-item{
            .flex(1);
            .flex-col();
            & > img{
                margin-bottom: 8/75rem;
            }
            .tabIco1{
                width: 59/75rem;
                height: 53/75rem;
            }
            .tabIco2 {
                width: 56/75rem;
                height: 51/75rem;
            }
            .tabIco3{
                width: 52/75rem;
                height: 52/75rem;
            }
            .tabIco4 {
                width: 54/75rem;
                height: 53/75rem;
            }
            .tabIco5 {
                width: 47/75rem;
                height: 50/75rem;
            }
        }
    }
}
</style>
