

//get body reference 
const body = document.querySelector("body");

//get theme button reference 
const themeToggleBtn = document.querySelector(".theme-button");

function themeToggle(){
    if(body.classList.length){
        //change button icon dark
        themeToggleBtn.textContent="🌚" 
        body.classList.toggle("dark-mode");
    } else {
        //change button icon to light
        themeToggleBtn.textContent= "️🌝";
        body.classList.toggle("dark-mode");
    }
}

themeToggleBtn.onclick = themeToggle;
