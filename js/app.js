document.addEventListener("DOMContentLoaded", function (){

    // Slider

    const arrLeft = document.getElementById('left');
    const arrRight = document.getElementById('right');
    let slider = document.querySelectorAll('.slide');
    let activeSlide = 0;

    function slideMove(){
        if (activeSlide < 0){
            activeSlide = slider.length-1;
        }
        if (activeSlide >  slider.length-1) {
            activeSlide = 0
        }
        for (let i = 0; i<slider.length; i++){
            slider[i].classList.remove("active");
            window.setTimeout(function () {
                slider[i].classList.add("hidden")
            }, 350);
        }
        window.setTimeout(function () {
            slider[activeSlide].classList.remove("hidden");
        }, 350);
        window.setTimeout(function () {
            slider[activeSlide].classList.add("active");
        }, 500);
    }

    arrLeft.addEventListener('click', function (){
        activeSlide -= 1;
        slideMove();
    });

    arrRight.addEventListener('click', function (){
        activeSlide += 1;
        slideMove();
    });

    // calculator

    const drop = document.getElementsByClassName("drop_down_list");
    const dropMenu = document.getElementsByClassName("list_panel");
    const title = document.getElementsByClassName("title")[0];
    const color = document.getElementsByClassName("color")[0];
    const pattern = document.getElementsByClassName("pattern")[0];
    const transport = document.getElementsByClassName("transport")[0];
    const transportCheck =document.getElementById("transport");
    let colorVal = document.querySelector(".color.value");
    let patternVal = document.querySelector(".pattern.value");
    let transportVal = document.querySelector(".transport.value");
    let titleVal = document.querySelector(".title.value");
    let img = document.querySelector(".image_part");

    // result at "SUMA" tag line

    const sum = document.querySelector(".sum strong");
    let result = 0;

    function resAdder(){

        result = (parseInt(colorVal.innerText) || 0) + (parseInt(patternVal.innerText) || 0) + (parseInt(transportVal.innerText) || 0) + (parseInt(titleVal.innerText) || 0);
        sum.innerText = parseInt(result);
    }


    for (let i=0; i<drop.length; i++){
        drop[i].addEventListener('click', function (){
            if (dropMenu[i].style.display == "block") {
                dropMenu[i].style.display = "none";
            } else {
                dropMenu[i].style.display = "block";
            }
        });
        for (let j = 0; j < dropMenu[i].children.length; j++){
            dropMenu[i].children[j].addEventListener('click', function (){
                dropMenu[i].parentElement.firstElementChild.innerText = dropMenu[i].children[j].innerText;
                dropMenu[i].parentElement.firstElementChild.style.color = "#5a5a5a";
                if ( i == 0 ) {
                    titleVal.innerText = parseInt(dropMenu[i].children[j].getAttribute('data-model'));
                    if (j == 0) {
                        img.firstElementChild.outerHTML= '<img src="images/red_chair.png">';
                    } else if (j == 1) {
                        img.firstElementChild.outerHTML= '<img src="images/orange_chair.png">';
                    } else if (j == 2) {
                        img.firstElementChild.outerHTML= '<img src="images/black_chair.png">';
                    }
                } if ( i == 1 ) {
                    colorVal.innerText = parseInt(dropMenu[i].children[j].getAttribute('data-color'));
                    color.innerText = dropMenu[i].children[j].innerText;
                } if ( i == 2 ) {
                    patternVal.innerText = parseInt(dropMenu[i].children[j].getAttribute('data-pattern'));
                    pattern.innerText = dropMenu[i].children[j].innerText;
                }
                resAdder()
            });

        }
    }

    // transport checking
    transportCheck.parentElement.addEventListener('click', function () {
        if (transportCheck.checked == true) {
            transport.innerText = transportCheck.nextElementSibling.innerText;
            transportVal.innerText = transportCheck.getAttribute("data-transport-price");
        } else if (transportCheck.checked == false) {
            transport.innerText = "";
            transportVal.innerText = "";
        }
        resAdder()
    });

    // button sending

    const button = document.querySelector('.green_button');
    button.addEventListener('click', function(e){
        e.preventDefault();
        button.innerText = "Wysyłam .";
        window.setTimeout(function(){
            button.innerText = "Wysyłam .."
        }, 400);
        window.setTimeout(function(){
            button.innerText = "Wysyłam ..."
        }, 800);
        window.setTimeout(function(){
            button.innerText = "Wysyłam ."
        }, 1200);
        window.setTimeout(function(){
            button.innerText = "Wysyłam .."
        }, 1600);
        window.setTimeout(function(){
            button.innerText = "WYSŁANE!"
        }, 2000);
        window.setTimeout(function(){
            button.innerText = "ZAMAWIAM"
        }, 5000);
    });







});