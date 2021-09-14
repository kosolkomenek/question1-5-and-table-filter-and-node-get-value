import fetch from "node-fetch";
globalThis.fetch = fetch;

function thisIsSyncFunction() {
  return new Promise((resolve) => {
    fetch("https://api.github.com/users/xiaotian/repos")
      .then((res) => res.json())
      .then((response) => {
        resolve(response.data);
      });
  });
}
const number1 = await thisIsSyncFunction();
const calculation = number1 * 10;
console.log(calculation);
