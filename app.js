var getbtnsignup = document.getElementById("btn-signup");
var getbtnfullscreen = document.getElementById("btn-fullscreen");
var getbtnclosescreen  = document.getElementById("btn-closescreen");
var getmodal = document.getElementById("signupmodal");
var getbtnclose = document.querySelector(".btn-close");
var getbtn = document.querySelector(".btn");


getbtnsignup.addEventListener('click',function(){
    getmodal.style.display = "block";
});

getbtnclose.addEventListener('click',function(){
    getmodal.style.display = "none";
});

getbtn.addEventListener('click',function(e){
    e.preventDefault();
});

window.onclick = function(e){
    // console.log(e.target);

    if(e.target === getmodal){
        getmodal.style.display = "none";
    }
};

getbtnfullscreen.addEventListener('click',function(){

    // document.documentElement.requestFullscreen();

    if(document.documentElement.requestFullscreen){
        document.documentElement.requestFullscreen();
    }else if(document.documentElement.msRequestFullscreen){
        document.documentElement.msRequestFullscreen();
    }else if(document.documentElement.webkitRequestFullscreen){
        document.documentElement.webkitRequestFullscreen();
    }

    getbtnclosescreen.style.display = "inline-block";

    localStorage.setItem('fullscreen','1');

    activefullscreen();
});

getbtnclosescreen.addEventListener('click',function(){

    // document.exitFullscreen();

    if(document.exitFullscreen){
        document.exitFullscreen();
    }else if(document.msExitFullscreen){
        document.msExitFullscreen();
    }else if(document.webkitExitFullscreen){
        document.webkitExitFullscreen();
    }

    getbtnclosescreen.style.display = "none";

    localStorage.clear();
});


function activefullscreen(){
    
    if(localStorage.getItem('fullscreen') === '1'){
        document.addEventListener('keydown',function(e){
            e.preventDefault();
        });
    }
}