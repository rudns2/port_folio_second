<template lang="">
  <div class="contact">
    <div class="contact_box">
      <div class="contact_wrap">
        <div class="contact_right_content">
          <div class="contact_myCall" data-aos="fade-down" data-aos-duration="1500" data-aos-delay="550">
            <ul class="contact_myCall_ul">
              <li>
                <div class="contact_myCall_li">
                  <h4>Location</h4>
                  <span>-</span>
                  <h4>경기도 양주시</h4>
                </div>
              </li>
              <li>
                <div class="contact_myCall_li">
                  <h4>Name</h4>
                  <span>-</span>
                  <h4>정겨운</h4>
                </div>
              </li>
              <li>
                <div class="contact_myCall_li">
                  <h4>Number</h4>
                  <span>-</span>
                  <h4>01086959006</h4>
                </div>
              </li>
              <li>
                <div class="contact_myCall_li">
                  <h4>Github</h4>
                  <span>-</span>
                  <h4>https://github.com/rudns2</h4>
                </div>
              </li>
              <li>
                <div class="contact_myCall_li">
                  <h4>Email</h4>
                  <span>-</span>
                  <h4>rudns531@gmail.com</h4>
                </div>
              </li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
    <marquee enter-class="">저의 포트폴리오를 읽어주셔서 감사합니다.</marquee>
  </div>
</template>
<script>
  export default {
    data() {
      return {};
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
    },
    setup(props) {},
  };
</script>
<style scoped lang="scss">
  marquee {
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    font-size: 24px;
    font-weight: bold;
    color: #ccc;
    padding: 5px;
  }

  .contact {
    width: 100%;
    height: 90vh;
    background-color: #121212;
  }
  .contact_box {
    width: 100%;
    max-width: 1400px;
    margin: 110px auto;
    padding-top: 100px;
  }
  .contact_h1 {
    font-size: 48px;
    font-weight: 700;
    text-align: justify;
  }
  .contact_right_content {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .contact_img_idPhoto {
    box-sizing: border-box;
  }

  .contact_myCall {
    padding: 10px;
    margin-bottom : 15px;
  }

  .contact_myCall_ul {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
    margin-left: 35px;
  }

  .contact_myCall_li {
    display: flex;
    color: #eee;
  }

  .contact_myCall_li h4 {
    font-size: 24px;
  }

  .contact_myCall_li span {
    margin: auto 15px;
  }

  .contact_siteMap {
    height: 320px;
    background-color: #584f00;
    border: 1px solid #222;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 10px;
  }

  .contact_nav_wrap ul {
    display: flex;
    justify-content: space-evenly;
  }

  .gotosec {
    font-size: 24px;
    color: #eee;
    cursor: pointer;
  }

  .contact_h1 {
    color: #ddd;
    text-align: center;
    font-size: 32px;
    font-weight: bold;
  }

  @media (max-width: 1280px) {
    .contact_count h1 {
      font-size: 18px;
    }

    .count_btn {
      top: 235px;
      right: 103px;
    }
  }

  @media (max-width: 768px) {
    .contact_box {
      height: 860px;
      margin: 110px auto;

      width: 100%;
      max-width: 1400px;
      height: 460px;
      margin: auto;
    }

    .contact_h1 {
      font-size: 48px;
      font-weight: 700;
      text-align: justify;
    }

    .contact_wrap {
      display: flex;
      justify-content: space-evenly;
      gap: 15px;
      position: relative;
    }

    .contact_wrap {
      flex-direction: column;
    }

    .contact_right_content div {
      flex: 1;
    }

    .contact_myProfil {
      margin-top: 15px;
    }

    .contact_count h1 {
      color: #fff;
    }

    .count_btn {
      border: 0;
      box-shadow: 1px 1px 5px #000;
      padding: 10px;
      position: absolute;
      top: 250px;
      right: 143px;
      font-weight: bold;
      border-radius: 10px;
    }

    .count_btn:active {
      color: #fff;
      background-color: #222;
      box-shadow: 1px 1px 5px #ccc;
    }

    .contact_myProfil {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 5px;
    }

    .contact_myProfil img {
      width: 50%;
      border-radius: 10px;
    }

    .contact_right_content {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    .contact_img_idPhoto {
      border: 1px solid #000;
      box-sizing: border-box;
    }

    .contact_myCall {
      background-color: #bfaf0f;
      border: 1px solid #222;
      border-radius: 10px;
      padding: 10px;
      box-sizing: border-box;
    }

    .contact_myCall_ul {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 15px;
      margin-left: 35px;
    }

    .contact_myCall_li {
      display: flex;
      color: #eee;
    }

    .contact_myCall_li h4 {
      font-size: 16px;
    }

    .contact_nav_wrap ul {
      flex-wrap: wrap;
    }

    .contact_nav_wrap ul li {
      width: 50%;
      margin: 15px auto;
    }

    .gotosec {
      font-size: 24px;
      color: #eee;
    }
  }
</style>