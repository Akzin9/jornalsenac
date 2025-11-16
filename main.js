let aside = document.getElementById("menu");

// abre o menu
function opMenu() {
        if (aside.style.display == "none") {
            aside.style.display = "initial";
            aside.style.opacity = "1";
            aside.classList.remove("closeMenuAnim");
            aside.classList.add("openMenuAnim");
        }
};

// fecha o menu
function closeMe() {
    if (aside.style.display == "initial"){
        aside.classList.remove("openMenuAnim");
        aside.classList.add("closeMenuAnim");
        setTimeout(() => {
            aside.style.display = "none";
        }, 500);
    };
};

// abertura e fechamento da lista de notícias novas
document.getElementById("openCloseListNew").addEventListener( "click", (event) => {

        // pega as "li"s
        let liNew = document.querySelectorAll("li.newNL");

        // checa se a lista está fechada
        if (event.currentTarget.classList.contains("closeListNew")) {    

            // ativa a animação de abertura
            event.currentTarget.classList.toggle("closeListNew");
            event.currentTarget.classList.toggle("openListNew");
            
            // anima os itens em forma de cascata
            liNew.forEach( (li, index) => {
                setTimeout(() => {
                    li.style.display = "list-item";
                    li.classList.remove("listOff")
                    li.classList.toggle("newNLShow");
                }, 140 * index); 
            });

        } else {

            // ativa a animação de fechamento
            event.currentTarget.classList.toggle("openListNew");
            event.currentTarget.classList.toggle("closeListNew");

            // anima os itens em forma de cascata
            liNew.forEach( (li, i) => {
                setTimeout(() => {
                    li.classList.add("listOff");
                    li.classList.toggle("newNLShow");

                        setTimeout(()=> {
                        li.style.display = "none";
                    }, 20 * i)

                }, 140 * i);
            });
        }

    }
);

// abertura e fechamento da lista de notícias velhas
document.getElementById("openCloseListOld").addEventListener( "click", (event) => {

        // pega as "li"s
        let liOld = document.querySelectorAll("li.oldNL");

        // checa se a lista está fechada
        if (event.currentTarget.classList.contains("closeListOld")) {    

            // animação de abertura
            event.currentTarget.classList.toggle("closeListOld");
            event.currentTarget.classList.toggle("openListOld");

            // anima os itens da lista em cascata
            liOld.forEach( (li, index) => {
                setTimeout(() => {
                    li.style.display = "list-item";
                    li.classList.remove("listOff")
                    li.classList.toggle("newNLShow");
                }, 140 * index); 
            });

        } else {
            
            // anima os itens para fechar
            event.currentTarget.classList.toggle("openListOld");
            event.currentTarget.classList.toggle("closeListOld");

            // anima o fechamento da lista em cascata
            liOld.forEach( (li, i) => {
                setTimeout(() => {
                    li.classList.add("listOff");
                    li.classList.toggle("newNLShow");

                        setTimeout(()=> {
                        li.style.display = "none";
                    }, 10 * i)

                }, 140 * i);
            });
        }
    }
);