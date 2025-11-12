let main = document.querySelector("main");
let navTop = document.querySelector("nav#navTops");

//coloca as matérias na área de tópicos
export function createTopic(id, title) {
    // notícias adicionadas à parte de tópicos
    let newA = document.createElement("a");
    newA.setAttribute("href", "#" + id);
    newA.textContent = title;
    navTop.appendChild(newA);
};

// cria matérias mais antigas
export function createOldNews(id, title, content, imgPath) {

    // cria uma nova area para a notícia e adiciona um id para redirecionamento
    let newArt = document.createElement("article");
    newArt.classList.add("news");
    newArt.setAttribute("id", id);
    main.appendChild(newArt);

    // cria as tags para os conteúdos da matéria
    let newH2 = document.createElement("h2");
    let newP = document.createElement("p");
    let newImg = document.createElement("img");
    
    // coloca as tags na notícia
    newArt.appendChild(newH2);
    newArt.appendChild(newP);
    newArt.appendChild(newImg);

    // adiciona os parâmetros nas tags de conteúdo
    newImg.setAttribute("src", imgPath);
    newP.innerHTML = content;
    newH2.innerHTML = title;

    // cria a referência à lista e cria as tags para armazenar os dados
    let ulNew = document.querySelector("ul#oldNews");
    let newLi = document.createElement("li");
    let newA2 = document.createElement("a");

    newA2.innerHTML = title;
    newLi.setAttribute("id", "oldNL");
    newA2.setAttribute("href", "#" + id)

    // coloca as tags na lista
    ulNew.appendChild(newLi);
    newLi.appendChild(newA2);
};

// cria matérias mais recentes
export function criarNewNews(id, title, content, imgPath) {
    
    // cria uma nova area para a notícia e adiciona um id para redirecionamento
    let newArt = document.createElement("article");
    newArt.classList.add("news");
    newArt.setAttribute("id", id);
    main.appendChild(newArt);

    // cria as tags para os conteúdos da matéria
    let newH2 = document.createElement("h2");
    let newP = document.createElement("p");
    let newImg = document.createElement("img");
    
    // coloca as tags na notícia
    newArt.appendChild(newH2);
    newArt.appendChild(newP);
    newArt.appendChild(newImg);

    // adiciona os parâmetros nas tags de conteúdo
    newImg.setAttribute("src", imgPath);
    newP.innerHTML = content;
    newH2.innerHTML = title;

    // cria a referência à lista e cria as tags para armazenar os dados
    let ulNew = document.querySelector("ul#newNews");
    let newLi = document.createElement("li");
    let newA2 = document.createElement("a");

    newA2.innerHTML = title;
    newLi.setAttribute("id", "newNL");
    newA2.setAttribute("href", "#" + id)

    // coloca as tags na lista
    ulNew.appendChild(newLi);
    newLi.appendChild(newA2);
};

// Function para criar aba de vídeos
export function criarVid(h2, id) {
    // cria as tags
    let newH2_1 = document.createElement("h2");
    let newArt1 = document.createElement("article");
    let newA3 = document.createElement("a");
    let divSub = document.createElement("div");
    let ul = document.querySelector("ul");
    let newLi2 = document.createElement("li");
    let newA4 = document.createElement("a");

    newA3.textContent = "Entrevistas Vídeos";
    divSub.setAttribute("id", "subDiv");
    newA3.setAttribute("href", "#" + id);
    newA4.setAttribute("href", "#" + id);
    newArt1.setAttribute("id", id);
    navTop.appendChild(newA3);

    // Título da aba
    newH2_1.innerHTML = h2;
    newA4.innerHTML = h2;

    // tags criadas no site
    ul.appendChild(newLi2);
    newLi2.appendChild(newA4);
    main.appendChild(newArt1);
    newArt1.appendChild(newH2_1);
    newArt1.appendChild(divSub);
};

// function para adicionar os vídeos
export function newVid(title, duration, path ) {
    // variáveis de criação e referência
    let subVid = document.getElementById("subDiv");
    let divVid = document.createElement("div");
    let video = document.createElement("video");
    let newH4 = document.createElement("h4");
    let newP2 = document.createElement("p");

    //conteúdo adicionado às tags
    newH4.textContent = title;
    newP2.textContent = duration;

    // tags criadas no site
    subVid.appendChild(divVid);
    divVid.appendChild(video);
    divVid.appendChild(newH4);
    divVid.appendChild(newP2);

    // atribuição de atributos
    video.setAttribute("src", path);
    video.setAttribute("preload", "metadata");
    video.classList.add("vids");
    divVid.classList.add("divVids");

};