<template>
    <div class="wrap">
        <v-header></v-header>
        <v-title-header :backLink="backLink">
            起名大全
        </v-title-header>
        <div class="content-wrap">
            <v-title-nav><h2 slot="title">测试结果</h2><div slot="more"></div></v-title-nav>
            <div class="test-result">
                <div class="row">
                    <div>命主姓氏: 刘</div>
                    <div>命主性别: 男</div>
                </div>
                <div class="row">
                    <div>命主星座: 天蝎座</div>
                    <div>命主生肖: 属虎</div>
                </div>
                <div class="row">出生公历1998年11月9日21时37分(北京时间)</div>
                <div class="row">出生农历一九九八年 九月 廿一日 亥时</div>
                <div class="row">
                    <div>二十八宿（毕）宿</div>
                    <div>二十八宿（毕）宿</div>
                </div>
            </div>
            <v-title-nav><h2 slot="title">五行分析</h2><div slot="more"></div></v-title-nav>
            <p class="analyze">易安居解说：命局生克制化是八字命理中的重中之重，包含整个八字五行的最重要信息！喜用神即是是对你的命局最重要、最有利的五行，获得喜用神之后，即可通过起名改名、后天风水调整等方法，对每个人的运势进行整体调节，从而对人的后天命运、事业、财运、健康、婚姻等产生综合有利影响。</p>
            <h2>五行个数五行力量</h2>
            <div class="chart">
                <div class="tr">
                    <div class="ico"></div>
                    <div class="line-box">
                        <div class="line"></div>
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
            backLink: '/giveName',
            chart: [
                {
                    ico:'',
                    
                }
            ]
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
    padding: 15/75rem 30/75rem;
    font-size: 26/75rem;
    .border-box();
    .test-result{
        padding: 15/75rem 0;
        .row{
            .flex-between();
            margin-top: 35/75rem;
        }
        .row:nth-child(1){
            margin-top: 0;
        }
    }
    & > h2{
        font-size: 26/75rem;
        margin-top: 32/75rem;
    }
}
</style>


