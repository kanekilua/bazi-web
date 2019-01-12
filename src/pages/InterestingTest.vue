<template>
    <div class="test-wrap">
        <v-title-header>趣味测试</v-title-header>
        <div class="content-wrap">
            <h2 class="title">{{title}}</h2>
            <div class="content">
                <h3>{{question}}</h3>
                <label for="answer1">
                    <input type="radio" name="answer" id='answer1'>
                    <i></i>
                    <div>是的</div>
                </label>
                <label for="answer2">
                    <input type="radio" name="answer" id='answer2'>
                    <i></i>
                    <div>不会</div>
                </label>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            title: "你是不是强迫症严重的人",
            question: "1、家里的底板有一点脏都会令你感到不舒服吗？"

        }
    },
    methods: {

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
        }
    }
}
</style>



