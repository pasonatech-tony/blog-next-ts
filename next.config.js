const { withContentlayer } = require("next-contentlayer");

const apiRewrite = {
  source: "/api/views/:path*",
  destination: "https://blog-next-ts-hazel.vercel.app/api/views/:path*",
};

module.exports = withContentlayer({
  async rewrites() {
    return [apiRewrite];
  },
});
