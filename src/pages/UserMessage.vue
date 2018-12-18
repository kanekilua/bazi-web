<template>
    <div class="wrap">
        <v-header></v-header>
        <v-title-header>
            消息
        </v-title-header>
        <div class="content-wrap">
            <div class="list">
                <div class="item" v-for="(item,index) in List" :key="index" @click="$jump(item.route)">
                    <div class="left">
                        <img :src="item.avatar">
                        <div class="user-msg">
                            <div class="messager">{{item.messager}}</div>
                            <div class="message-type">{{item.type}}</div>
                        </div>
                    </div>
                    <div class="right">{{item.time}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            List: [
                {avatar: require('../assets/image/common/system.png'),messager:"系统提示消息",type: "短信消息",time: '8-5'},
                {avatar: require('../assets/image/common/system.png'),messager:"系统提示消息",type: "短信消息",time: '8-5'}
            ],
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
    overflow: auto;
    .list{
        .item{
            padding: 32/75rem 40/75rem 16/75rem 32/75rem;
            border-bottom: 1px solid rgba(0,0,0,0.1);
            .border-box();
            .left{
                .flex-start-only();
                font-size: 26/75rem;
                & > img{
                    width: 88/75rem;
                    height: 88/75rem;
                    .round(50%);
                    margin-right: 40/75rem;
                }
                .messager{
                    margin-bottom: 12/75rem;
                    margin-top: 5/75rem;
                }
            }
            .right{
                text-align: right;
                margin-top: -20/75rem;
            }
        }
    }
}
</style>

