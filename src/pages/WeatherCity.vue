<template>
    <div class="wrap">
        <v-title-header>
            选择城市
        </v-title-header>
        <div class="content-wrap">
             <v-title-nav>
                {{province.name}}
            </v-title-nav>
            <div class="content">
                <!-- <div v-for="(item,index) in cityList" :key="index" class="item" :style="{marginLeft :(index === 0 || index % 5 === 0) ? '' : 60/75 + 'rem' , marginTop : index > 4 ? 37/75 + 'rem' : ''}">{{item.name}}</div> -->
                <div v-for="(item,index) in cityList" :key="index" class="item" v-show="item.name" @click="comfirmCity(item)">{{item.name}}</div>
            </div>
        </div>
    </div>
</template>
<script>
import {mapMutations} from 'vuex';
export default {
    created () {
        this.init();
    },
    data () {
        return {
            province : {},
            cityList : []
        }
    },
    methods: {
        ...mapMutations ('weather',['updateWeather']),
        init : function () {
            this.province = this.$route.params.province;
            this.cityList = global.CITY_LIST[this.province.id];
            // 除去港澳台
            for(let i = 0; i< this.cityList.length ; ++i) {
                let cityName = this.cityList[i].name;
                let replaceArr = [
                    '省直辖县级行政区划','朝鲜族自治州','土家族苗族自治州','襄阳市','三沙市','儋州市','藏族羌族自治州','藏族自治州','彝族自治州',
                    '布依族苗族自治州','苗族侗族自治州','哈尼族','壮族苗族自治州','傣族自治州','白族自治州','傣族景颇族自治州','傈僳族自治州','回族自治州',
                    '蒙古族','蒙古自治州','克孜勒苏柯尔克孜自治州','哈萨克自治州','自治区直辖县级行政区划'
                ];
                let diquArr = [
                    '毕节市','铜仁市','日喀则市','昌都市','林芝市','山南市','海东市','吐鲁番市','哈密市'
                ]
                for(var j = 0; j < replaceArr.length ; ++j) {
                    cityName = cityName.replace(replaceArr[j],'');
                }
                for(var k = 0; k < diquArr.length; ++k) {
                    if(cityName === diquArr[k]) {
                        cityName = cityName.replace('市','地区');
                    }
                }

                let city = {
                    id : this.cityList[i].id,
                    name : cityName,
                    province : this.cityList[i].province
                }
                this.$set(this.cityList,i,city);
                // this.cityList[i].name = cityName;
            }
        },
        comfirmCity : function (item) {
            var city_code = null;
            for(var city in global.WEATHER_CITY) {
                if(global.WEATHER_CITY[city].city.indexOf(item.name) !== -1) {
                    city_code = global.WEATHER_CITY[city].code;
                    break;
                }
            }
            var params = {
                'city_code' : city_code
            }
            this.$http.post('/features/weath',params,null,null,this.getWeatherSussess,null);
        },
        getWeatherSussess : function (res) {
            res.data.air = JSON.parse(res.data.air);
            res.data.lifestyle = JSON.parse(res.data.lifestyle);
            res.data.weather = JSON.parse(res.data.weather);
            // this.weather = res.data;
            this.updateWeather(res.data);
            this.$jump('/main/calendar/weather');
        }
    }
}
</script>
<style lang="less" scoped>
.content-wrap {
    padding: 105/75rem 40/75rem 40/75rem 32/75rem;
    /deep/ .title-nav {
        padding-left: 0;
    }
    /deep/ .title {
        font-size: 26/75rem !important;
    }
    .content {
        font-size: 26/75rem;
        .flex-start();
        flex-wrap : wrap;
        .item {
            padding: 0 10/75rem ;
            margin-top: 20/75rem;
            margin-right: 60/75rem;
            // width:84/75rem;
            height:48/75rem;
            line-height: 48/75rem;
            text-align: center;
            background:#fff;
            box-shadow:0px 2px 5px rgba(0,0,0,0.10);
            .round(10/75rem);
        }
    }
}
</style>


