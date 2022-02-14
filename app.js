let input = document.getElementById("number");
let check = document.querySelector(".check");
let info = document.querySelector(".info");
let attemps = document.querySelector(".attemps");
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

check.addEventListener("click", (e) => {
    let number = input.value;
    console.log(number);
    
    
    if (number == randomNumber && counter > 0) {
        info.innerHTML = "Congratulations you found the number :)";
         
         
    }
    else if (number > randomNumber && counter > 0) {
        info.innerHTML = "Enter a smaller number.."
        
    }
    else if (number < randomNumber && counter > 0) {
        info.innerHTML = "Enter a larger number..";
        
    }
    else {
        info.innerHTML = "Unfortunately you lost";
        check.style.display = "none";
        input.style.display = "none";
        info.style.color = "crimson"
        info.style.fontSize ="40px"
    }
    
});    