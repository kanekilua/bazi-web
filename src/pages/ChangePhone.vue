<template>
    <div class="wrap">
        <v-header></v-header>
        <v-title-header>
            手机号
        </v-title-header>
        <div class="content-wrap">
            <img class="phone-ico" src="../assets/image/mine/phone-pic.png">
            <div class="list">
                <div class="item">
                    <div class="left">
                        绑定的手机号
                    </div>
                    <div class="right">{{userPhone}}</div>
                </div>
                <div class="middle-item">
                    <div class="left-cell">
                        <i></i>
                        <div>+86</div>
                    </div>
                    <div class="right-cell">
                        <input type="text" :value="userPhone">
                    </div>
                </div>
                <div class="item">
                    <div class="left">
                        <input type="text" placeholder="请输入您的验证码">
                    </div>
                    <div class="right">获取验证码</div>
                </div>
                <button class="confirm">确认绑定</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            userPhone: "1371234555"
        }
    }
}
</script>
<style lang="less" scoped>
.cell{
    .flex-between();
    .round(30/75rem);
    padding: 0 40/75rem;
    .border-box();
    .boxshadow(0,3/75rem,6/75rem,rgba(5, 0, 0, 0.16));
    margin: 0 auto 32/75rem auto;
    font-size: 26/75rem;
}
.content-wrap{
    position: absolute;
    top: 169/75rem;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: auto;
    .phone-ico{
        display: block;
        width: 238/75rem;
        height: 216/75rem;
        margin: 80/75rem auto;
    }
    .list{
        .item{
            width: 96%;
            height: 90/75rem;
            .cell();
            input{
                border: none;
                outline: none;
            }
            .right{
                height: 100%;
                font-size: 26/75rem;
                .flex-center();
            }
        }
        .middle-item{
            width: 96%;
            height: 90/75rem;
            .flex-between;
            margin: 0 auto 32/75rem auto;
            .left-cell{
                width: 195/75rem;
                height: 100%;
                .cell();
                margin: 0;
                & > i{
                    display: inline-block;
                    width: 28/75rem;
                    height: 44/75rem;
                    background: url('../assets/image/mine/phone-ico.png') no-repeat center center / 100% 100%;
                }
                & > div{
                    font-size: 26/75rem;
                }
            }
            .right-cell{
                width: 483/75rem;
                height: 100%;
                .cell();
                margin: 0;
                & > input{
                    width: 70%;
                    .my-input();
                    margin-left: 20/75rem;
                }
            }
        }
    }
    .confirm{
        width: 500/75rem;
        height: 100/75rem;
        .my-button();
        background: @baseColor;
        display: block;
        margin: 70/75rem auto;
        .round(30/75rem);
        color: #fff;
    }
}
</style>

