let aside = document.getElementById("menu");
let divMenuOp = document.getElementsByClassName("opM")[0];
let imglogo = document.getElementById("imgLog");

// abre o menu
function opMenu() {
        if (aside.style.display == "none") {
            aside.style.display = "initial";
            aside.style.opacity = "1";
            // imglogo.style.opacity = "0";
            // setTimeout(() => divMenuOp.style = "margin-right: 68%;", 600);
        } else{
            aside.style.display = "none";
            // se der tempo tentar fazer animação do menu
            // imglogo.style.opacity = "1";
            // setTimeout(() => {
            //     divMenuOp.style = "margin-right: 96%;";
            // }, 600);
        }
};

// fecha o menu
function closeMe() {
    if (aside.style.display == "initial"){
        aside.style.opacity = "0.4";
        setTimeout(() => {
            aside.style.display = "none";
        }, 100);
    };
};

let main = document.querySelector("main");
let navTop = document.querySelector("nav#navTops");


function criarNews(id, title, content, imgPath) {
    // notícias adicionadas à parte de tópicos
    let newA = document.createElement("a");
    newA.setAttribute("href", "#" + id);
    newA.textContent = title;
    navTop.appendChild(newA);

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
    newH2.textContent = title;

    // cria a referência à lista e cria as tags para armazenar os dados
    let ul = document.querySelector("ul");
    let newLi = document.createElement("li");
    let newA2 = document.createElement("a");

    newA2.textContent = title;
    newA2.setAttribute("href", "#" + id)

    // coloca as tags na lista
    ul.appendChild(newLi);
    newLi.appendChild(newA2);
};

// Function para criar aba de vídeos
function criarVid(h2, id) {
    // cria as tags
    let newH2_1 = document.createElement("h2");
    let newArt1 = document.createElement("article");
    let newA3 = document.createElement("a");
    let divSub = document.createElement("div");

    newA3.textContent = "Entrevistas";
    divSub.setAttribute("id", "subDiv");
    newA3.setAttribute("href", "#" + id);
    newArt1.setAttribute("id", id);
    navTop.appendChild(newA3);

    // Título da aba
    newH2_1.textContent = h2;

    // tags criadas no site
    main.appendChild(newArt1);
    newArt1.appendChild(newH2_1);
    newArt1.appendChild(divSub);
};

// function para adicionar os vídeos
function newVid(title, duration, path ) {
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
    video.classList.add("vids");
    divVid.classList.add("divVids");


};

// BBweek
criarNews("BBweek", "Visita ao BBweek", 'Nos dias 28, 29 e 30 de outubro, os alunos do Senac CEP Sobradinho participaram da BBDW – Brasília Big Data Week, o maior evento de tecnologia e inovação de Brasília. A iniciativa fez parte da proposta pedagógica da instituição, proporcionando aos estudantes contato direto com tendências de mercado e conteúdos relevantes sobre inteligência artificial, segurança digital, ciência de dados, empreendedorismo e inovação corporativa. Durante a experiência, os participantes acompanharam palestras, painéis e demonstrações tecnológicas, ampliando conhecimentos e desenvolvendo competências essenciais para o mercado atual, como visão estratégica, atualização tecnológica e networking. A ação reforça o compromisso do Senac com a formação profissional de excelência, conectando teoria e prática e preparando os alunos para os desafios do cenário digital contemporâneo.', "./src/bbweek.jpeg");

// STJ
criarNews("STJ", "Visita ao STJ", 'No dia 08/10/2025, a turma 160 realizou uma visita técnica ao Superior Tribunal de Justiça (STJ), em Brasília. O objetivo da atividade foi proporcionar aos alunos a oportunidade de conhecer o funcionamento do tribunal, entender as políticas institucionais e aprender sobre as diferentes profissões que atuam no ambiente jurídico. <br>Durante a visita, os estudantes puderam conhecer as instalações do STJ, assistir a explicações sobre o papel da Corte no sistema judiciário brasileiro e conversar com profissionais das áreas do Direito, da administração e da comunicação institucional. A atividade contribuiu para ampliar o conhecimento dos alunos sobre o Poder Judiciário e reforçar a importância da cidadania e da ética profissional.', "./src/mat1.jpeg");

// Outubro Rosa
criarNews("outRosa" , "Outubro Rosa", 'Outubro Rosa é mais do que uma campanha — é um lembrete poderoso de que o cuidado com a saúde deve ser constante. Ao longo do mês, monumentos se iluminam de rosa, vozes se unem e histórias de superação ganham destaque. O objetivo é claro: incentivar mulheres a realizarem exames preventivos e estarem atentas aos sinais do corpo. A detecção precoce do câncer de mama salva vidas, e a informação é a chave para o enfrentamento. Que o rosa de outubro inspire coragem, empatia e ação durante todos os meses do ano.', "./src/outubro\ rosa.jpeg");

// Apresentação TI
criarNews("TI", "Apresentação da TI", 'No dia 17, a turma 160 realizou uma série de entrevistas com os alunos da turma de TI do professor Jean, com o objetivo de conhecer e analisar projetos web desenvolvidos pelos estudantes. Entre os trabalhos apresentados, destacaram-se dois sites: Nalamina, uma plataforma voltada para profissionais de beleza como cabeleireiros e barbeiros, e SiC, um sistema criado para auxiliar professores do Senac na organização e gestão de salas. A atividade proporcionou uma rica troca de experiências entre as turmas, permitindo aos alunos explorar soluções inovadoras e observar na prática a aplicação dos conhecimentos de desenvolvimento web. O encontro reforçou o potencial criativo dos estudantes e evidenciou o compromisso do Senac em incentivar projetos que atendem demandas reais do mercado e do ambiente educacional.', "./src/algum trem de TI.jpeg");

