<template>
    <div></div>
</template>
<script>
export default {
    created () {
        this.$router.push({
                name: 'zhougongAnalyze',
                query: {id: this.$route.query.id,q: this.$route.query.q},
            })
    }
}
</script>

