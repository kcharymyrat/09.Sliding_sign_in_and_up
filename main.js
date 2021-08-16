const signUpSwitch = document.querySelector("#sign_up_switch");
// console.log(signUpSwitch)
const signInSwitch = document.querySelector("#sign_in_switch");
// console.log(signInSwitch)
const signInUpForm = document.querySelector("#forms");
// console.log(signInUpForm);
const signInUpMenu = document.querySelector("#sign_menu");
// console.log(signInUpMenu);

// element.classList.toggle("mystyle");

const hiddenSectionToggler = (e) => {
    signInUpForm.classList.toggle("move-right");
    signInUpMenu.classList.toggle("move-left");


}

signUpSwitch.addEventListener("click", hiddenSectionToggler);
signInSwitch.addEventListener("click", hiddenSectionToggler);