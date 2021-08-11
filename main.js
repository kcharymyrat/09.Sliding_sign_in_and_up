const signUpSwitch = document.querySelector("#sign_up_switch");
// console.log(signUpSwitch)
const signInSection = document.querySelector("#sign_in");
// console.log(signInSection);

signInSection.addEventListener('click', (e) => {
    // console.log(signInSection.style);
    signInSection.style.flexDirection = "row-reverse";
})