<template>
  <div class="cloing_box">
    <div class="cloning_box_wrap">
      <h1 class="clon_h1_tit">WebClon</h1>
      <div class="clon_img_flex">
        <swiper class="clon_swiper" :navigation="true" :modules="modules" :slides-per-view="1" :space-between="50" @swiper="onSwiper" @slideChange="onSlideChange">
          <swiper-slide>
            <div class="clon_card_01">
              <img class="panel_01_front" ref="pan01Front" src="../assets/img/ddapture-dosiraktong-Main-Index-2023-01-09-10_18_07-1.png" alt="" />
              <div class="clon_links">
                <a href="https://rudns2.github.io/dosirakTong/"><h1 class="clon_h4">도시락통</h1></a>
                <a href="https://github.com/rudns2/dosirakTong"><img class="clon_git_logo" src="../assets/img/github-mark-white.png" alt="" /></a>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="clon_card_01">
              <img class="panel_01_front" src="../assets/img/aapture-therichmond-pc-2023-01-09-10_05_12-1.png" alt="" />
              <div class="clon_links">
                <a href="http://gyeowoon.dothome.co.kr/richmond/toge.html"><h1 class="clon_h4">리치먼드</h1></a>
                <a href="https://github.com/rudns2/richmond-pyeongchang"><img class="clon_git_logo" src="../assets/img/github-mark-white.png" alt="" /></a>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="clon_card_01">
              <img class="panel_01_front" src="../assets/img/singgreoun2023-01-04143832-3.png" alt="" />
              <div class="clon_links">
                <a href="https://rudns2.github.io/singgreunhome/"><h1 class="clon_h4">싱그러운집</h1></a>
                <a href="https://github.com/rudns2/singgreunhome"><img class="clon_git_logo" src="../assets/img/github-mark-white.png" alt="" /></a>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide> slide - 4 </swiper-slide>
          <swiper-slide> slide - 5 </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, reactive } from "vue";
// import Swiper core and required modules
import { Navigation } from "swiper";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    // DOM 객체에 접근하기 위한 문법
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      onSwiper,
      onSlideChange,
      modules: [Navigation],
    };
  },
};
</script>
<style scoped lang="scss">
.cloing_box {
  width: 100%;
  height: 100vh;
  transition: all 1.5s;
  background-color: #1f1a0f;
  margin: 0 auto 110px;
  padding-top: 50px;
}
.cloning_box_wrap {
  width: 100%;
}
.clon_h1_tit {
  color: #fff;
  font-size: 64px;
  font-weight: bold;
  margin-bottom: 35px;
}
.clon_git_logo {
  width: 35px;
}
.clon_swiper {
  width: 80%;
  margin: 110px auto 0;
}
.clon_links {
  display: flex;
  justify-content: center;
  gap: 15px;
}
.panel_01_front {
  width: 50%;
}
.clon_h4 {
  font-size: 18px;
  color: #fff;
}
@media (max-width: 1280px) {
  .panel_01_front {
    width: 80%;
  }
}

@media (max-width: 1024px) {
  .cloning_box_wrap h1 {
    font-size: 48px;
  }
  .cloing_box {
    width: 100%;
    transition: all 1.5s;
    background-color: #1f1a0f;
    margin: 0 auto 110px;
    padding-top: 50px;
  }
  .cloning_box_wrap {
    width: 100%;
  }
  .clon_h1_tit {
    color: #000;
    font-size: 64px;
    font-weight: bold;
    margin-bottom: 35px;
  }
  .clon_git_logo {
    width: 35px;
  }
  .clon_swiper {
    width: 50%;
    margin: auto;
  }
  .clon_links {
    display: flex;
    justify-content: center;
    gap: 15px;
  }
  .clon_h4 {
    font-size: 18px;
    color: #fff;
  }
  @media (max-width: 1280px) {
    .panel_01_front {
      width: 100%;
    }
  }

  .clon_img_flex {
    height: 100%;
    flex-direction: column;
  }
}

@media (max-width: 768px) {
  .cloning_box_wrap h1 {
    font-size: 32px;
  }

  .cloning_box {
    height: 860px;
  }
  .clon_swiper {
    width: 90%;
  }
}
</style>
