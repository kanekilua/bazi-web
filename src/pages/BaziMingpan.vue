<template>
    <div class="wrap" v-show="showFlag">
        <div class="mingpan-wrap">
            <div class="top-part-item"><span class="item-key">姓名：</span>{{info.info.bzname}}</div>
            <div class="top-part-item" v-if="info.info.area"><span class="item-key">出生地点：</span>{{info.info.area}}</div>
            <div class="top-part-item"><span class="item-key">公历：</span>{{info.data.bzdate}}</div>
            <div class="top-part-item"><span class="item-key">农历：</span>{{info.data.nongdate}}</div>
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
                <flexbox class="shishen-list canggan">
                    <flexbox-item class="shishen-m"><div class="shishen" v-html="cangganFormat(info.data.zanggan1)">2</div></flexbox-item>
                    <flexbox-item class="shishen-m"><div class="shishen" v-html="cangganFormat(info.data.zanggan2)">2</div></flexbox-item>
                    <flexbox-item class="shishen-m"><div class="shishen" v-html="cangganFormat(info.data.zanggan3)">3</div></flexbox-item>
                    <flexbox-item class="shishen-m"><div class="shishen" v-html="cangganFormat(info.data.zanggan4)">4</div></flexbox-item>
                </flexbox>
            </div>
            <div class="bottom-part">
                <div class="bottom-part-item">
                    <div class="item-key">十神：</div>
                    <div class="item-list" v-html="shishenFormat(info.data.dayunhtml)"></div>
                </div>
                <div class="bottom-part-item">
                    <div class="item-key">大运：</div>
                    <div class="item-list" v-html="dayunFormat(info.data.dayunhtml)"></div>
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
                    <div class="item-list liunian-list" v-html="liunianFormat(info.data.liunian2htmljs)"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    computed : {
        ...mapState ('bazi',['baziUserInfo'])
    },
    data () {
        return {
            showFlag : false,
            info: {"data":{"ygz":"","mgz":"","rgz":"","hgz":"","zanggan1":"","zanggan2":"","zanggan3":"","zanggan4":"","dayunhtml":"","suicihtml":"","liunian2htmljs":""},"info":{}}
        }
    },
    created() {
        this.getData()         
    },
    methods : {
        getData: function () {
            this.$http.post('/suan/apidata',this.baziUserInfo,'cesuan',null,this.success,this.failure) ;
        },     
        success: function (res) {
            this.info = res;
            this.showFlag = true;
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
        liunianFormat: function (obj) {
            let str =  obj.replace(/壬辰|壬寅|壬子|壬戌|壬申|壬午|;|<br>/g,'').toString();
            let strArr = str.split(" &nbsp");
            let result = [];
            let n = 0;
            for(let i=0;i<strArr.length;i++) {
                if(strArr[i]!=""){
                    result.push("<span>"+strArr[i]+"</span>");
                }               
            }
            return result.toString().replace(/,/g,'');
        },
        shishenFormat: function (obj) {
            let result = [];
            let strArray = obj.split("<font color=blue>");
            for(let i=1;i<strArray.length;++i) {
                result.push("<span class='dayun-shishen'>"+strArray[i].substring(0,2)+"</span>");
            }
            return result.toString().replace(/,/g,'');
        },
        dayunFormat: function (obj) {
            let result = [];
            let strArray = obj.split("<span class=sm_hong>");
            for(let i=1;i<strArray.length;++i) {
                result.push("<span>"+strArray[i].substring(0,2)+"</span>");
            }
            return result.toString().replace(/,/g,'');
        },
        cangganFormat: function (obj) {
            let newObj = obj.toString().replace(/\(|\)/g,'');
            return(newObj);
        },
        saveScreenshot : function() {
            navigator.screenshot.save(function(error,res){
                if(error){
                    console.error("---------------" + error + "---------------");
                }else{
                    console.log('---------------ok---------------');
                    console.error("---------------"+JSON.stringify(res)+"---------------");
                }
            });
        }
    }
}
</script>

<style lang="less">
.wrap{
    .mingpan-wrap{
        padding: 0 25/75rem;
        .border-box();  
        .item-key{
            width: 14%;
            font-size: 26/75rem;
            font-weight: bold;
            opacity: 0.7;
        }
        .top-part-item{
            margin-bottom: 20/75rem;
            font-size: 26/75rem;
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
            .canggan{
                line-height: 40/75rem;
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
                    width: 92%;
                    margin-left: -12/75rem;
                    margin-bottom: 15/75rem;
                    .flex-around();
                    font-size: 24/75rem;
                }
                .jiaoyun-list{
                    color: @baseColor;
                }
                .dayun-shishen{
                    color: #076AFF;
                }
            }
        }
        .liunian-list{
            margin-left: -25/75rem!important;
            .flex-start-only();
            flex-wrap: wrap;
            &>span{
                display: inline-block;
                font-size: 24/75rem;
                margin-left: 20/75rem;
                line-height: 40/75rem;
            }
            //iphone5兼容
            @media screen and(max-width: 359px){
                &>span{
                    display: inline-block;
                    font-size: 24/75rem;
                    margin-left: 10/75rem;
                }
            }
        }
    }
    .save-btn{
        position: fixed;
        display: block;
        width: 100%;
        bottom: 0;
        .round(0);
        background: @baseColor;
        color: #fff;
    }
}


</style>
