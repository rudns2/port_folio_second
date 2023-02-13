<template>
  <div>
    <div class="intro_box">
      <div class="intro_wrap">
        <div class="intro_flex_title">
          <div class="intro_title">
            <svg class="i_svg" width="184" height="400" viewBox="0 0 184 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M183.48 400H0.359863V351.84L46.8399 329.44V70.7199L0.359863 48.3199V0.159912H183.48V48.3199L137.56 70.7199V329.44L183.48 351.84V400Z" />
            </svg>
            <span class="font_128">,</span>
            <svg class="am_svg" width="181" height="74" viewBox="0 0 181 74" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                class="a_path"
                d="M34.3998 0.703857C43.0185 0.703857 49.6745 2.75186 54.3678 6.84786C59.1465 10.8585 61.5358 17.0452 61.5358 25.4079V71.9999H47.3278L43.3598 62.5279H42.8478C40.9705 65.0025 39.0505 67.0505 37.0878 68.6719C35.1252 70.2932 32.8638 71.4452 30.3038 72.1279C27.7438 72.8959 24.6292 73.2799 20.9598 73.2799C17.1198 73.2799 13.6638 72.5119 10.5918 70.9759C7.60517 69.3545 5.21584 66.9225 3.42384 63.6799C1.63184 60.3519 0.73584 56.1705 0.73584 51.1359C0.73584 43.7119 3.16784 38.2505 8.03184 34.7519C12.9812 31.1679 20.2345 29.2052 29.7918 28.8639L41.0558 28.4799V25.4079C41.0558 21.7385 40.2452 19.0505 38.6238 17.3439C37.0025 15.6372 34.7838 14.7839 31.9678 14.7839C29.0665 14.7839 26.0372 15.2959 22.8798 16.3199C19.7225 17.2585 16.5652 18.4532 13.4078 19.9039L7.13584 6.97586C10.8905 5.01319 15.0292 3.47719 19.5518 2.36786C24.1598 1.25852 29.1092 0.703857 34.3998 0.703857ZM35.1678 39.8719C30.1332 40.0425 26.5918 41.1519 24.5438 43.1999C22.5812 45.2479 21.5998 47.9359 21.5998 51.2639C21.5998 54.1652 22.2825 56.2559 23.6478 57.5359C25.0985 58.7305 26.9758 59.3279 29.2798 59.3279C32.5225 59.3279 35.2958 58.1332 37.5998 55.7439C39.9892 53.2692 41.1838 49.8132 41.1838 45.3759V39.6159L35.1678 39.8719Z"
                fill="black"
              />
              <path
                class="m_path"
                d="M157.683 0.831856C165.278 0.831856 170.995 2.87986 174.835 6.97586C178.76 10.9865 180.723 17.4719 180.723 26.4319V71.9999H160.371V31.1679C160.371 26.1332 159.603 22.3785 158.067 19.9039C156.616 17.3439 154.398 16.0639 151.411 16.0639C147.144 16.0639 144.158 17.8559 142.451 21.4399C140.744 25.0239 139.891 30.1865 139.891 36.9279V71.9999H119.411V31.1679C119.411 27.8399 119.07 25.0665 118.387 22.8479C117.79 20.6292 116.851 18.9652 115.571 17.8559C114.291 16.6612 112.584 16.0639 110.451 16.0639C107.55 16.0639 105.246 16.9599 103.539 18.7519C101.918 20.5439 100.766 23.1465 100.083 26.5599C99.4002 29.9732 99.0588 34.1545 99.0588 39.1039V71.9999H78.5788V2.11186H94.0668L97.0108 11.0719H97.7788C99.0588 8.68253 100.638 6.76253 102.515 5.31186C104.478 3.77586 106.696 2.66652 109.171 1.98386C111.731 1.21586 114.462 0.831856 117.363 0.831856C122.142 0.831856 126.152 1.68519 129.395 3.39186C132.723 5.01319 135.326 7.57319 137.203 11.0719H138.355C140.403 7.48786 143.134 4.8852 146.547 3.26386C150.046 1.64252 153.758 0.831856 157.683 0.831856Z"
                fill="black"
              />
            </svg>
          </div>
          <div class="intro_cam">
            <div class="right_chest">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div class="intro_text">
          <h4 class="font_128 test_obj"><span class="font_574">D</span>eveloper <span class="font_574">F</span>ront-end</h4>
        </div>
      </div>
      <button class="intro_btn" @click="arco = !arco"><span></span></button>
      <div>
        <transition name="fadeA">
          <h2 v-if="arco == true">천천히 마우스 휠을 움직여 주세요.</h2>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {

      arco: false,
    };
  },
};
</script>
<style scoped lang="scss">
.i_svg {
  height: 400px;
  transition: all 1s;
}
.i_svg path {
  fill: rgba(82, 115, 77, 0);
  stroke: #000;
  stroke-width: 1px;
  stroke-dasharray: 1550;
  stroke-dashoffset: 1550;
  animation: stroke 8s forwards;
}

@keyframes stroke {
  100% {
    stroke-dashoffset: 0px;
    fill: #fff;
  }
}

.a_path {
  fill: rgba(255, 255, 255, 0);
  stroke: #000;
  stroke-width: 1px;
  stroke-dasharray: 350;
  stroke-dashoffset: 350;
  animation: a_path 6.5s forwards;
}

@keyframes a_path {
  100% {
    stroke-dashoffset: 0;
    fill: #fff;
  }
}

