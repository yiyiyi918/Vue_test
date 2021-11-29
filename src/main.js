import {createApp} from 'vue'
//import Vue,{ createApp, } from 'vue'
import App from './App.vue'
import router from './router'
import { Icon } from 'vant';

import './assets/css/reset.css'
import './assets/css/font-awesome.css'
import './assets/css/font-awesome.min.css'

// import {Swiper as SwiperClass,Pagination,Mousewheel,Autoplay} from "swiper/dist/js/swiper.esm"
// import getAwesomeSwiper from "vue-awesome-swiper/dist/ssr"
// import 'swiper/dist/css/swiper.css'
// SwiperClass.use([Pagination, Mousewheel, Autoplay])
// Vue.use(getAwesomeSwiper(SwiperClass))

createApp(App).use(router).use(Icon).mount('#app')