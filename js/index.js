

//get body reference 
const body = document.querySelector("body");

//get theme button reference 
const themeToggleBtn = document.querySelector(".theme-button");

//get theme button icon
const themeIcon = document.querySelector(".theme-button__icon");

function themeToggle(){
    if(body.classList.length){
        themeIcon.textContent= "🌑"
        body.classList.toggle("dark-mode");
    } else {
        themeIcon.textContent= "☀️️";
        body.classList.toggle("dark-mode");
    }
}

themeToggleBtn.onclick = themeToggle;
