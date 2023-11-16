const lowerChar = ["a", "b", "c", "d", "e"];

const upperChar = ["A", "B", "C", "D", "E"];
//
const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const symbol = ["!", "@", "#", "%", "^", "&", "*"];

// let pl = document.getElementById("len");

let uCase = document.getElementById("uc");
let lCase = document.getElementById("lc");
let num = document.getElementById("num");
let sym = document.getElementById("sym");
let len = document.getElementById("len");

let btnOne = document.querySelector("#btn-one");
let pg = document.getElementById("Password");
let clip = document.querySelector("#btn-two");
let pass = [];
let fchar = [];
let fpassword = "";
let clicked = 0;
let sendPass = "";
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
  if (len.value >= 4) {
    for (let i = 1; i <= len.value; i++) {
      fpassword += fchar[Math.floor(Math.random() * fchar.length + 1)];
    }
  }

  pg.textContent = fpassword;
  clicked = 1;
  sendPass = fpassword;
  fpassword = "";
  if (
    uCase.checked == true ||
    lCase.checked == true ||
    num.checked == true ||
    (sym.checked == true && len.value > 0)
  ) {
    pg.style.borderColor = "black";
  }
}

//adding the click event which generates new password

function clipText() {
  navigator.clipboard.writeText(sendPass);
  if (clicked == 1) {
    pg.style.borderColor = "white";
    pg.textContent = " Click Generate button again for new ";
  }

  fpassword = "";
}

btnOne.addEventListener("click", makePass);

clip.addEventListener("click", clipText);
