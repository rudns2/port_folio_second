<template>
  <div class="head_box">
    <div class="nav_wrap" ref="nav" @scroll="windowOnscroll()">
      <nav class="head_main_nav">
        <ul class="nav_ul">
          <li class="gotosec"><span class="I_a head_span">Intro</span><span class="I_b gotosec head_span" data-target="Intro" @click="goSection">소개</span></li>
          <li class="gotosec"><span class="A_a head_span">About</span><span class="A_b gotosec head_span" data-target="About" @click="goSection">나에대해서</span></li>
          <li class="gotosec"><span class="W_a head_span">WebClon</span><span class="W_b gotosec head_span" data-target="Webclon" @click="goSection">웹클론</span></li>
          <li class="gotosec"><span class="P_a head_span">Project</span><span class="P_b gotosec head_span" data-target="Project" @click="goSection">프로젝트</span></li>
          <li class="gotosec"><span class="C_a head_span">Contact</span><span class="C_b gotosec head_span" @click="goSection" data-target="Contact">연락하기</span></li>
          <li class="gotosec"><span class="I_a head_span">Intro</span><span class="I_b gotosec head_span" data-target="Intro" @click="goSection">소개</span></li>
          <li class="gotosec"><span class="A_a head_span">About</span><span class="A_b gotosec head_span" data-target="About" @click="goSection">나에대해서</span></li>
          <li class="gotosec"><span class="P_a head_span">Project</span><span class="P_b gotosec head_span" data-target="Project" @click="goSection">프로젝트</span></li>
          <li class="gotosec"><span class="W_a head_span">WebClon</span><span class="W_b gotosec head_span" data-target="Webclon" @click="goSection">웹클론</span></li>
          <li class="gotosec"><span class="C_a head_span">Contact</span><span class="C_b gotosec head_span" @click="goSection" data-target="Contact">전화하기</span></li>
        </ul>
      </nav>
      <div class="head_date">
        <span class="head_date_span">{{ now }}</span>
        <button class="head_date_btn" @click="time">지금시간은?</button>
      </div>
      <div class="head_mobile_wrap" v-on:click="mobilMouseover">
        <nav class="head_mobile_nav">
          <span></span>
          <span></span>
          <span></span>
        </nav>
        <nav class="h_m_map">
          <div class="gotosec" data-target="Intro" @click="goSection">INTRO<span></span></div>
          <div class="gotosec" data-target="About" @click="goSection">ABOUT<span></span></div>
          <div class="gotosec" data-target="Webclon" @click="goSection">WEBCLONE<span></span></div>
          <div class="gotosec" data-target="Project" @click="goSection">PROJECT<span></span></div>
          <div class="gotosec" data-target="Contact" @click="goSection">CONTACT<span></span></div>
        </nav>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";

export default {
  data() {
    return {
      now: "",
    };
  },
  mounted() {
    this.updateNow();
    setInterval(this.updateNow.bind(this), 1000);
  },
  methods: {
    goSection(e) {
      if (!e.target.matches(".gotosec")) return;
      e.preventDefault();
      const secNav = document.getElementById(e.target.dataset.target);
      if (secNav) {
        secNav.scrollIntoView({
          behavior: "smooth",
        });
      }
    },
    mobilMouseover(e) {
      let HM = document.querySelector(".h_m_map");
      HM.classList.toggle("active");
    },
    updateNow() {
      this.now = this.setDate().year + "-" + this.setDate().month + "-" + this.setDate().date + "-" + this.setDate().hh + ":" + this.setDate().mm + ":" + this.setDate().ss;
    },
    setDate() {
      let year = new Date().getFullYear();
      let month = new Date().getMonth() + 1 < 10 ? "0" + (new Date().getMonth() + 1) : new Date().getMonth() + 1;
      let date = new Date().getDate() < 10 ? "0" + new Date().getDate() : new Date().getDate();
      let hh = new Date().getHours() < 10 ? "0" + new Date().getHours() : new Date().getHours();
      let mm = new Date().getMinutes() < 10 ? "0" + new Date().getMinutes() : new Date().getMinutes();
      let ss = new Date().getSeconds() < 10 ? "0" + new Date().getSeconds() : new Date().getSeconds();
      return {
        "year": year,
        "month": month,
        "date": date,
        "hh": hh,
        "mm": mm,
        "ss": ss,
      };
    },
  },
};
</script>

<style scoped lang="scss">
.head_box {
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid;
  background-color: #222;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  transition: all 1s;
  color: #ddd;
}
.head_box {
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid;
  background-color: #222;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000000000000000000000;
  transition: all 1s;
  color: #ddd;
}
.nav_wrap {
  max-width: 1400px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 2rem;
}

.head_date_btn {
  border: 0;
  margin: 0 15px;
  box-shadow: 1px 1px 3px #222;
}

.head_date_btn:active {
  background-color: #222;
  color: #eee;
}
.nav_ul {
  width: 100%;
  display: flex;
  gap: 10px;
}

.nav_btn {
  display: block;
  width: 50px;
  height: 20px;
  color: #fff;
  background-color: #232323;
  border-radius: 10px;
}
.gotosec {
  list-style: none;
  font-size: 24px;
  padding: 0 10px;
  cursor: pointer;
}
.gotosec:hover .I_a {
  display: none;
}
.I_b {
  display: none;
}

.gotosec:hover .I_b {
  display: block;
}

.gotosec:hover .A_a {
  display: none;
}

.A_b {
  display: none;
}

.gotosec:hover .A_b {
  display: block;
}

.gotosec:hover .P_a {
  display: none;
}

.P_b {
  display: none;
}

.gotosec:hover .P_b {
  display: block;
}

.gotosec:hover .W_a {
  display: none;
}

.W_b {
  display: none;
}

.gotosec:hover .W_b {
  display: block;
}

.gotosec:hover .C_a {
  display: none;
}

.C_b {
  display: none;
}

.gotosec:hover .C_b {
  display: block;
}

.head_mobile_wrap {
  display: none;
  position: relative;
}

.head_mobile_nav span {
  display: block;
  width: 35px;
  height: 3px;
  margin: 5px 0;
  background-color: #52734d;
}

.h_m_map {
  display: none;
  width: 100px;
  height: 125px;
  background-color: #52734d;
  position: absolute;
  top: 35px;
  left: -63px;
}

.h_m_map.active {
  display: block;
}

@media (max-width: 1280px) {
  .head_date_span {
    font-size: 18px;
  }

  .nav_ul {
    width: 100%;
    display: flex;
    gap: 10px;
  }

  .nav_btn {
    display: block;
    width: 50px;
    height: 20px;
    color: #fff;
    background-color: #232323;
    border-radius: 10px;
  }

  .gotosec {
    font-size: 16px;
  }
}

@media (max-width: 1024px) {
  .gotosec:hover .I_a {
    display: none;
  }

  .I_b {
    display: none;
  }

  .head_mobile_wrap {
    display: none;
  }

  .head_mobile_nav span {
    display: block;
    width: 35px;
    height: 3px;
    margin: 5px 0;
    background-color: #52734d;
  }

  .h_m_map {
    display: none;
    width: 100px;
    height: 100px;
    background-color: #52734d;
    position: absolute;
  }

  .h_m_map.active {
    display: block;
  }
}
</style>
