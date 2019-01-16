<template>
    <div class="wrap">
        <v-title-header>
            账户与安全
        </v-title-header>
        <div class="content-wrap">
            <div class="list">
                <div class="item" @click="$jump('/main/mine/setting/security/changePhone') ">
                    <div class="left">
                        <div>绑定手机号</div>
                    </div>
                    <div class="right">
                        <div class="right-item">{{bindFlag ? userPhone + '(已绑定)' : ''}}</div>
                        <i class="right-ico"></i>
                    </div>
                </div>
                <div class="item" @click="$jump('/resetPwd')">
                    <div class="left">
                        <div>修改密码</div>
                    </div>
                    <div class="right">
                        <div class="right-item"></div>
                        <i class="right-ico"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            userPhone: "",
            bindFlag : false
        }
    },
    created() {
        this.init();
    },
    methods: {
        init : function () {
            this.userPhone = this.$store.state.loginAccountInfo.phone;
            if(this.userPhone !== "") {
                this.bindFlag = true
            }
        }
    },
}
</script>
<style lang="less" scoped>
.wrap{
    width: 100%;
    height: 100%;
    background: #f1f1f1;
    .content-wrap{
        padding-top: 90/75rem;
        .border-box();
        .list{
            margin-top: 10/75rem;
            .item{
            .flex-between();
                    padding: 32/75rem 23/75rem;
                    .border-box();
                    width: 100%;
                    height: 100/75rem;
                    margin: 0 auto 10/75rem auto;
                    font-size: 30/75rem;
                    background: #fff;
                .right{
                    .flex-around();
                    .right-item{
                        .flex-col();
                        margin-right: 20/75rem;
                        font-size: 26/75rem;
                    }
                    .right-ico{
                        display: block;
                        width: 20/75rem;
                        height: 32/75rem;
                        background: url(../assets/image/common/right@2x.png) no-repeat center center / 100% 100%;
                    }
                }
            }
        }
    }
}

</style>

