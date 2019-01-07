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
                <div v-for="(item,index) in cityList" :key="index" class="item" >{{item.name}}</div>
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
            box-shadow:0px 3px 6px rgba(0,0,0,0.10);
            .round(10/75rem);
        }
    }
}
</style>


