let one = document.getElementById('result');
function rs(){
		one.innerHTML = +one.innerHTML +1;
}
let ones = document.getElementById('result2');
function sr(){
		ones.innerHTML = +one.innerHTML +1;
}
localStorage("key", one, ones)