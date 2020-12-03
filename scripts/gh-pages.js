const ghpages = require("gh-pages");

ghpages.publish(
  "__sapper__/export/mvkump.dev",
  {
    branch: "master",
    repo: "https://github.com/kumpmati/mvkump.dev.git",
    user: {
      name: "kumpmati",
      email: "kumpulainen.matias@gmail.com",
    },
  },
  () => {
    console.log("Deploy Complete!");
  }
);
