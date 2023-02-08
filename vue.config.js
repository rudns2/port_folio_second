const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave :false,
  publicPath : '',
  css : {
    loaderOptions : {
        sass : {
            additionalData: 
              `@import "@/assets/scss/reset.scss";`
        }
    }
  },
})
