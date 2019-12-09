// const withCSS = require("@zeit/next-css");
const nextRuntimeDotenv = require("next-runtime-dotenv");

const withConfig = nextRuntimeDotenv({
  public: ["SITE_NAME", "SITE_URL", "SITE_DESCRIPTION", "DEFAULT_LOGO"]
});

module.exports = withConfig({
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: "empty"
      };
    }

    return config;
  }
});

// withCSS({
//   // Needed to load template.data.gouv.fr CSS
//   // More infos: https://github.com/zeit/next-plugins/issues/266#issuecomment-474721942
//   cssLoaderOptions: {
//     url: false
//   }
// })

