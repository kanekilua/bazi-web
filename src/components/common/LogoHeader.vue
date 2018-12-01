<template>
    <div>
        <img src="../../assets/image/title-header/back.png" alt="back" class="back" @click="$router.go(-1)">
        <img src="../../assets/image/logo-header/logo.png" alt="logo" class="logo">
    </div>
</template>
<script>
export default {
    name : "LogoHeader"
}
</script>
<style lang="less" scoped>
.back {
    width: 44/75rem;
    height: 44/75rem;
    position: absolute;
    top: 51/75rem;
    left: 45/75rem;
}
.logo {
    width: 370/75rem;
    height: 309/75rem;
    margin: 104/75rem auto 0 auto;
    display: block;
}

</style>


