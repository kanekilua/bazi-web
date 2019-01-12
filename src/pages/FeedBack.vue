<template>
    <div class="wrap">
        <v-title-header>
            意见反馈
        </v-title-header>
        <div class="content-wrap">
            <v-title-nav>反馈类型</v-title-nav>
            <div class="check-list">
                <label for="check1">
                    <input type="checkbox" id="check1" value='0' v-model="checkList">
                    <div>服务态度差</div>
                </label>
                <label for="check2">
                    <input type="checkbox" id="check2" value='1' v-model="checkList">
                    <div>回复慢</div>
                </label>
                <label for="check4">
                    <input type="checkbox" id="check4" value='2' v-model="checkList">
                    <div>联系不上</div>
                </label>
                <label for="check5">
                    <input type="checkbox" id="check5" value='3' v-model="checkList">
                    <div>性价比低</div>
                </label>
                <label for="check6">
                    <input type="checkbox" id="check6" value='4' v-model="checkList">
                    <div>不够专业</div>
                </label>
                <label for="check7">
                    <input type="checkbox" id="check7" value='5' v-model="checkList">
                    <div>其他</div>
                </label>
            </div>
            <v-title-nav>提出建议</v-title-nav>
            <textarea placeholder="简要描述你要反馈的问题和意见" v-model="message"></textarea>
            <button class="conmit" @click="submit">确认提交</button>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            checkList: ['0'],
            message : ''
        }
    },
    methods: {
        submit : function () {
            let checkStr = '';
            for(let item of this.checkList) {
                checkStr += item + ',';
            }
            checkStr = checkStr.substring(0,checkStr.length - 1);
            let postData = {
                type_data : checkStr,
                info : this.message
            }
            let header = {
                'Authorization' : localStorage.getItem(global.APP_TOKEN)
            }
            this.$http.post('/features/opin',postData,null,header,(res) => {
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
    .border-box();
    .check-list{
        .flex-around();
        flex-wrap: wrap;
        width: 95%;
        margin: 10/75rem auto 0 auto;
        & > label{
            margin-bottom: 45/75rem;
            & > input{
                display: none;
            }
            & > div{
                width: 200/75rem;
                height: 40/75rem;
                line-height: 40/75rem;
                text-align: center;
                .round(40/75rem);
                font-size: 24/75rem;
                .boxshadow(0,3/75rem,6/75rem,rgba(0,0,0,0.6));
            }
            & > input:checked + div{
                background: @baseBoldColor;
                color: #fff;
            }
        }
    }
    textarea{
        overflow: hidden;
        width: 670/75rem;
        height: 276/75rem;
        display: block;
        margin: 0 auto;
        .boxshadow(0,3/75rem,6/75rem,rgba(0,0,0,0.16));
        .round(26/75rem);
        resize: none;
        border: none;
        margin-top: 17/75rem;
        padding: 20/75rem;
        .border-box();
        outline: none;
        background: #eeeeee;
    }
    .conmit{
        width: 648/75rem;
        height: 90/75rem;
        .my-button();
        background: @baseBoldColor;
        margin: 80/75rem auto;
        .round(30/75rem);
        font-size: 28/75rem;
        &:active{
            background: #eee;
        }
    }
}

</style>