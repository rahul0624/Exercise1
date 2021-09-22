

document.getElementsByClassName("click-button")[0].onclick = function increment(){
    document.getElementsByClassName("c-count")[0].innerHTML = 
        parseInt(document.getElementsByClassName("c-count")[0].innerHTML)+1;
};

document.getElementsByClassName("reset-button")[0].onclick = function reset(){
    document.getElementsByClassName("c-count")[0].innerHTML = 0;

}

