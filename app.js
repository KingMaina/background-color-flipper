const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

const changeBackGroundColor = () => {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
}

// function to get a random number between 0 and 3
const getRandomNumber = () => Math.floor(Math.random() * colors.length);

// add listener for click event
btn.addEventListener('click', changeBackGroundColor);
