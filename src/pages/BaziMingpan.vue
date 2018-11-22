<template>
    <div class="mingpan-wrap">
        <div class="top-part-item"><span class="item-key">姓名：</span>{{info.info.bzname}}</div>
        <div class="top-part-item"><span class="item-key">出生地点：</span>{{info.info.area}}</div>
        <div class="top-part-item"><span class="item-key">公历：</span>{{info.data.bzdate}} 农历：{{info.data.nongdate}}</div>
        <div class="top-part-item"><span class="item-key">节气：</span>{{info.data.jqstr}}</div>
        <div class="top-part-item"><span class="item-key">起运：</span>命主出生<span v-html="info.data.qysj"></span>开始起运</div>
        <div class="top-part-item"><span class="item-key">交运：</span>命主于{{info.data.zysj}}交运</div>
        <div class="top-part-item item-shishen">
            <div class="item-key shishen-key">十神：</div>
            <flexbox class="shishen-list">
                <flexbox-item><div class="shishen" v-html="info.data.shishen1">1</div></flexbox-item>
                <flexbox-item class="shishen-m"><div class="shishen" v-html="info.data. shishen2">2</div></flexbox-item>
                <flexbox-item class="shishen-m"><div class="shishen">日元</div></flexbox-item>
                <flexbox-item class="shishen-m"><div class="shishen" v-html="info.data.riyuan">4</div></flexbox-item>
            </flexbox>
        </div>
        <div class="top-part-item item-shishen">
            <div class="item-key shishen-key">四柱：</div>
            <flexbox class="shishen-list sizhu">
                <flexbox-item>
                    <div v-html="stringSplit(info.data.ygz,0)"></div>
                    <div v-html="stringSplit(info.data.ygz,1)"></div>
                </flexbox-item>
                <flexbox-item class="shishen-m">
                    <div v-html="stringSplit(info.data.mgz,0)"></div>
                    <div v-html="stringSplit(info.data.mgz,1)"></div>
                </flexbox-item>
                <flexbox-item class="shishen-m">
                    <div v-html="stringSplit(info.data.rgz,0)"></div>
                    <div v-html="stringSplit(info.data.rgz,1)"></div>
                </flexbox-item>
                <flexbox-item class="shishen-m">
                    <div v-html="stringSplit(info.data.hgz,0)"></div>
                    <div v-html="stringSplit(info.data.hgz,1)"></div>
                </flexbox-item>
            </flexbox>
        </div>
        <div class="top-part-item item-shishen">
            <div class="item-key shishen-key">纳音：</div>
            <flexbox class="shishen-list">
                <flexbox-item>{{info.data.nayin1}}</flexbox-item>
                <flexbox-item class="shishen-m">{{info.data.nayin2}}</flexbox-item>
                <flexbox-item class="shishen-m">{{info.data.nayin3}}</flexbox-item>
                <flexbox-item class="shishen-m">{{info.data.nayin4}}</flexbox-item>
            </flexbox>
        </div>
        <div class="top-part-item item-shishen">
            <div class="item-key shishen-key">藏干：</div>
            <flexbox class="shishen-list">
                <flexbox-item class="shishen-m"><div class="shishen" v-html="info.data.zanggan1">2</div></flexbox-item>
                <flexbox-item class="shishen-m"><div class="shishen" v-html="info.data.zanggan2">2</div></flexbox-item>
                <flexbox-item class="shishen-m"><div class="shishen" v-html="info.data.zanggan3">3</div></flexbox-item>
                <flexbox-item class="shishen-m"><div class="shishen" v-html="info.data.zanggan4">4</div></flexbox-item>
            </flexbox>
        </div>

        <!-- <div>
            <span class="item-key">十神：</span>
        </div> -->
        

        
        <div class="bottom-part">
            <div class="bottom-part-item">
                <div class="item-key">大运：</div>
                <div class="item-list" v-html="info.data.dayunhtml"></div>
            </div>
            <div class="bottom-part-item">
                <div class="item-key">交运：</div>
                <div class="item-list jiaoyun-list" v-html="info.data.liunianhtml"></div>
            </div>
            <div class="bottom-part-item">
                <div class="item-key">实岁：</div>
                <div class="item-list" v-html="shisuiFormat(info.data.suicihtml)"></div>
            </div>
            <div class="bottom-part-item">
                <div class="item-key">流年：</div>
                <div class="item-list" v-html="liunianFormat(info.data.liunian2htmljs)"></div>
            </div>
            <x-button class="save-btn">保存命盘</x-button>
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
            this.info = res;
            console.log(this.info.data);
        },
        failure: function (res) {
            // console.log('123123')
        },
        stringSplit: function(str,index) {
            return str.split("")[index];
        },
        shisuiFormat: function (strObject) {
            let result = [];
            let str = JSON.stringify(strObject);
            let delHtmlStr = this.$utils.delHtmlTag(str);
            let strPlace = delHtmlStr.split(' ');
            for(let i=0;i<strPlace.length;i++){
                if(strPlace[i] != "" && strPlace[i] != '"') {
                    result.push("<span class='age-num'>"+strPlace[i].split('-')[0] + "岁</span>");
                }
            }
            return result.toString().replace(/,/g,'');
        },
        liunianFormat: function (str) {
            let strArr =  str.replace(/壬辰|壬寅|壬子|壬戌|壬中|壬午|;/g,'').split('&nbsp');
            return strArr;
        }
    }
}
</script>

<style lang="less">
.mingpan-wrap{
    padding-left: 25/75rem;   
    .item-key{
        font-size: 26/75rem;
        font-weight: bold;
        opacity: 0.7;
    }
    .top-part-item{
        margin-bottom: 12/75rem;
    }
    .item-shishen{
        width: 100%;
        .flex-start-only();
        .shishen-key{
            width: 14%;
        }
        font{
            color: #000!important;
        }
        .shishen-list{
            text-align: center;
            margin-left: -20px;
        }
    }       
    .sizhu{
        font-size: 30/75rem;
        color: @baseColor;
    }
    .bottom-part{
        .bottom-part-item{
            .flex-start-only();
            .item-list{
                width: 88%;
                margin-left: -12/75rem;
                .flex-around();
                font-size: 24/75rem;
            }
            .jiaoyun-list{
                color: @baseColor;
            }
        }
    }
    .save-btn{
        width: 100%;
        .round(0);
        background-color: @baseColor;
    }

    
}

</style>
