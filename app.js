let stepOne = document.getElementById("step-1");
let stepTwo = document.getElementById("step-2");
let stepThree = document.getElementById("step-3");
let message = document.getElementById("message");

//I am going to hide last two steps and the message
stepTwo.style.display = "none";
stepThree.style.display = "none";
message.style.display = "none";

// I am going to add event listener to the divs and I am going to target the buttons to do stuffs 

stepOne.addEventListener("click", (event) => {
    if(event.target.classList.contains("next-btn")){
        console.log("next button in step one was clicked");
        stepOne.style.display = "none";
        stepTwo.style.display = "block";
    }
})

stepTwo.addEventListener("click", (event) => {
    if(event.target.classList.contains("next-btn")){
        console.log("next button in step two was clicked");
        stepTwo.style.display = "none";
        stepThree.style.display = "block";
    }
    else if(event.target.classList.contains("previous-btn")){
        console.log("previous button in step two was clicked");
        stepTwo.style.display = "none";
        stepOne.style.display = "block";
    }
})

stepThree.addEventListener("click", (event) => {
    if(event.target.classList.contains("next-btn")){
        console.log("next button in step three was clicked");
        stepThree.style.display = "none";
        message.style.display = "block";
    }
    else if(event.target.classList.contains("previous-btn")){
        console.log("previous button in step three was clicked");
        stepThree.style.display = "none";
        stepTwo.style.display = "block";
    }
})