import {createNode, append} from "./function.js";
import {validate} from"./validate.js";


export function registration(){

let div = document.createElement("div");
document.body.append(div);
div.classList.add("container");
div.setAttribute("id", "container-reg");

let div1 = createNode("div");
div1.classList.add("img-box");
div1.classList.add("img-box2");
let img = createNode("img");
img.src = "./cvg/img2.svg";


let div2 = createNode("div");
div2.classList.add("form-box");
let form = createNode("form");
form.classList.add("form");
form.classList.add("form-reg");
let h2 = createNode("h2");
h2.innerHTML = "Registration form";
h2.classList.add("title");

let label1 = createNode("label");
label1.innerHTML = "name";
label1.classList.add("label-form2");
label1.setAttribute("for", "text");

let input1 = createNode("input");
input1.setAttribute("data-type", "name");
input1.setAttribute("id", "name");

let label2 = createNode("label");
label2.innerHTML = "date of birth";
label2.classList.add("label-form2");
label2.setAttribute("for", "date");


let input2 = createNode("input");
input2.setAttribute("data-type", "date");
input2.setAttribute("id", "date");
input2.setAttribute("placeholder", "01.12.1990");

let label3 = createNode("label");
label3.innerHTML = "father’s/mother’s name"
label3.classList.add("label-form2");
label3.setAttribute("for", "father");

let input3 = createNode("input");
input3.setAttribute("data-type", "father");
input3.setAttribute("id", "father");

let label4 = createNode("label");
label4.innerHTML = "email"
label4.classList.add("label-form2");
label4.setAttribute("for", "email");

let input4 = createNode("input");
input4.setAttribute("data-type", "email");
input4.setAttribute("id", "email");

let label5 = createNode("label");
label5.innerHTML = "mobile no.";
label5.classList.add("label-form2");
label5.setAttribute("for", "mobile");

let input5 = createNode("input");
input5.setAttribute("data-type", "tel");
input5.setAttribute("id", "mobile");

let label6 = createNode("label");
label6.innerHTML = "password";
label6.classList.add("label-form2");
label6.setAttribute("for", "password1");

let input6 = createNode("input");
input6.setAttribute("type", "password");
input6.setAttribute("id", "password1");

let label7 = createNode("label");
label7.innerHTML = "re-enter password";
label7.classList.add("label-form2");
label7.setAttribute("for", "password2");

let input7 = createNode("input");
input7.setAttribute("data-type", "rePassword");
input7.setAttribute("id", "password2");

let label8 = createNode("label");
label8.innerHTML = "home number"
label8.classList.add("label-form2");
label8.setAttribute("for", "home");

let input8 = createNode("input");
input8.setAttribute("data-type", "home");
input8.setAttribute("id", "home");

let button = createNode("button");
button.classList.add("btn");
button.classList.add("btn2");
button.innerHTML= ('submit');

append(div, div1);
append(div, div2);
append(div1, img);
append(div2, form);
append(form, h2);


append(form, label1);
append(form, input1);

append(form, label2);
append(form, input2);

append(form, label3);
append(form, input3);

append(form, label4);
append(form, input4);

append(form, label5);
append(form, input5);

append(form, label6);
append(form, input6);


append(form, label7);
append(form, input7);

append(form, label8);
append(form, input8);

append(form, button);

}

registration()