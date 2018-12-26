<template>
    <div class="wrap">
        <v-header></v-header>
        <v-title-header>
            <div class="search-wrap">
                <input class="search" type="text" placeholder="输入城市名">
                <i class="search-btn"></i>
            </div>
            <div slot="icon"></div>
        </v-title-header>
        <div class="content-wrap">
            <div class="tuijian">
                <v-title-nav>
                    <span slot="title">推荐城市</span>
                    <div slot="more"></div>
                </v-title-nav>
                <div class="content">
                    <div class="position">
                        <i></i><div>定位</div>
                    </div>
                    <div v-for="(item,index) in tuijianList" :key="index" class="item" :style="{marginLeft :(index === 0 || index % 5 === 4) ? '' : 60/75 + 'rem' , marginTop : index > 3 ? 37/75 + 'rem' : ''}">{{item}}</div>
                </div>
            </div>
            <div class="province">
                <v-title-nav>
                    <span slot="title">选择省份</span>
                    <div slot="more"></div>
                </v-title-nav>
                <div class="content">
                    <div @click="selectCity(item)" v-for="(item,index) in provinceList" :key="index" class="item" :style="{marginLeft :(index === 0 || index % 5 === 0) ? '' : 60/75 + 'rem' , marginTop : index > 4 ? 37/75 + 'rem' : ''}">{{item.name}}</div>
                </div>
            </div>
        </div>
    </div> 
</template>
<script>
export default {
    created () {
        this.init();
    },
    data() {
        return {
            tuijianList : [
                '北京','上海','广州','深圳','杭州','南京','武汉','厦门','昆明'
            ],
            provinceList : []
        }
    },
    methods: {
        init : function () {
            // 除去港澳台
            for(let i = 1; i< global.PROVINCE_LIST.length -3 ; ++i) {
                let provinceName = global.PROVINCE_LIST[i].name.replace('省','');
                provinceName = provinceName.replace('市','');
                provinceName = provinceName.replace('自治区','');
                provinceName = provinceName.replace('壮族','');
                provinceName = provinceName.replace('回族','');
                provinceName = provinceName.replace('维吾尔','');
                provinceName = provinceName.replace('特别行政区','');
                let province = {
                    id : global.PROVINCE_LIST[i].id,
                    name : provinceName
                }
                this.$set(this.provinceList,i-1,province);
            }
        },
        selectCity : function(item) {
            this.$router.push({
                name : 'city',
                params : {
                    province : item
                }
            })
        }
    },
}
</script>
<style lang="less" scoped>
.wrap {
    .search-wrap {
        width: 571/75rem;
        height: 50/75rem;
        position: relative;
        padding-left: 33/75rem;
        background:rgba(0,0,0,0.05);
        .border-box();
        .round(25/75rem);
        .flex-between();
        .search {
            width: 430/75rem;
            height: 50/75rem;
            font-size: 26/75rem;
            background: none;
            outline: none;
            border: 0;
        }
        .search-btn {
            width: 44/75rem;
            height: 44/75rem;
            margin-right: 32/75rem;
            background: url('../assets/image/weather-province/search.png') no-repeat center center / 100% 100%;
        }
    }
    /deep/ .icon:nth-last-child(1) {
        width: 0;
        height: 0;
    }
    /deep/ .title {
        font-size: 26/75rem !important;
    }
    .tuijian {
        padding: 15/75rem 40/75rem 40/75rem 32/75rem;
        border-bottom: 1px solid #eee;
        .content {
            .item:nth-child(2) {
                margin-left: 22/75rem;
            }
        }
    }
    .content {
        margin-top: 10/75rem;
        margin-left: 2/75rem;
        font-size: 26/75rem;
        .flex-start();
        flex-wrap : wrap;
        .position {
            .flex-start();
            width: 122/75rem;
            height: 48/75rem;
            line-height: 48/75rem;
            background: @baseColor;
            box-shadow: 0px 3px 6px rgba(0,0,0,0.16);
            .round(15/75rem);
            & > i {
                width: 22/75rem;
                height: 100%;
                margin-left: 16/75rem;
                background: url('../assets/image/weather-province/position.png') no-repeat center center / 100% auto;
            }
            & > div {
                width: 52/75rem;
                height: 100%;
                color: #fff;
                margin-left: 16/75rem;
            }
        }
        .item {
            width:84/75rem;
            height:48/75rem;
            line-height: 48/75rem;
            text-align: center;
            background:#fff;
            box-shadow:0px 3px 6px rgba(0,0,0,0.16);
            .round(15/75rem);
        }
    }
    .province {
        padding: 15/75rem 40/75rem 40/75rem 32/75rem;
    }
}
</style>

