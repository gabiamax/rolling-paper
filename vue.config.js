const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/scss/base/_variables.scss";
        `,
      },
    },
    sourceMap: process.env.NODE_ENV !== 'production',
  },
  productionSourceMap: false,
});
