<template>
    <div class="wrap">
        <slot name="title"></slot>
        <nav class="nav" :class="isFixed ? 'navFixed' : ''" v-touch:up="scrollUp"  v-touch:down="scrollDown"></nav>
    </div>
</template>

<script>
export default {
    data () {
        return{
            isFixed: false,
        }
    },
    mounted() {
        window.addEventListener("scroll",this.watchScroll)
    },
    methods: {
       watchScroll() {
           let scrollTop = window.pageYoffset ||
           document.documentElement.scrollTop ||
           document.body.scrollTop;
        //    console.log(scrollTop);
           if (scrollTop > 42) {
               this.isFixed = true;
           } else {
               this.isFixed = false;
           }
       },
        scrollUp: function (){
          if(this.isFixed ==false){
              console.log(111)
              this.isFixed =true;
          } 
        },
        scrollDown: function (){
            if(this.isFixed ==true){
                console.log(222)
                this.isFixed = false;
            } 
        }
    }
}
</script>

<style lang="less" scoped>
    .nav{
        width: 100%;
        height: 80/75rem;
        line-height: 140/75rem;
        background: url('../../assets/image/birth/nav.png') no-repeat center center / 100% 100%;
        .nav-title{
            color: #fff;
            margin-left: 40/75rem;
            font-size: 40/75rem;
        }
    }
    .nav-title{
        height: 80/75rem;
        line-height:  120/75rem;
        padding-left: 41/75rem;
        background: @baseColor;
        color: #fff;
    }
    .navFixed{
        position: fixed;
        top: 0;
        z-index: 999;
    }
    .titleHeight{
        margin-bottom: 80/75rem;
        height: 160/75rem!important;
    }
</style>

