<template>
  <div class="home">

   <HeaderBar></HeaderBar>
  <NavigitionBar></NavigitionBar>
   <router-view/>
  </div>
</template>




<script>
import  NavigitionBar  from "@/components/navigation-bar/navigation-bar"
import HeaderBar from  "@/components/header-bar/header-bar"


export default {
  name: 'Home',
  components:{
     NavigitionBar,
     HeaderBar
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .home
    height  100%

</style>
