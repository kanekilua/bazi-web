<template>
    <div class="mingpan-wrap">
        <div>姓名：{{info.info.bzname}}</div>
        <div>出生地点：{{info.info.area}}</div>
        <div>公历: {{info.data.bzdate}} 农历：{{info.data.nongdate}}</div>
        <div>节气：{{info.data.jqstr}}</div>
        <div>起运： 命主出生{{info.data.qysj}}开始起运</div>
        <div>交运： 命主于{{info.data.zysj}}交运</div>
        <div>旬空： {{info.data.xkrgz}} 不全</div>
        <div>坤造： 无</div>
        <div>纳音： {{info.data.nayin1}} {{info.data.nayin2}} {{info.data.nayin3}} {{info.data.nayin4}}</div>
        <div>藏干： {{info.data.zanggan1}} {{info.data.zanggan2}} {{info.data.zanggan3}} {{info.data.zanggan4}}</div>
        <div>十神： {{info.data.shishen}}}</div>
        <div>大运： {{info.data.dayunhtml}}</div>
        <div>交运： {{info.data.liunianhtml}}</div>
        <div>实岁： {{info.data.suicihtml}}</div>
        <div>流年： {{info.data.liunian2htmljs}}</div>
        <x-button class="save-btn">保存命盘</x-button>
    </div>
</template>
<script>
export default {
    data () {
        return {
            info: [],
        }
    },
    created() {
        this.getData()         
    },
    methods : {
        getData: function () {
            let userData = {
                'cid' : 48,
                'name' : '林健强',
                'area' : '广东',
                'sex' : '1',
                'year' : 1995,
                'month' : 1,
                'date' : 7,
                'hour' : 8,
                'minute' : 6,
                'yezis' : 1
            }            
            this.$http.post('/suan/apidata',userData,'cesuan',null,this.success,this.failure) 
        },        
        success: function (res) {
            this.info = res
            console.log(res)
        },
        failure : function (res) {
            console.log('123123');
        }
    }
}
</script>

<style lang="less">
.mingpan-wrap{
    padding: 25/75rem;
    .save-btn{
        width: 100%;
        .round(0);
        background-color: @baseColor;
    }

}

</style>
