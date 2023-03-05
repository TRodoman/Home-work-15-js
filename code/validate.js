
export function validate() {
  let flagBtn = false;
  let name = false;
  let dateOfBirth = false;
  let fatherName = false;
  let phone = false;
  let email = false;
  let password = false;
  let reEnterPassword = false;
  let phoneHome = false;

  const user = {
    name: "",
    dateOfBirth: "",
    fatherName: "",
    email: "",
    phone: "",
    password: "",
    reEnterPassword: "",
    phoneHome: "",
  };

  const validate = (p, v) => p.test(v);

  window.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".form-reg");
    const [...inputsForm] = document.querySelectorAll(".form-reg input");
    const password1 = document.querySelector("#password1");
    const password2 = document.querySelector("#password2");
    const submit = document.querySelector(".btn2");

    function inputValidate() {
      let item = this;

      item.classList.remove("error");

      if (
        item.dataset.type === "date" &&
        validate(
          /^(0?[1-9]|[12][0-9]|3[01]).(0?[1-9]|1[012]).((19|20)\d\d)$/,
          item.value
        )
      ) {
        user.dateOfBirth = item.value;
        item.classList.remove("error");
        item.classList.add("verified");
        dateOfBirth = true;
      } else if (
        item.dataset.type === "name" &&
        validate(/^[а-яієґї'-]{2,}$/gi, item.value)
      ) {
        user.name = item.value.toLowerCase();
        item.classList.remove("error");
        item.classList.add("verified");
        name = true;
      } else if (
        item.dataset.type === "father" &&
        validate(/^[а-яієґї'-]{2,}$/gi, item.value)
      ) {
        user.fatherName = item.value.toLowerCase();
        item.classList.remove("error");
        item.classList.add("verified");
        fatherName = true;
      } else if (
        item.dataset.type === "email" &&
        validate(/^[a-z_.0-9]+@[a-z0-9-.]+\.[a-z.]+$/, item.value)
      ) {
        user.email = item.value.toLowerCase();
        item.classList.remove("error");
        item.classList.add("verified");
        email = true;
      } else if (
        item.dataset.type === "tel" &&
        validate(/^\+380[0-9]{9}$/, item.value)
      ) {
        user.phone = item.value;
        user.phoneHome = item.value;
        item.classList.remove("error");
        item.classList.add("verified");
        phone = true;
      } else if (
        item.type === "password" &&
        validate(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/, item.value)
      ) {
        user.password = item.value;
        item.classList.remove("error");
        item.classList.add("verified");
        password = true;
      } else if (
        item.dataset.type === "rePassword" &&
        password2.value === password1.value
      ) {
        user.reEnterPassword = item.value;
        item.classList.add("verified");
        item.classList.remove("error");
        reEnterPassword = true;
      } else if (
        item.dataset.type === "home" &&
        validate(/^\+380[0-9]{9}$/i, item.value)
      ) {
        user.phoneHome = item.value;
        item.classList.remove("error");
        item.classList.add("verified");
        phoneHome = true;
      } else {
        item.classList.add("error");
        item.classList.remove("verified");
      }
    }

    flagBtn =
      name &&
      phone &&
      email &&
      password &&
      reEnterPassword &&
      phoneHome &&
      fatherName &&
      dateOfBirth
        ? true
        : false;

    inputsForm.forEach((item) => {
      if (
        item.dataset.type === "name" ||
        item.dataset.type === "date" ||
        item.dataset.type === "father" ||
        item.dataset.type === "email" ||
        item.dataset.type === "tel" ||
        item.type === "password" ||
        item.dataset.type === "rePassword" ||
        item.dataset.type === "home"
      ) {
        item.addEventListener("change", inputValidate);
      }
    });

    form.addEventListener("submit", (e) => {
      inputsForm.forEach(function (item) {
        if (
          item.dataset.type === "name" ||
          item.dataset.type === "date" ||
          item.dataset.type === "father" ||
          item.dataset.type === "email" ||
          item.dataset.type === "tel" ||
          item.type === "password" ||
          item.dataset.type === "rePassword" ||
          item.dataset.type === "home"
        ) {
          inputValidate.apply(item);
        }
      });
      e.preventDefault();
    });

    // try{

    //   form.addEventListener("submit", (e) => {
    //       inputsForm.forEach(function (item) {
    //         if (
    //           item.dataset.type === "name" ||
    //           item.dataset.type === "date" ||
    //           item.dataset.type === "father" ||
    //           item.dataset.type === "email" ||
    //           item.dataset.type === "tel" ||
    //           item.type === "password" ||
    //           item.dataset.type === "rePassword" ||
    //           item.dataset.type === "home"
    //         ) {
    //           inputValidate.apply(item);
    //         }
    //       });
    //       e.preventDefault();
    //     });
    // }
    // catch (e){

    // }
    // -------------------------localStorage-----------------------------------------


    const emailField = document.querySelector("#email");
    const password = document.querySelector("#password1");


    submit.addEventListener("click", localStorageBox);

    function updateStorage() {
      const data = [];
      for (let input of inputsForm) {
        data.push(input.value);
      }

      localStorage["user"] = JSON.stringify(data);
      let returnData = JSON.parse(localStorage.getItem("user"));
      console.log(returnData);
     

      let emailLS = emailField.value;
      let serialEmailLS = JSON.stringify(emailLS);
      localStorage.setItem("KeyEmail", serialEmailLS);

  
      let passwordLS = password.value;
      let serialPasswordLS = JSON.stringify(passwordLS);
      localStorage.setItem("KeyPass", serialPasswordLS);

    
    }

    function localStorageBox() {
      const inputEl = inputsForm;
      updateStorage();
    }
  });

}

validate();

// ==================================================================================
