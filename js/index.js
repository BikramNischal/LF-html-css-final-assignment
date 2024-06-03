

//get body reference 
const body = document.querySelector("body");

//get theme button reference 
const themeToggleBtn = document.querySelector(".theme-button");

//get toggle button icon reference
const toggleBtnIcon = document.querySelector(".theme-button__icon");


function themeToggle(){
    if(body.classList.length){
        toggleBtnIcon.src = "../public/moon-dark.svg";
        body.classList.toggle("dark-mode");
    } else {
        toggleBtnIcon.src = "../public/sun-light.svg";
        body.classList.toggle("dark-mode");
    }
}

themeToggleBtn.onclick = themeToggle;
