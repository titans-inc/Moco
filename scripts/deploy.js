const ghPages = require("gh-pages");
const fs = require("fs");

fs.copyFile("README.md", "dist/expo/README.md", (err) => {
  if (err) {
    throw err;
  }
  else {
    ghPages.publish("dist/expo", function (err) {
      if(err) {
        console.log(err);
      }
    });
  }
});
