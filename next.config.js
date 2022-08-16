const { withPlaiceholder } = require('@plaiceholder/next');

module.exports = withPlaiceholder({
  reactStrictMode: true,
  images: {
    // this is wrong in all aspects, i'll try to configure BE to use our own domain
    domains: [
      'm.media-amazon.com',
      'encrypted-tbn0.gstatic.com',
      'encrypted-tbn1.gstatic.com',
      'encrypted-tbn2.gstatic.com',
      'encrypted-tbn3.gstatic.com',
      'encrypted-tbn4.gstatic.com',
      'encrypted-tbn5.gstatic.com',
      'encrypted-tbn6.gstatic.com',
      'encrypted-tbn7.gstatic.com',
      'encrypted-tbn8.gstatic.com',
      'encrypted-tbn9.gstatic.com',
      'i0.wp.com',
      'pbs.twimg.com',
      'upload.wikimedia.org',
      'flxt.tmsimg.com',
    ],
  },
});
