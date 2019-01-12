<template>
    <div class="wrap">
        <v-title-header>
            联系客服
        </v-title-header>
        <div class="content-wrap">
            <div class="wechat-box">
                <img class="wechat-code" src="../assets/image/common/wechat-code.png">
                <div>扫码添加客服微信</div>
                <div>或手动添加Ken70007</div>
            </div>
            <v-title-nav>客户留言</v-title-nav>
            <textarea placeholder="请输入您的问题，客服将会尽快为你解答" v-model="message"></textarea>
            <button class="conmit" @click="sendMessage">确认提交</button>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            message : ""
        }
    },
    methods: {
        sendMessage : function () {
            let header = {
                'Authorization' : localStorage.getItem(global.APP_TOKEN)
            }
            let data = {
                info : this.message
            }
            this.$http.post('/features/comm',data,null,header,(res) => {
                if(res.code === "success") {
                    this.$vux.toast.show({
                        width : '15em',
                        text: '提交成功',
                        position : 'center',
                        time : 1500,
                        type : "success",
                        isShowMask : true
                    });
                    setTimeout(() => {
                        this.$jump('/main/mine');
                    },1500)
                }
            },this.failure);
        }
    }
}
</script>
<style lang="less" scoped>
.content-wrap{
    padding-top: 90/75rem;
    .border-box();
    .wechat{
        .flex-start();
        width: 100%;
        height: 90/75rem;
        line-height: 90/75rem;
        .boxshadow(0,3/75rem,6/75rem,rgba(0,0,0,0.16));
        .round(26/75rem);
        font-size: 26/75rem;
        .wechat-key{
            margin: 0 40/75rem;
        }
    }
    .wechat-box{
        text-align: center;
        .wechat-code{
            display: block;
            width: 205/75rem;
            height: 205/75rem;
            margin: 40/75rem auto 24/75rem auto; 
            & + div{
                text-align: center;
                font-size: 26/75rem;
            }
        }
    }
    textarea{
        overflow: hidden;
        display: block;
        width: 670/75rem;
        height: 276/75rem;
        margin: 17/75rem auto;
        .boxshadow(0,3/75rem,6/75rem,rgba(0,0,0,0.16));
        .round(26/75rem);
        resize: none;
        border: none;
        padding: 20/75rem;
        .border-box();
        outline: none;
        background: #f1f1f1;
        font-size: 26/75rem;
    }
    .conmit{
        width: 640/75rem;
        height: 80/75rem;
        display: block;
        margin: 75/75rem auto;
        background:@baseBoldColor;
        .round(60/75rem);
        border: none;
        color: #fff;
        font-size: 34/75rem;
        outline: none;
        &:active{
            background: #eee;
        }
    }
}

</style>