<template>
    <div class="wrap">
        <v-title-header>紫微斗数</v-title-header>
        <div class="ziwei-box">
            <flexbox :gutter="0">
                <flexbox-item><div class="table-cell" v-html="info[0]"></div></flexbox-item>
                <flexbox-item><div class="table-cell" v-html="info[1]"></div></flexbox-item>
                <flexbox-item><div class="table-cell" v-html="info[2]"></div></flexbox-item>
                <flexbox-item><div class="table-cell" v-html="info[3]"></div></flexbox-item>
            </flexbox>
            <flexbox :gutter="0">
                <flexbox-item :span="1/4" class="double-table-cell">                   
                   <div class="table-cell" v-html="info[4]">1</div>
                   <div class="table-cell" v-html="info[5]">1</div>
                </flexbox-item>
                <flexbox-item :span="1/2"><div class="double-table-cell table-cell">1/2</div></flexbox-item>
                <flexbox-item :span="1/4" class="double-table-cell">                   
                   <div class="table-cell" v-html="info[6]">1</div>
                   <div class="table-cell" v-html="info[7]">1</div>
                </flexbox-item>
            </flexbox>
            <flexbox :gutter="0">
                <flexbox-item><div class="table-cell" v-html="info[8]">1</div></flexbox-item>
                <flexbox-item><div class="table-cell" v-html="info[9]">2</div></flexbox-item>
                <flexbox-item><div class="table-cell" v-html="info[10]">3</div></flexbox-item>
                <flexbox-item><div class="table-cell" v-html="info[11]">4</div></flexbox-item>
            </flexbox>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            info: []
        }
    },
    created () {
        this.getData()
    },
    methods: {
        getData: function () {
            let userData = {
                'cid' : 53,
                'name' : '林健强',
                'sex' : '1',
                'DateType' : 1,
                'year' : 1995,
                'month' : 1,
                'date' : 7,
                'hour' : 8,
                'minute' : 6,
                'other' : 1,
                'runfen' : 1,
            } 
            this.$http.post('/suan/apidata',userData,'cesuan',null,this.success,this.failure) 
        },        
        success: function (res) {
            let resStr = res.data.pan;
            this.info = resStr;
            // console.log(resStr)
            let redReg = /紫微|天府|天机|天梁|廉贞|贪狼|太阳|太阴|巨门|天同|破军|天相|武曲|七杀/g
            let orangeReg = ["左辅","右弼","文昌","文曲","天魁","天钺","禄存","擎羊","火星","铃星","地空","地劫","陀罗","天马"];
            let garyReg = ["恩光","空亡","天刑","天月","红鸾","天喜","蜚廉","天厨","阴煞","孤辰","寡宿","天哭","天空","三台","八座","天贵","天官","龙池","凤阁","天才","天姚","破碎","封诰","天虚","天寿","天福","大耗","解神","月德","天巫","咸池","劫煞","台辅","华盖","天使","龙德"]
            let result = []
            for(let i=0; i<resStr.length; i++){
                let k = this.$utils.delHtmlTag(resStr[i].toString());
                let r = k.match(redReg)
                // console.log(r)
                if(r!=null){
                    for( let item of r){
                        item = "<span class=red-tag>"+item+"</span>"
                    }
                }             
                result.push(k)
                           
            }
            console.log(result)
        },
        failure: function (res) {
            // console.log('123123')
        },
        resFormat: function (str) {
           return str.replace(/\s+|&nbsp/g, "");
        }
    }
}
</script>
<style lang="less" scoped>
.wrap{
    width: 100%;
    .ziwei-box{
        width: 99%;
         @cellHeight: 290/75rem;
        .table-cell {
            width: 100%;
            height: @cellHeight;
            border: 1px solid red;
            
        }
        .double-table-cell{
            height: @cellHeight*2;
        }
    }
    /deep/ .zw_pan{
        & > ul{
            .flex-start-only();
            flex-direction: row-reverse;
            & > li{
                width: 25/75rem;
                margin-left: 5/75rem;
                list-style: none;
                font-size: 24/75rem;
                font[color="#ae00ae"]{
                    color: @baseColor!important;
                }
                font[color="#ae00ae"]{
                    order: 1;
                    color: @baseColor!important;
                }
                font[color="#8c8c00"]{
                    order: 2;
                    color: purple!important;
                }
                
            }
        }
    }
}

</style>