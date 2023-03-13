<template>
  <div class="am2_wrap">
    <div class="am2">
      <section class="am2_profil_wrap">
        <article>
          <div class="am2_profil_text">
            안녕하세요. <br />
            <span class="am2_mn">정겨운</span>입니다.
          </div>
        </article>
        <article>
          <div>
            <img class="am_img" src="../assets/img/my_self_nobg.png" alt="">
          </div>
        </article>
      </section>
      <section>
        <article>
          <div>
            <h2 class="am2_subtitle">학력</h2>
            <ul v-for="item in education">
              <li>{{ item }}</li>
            </ul>
          </div>
        </article>
        <article>
          <div>
            <h2 class="am2_subtitle">기술</h2>
            <ul v-for="item in skill">
              <li>{{ item }}</li>
            </ul>
          </div>
        </article>
      </section>
      <section>
        <article>
          <div>
            <h2 class="am2_subtitle">경력</h2>
            <ul>
              <li>엠지푸드 솔루션 2019.03-2022.04</li>
            </ul>
          </div>
        </article>
        <article>
          <div>
            <h2 class="am2_subtitle">자격증</h2>
            <ul v-for="item in certificate">
              <li>{{ item }}</li>
            </ul>
          </div>
        </article>
        <article>
          <div>
            <h2 class="am2_subtitle">취미</h2>
            <ul v-for="item in hobby">
              <li>{{ item }}</li>
            </ul>
          </div>
        </article>
      </section>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        education: [
          '경복대학교 (복지행정학과)',
          '노원그린아카데미 수료'
        ],
        skill: [
          'HTML', 'CSS', 'JaveScript', 'nodeJS', 'MySQL', 'VUEJS',  
        ],
        certificate: [
          '운전면허 1종보통',
          'SCA 커피전문 intermediate'
        ],
        hobby: [
          '영화 및 애니메이션 시청',
          '전시회 관람',
          '독서 할 도서 구매 [읽지 않고 모으기]'
        ]
      }
    },
    setup() {

    }
  }
</script>
<style scoped lang="scss">
  .am2_wrap{
    width : 100%;
    height: 900px;
    padding-top: 50px;
  }
  .am2 {
    max-width: 1440px;
    width: 100%;
    color: #111;
    // background-color: #55f;
    margin: auto;
    display: flex;
    align-items: stretch;
    gap : 10px;
  }

  .am2_mn {
    font-weight: bold;
    color: #BFAF0F;
  }
  .am2_profil_text{
    font-size : 34px;
  }
  .am2 section {
    margin-left: 110px;
    flex : 1;
  }

  .am2 article {
    margin-bottom: 95px;
  }

  .am2 section:nth-child(1) {
    margin-left: 0;
  }
  .am2 li {
    margin-bottom: 15px;
    font-size : 18px;
  }
  .am_img{
    width : 350px;
    height: 450px;
  }
  .am2_subtitle {
    text-align: justify;
    color: #101;
    font-size: 32px;
    font-weight: bold;
    text-shadow: 1px 3px 1px #ccc;
    margin-bottom: 15px;
  }
</style>