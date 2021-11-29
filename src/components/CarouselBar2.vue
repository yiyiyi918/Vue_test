<template>
      <div v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
          <div class="swiper-slide" :key="banner" v-for="banner in banners">
            <img :src="banner" />
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
</template>
    
<script>
import { Swiper, SwiperSlide} from 'vue-awesome-swiper'
export default {
components: {
Swiper,
SwiperSlide
},
      data() {
        return {
          banners: [
            "https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1603365312,3218205429&fm=26&gp=0.jpg",
            "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2534506313,1688529724&fm=26&gp=0.jpg",
            "https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3892521478,1695688217&fm=26&gp=0.jpg"
          ],
          swiperOption: {
            autoplay: true,
            pagination: {
              el: ".swiper-pagination"
            },
            mousewheel: true

          }
        };
      },
    }
</script>