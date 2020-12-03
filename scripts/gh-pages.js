const ghpages = require("gh-pages");

ghpages.publish(
  "__sapper__/export",
  {
    branch: "master",
    repo: "https://github.com/kumpmati/kumpmati.github.io.git",
    user: {
      name: "kumpmati",
      email: "kumpulainen.matias@gmail.com",
    },
  },
  () => {
    console.log("Deploy Complete!");
  }
);
