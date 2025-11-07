let aside = document.getElementById("menu");
let divMenuOp = document.getElementsByClassName("opM")[0];

// abre o menu
function opMenu() {
        if (aside.style.display == "none") {
            aside.style.display = "initial";
            aside.style.opacity = "1";
            aside.classList.remove("closeMenuAnim");
            aside.classList.add("openMenuAnim");
            
            // setTimeout(() => divMenuOp.style = "margin-right: 68%;", 600);
        }
};

// fecha o menu
function closeMe() {
    if (aside.style.display == "initial"){
        aside.classList.remove("openMenuAnim");
        aside.classList.add("closeMenuAnim");
        setTimeout(() => {
            aside.style.display = "none";
        }, 600);
    };
};