// Aba de vídeos
criarVid("Entrevistas", "interview");

// adição dos vídeos

newVid("Apresentação do Jornalista", "Duração: 00:15", "./src/vids/ApresentaçãoDavi.mp4");
newVid("Entrevista Com a Instrutora Márcia", "Duração: 02:48", "./src/vids/marcia.mp4");
newVid("Entrevista Sobre o SIC", "Duração: 07:35", "./src/vids/SiCnew.mp4");
newVid("Entrevista Sobre o NaLamina", "Duração: 06:26", "./src/vids/NaLaminanew.mp4");
newVid("Entrevista Com o Instrutor Jean", "Duração: 07:03", "./src/vids/jeannew.mp4");

// Palestras Setembro Amarelo
criarNews("eng", "Palestras Setembro Amarelo", 'No dia 17, uma quarta-feira, os alunos do CEP Senac Sobradinho conduziram um evento com diversas palestras sobre o Setembro Amarelo. A turma de Segurança do Trabalho foi responsável por uma das apresentações mais importantes: um treinamento prático de primeiros socorros, focado principalmente na manobra de desengasgo. Os estudantes demonstraram como aplicar as técnicas em diferentes situações e pessoas, como obesos, bebês, cadeirantes e mulheres. Para contextualizar, eles exibiram um vídeo explicativo de três minutos e, em seguida, simularam a manobra na prática para o público.', "./src/engasgo.jpeg");

// Agosto Lilás
criarNews("Agosto", "Agosto Lilás", 'Além disso, os estudantes organizaram uma atividade voltada para melhoria de postura, integrando práticas de saúde e bem-estar ao tema central. O evento também destacou a campanha Agosto Lilás, que aborda o enfrentamento à violência contra a mulher, ampliando o espaço de diálogo sobre questões sociais e de saúde. A turma de Planaltina trouxe ainda uma apresentação criativa, no formato de filme, que uniu informação, emoção e reflexão, garantindo a atenção e o envolvimento do público presente.', "./src/agosto lilás.jpg");

// Fim da Turma 153
criarNews("153", "Fim da Turma 153", 'No dia 1º de setembro de 2025, a turma 153 encerrou oficialmente sua aprendizagem, concluindo um importante ciclo de estudos e vivências dentro da instituição. Ao longo desse período, os alunos participaram de atividades, projetos e desafios que contribuíram para sua formação profissional e pessoal, fortalecendo a preparação para novas etapas em suas trajetórias. Esse encerramento marcou também a transição de responsabilidades, uma vez que a turma finalizou o trabalho com o jornal, repassando a continuidade desse projeto às turmas mais novas. Esse registro, fruto de dedicação coletiva, ficará como parte da memória da instituição. Durante esse período, tiveram como instrutores a professora Aline e Marlon, que acompanharam de perto o crescimento de cada aluno e foram fundamentais no processo de ensino. Juntos, também foram responsáveis pelo jornal da turma, um projeto que marcou a trajetória da 153 por registrar acontecimentos, conquistas e reflexões. No mesmo dia, a turma 153 passou o Jornal do Senac para a turma 160. Eles mostraram o site, contaram como foi a experiência de montar o jornal e deram várias dicas sobre a organização e o processo de criação, já que concluíram a aprendizagem recentemente. ', "./src/turma153.jpeg");

// Simulação de Incêndio
criarNews("fire", "Simulação de Incêndio", 'Simulação de Incêndio Mobiliza Técnicos de Segurança em Treinamento Preventivo 01/08/2025 — Na manhã desta sexta-feira, os técnicos de segurança promoveram uma simulação de incêndio com o objetivo de reforçar os protocolos de evacuação e ampliar a conscientização sobre medidas de prevenção. A atividade ocorreu de forma controlada e seguiu todos os padrões de segurança estabelecidos pelas normas técnicas. Durante a ação, colaboradores e voluntários participaram do exercício prático, que envolveu o acionamento de alarmes, utilização de extintores e a evacuação rápida das áreas de risco. A simulação também contou com a orientação dos técnicos de segurança, que avaliaram o tempo de resposta, a organização das rotas de fuga e o uso correto dos equipamentos de combate a incêndio. Segundo os organizadores, o treinamento é fundamental para garantir que, em uma situação real, todos saibam como agir com calma e eficiência. “A prevenção salva vidas, e a preparação é a chave para reduzir riscos em emergências”, destacou um dos responsáveis pela equipe técnica. A simulação encerrou-se sem incidentes, sendo considerada um sucesso pela coordenação. Novas edições estão previstas para os próximos meses, visando manter o ambiente de trabalho cada vez mais seguro.', "./src/saúde.jpeg");

// Curicaca
criarNews("curicaca", "Visita ao Curicaca", 'No dia 08/10/2025, as turmas de TI, com os instrutores Jean e Bruno, fizeram uma visita técnica ao Curicaca (CRCC) para vivenciar na prática o uso da tecnologia e conhecer projetos do centro.', "./src/curicaca.jpeg");

// sistema de play dos vídeos
let vids = document.getElementsByClassName("vids");

// Adiciona evento de click para cada vídeo
for (let i = 0; i < vids.length; i++) {

  vids[i].addEventListener("play", () => {
    // Quando um vídeo começa a tocar, pausa todos os outros
    for (let j = 0; j < vids.length; j++) {
      if (j !== i) {
        vids[j].pause();
      };
    };
  });

  // play/pause ao clicar
  vids[i].addEventListener("click", () => {
    if (vids[i].paused) {
        vids[i].volume = (0.5);
      vids[i].play();
    } else {
      vids[i].pause();
    };
  });
};