import { createNode, append } from "./function.js";
import {validate} from"./validate.js";

export function login(){

let div = document.createElement("div");
document.body.append(div);
div.classList.add("container");
div.setAttribute("id", "container-log");

let div1 = createNode("div");
div1.classList.add("img-box");
let img = createNode("img");
img.src = "./cvg/img1.svg";

let div2 = createNode("div");
div2.classList.add("form-box");
let form = createNode("form");

form.classList.add("form");
form.classList.add("form-log");

let h2 = createNode("h2");
h2.innerHTML = "Login";

let label = createNode("label");
label.innerHTML = "email";
label.setAttribute("for", "emailLog");
let input = createNode("input");
input.setAttribute("type", "email");
input.setAttribute("id", "emailLog");

let label1 = createNode("label");
label1.innerHTML = "password";
label1.setAttribute("for", "passwordLog");
let input1 = createNode("input");
input1.setAttribute("type", "password");
input1.setAttribute("id", "passwordLog");

let p = createNode("p");
p.innerHTML = "Not a user? ";
let span = createNode("span");
span.innerHTML = "Register now";

let a = createNode("a");
a.classList.add("btn");
a.classList.add("btn-login");
a.innerHTML = "login";
a.setAttribute("href", "./index2.html");

append(div, div1);
append(div, div2);
append(div1, img);
append(div2, form);

append(form, h2);
append(form, label);
append(form, input);
append(form, label1);
append(form, input1);
append(form, p);
append(p, span);
append(form, a);
}

login()
// =====================================================


let emailLog = false;
let passwordLod = false;

const emailLogin = document.querySelector("#emailLog");
const passwordLogin = document.querySelector("#passwordLog");


let returnEMailLS = JSON.parse(localStorage.getItem("KeyEmail"));
console.log(returnEMailLS);

let returnPasswordLS = JSON.parse(localStorage.getItem("KeyPass"));
console.log(returnPasswordLS);

function emailEnterValidation() {
  if (emailLogin.value === returnEMailLS) {
    emailLogin.classList.remove("error");
    emailLogin.classList.add("verified");
    emailLog = true;
  } else {
    emailLogin.classList.add("error");
    emailLogin.classList.remove("verified");
    // emailLogin.value = "";
    emailLog = false;
  }
}

emailLogin.addEventListener("change", emailEnterValidation);

function passwordEnterValidation() {
    if (passwordLogin.value === returnPasswordLS) {
        passwordLogin.classList.remove("error");
        passwordLogin.classList.add("verified");
        passwordLod = true;
    } else {
        passwordLogin.classList.add("error");
        passwordLogin.classList.remove("verified");
        // passwordLogin.value =  "";
        passwordLod = false;
    }
  }

  passwordLogin.addEventListener("change", passwordEnterValidation);

//   function loginСorrect (){
//     if( emailLog === true || passwordLod === true ){
//         alert("Пароль и логин верны!!!")
//     } 
//   }
// loginСorrect ()
// ==================================================
// 