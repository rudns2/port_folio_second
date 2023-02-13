<template>
  <div class="project">
    <div class="project_box">
      <h1 class="project_h1">프로젝트</h1>
      <section class="project_slide_wrap">
        <article class="project_slide_content">
          <div class="project_img_wrap">
            <div class="project_img_list">
              <img src="../assets/img/wonju-env-eba-vmtpngwa-ap-northeast-2-elasticbeanstalk-2023-01-04-09_26_two1.png" alt="" />
              <div class="project_links">
                <h1>{{ projectSite[0] }}</h1>
                <a href="#"><img src="../assets/img/github-mark-white.png" alt="" /></a>
              </div>
            </div>
            <div class="project_img_list">
              <img src="../assets/img/hm-127-0-0-1-3030-main-2023-01-03-10_40_1-2.png" alt="" />
              <div class="project_links">
                <h1>{{ projectSite[1] }}</h1>
                <a href="https://github.com/rudns2/hm_1223.git"><img src="../assets/img/github-mark-white.png" alt="" /></a>
              </div>
            </div>
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
      projectSite: ["원주곤충마을박물관", "H&M"],
    };
  },
  setup() {},
};
</script>
<style scoped lang="scss">
.project {
  width: 100%;
  padding-bottom: 110px;
}
.project_box {
  max-width: 1400px;
  margin: 0 auto 110px;
  padding-top: 50px;
}

.project_h1 {
  color: #000;
  font-size: 64px;
  font-weight: bold;
  text-align: justify;
  margin-bottom: 35px;
}

.project_img_wrap {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 15px;
}

.project_img_wrap div {
  width: 100%;
}
.project_img_list img {
  width: 100%;
}
.project_links{
  background-color: #bfaf0f;
}
.project_links img {
  width: 35px;
  height: 35px;
}
@media (max-width: 1024px) {
  .project_h1 {
    font-size: 50px;
  }

  .project_img_wrap {
    flex-direction: column;
  }

  .project_img_wrap div {
    width: 75%;
  }
}

@media (max-width: 768px) {
  .project_h1 {
    font-size: 48px;
  }

  .project_img_wrap div {
    width: 95%;
  }
  .project_img_wrap img {
    width: 50%;
  }
}
@media (max-width: 1024px) {
  .project_h1 {
    font-size: 50px;
  }

  .project_img_wrap {
    flex-direction: column;
  }

  .project_img_wrap img {
    width: 75%;
  }
}

@media (max-width: 768px) {
  .project_h1 {
    font-size: 48px;
  }

  .project_img_wrap img {
    width: 95%;
  }
}
</style>
