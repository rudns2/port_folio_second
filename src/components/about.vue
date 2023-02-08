<template>
  <div>
    <div class="about_box">
      <h1 class="about_title">About Me</h1>
      <div class="about_section_wrap">
        <section class="about_section_me">
          <article class="about_myProfil_article" data-aos="fade-up" data-aos-duration="1500">
            <div class="about_profil_wrap">
              <div class="about_profil_img">
                <swiper
                  :spaceBetween="30"
                  :centeredSlides="true"
                  :autoplay="{
                    delay: 2500,
                    disableOnInteraction: false,
                  }"
                  :pagination="{
                    clickable: true,
                  }"
                  :navigation="false"
                  :modules="modules"
                  class="mySwiper"
                >
                  <swiper-slide><img src="../assets/img/MyExhibition_img1.png" alt="" /></swiper-slide>
                  <swiper-slide><img src="../assets/img/MyExhibition_img2.png" alt="" /></swiper-slide>
                  <swiper-slide><img src="../assets/img/MyExhibition_img3.png" alt="" /></swiper-slide>
                  <swiper-slide><img src="../assets/img/MyExhibition_img4.jpg" alt="" /></swiper-slide>
                </swiper>
              </div>
            </div>
          </article>
        </section>
        <section class="about_section_us">
          <article class="about_us_edu" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="350">
            <div class="about_profil_text">
              <ul>
                <li>
                  <h1 class="about_MyName_h1">내가 좋아하는 명언</h1>
                </li>
                <li>
                  <h4 class="about_MyName_h4">
                    한 가지 생각을 선택하라. 그 생각을 당신의 삶으로 만들어라. 그걸 생각하고, 꿈꾸고, 그에 기반해서 살아가라. 당신의 몸의 모든 부분, 뇌, 근육, 신경을 그 생각으로 가득 채우고 다른
                    생각은 다 내버려둬라. 이것이 성공하는 방법이다.
                  </h4>
                </li>
                <li>
                  <h1 class="about_MyName_h1">-스와미 비베카난다-</h1>
                </li>
              </ul>
            </div>
          </article>
          <article class="about_skill_png" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="550">
            <div class="about_skill_title">
              <h1 class="about_MyName_h1">사용 할 줄 아는 기술</h1>
            </div>

            <div class="about_skill_wrap">
              <div class="about_skill_basic_png">
                <div class="" v-for="ione in imgA" :key="ione.imgName">
                  <a :href="ione.codeUrl">
                    <img :src="require(`@/assets/img/${ione.imgName}`)" alt="" />
                  </a>
                  <h1>{{ ione.codeName }}</h1>
                  <span class="about_skill_line"></span>
                </div>
              </div>
              <div class="about_skill_library_png">
                <div v-for="itwo in imgB" :key="itwo.imgName">
                  <a :href="itwo.codeUrl">
                    <img :src="require(`@/assets/img/${itwo.imgName}`)" alt="" />
                  </a>
                  <h1>{{ itwo.codeName }}</h1>
                  <span class="about_skill_line"></span>
                </div>
              </div>
            </div>
          </article>
        </section>
        <!-- <div>
          <img
            v-for="src in imgSrc"
            :key="src"
            :src="require(`@/assets/img/${src}`)"
          />
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

