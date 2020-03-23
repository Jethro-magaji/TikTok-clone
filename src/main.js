// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/style/border.css'
import './assets/style/reset.css'
import './assets/iconfont/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// import style
import 'swiper/css/swiper.css'

import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'


Vue.use(VueVideoPlayer,
    /* {
  options: global default options,
  events: global videojs events
} */
)

Vue.use(VueAwesomeSwiper, /* { default options with global component } */ )


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})