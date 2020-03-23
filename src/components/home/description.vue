<template>
  <div class="description">
    <p>@ <span>Real_Drjet</span></p>
    <br>
    <p class="content">Follow and like my page</p>
  </div>
</template>

<script>
export default {
  name: 'Description',
  data(){
    return{

    };
  },

}
</script>

<style lang="stylus" scoped>
    .description
        position absolute
        margin-left .3rem
        font-size .4rem

        bottom 2rem
        left .4rem
            .content
                margin-top .2rem
                font-family serif

</style>
