const { withContentlayer } = require("next-contentlayer");

/* A rewrite rule that is used to proxy the API requests to the correct location. */
const apiRewrite = {
  source: "/api/views/:path*",
  destination: "https://blog-next-ts-hazel.vercel.app/api/views/:path*",
};

module.exports = withContentlayer({
  async rewrites() {
    return [apiRewrite];
  },
});
