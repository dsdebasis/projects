const lowerChar = ['a','b','c','d','e']

const upperChar = ['A','B','C','D','E',];
//   
const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const symbol = ['!','@','#','%','^','&','*'];

// let pl = document.getElementById("len");

let uCase = document.getElementById("uc");
let lCase = document.getElementById("lc");
let num = document.getElementById("num");
let sym = document.getElementById("sym");
let len = document.getElementById("len");

let btnOne = document.querySelector("#btn-one");
let pg = document.getElementById("Password");

let pass = [];
let fchar = [];
let fpassword = "";

function selected() {
  if (uCase.checked == true) {
    fchar = pass.concat(upperChar);
  }
  if (lCase.checked == true) {
    fchar = fchar.concat(lowerChar);
  }
  if (num.checked == true) {
    fchar = fchar.concat(number);
  }
  if (sym.checked == true) {
    fchar = fchar.concat(symbol);
  }
  return fchar;
}
function makePass() {
  selected();
  for (let i = 1; i <= len.value; i++) {
    fpassword += fchar[Math.floor(Math.random() * fchar.length)];
  }
  
  pg.textContent =  fpassword;
}
btnOne.addEventListener('click',makePass);


let clip = document.querySelector("#btn-two")

function clipText(){

  navigator.clipboard.writeText(fpassword)
}
clip.addEventListener('click',clipText);

setTimeout(function(){
  alert('generate again');
  btnOne.removeEventListener('click',makePass);
},30000)


