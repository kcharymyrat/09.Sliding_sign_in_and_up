const signUpSwitch = document.querySelector("#sign_up_switch");
// console.log(signUpSwitch)
const signInSwitch = document.querySelector("#sign_in_switch");
// console.log(signInSwitch)
const signInUpForm = document.querySelector("#forms");
// console.log(signInUpForm);
const signInUpMenu = document.querySelector("#sign_menu");
// console.log(signInUpMenu);
const formSignIn = document.querySelector("#sign_in_form")
const formSignUp = document.querySelector("#sign_up_form")
const menuSignIn = document.querySelector("#sign_in_menu")
const menuSignUp = document.querySelector("#sign_up_menu")

const hiddenSectionToggler = (e) => {
    // signInUpForm.classList.toggle("move-right");
    // signInUpMenu.classList.toggle("move-left");
    formSignUp.classList.toggle("move-left");
    menuSignIn.classList.toggle("move-right");


}

signUpSwitch.addEventListener("click", hiddenSectionToggler);
signInSwitch.addEventListener("click", hiddenSectionToggler);