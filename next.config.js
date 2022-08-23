const { withPlaiceholder } = require('@plaiceholder/next');

module.exports = withPlaiceholder({
  reactStrictMode: true,
  images: {
    domains: ['largs-movie-database.s3.amazonaws.com'],
  },
});