export default {
  data() {
    return {
      imgA: [
        {
          imgName: "HTMLd-11.png",
          codeName: "HTML",
          codeUrl: "https://ko.wikipedia.org/wiki/HTML",
        },
        {
          imgName: "CSS3_1.png",
          codeName: "CSS",
          codeUrl: "https://ko.wikipedia.org/wiki/CSS",
        },
        {
          imgName: "javascript_1.png",
          codeName: "JS",
          codeUrl: "https://ko.wikipedia.org/wiki/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8",
        },
      ],
      imgB: [
        {
          imgName: "mysql_1.png",
          codeName: "Mysql",
          codeUrl: "https://ko.wikipedia.org/wiki/MySQL",
        },
        {
          imgName: "node-js-tutorial_2.png",
          codeName: "nodejs",
          codeUrl: "https://ko.wikipedia.org/wiki/Node.js",
        },
        {
          imgName: "logo.png",
          codeName: "VUEjs",
          codeUrl: "https://ko.wikipedia.org/wiki/Vue.js",
        },
      ],
      codeUrl: ["https://ko.wikipedia.org/wiki/HTML", "https://ko.wikipedia.org/wiki/CSS", "https://ko.wikipedia.org/wiki/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8"],
    };
  },
  created() {
    AOS.init();
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
};
</script>
<style scoped lang="scss">
.about_box {
  max-width: 1400px;
  width: 100%;
  margin: 0 auto 110px;
  transition: all 1.5s;
  padding-top: 50px;
}

.about_title {
  font-size: 96px;
  font-weight: 700;
  color: #222;
}

.about_section_wrap {
  display: flex;
  gap: 10px;
}

.about_section_us {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 10px;
}

.about_section_us article {
  height: 320px;
}

.about_section_us article:nth-child(1) {
  background-color: #bfaf0f;
}

.about_section_us article:nth-child(2) {
  background-color: #584f00;
}

.about_skill_png img {
  width: 50px;
  height: 53px;
}

.about_skill_basic_png {
  display: flex;
  justify-content: space-evenly;
  margin: 15px;
}

.about_skill_library_png {
  display: flex;
  justify-content: space-evenly;
  margin: 15px;
}

.about_skill_title {
  font-size: 32px;
  font-weight: bold;
}

.about_skill_line {
  display: block;
  width: 50px;
  height: 5px;
  background-color: #999;
  margin-top: 15px;
}

.about_skill_line::after {
  content: "";
  display: block;
  width: 35px;
  height: 5px;
  background-color: #fff;
  animation: prog 2s ease-in;
}

@keyframes prog {
  0% {
    width: 0px;
  }

  50% {
    width: 17.5px;
  }

  100% {
    width: 35px;
  }
}

// profil start
.about_profil_wrap {
  margin-top: 15px;
}
.about_profil_img img {
  width: 66%;
}
.about_MyName_h1 {
  margin-top: 15px;
  font-size: 24px;
}

.about_MyName_h4 {
  font-size: 18px;
  line-height: 36px;
  margin: 15px 100px;
}

.about_section_me {
  width: 50%;
}

article {
  border: 1px solid #222;
  border-radius: 25px;
  box-sizing: border-box;
}

.about_myProfil_article {
  background-color: #1f1a0f;
  height: 650px;
  position: relative;
}

.about_profil_divBox:active {
  animation: opo 1s;
  opacity: 0;
}

@keyframes opo {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

@media (max-width: 1280px) {
  .about_MyName_h4 {
    margin: 10px 75px;
  }
  .about_profil_img img {
    width: 75%;
    margin-top: 5px;
  }
}

@media (max-width: 1024px) {
  .about_section_us {
    width: 100%;
  }
  .about_MyName_h4 {
    font-size: 14px;
    line-height: 28px;
    margin: 10px 55px;
  }
}

@media (max-width: 768px) {
  .about_box {
    margin: 0 auto 110px;
    transition: all 1.5s;
  }

  .about_title {
    font-size: 64px;
  }

  .about_section_wrap {
    flex-direction: column;
    align-items: center;
  }

  .about_myProfil_article {
    height: 362px;
  }

  .about_section_me {
    width: 70%;
  }

  .about_profil_img img {
    width: 55%;
  }

  .about_profil_divBox {
    top: 55px;
    left: 105px;
  }
  .about_skill_title {
    margin-bottom: 55px;
  }
  .about_MyName_h1 {
    font-size: 18px;
  }

  .about_MyName_h4 {
    font-size: 12px;
    line-height: 24px;
    margin: 10px 25px;
  }

  .about_skill_basic_png {
    margin: 5px;
  }

  .about_skill_library_png {
    margin: 5px;
  }

  .about_skill_line {
    display: none;
  }
}
@media (max-width: 400px) {
  .about_section_me {
    width: 100%;
  }
  .about_profil_img img {
    width: 85%;
  }
}
</style>