.m_path {
  fill: rgba(255, 255, 255, 0);
  stroke: #000;
  stroke-width: 1px;
  stroke-dasharray: 560;
  stroke-dashoffset: 560;
  animation: m_path 5s forwards;
}

@keyframes m_path {
  100% {
    stroke-dashoffset: 0;
    fill: #fff;
  }
}

.intro_box {
  width: 100%;
  height: 860px;
  padding-top: 50px;
  margin-bottom : 110px;
}

.intro_btn {
  width: 50px;
  height: 50px;
  border: 0;
  border-radius: 50%;
  box-shadow: 1px 1px 3px #222;
  font-size: 24px;
  position: relative;
  margin-top: 35px;
}

.intro_btn span {
  display: block;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #333;
  position: absolute;
  top: 25%;
  left: 25%;
  animation: posi 1.3s infinite ease;
}

.intro_btn:hover {
  cursor: pointer;
}

@keyframes posi {
  0% {
    top: 25%;
  }

  50% {
    top: 50%;
  }

  100% {
    top: 25%;
  }
}

.fadeA-enter-from {
  opacity: 0;
}

.fadeA-enter-active {
  transition: opacity 1s ease-in-out;
}

.fadeA-enter-to {
  opacity: 1;
}

.fadeA-leave-active {
  transition: opacity 1s ease-in-out;
}

.fadeA-leave-to {
  opacity: 0;
}

.intro_flex_title {
  display: flex;
  height: 600px;
}

.intro_title {
  flex: 1;
  border-right: 1px solid #222;
  padding-top: 50px;
  padding-bottom: 35px;
}

.intro_title > h1,
h2,
span {
  display: inline;
}

.intro_cam {
  height: 100%;
  flex: 1;
  position: relative;
  transition: all 1s;
}

.right_chest {
  position: absolute;
  margin: auto;
  top: 20%;
  left: 0;
  right: 0;
  width: 250px;
  height: 250px;
  background-color: #cccccc;
}

.right_chest > span {
  left: 10%;
  top: 10%;
  box-shadow: 0px 0px 25px #000;
  transition: all 1s;
}

.right_chest > span:nth-child(1) {
  position: absolute;
  width: 220px;
  height: 220px;
  background-color: #b0a000;
  left: 6%;
  top: 6%;
  animation: ani 5s infinite;
  animation-delay: 0.3s;
}

.right_chest > span:nth-child(2) {
  position: absolute;
  width: 200px;
  height: 200px;
  background-color: #584f00;
  left: 10%;
  top: 10%;
  animation: ani 5s infinite;
  animation-delay: 0.4s;
}

.right_chest > span:nth-child(3) {
  position: absolute;
  width: 180px;
  height: 180px;
  background-color: #000000;
  left: 14%;
  top: 14%;
  animation: ani 5s infinite;
  animation-delay: 0.5s;
}

.right_chest > span:nth-child(4) {
  position: absolute;
  width: 160px;
  height: 160px;
  background-color: #b0a000;
  left: 18%;
  top: 18%;
  animation: ani 5s infinite;
  animation-delay: 0.6s;
}

.right_chest > span:nth-child(5) {
  position: absolute;
  width: 140px;
  height: 140px;
  background-color: #584f00;
  left: 22%;
  top: 22%;
  animation: ani 5s infinite;
  animation-delay: 0.7s;
}

.right_chest > span:nth-child(6) {
  position: absolute;
  width: 120px;
  height: 120px;
  background-color: #000000;
  left: 26%;
  top: 26%;
  animation: ani 5s infinite;
  animation-delay: 0.8s;
}

@keyframes ani {
  0% {
    transition: 0.7s;
    transform: rotate(0deg);
  }

  20% {
    transition: 0.7s;
    transform: rotate(95deg);
  }

  50% {
    transition: 0.7s;
    transform: rotate(360deg);
  }

  100% {
    transition: 0.7s;
    transform: rotate(0deg);
  }
}

.intro_text {
  border-top: 1px solid #000;
  word-break: keep-all;
}

.font_560 {
  font-size: 480px;
  font-weight: bold;
}

.font_128 {
  color: #000;
  font-size: 128px;
  font-weight: bold;
}

.font_574 {
  color: #bfaf0f;
}

@media (max-width: 1280px) {
  .font_128 {
    font-size: 96px;
    font-weight: bold;
  }
}

@media (max-width: 1024px) {
  .intro_title {
    border-right: 0;
  }

  .intro_cam {
    height: 0;
    flex: 0;
  }

  .right_chest {
    width: 0;
    height: 0;
  }

  .right_chest > span:nth-child(1) {
    width: 0;
    height: 0;
  }

  .right_chest > span:nth-child(2) {
    width: 0;
    height: 0;
  }

  .right_chest > span:nth-child(3) {
    width: 0;
    height: 0;
  }

  .right_chest > span:nth-child(4) {
    width: 0;
    height: 0;
  }
  .right_chest > span:nth-child(3) {
    position: absolute;
    width: 180px;
    height: 180px;
    background-color: #000;
    left: 14%;
    top: 14%;
    animation: ani 5s infinite;
    animation-delay: 0.5s;
  }

  .right_chest > span:nth-child(5) {
    width: 0;
    height: 0;
  }

  .right_chest > span:nth-child(6) {
    width: 0;
    height: 0;
  }

  .font_128 {
    font-size: 72px;
    font-weight: bold;
  }
}

@media (max-width: 768px) {
  .i_svg {
    height: 300px;
  }

  .intro_box {
    height: 760px;
  }

  .font_128 {
    font-size: 48px;
  }

  .intro_btn {
    margin-top: 50px;
  }
}
</style>
