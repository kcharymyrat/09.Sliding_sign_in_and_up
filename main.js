const signUpSwitch = document.querySelector("#sign_up_switch");
// console.log(signUpSwitch)
const signInSwitch = document.querySelector("#sign_in_switch");
// console.log(signInSwitch)
const signInFillSection = document.querySelector("#sign_in_fill");
// console.log(signInFillSection);
const signUpFillSection = document.querySelector("#sign_up_fill");
// console.log(signUpFillSection);

// element.classList.toggle("mystyle");

const hiddenSectionToggler = (e) => {
    signInFillSection.classList.toggle("hidden");
    signUpFillSection.classList.toggle("hidden");
}

signUpSwitch.addEventListener("click", hiddenSectionToggler);
signInSwitch.addEventListener("click", hiddenSectionToggler);