<template>
    <div class="wrap">
        <v-header></v-header>
        <v-title-header>
            选择城市
            <div slot="icon"></div>
        </v-title-header>
        <div class="content-wrap">
             <v-title-nav>
                <span slot="title">{{province.name}}</span>
                <div slot="more"></div>
            </v-title-nav>
            <div class="content">
                <div v-for="(item,index) in cityList" :key="index" class="item" :style="{marginLeft :(index === 0 || index % 5 === 0) ? '' : 60/75 + 'rem' , marginTop : index > 4 ? 37/75 + 'rem' : ''}">{{item.name}}</div>
            </div>
        </div>
    </div>
</template>
<script>
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
        init : function () {
            this.province = this.$route.params.province;
            this.cityList = global.CITY_LIST[this.province.id];
        }
    }
}
</script>
<style lang="less" scoped>
.content-wrap {
    padding: 15/75rem 40/75rem 40/75rem 32/75rem;
    /deep/ .title {
        font-size: 26/75rem !important;
    }
    .content {
        margin-top: 10/75rem;
        margin-left: 2/75rem;
        font-size: 26/75rem;
        .flex-start();
        flex-wrap : wrap;
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
}
</style>


