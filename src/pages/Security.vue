<template>
    <div class="wrap">
        <v-header></v-header>
        <v-title-header>
            账户与安全
        </v-title-header>
        <div class="content-wrap">
            <div class="list">
                <div class="item" @click="$jump('/main/mine/setting/security/changePhone')">
                    <div class="left">
                        <div>手机号</div>
                    </div>
                    <div class="right">
                        <div class="right-item">{{userPhone}}</div>
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
            userPhone: "1371234555"
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
        margin-top: 32/75rem;
        .item{
            .flex-between();
            .round(30/75rem);
            padding: 32/75rem 23/75rem;
            .border-box();
            .boxshadow(0,3/75rem,6/75rem,rgba(5, 0, 0, 0.16));
            width: 96%;
            margin: 0 auto 32/75rem auto;
            font-size: 26/75rem;
            .right{
                .flex-around();
                .right-item{
                    .flex-col();
                    margin-right: 20/75rem;
                    font-size: 26/75rem;
                }
                .right-ico{
                    display: block;
                    width: 44/75rem;
                    height: 44/75rem;
                    background: url(../assets/image/common/right@2x.png) no-repeat center center / 100% 100%;
                }
            }
        }
    }
}
</style>

