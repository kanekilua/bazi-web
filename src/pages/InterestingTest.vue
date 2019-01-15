<template>
    <div class="test-wrap">
        <v-title-header>趣味测试</v-title-header>
        <div class="content-wrap">
            <h2 class="title">{{this.$route.params.title}}</h2>
            <div class="content">
                <div class="item"
                    v-for="(item,index) in questionList"
                    :key="index"
                    v-show="index == showIndex"
                >
                    <h3>{{item.subject}}</h3>
                    <label :for="'answer'+index+1">
                        <input type="radio" :name="'answer'+index" :id="'answer'+index+1" value="1"
                            v-model="userChoiceList[index]"
                        >
                        <i></i>
                        <div>{{item.result_a}}</div>
                    </label>
                    <label :for="'answer'+index+0">
                        <input type="radio" :name="'answer'+index" :id="'answer'+index+0" value="0"
                            v-model="userChoiceList[index]"
                        >
                        <i></i>
                        <div>{{item.result_b}}</div>
                    </label>
                </div>
                <div class="bottom">
                    <button class="pre" @click="pre"></button>
                    <button class="next" @click="next"></button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            questionList: [],
            showIndex: this.$route.query.id - 1,
            id: this.$route.query.id,
            userChoiceList: [], 
        }
    },
    created () {
        this.getData();
    },
    methods: {
        getData: function () {
            let params = {
                cid : '108',
                tid : this.$route.query.id,
            }
            this.$http.post('/suan/apidata',params,'cesuan',null,this.success,this.failure);
        },
        success: function (res) {
            this.questionList = res.data;
        },
        pre: function () {
            if(this.showIndex == 0) {
                this.$jump('/main/home');
            }else {
                this.showIndex--;
            }
        },
        next: function() {
           
            if(this.userChoiceList.length == parseInt(this.showIndex) + 1) {
                if(this.showIndex == this.questionList.length-1) {
                    // 答完题后显示答案
                    for(let i of this.userChoiceList){
                        parseInt(i);
                    }
                    let sum = this.userChoiceList.reduce((a,b)=> parseInt(a)+parseInt(b));
                    let params = {
                        cid : '109',
                        tid : this.id,
                        num : sum, 
                    }
                    this.$http.post('/suan/apidata',params,'cesuan',null,this.showAnswer,this.failure);
                    
                }else {
                    this.showIndex++;
                    let sum = this.userChoiceList.reduce((a,b)=> parseInt(a)+parseInt(b));
                    console.log(sum)
                } 
            }else {

            }
            
        },
        showAnswer: function (res) {
            console.log(res);
        }
    }
}
</script>
<style lang="less" scoped>
.test-wrap{
    .content-wrap{
        padding-top: 90/75rem;
        .border-box();
        .title{
          width: 100%;
          height: 100/75rem;
          line-height: 100/75rem;
          text-align: center;
          font-size: 36/75rem;
          border-bottom: 1px solid rgba(241,241,241,1);
        }
        .content{
            padding: 36/75rem;
            .border-box();
            h3{
                font-size: 30/75rem;
            } 
            label{
                .flex-start();
                width: 100%;
                margin-top: 24/75rem;
                font-size: 24/75rem;
                input{
                    display: none;
                }
                i{
                    display: inline-block;
                    width: 22/75rem;
                    height: 22/75rem;
                    .round(50%);
                    margin-right: 44/75rem;
                    border: 1px solid #707070;
                    .border-box();
                }
                input:checked + i{
                    background: @baseBoldColor;
                    border: none;
                }
            }
            .bottom{
                position: fixed;
                bottom: 1rem;
                left: 0;
                right: 0;
                width: 90%;
                margin: 0 auto;
                .flex-between();
                .pre,
                .next{
                    .my-button();
                    width: 50/75rem;
                    height: 40/75rem;
                    &:active{
                        background: none;
                    }
                }
                .pre{
                    background: url('../assets/image/common/pre.png') no-repeat center center / 100% 100%;
                }
                .next{
                    background: url('../assets/image/common/next.png') no-repeat center center / 100% 100%;
                }
            }
        }
    }
}
</style>



