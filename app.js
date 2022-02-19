let input = document.getElementById("number");
let check = document.querySelector(".check");
let info = document.querySelector(".info");
let attemps = document.querySelector(".attemps");
let downNum = document.querySelector(".downNum");
let upNum = document.querySelector(".upNum");
// console.log(upNum.innerHTML);
let counter = 9;
// console.log(attemps);

check.addEventListener("click", () => {
    counter--;
    attemps.innerHTML = `Number of attempts: ${counter}`;

});

let randomNumber = Math.round(Math.random() * 100);
console.log(randomNumber);

input.addEventListener("click", () => {
    input.value = "";
});
input.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
        
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.querySelector(".check").click();
      }
});
check.addEventListener("click", (e) => {
    let number = input.value;
    console.log(number);
    
    
    if (number == randomNumber && counter >= 0) {
        info.innerHTML = "Congratulations you found the number :)";
        check.style.display = "none";
        input.style.display = "none"; 
        info.style.fontSize = "40px"
        
         
    }
    
    else if (number > randomNumber && counter > 0) {
        info.innerHTML = "Enter a smaller number.."
        upNum.innerHTML = input.value
        
    }
    else if (number < randomNumber && counter > 0) {
        info.innerHTML = "Enter a larger number..";
        downNum.innerHTML = input.value
        
    }
    else {
        info.innerHTML = "Unfortunately you lost";
        attemps.innerHTML = `Number :${randomNumber} <br> Number of attempts: ${counter}`;
        check.style.display = "none";
        input.style.display = "none";
        info.style.color = "crimson"
        info.style.fontSize ="40px"
    }
    
});    