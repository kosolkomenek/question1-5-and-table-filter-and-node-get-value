https://codepen.io/domrongpon-tanpaibul/pen/YzGyBZq?editors=1010const 
const dlg = document.getElementById('dlg');
const test = dlg.getElementsByTagName('button');
test[0].addEventListener('click', function(event) {
  event.preventDefault();
});
