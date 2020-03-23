<template>
<div class="navigation">
  <div class="nav-box">
        <p>
      <span><i class="iconfont icon-Home"></i></span>
       <span> Home</span>
       </p>
  </div>
  <div class="nav-box">
       <p>
      <span><i class="iconfont icon-search"></i></span>
       <span> Discover</span>
       </p>
  </div>
  <div class="nav-box">
       +
  </div>
  <div class="nav-box">
        <p>
      <span><i class="iconfont icon-bolt"></i></span>
       <span> Inbox</span>
       </p>
  </div>
  <div class="nav-box">
    <p>
      <span><i class="iconfont icon-me"></i></span>
        <span> Me</span>
       </p>

  </div>

</div>


</template>




<script>
export default {
  name: "navigation-bar",

  data(){
    return{

    };
  },

}
</script>

<style lang='stylus' scoped>
.navigation
   width 100%
   z-index 100
   position fixed
   line-height .4rem
   bottom  0
   height  1rem
   background-color #000000
   opacity 0.8rem
   left 0
   border-top .02rem solid #eee
   display flex
   font-size .2rem
   .nav-box
      flex 1
      width  20%
      text-align center
      font-size .2rem
      color #ffffff
      display  flex
      flex-direction column
      justify-content center
      justify-items center
      p
        display flex
        flex-direction column
        justify-content center
        justify-items center
        span
          flex 1



</style>
