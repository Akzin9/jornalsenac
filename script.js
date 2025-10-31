let aside = document.getElementById("menu");
let divMenuOp = document.getElementsByClassName("opM")[0];
let imglogo = document.getElementById("imgLog");

function opMenu() {
        if (aside.style.display == "none") {
            aside.style.display = "initial";
            // imglogo.style.opacity = "0";
            // divMenuOp.classList.remove("animationMoveButtonR");
            // divMenuOp.classList.add("animationMoveButton");
            // setTimeout(() => divMenuOp.style = "margin-right: 68%;", 600);
            
        } else{
            aside.style.display = "none";
            // imglogo.style.opacity = "1";
            // divMenuOp.classList.remove("animationMoveButton");
            // divMenuOp.classList.add("animationMoveButtonR");
            // setTimeout(() => {
            //     divMenuOp.style = "margin-right: 96%;";
            // }, 600);
        }
};