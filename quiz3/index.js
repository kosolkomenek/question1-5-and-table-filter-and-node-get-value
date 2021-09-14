const axios = require("axios");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
axios
  .get("https://codequiz.azurewebsites.net/", {
    headers: { Cookie: "hasCookie=true" },
    withCredentials: true,
  })
  .then((result) => {
    const PageData = result.data;
    process.argv.forEach((value) => {
      if (PageData.includes(value)) {
        const dom = new JSDOM(PageData);
        const document = dom.window.document;
        const elementList = document.getElementsByTagName("td");
        let logNext;
        for (let i = 0; i < elementList.length; i++) {
          if (logNext === true) {
            console.log(elementList[i].innerHTML);
            logNext = false;
          }
          if (elementList[i].innerHTML.trim() === value) {
            logNext = true;
          }
        }
      }
    });
  });
