<template>
    <div class="wrap">
        <v-header></v-header>
        <v-title-header>奇门遁甲资料</v-title-header>
        <div class="content-wrap">
            <div class="table-wrap">
                <div class="td"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
.content-wrap{
    position:absolute;
    top: 169/75rem;
    left:0;
    bottom :0;
    overflow: auto;
    .table-wrap{
        padding: 41/75rem;
        .border-box();
        border-top: 1px solid rgba(112,112,112,1);
        border-left: 1px solid rgba(112,112,112,1);
    }
}
</style>

