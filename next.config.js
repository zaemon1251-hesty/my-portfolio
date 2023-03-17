module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'tiny-images-mori.s3.ap-northeast-1.amazonaws.com', 
      'portfolio-backend-lqkw.onrender.com',
      'pbs.twimg.com'
    ],
  },
  env: {
    CMS_URL:"https://portfolio-backend-lqkw.onrender.com/api/cms",
    NEWS_URL:"https://newsapi.org/v2/top-headlines",
    TWITTER_URL:"https://api.twitter.com",
    REACT_APP_API_ENDPOINT_URL:"https://dmxjf92174.execute-api.ap-northeast-1.amazonaws.com/production"
  },
}