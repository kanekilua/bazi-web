<template>
    <div></div>
</template>
<script>
export default {
    created () {
        this.$router.push({
                name: 'zhougongAnalyze',
                query: {id: this.$route.query.id},
                params:{objList: this.$route.params.objList}
            })
    }
}
</script>

