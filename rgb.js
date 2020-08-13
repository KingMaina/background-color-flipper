const btn = document.getElementById('btn');
const color = document.querySelector('.color');


const changeBackgroundRgbaColor = () =>{
    let rgb = [];
    for(let i=0; i<3; i++){
        let randomNumber = Math.floor(Math.random() * 256);
        rgb.push(randomNumber);
    }

    document.body.style.backgroundColor = 'rgb(' +rgb[0] + ','+ rgb[1]+ ',' + rgb[2] + ')';
    color.textContent = "rgb("+ rgb+ ")";
}

btn.addEventListener("click", changeBackgroundRgbaColor);