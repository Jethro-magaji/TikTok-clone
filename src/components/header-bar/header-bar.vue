<template>
<div class="header-bar">
  <span>Following</span>
   <span  class="seperator">|</span>

    <router-link tag="span" to="/videos-list">For You</router-link>

</div>

</template>

<script>
export default {
  name: 'HeaderBar',
  data(){
    return{

    };
  },

}
</script>

<style lang="stylus" scoped>
      .header-bar
          position absolute
          z-index 100
          font-size .4rem
          width 100%
          height 1rem
          top .6rem
          left 0
          text-align center
          display flex
          justify-content center
          justify-items center
          .seperator
             font-size .2rem
             padding 0 .2rem
             display block
             line-height .4rem



</style>
