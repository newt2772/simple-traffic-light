let lights = document.querySelectorAll('.light');
console.log(lights);

let currentLight = 0;

//initializing 1st light
lights[currentLight].classList.add('active');
setInterval(() => {
    changeLight();
}, 2000);

const changeLight = () => {
    //turn off the light
    lights[currentLight].classList.remove('active');

    //move to next light
    currentLight++; //0 1 2 only avilable

    if(currentLight >= lights.length) {
        currentLight = 0; //reset to first light
    }

    //turn on the next light
    lights[currentLight].classList.add('active');

}

