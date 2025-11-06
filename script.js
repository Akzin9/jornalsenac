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

//coloca as matérias na área de tópicos
function createTopic(id, title) {
    // notícias adicionadas à parte de tópicos
    let newA = document.createElement("a");
    newA.setAttribute("href", "#" + id);
    newA.textContent = title;
    navTop.appendChild(newA);
};

// cria matérias mais antigas
function createOldNews(id, title, content, imgPath) {

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
    newA2.setAttribute("href", "#" + id)

    // coloca as tags na lista
    ulNew.appendChild(newLi);
    newLi.appendChild(newA2);
};

// cria matérias mais recentes
function criarNewNews(id, title, content, imgPath) {
    
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
    newA2.setAttribute("href", "#" + id)

    // coloca as tags na lista
    ulNew.appendChild(newLi);
    newLi.appendChild(newA2);
};

// Function para criar aba de vídeos
function criarVid(h2, id) {
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
    video.setAttribute("preload", "metadata");
    video.classList.add("vids");
    divVid.classList.add("divVids");


};

// BBweek
criarNewNews("BBweek", "Visita ao BBweek", 'Nos dias 28, 29 e 30 de outubro, os alunos do Senac CEP Sobradinho participaram da BBDW – Brasília Big Data Week, o maior evento de tecnologia e inovação de Brasília. A iniciativa fez parte da proposta pedagógica da instituição, proporcionando aos estudantes contato direto com tendências de mercado e conteúdos relevantes sobre inteligência artificial, segurança digital, ciência de dados, empreendedorismo e inovação corporativa. Durante a experiência, os participantes acompanharam palestras, painéis e demonstrações tecnológicas, ampliando conhecimentos e desenvolvendo competências essenciais para o mercado atual, como visão estratégica, atualização tecnológica e networking. A ação reforça o compromisso do Senac com a formação profissional de excelência, conectando teoria e prática e preparando os alunos para os desafios do cenário digital contemporâneo.', "./src/bbweek.jpeg");
createTopic("BBweek", "Visita ao BBweek");

// STJ
criarNewNews("STJ", "Visita ao STJ", 'No dia 08/10/2025, a turma 160 realizou uma visita técnica ao Superior Tribunal de Justiça (STJ), em Brasília. O objetivo da atividade foi proporcionar aos alunos a oportunidade de conhecer o funcionamento do tribunal, entender as políticas institucionais e aprender sobre as diferentes profissões que atuam no ambiente jurídico. Durante a visita, os estudantes puderam conhecer as instalações do STJ, assistir a explicações sobre o papel da Corte no sistema judiciário brasileiro e conversar com profissionais das áreas do Direito, da administração e da comunicação institucional. A atividade contribuiu para ampliar o conhecimento dos alunos sobre o Poder Judiciário e reforçar a importância da cidadania e da ética profissional.', "./src/mat1.jpeg");
createTopic("STJ", "Visita ao STJ");

// Outubro Rosa
criarNewNews("outRosa" , "Outubro Rosa", 'Outubro Rosa é mais do que uma campanha — é um lembrete poderoso de que o cuidado com a saúde deve ser constante. Ao longo do mês, monumentos se iluminam de rosa, vozes se unem e histórias de superação ganham destaque. O objetivo é claro: incentivar mulheres a realizarem exames preventivos e estarem atentas aos sinais do corpo. A detecção precoce do câncer de mama salva vidas, e a informação é a chave para o enfrentamento. Que o rosa de outubro inspire coragem, empatia e ação durante todos os meses do ano.', "./src/outubro\ rosa.jpeg");
createTopic("outRosa" , "Outubro Rosa");

// Apresentação TI
criarNewNews("TI", "Apresentação da TI", 'No dia 17, a turma 160 realizou uma série de entrevistas com os alunos da turma de TI do professor Jean, com o objetivo de conhecer e analisar projetos web desenvolvidos pelos estudantes. Entre os trabalhos apresentados, destacaram-se dois sites: Nalamina, uma plataforma voltada para profissionais de beleza como cabeleireiros e barbeiros, e SiC, um sistema criado para auxiliar professores do Senac na organização e gestão de salas. A atividade proporcionou uma rica troca de experiências entre as turmas, permitindo aos alunos explorar soluções inovadoras e observar na prática a aplicação dos conhecimentos de desenvolvimento web. O encontro reforçou o potencial criativo dos estudantes e evidenciou o compromisso do Senac em incentivar projetos que atendem demandas reais do mercado e do ambiente educacional.', "./src/algum trem de TI.jpeg");
createTopic("TI", "Apresentação da TI");

// Aba de vídeos
criarVid("Entrevistas Vídeos", "interview");

// adição dos vídeos

newVid("Apresentação do Jornalista", "Duração: 00:15", "./src/vids/ApresentaçãoDavi.mp4");
newVid("Entrevista Com a Instrutora Márcia", "Duração: 02:48", "./src/vids/marcia.mp4");
newVid("Entrevista Sobre o SIC", "Duração: 07:35", "./src/vids/SiCnew.mp4");
newVid("Entrevista Sobre o NaLamina", "Duração: 06:26", "./src/vids/NaLaminanew.mp4");
newVid("Entrevista Com o Instrutor Jean", "Duração: 07:03", "./src/vids/jeannew.mp4");

// Palestras Setembro Amarelo
criarNewNews("eng", "Palestras Setembro Amarelo", 'No dia 17, uma quarta-feira, os alunos do CEP Senac Sobradinho conduziram um evento com diversas palestras sobre o Setembro Amarelo. A turma de Segurança do Trabalho foi responsável por uma das apresentações mais importantes: um treinamento prático de primeiros socorros, focado principalmente na manobra de desengasgo. Os estudantes demonstraram como aplicar as técnicas em diferentes situações e pessoas, como obesos, bebês, cadeirantes e mulheres. Para contextualizar, eles exibiram um vídeo explicativo de três minutos e, em seguida, simularam a manobra na prática para o público.', "./src/engasgo.jpeg");
createTopic("eng", "Palestras Setembro Amarelo");

// Agosto Lilás
criarNewNews("Agosto", "Agosto Lilás", 'Além disso, os estudantes organizaram uma atividade voltada para melhoria de postura, integrando práticas de saúde e bem-estar ao tema central. O evento também destacou a campanha Agosto Lilás, que aborda o enfrentamento à violência contra a mulher, ampliando o espaço de diálogo sobre questões sociais e de saúde. A turma de Planaltina trouxe ainda uma apresentação criativa, no formato de filme, que uniu informação, emoção e reflexão, garantindo a atenção e o envolvimento do público presente.', "./src/agosto lilás.jpg");
createTopic("Agosto", "Agosto Lilás");

// Fim da Turma 153
criarNewNews("153", "Fim da Turma 153", 'No dia 1º de setembro de 2025, a turma 153 encerrou oficialmente sua aprendizagem, concluindo um importante ciclo de estudos e vivências dentro da instituição. Ao longo desse período, os alunos participaram de atividades, projetos e desafios que contribuíram para sua formação profissional e pessoal, fortalecendo a preparação para novas etapas em suas trajetórias. Esse encerramento marcou também a transição de responsabilidades, uma vez que a turma finalizou o trabalho com o jornal, repassando a continuidade desse projeto às turmas mais novas. Esse registro, fruto de dedicação coletiva, ficará como parte da memória da instituição. Durante esse período, tiveram como instrutores a professora Aline e Marlon, que acompanharam de perto o crescimento de cada aluno e foram fundamentais no processo de ensino. Juntos, também foram responsáveis pelo jornal da turma, um projeto que marcou a trajetória da 153 por registrar acontecimentos, conquistas e reflexões. No mesmo dia, a turma 153 passou o Jornal do Senac para a turma 160. Eles mostraram o site, contaram como foi a experiência de montar o jornal e deram várias dicas sobre a organização e o processo de criação, já que concluíram a aprendizagem recentemente. ', "./src/turma153.jpeg");
createTopic("153", "Fim da Turma 153");

// Simulação de Incêndio
criarNewNews("fire", "Simulação de Incêndio", 'Simulação de Incêndio Mobiliza Técnicos de Segurança em Treinamento Preventivo 05/09/2025 — Na manhã desta sexta-feira, os técnicos de segurança promoveram uma simulação de incêndio com o objetivo de reforçar os protocolos de evacuação e ampliar a conscientização sobre medidas de prevenção. A atividade ocorreu de forma controlada e seguiu todos os padrões de segurança estabelecidos pelas normas técnicas. Durante a ação, colaboradores e voluntários participaram do exercício prático, que envolveu o acionamento de alarmes, utilização de extintores e a evacuação rápida das áreas de risco. A simulação também contou com a orientação dos técnicos de segurança, que avaliaram o tempo de resposta, a organização das rotas de fuga e o uso correto dos equipamentos de combate a incêndio. Segundo os organizadores, o treinamento é fundamental para garantir que, em uma situação real, todos saibam como agir com calma e eficiência. “A prevenção salva vidas, e a preparação é a chave para reduzir riscos em emergências”, destacou um dos responsáveis pela equipe técnica. A simulação encerrou-se sem incidentes, sendo considerada um sucesso pela coordenação. Novas edições estão previstas para os próximos meses, visando manter o ambiente de trabalho cada vez mais seguro.', "./src/saúde.jpeg");
createTopic("fire", "Simulação de Incêndio");

// Curicaca
criarNewNews("curicaca", "Visita ao Curicaca", 'No dia 08/10/2025, as turmas de TI, com os instrutores Jean e Bruno, fizeram uma visita técnica ao Curicaca (CRCC) para vivenciar na prática o uso da tecnologia e conhecer projetos do centro.', "./src/curicaca.jpeg");
createTopic("curicaca", "Visita ao Curicaca");

// Nova coordenação do Jornal
criarNewNews("160", "Nova Coordenação do Jornal para a Turma 160", "Na segunda-feira, 1º de setembro de 2025, a turma 153 passou o jornal do Senac para a turma 160. Eles mostraram o site, contaram como foi a experiência de montar o jornal e deram várias dicas sobre a organização e o processo de criação, já que concluíram a aprendizagem recentemente.", "./src/festa junina.jpeg");

//Notícias Antigas

// palestra abril verde
createOldNews("abrilGr", "Palestra Abril Verde", "Palestra com a psicóloga Silvânia Lobo. No dia 23 de junho, alunos do Senac Sobradinho participaram de uma palestra com a psicóloga Silvânia Lobo, que abordou ansiedade, depressão e automutilação. A profissional destacou a importância da escuta, acolhimento e empatia, utilizando uma dinâmica com massinhas de modelar como metáfora das marcas deixadas pelas experiências emocionais. O evento reforçou a necessidade de romper o silêncio, buscar ajuda psicológica e criar ambientes acolhedores.", "./src/abril verde.jpeg");

// café com empresários
createOldNews("coffe", 'Senac CEP Sobradinho Promoverá "CAFÉ COM EMPRESÁRIOS" para Fortalecer Parcerias e Divulgar Programas', 'No dia 27 de maio, às 9h30, o Senac CEP Sobradinho realizará o evento "Café com Empresários", com o objetivo de divulgar seus programas e fortalecer parcerias com o setor produtivo local. Estarão presentes empresários de diversas áreas, administradores regionais e representantes do Senac, incluindo o diretor-geral. A programação inclui apresentação dos cursos oferecidos (como Jovem Aprendiz e cursos técnicos), visita guiada à unidade, roda de conversa com professores e incentivo ao networking. A iniciativa busca ampliar o impacto social e educacional do Senac na região e promover novas oportunidades de colaboração.', "./src/coffe.jpeg");

// entrevista com diretor do senac
createOldNews("Diretor", 'No Evento "Café com Empresários" Jovens Entrevistaram o Diretor Vitor Corrêa', 'No dia 27 de maio, foi realizado o evento "Café com Empresários". Durante a reunião, um grupo da turma de Jovem Aprendiz 153, responsável pela cobertura do evento, entrevistou o diretor do Senac, Vitor Corrêa, que compartilhou suas impressões e falou um pouco sobre a importância da iniciativa. ¨O SENAC vem passando por um processo de expansão e mantendo um diálogo permanente com o setor produtivo — com as empresas, que são justamente quem financia os serviços prestados pela instituição. O objetivo do Café com Empresários de Sobradinho é permitir que os empresários da cidade e da região conheçam as atividades que desenvolvemos. Muitos dos serviços oferecidos pelo SENAC são gratuitos e estão à disposição desses empresários. Aqui, eles podem encontrar jovens qualificados para ingressar no mercado de trabalho, além de oportunidades de estágio, contratação de aprendizes ou até mesmo a possibilidade de formatar cursos específicos, de acordo com as necessidades de cada empresa. Dessa forma, o SENAC pode contribuir diretamente para melhorar a qualidade dos serviços prestados por essas empresas.¨ diz Vitor.', "./src/DiretorSenac.jpeg");

// entrevista com jornalista
createOldNews("emicles", 'Entrevista com Emícles N. Junior', 'Emícles Nogueira Nobre Júnior, jornalista e gestor comercial que atua no Jornal de Sobradinho. No mês de maio, durante o evento "Café com Empresários" realizado no Senac, os alunos da turma de Aprendizagem 153 tiveram a oportunidade de participar de uma entrevista com Emícles Junior, jornalista profissional e diretor-geral do Jornal de Sobradinho. Essa experiência proporcionou aos alunos um contato direto com um profissional da área, permitindo que eles aprendessem sobre o dia a dia de um jornalista e diretor-geral, além de poderem tirar dúvidas e obter orientações valiosas para suas próprias carreiras.', "./src/emicles.jpeg");

// aprendiz destaque
createOldNews("Maria160", "Maria, Aprendiz Destaque da Turma N° 160 de Assistente Administrativo", 'A aprendiz Maria, destaque da turma Jovem Aprendiz 160 do Senac Sobradinho, foi reconhecida por sua dedicação, superação e desempenho. Durante o curso, desenvolveu habilidades de comunicação e proatividade, superando a timidez ao falar em público. Com apoio do SENAC, conquistou mais confiança, postura profissional e credibilidade, valorizando o aprendizado contínuo e a proatividade como essenciais para seu crescimento pessoal e profissional.', "./src/mariaClara.jpeg");

// Caso de Sucesso: Ana Carolina
createOldNews("carolina", 'Caso de Sucesso: Ana Carolina', 'Ana Carolina, uma jovem que inicialmente buscou o curso de comissário de voo, mas optou pelo curso Técnico em Segurança do Trabalho (TST) no Senac, visando estar próxima da família. Sua dedicação resultou em contratação pela empresa MFJ Serviços, prestadora da Ciplan Cimento, antes mesmo de concluir o curso. Ana Carolina destaca a importância dos colegas e instrutores nesse processo. É ressaltado o papel essencial do Técnico em Segurança do Trabalho, responsável por prevenir acidentes e doenças ocupacionais, garantir o cumprimento das normas regulamentadoras, treinar e conscientizar funcionários e promover ambientes laborais mais seguros, impactando diretamente na saúde, produtividade e satisfação dos trabalhadores.', "./src/anaCarol.jpeg");

// Turma de Técnico em segurança do trabalho realiza palestra sobre Abril Verde
createOldNews("tecAbrilV", 'Turma de Técnico em Segurança do Trabalho Realiza Palestra Sobre Abril Verde', 'No dia 29 de abril, alunos do curso técnico em Segurança do Trabalho do Senac Sobradinho, sob orientação da instrutora Joane, promoveram uma palestra em alusão à campanha Abril Verde, com foco na conscientização sobre saúde e segurança no trabalho. O evento destacou a importância de medidas preventivas para evitar acidentes, apresentou dados estatísticos sobre ocorrências comuns (quedas, cortes, choques elétricos e LER) e discutiu a responsabilidade compartilhada entre empresas, profissionais e trabalhadores na construção de ambientes mais seguros. Também foram abordadas doenças ocupacionais relacionadas ao estresse, como ansiedade, depressão e burnout. A palestra contou ainda com dinâmicas interativas, que tornaram o momento mais participativo e envolvente.', "./src/abrilverde2.jpeg");

// Carlos, Aluno Destaque da Turma de Técnico em Desenvolvimento de Sistemas
createOldNews("carlos", 'Carlos, Aluno Destaque da Turma de Técnico em Desenvolvimento de Sistemas', 'Carlos foi reconhecido como Aluno Destaque do Mês na turma de Técnico em Desenvolvimento de Sistemas do Senac Sobradinho. Sua dedicação, desempenho acadêmico e atitude colaborativa o tornaram referência entre colegas e professores. Como parte da homenagem, Carlos apresentará seu projeto “Palpitch”, que destaca sua criatividade e busca por soluções inovadoras. Sua conquista representa não só um marco pessoal, mas também uma inspiração para toda a turma.', "./src/carlos.jpeg");

// Rhaquel, Aprendiz Destaque da Intrutora Marina
createOldNews("rhaquel", 'Rhaquel, Aprendiz Destaque da Intrutora Marina', 'Rhaquel foi eleita Aluna Destaque da turma de aprendizagem do turno matutino no Senac Sobradinho, sob orientação da instrutora Marina. Reconhecida por sua dedicação, postura respeitosa e espírito colaborativo, Rhaquel se destacou pela produtividade nas atividades, disposição em ajudar os colegas e participação ativa em sala. Seu entusiasmo e energia positiva contribuíram para um ambiente mais leve e cooperativo, sendo exemplo de comprometimento e inspiração para a turma.', "./src/rhaquel.jpeg");

// Ray, Aluno Destaque da Turma de Técnico em Adiministração
createOldNews('ray', 'Ray, Aluno Destaque da Turma de Técnico em Administração', 'Ray foi eleito Aluno Destaque da turma de Técnico em Administração do Senac Sobradinho, sob orientação da professora Eline. Reconhecido por sua dedicação, assiduidade e participação ativa, Ray se destacou como exemplo de responsabilidade e postura profissional. Seu engajamento constante nas aulas reforça o valor do comprometimento durante a formação técnica.', "./src/ray.jpeg");

// Turma de Técnico em desenvolvimento de sistemas desenvolve programa inovador
createOldNews('aks', 'Turma de Técnico em Desenvolvimento de Sistemas Desenvolve Programa Inovador', 'Turma de (TI) do instrutor Jean, desenvolve programa "AKS". A turma de Técnico em Desenvolvimento de Sistemas do Senac Sobradinho apresentou o AKS (Access Key System), um sistema digital inovador para melhorar o controle de chaves na instituição. Divididos em quatro equipes (Gestão de Projetos, Análise de Requisitos, Desenvolvimento e Banco de Dados), os alunos desenvolveram uma solução que elimina problemas do processo manual, como desorganização e erros. O AKS permite cadastro de usuários, reservas de salas, geração de relatórios e oferece um painel administrativo. O projeto destaca o uso da tecnologia para resolver problemas práticos e evidencia o potencial dos alunos em desenvolver soluções eficientes por meio do trabalho em equipe.', "./src/AKS.jpg");

// Projeto de Iniciativa Promove Renovação e Integração Entre Turmas
createOldNews('turmasPI', 'Projeto de Iniciativa Promove Renovação e Integração Entre Turmas', 'Esse projeto envolve as turmas de Modelagem de turnos diferentes em uma integração. Em abril de 2025, alunos do Senac Sobradinho realizaram um Projeto de Iniciativa (PI) que promoveu melhorias no ambiente escolar, como maior organização e segurança, além de facilitar o trabalho da equipe de limpeza. A ação contou com a colaboração de turmas dos turnos da manhã, tarde e noite, incentivando a integração entre os estudantes. O projeto destacou a importância do cuidado coletivo com os espaços, o trabalho em equipe e o desenvolvimento de competências profissionais, sendo reconhecido como uma iniciativa positiva e inspiradora dentro da unidade.', "./src/integraPI.jpeg");

// 65 anos de Brasília: Além do Plano
createOldNews('65years', '65 anos de Brasília: Além do Plano', 'Projeto realizado pelas turmas 156 e 160 de Jovem Aprendiz. Com o objetivo de comemorar os 65 anos de Brasília, alunos das turmas 156 e 160 do Senac Sobradinho desenvolveram o projeto Brasília Além do Plano. O projeto consistiu em apresentações sobre cidades satélites do Distrito Federal, abordando aspectos culturais e informativos sobre as regiões administrativas. A iniciativa promoveu o trabalho em equipe, a criatividade e a inovação, além de proporcionar um ambiente dinâmico e motivador para os alunos.', "./src/65anos.jpeg");

// Luiz: Aprendiz Destaque da turma de assistente administrativo
createOldNews("luiz", 'Luiz, Aprendiz Destaque da Turma N° 160 de Assistente Administrativo', 'Luiz, da Turma de Jovem Aprendiz 160, como aluno exemplar de março. Reconhecido por sua supervisora e colegas,o aluno atribui o mérito à dedicação, ao compromisso e ao trabalho em equipe. Apesar das dificuldades enfrentadas no curso de Assistente Administrativo, ele nunca pensou em desistir, encarando os desafios como oportunidades de crescimento. Sua mensagem inspira outros aprendizes: “Dedicação e compromisso são essenciais”.', './src/Luiz.jpeg');

// Paulo Henrique: Aluno destaque da turma de barbeiro
createOldNews("paulo", 'Paulo Henrique, Aluno Destaque da Turma de Barbeiro', 'O aluno Paulo Henrique Silva de Souza, da turma de Barbeiro do Senac Sobradinho, como aluno destaque pelo seu empenho, dedicação e espírito de colaboração. Com experiência prévia na área, ele se sobressai tanto pela técnica quanto pelo comprometimento. Paulo Henrique afirmou que o curso superou suas expectativas, elogiando a qualidade do ensino e a orientação da professora. Para colegas e instrutores, sua postura e vontade de aprender fazem dele um exemplo dentro da turma.', './src/Paulo.jpeg');

// Caso de Sucesso: Eduardo Fernandes
createOldNews("eduardo", 'Caso de Sucesso: Eduardo Fernandes', 'O aluno Eduardo Fernandes, destaca a importância do Senac Sobradinho em sua trajetória, onde realizou cursos que expandiram seus conhecimentos e habilidades profissionais. Com dedicação e apoio de professores inspiradores, ele alcançou seus objetivos e foi efetivado em uma empresa após participar de uma turma de aprendizagem. O Senac foi fundamental em seu desenvolvimento profissional e pessoal, proporcionando oportunidades que o ajudaram a chegar onde está hoje.', './src/Eduardo.jpeg');

// Turma de Jovem Aprendiz 160 recebe uma visita especial
createOldNews("visit160", 'Turma de Jovem Aprendiz 160 Recebe uma Visita Especial', 'A turma recebeu uma visita especial do pai e da tia de um Aprendiz. A Turma de Jovem Aprendiz 160, do Senac Sobradinho, recebeu nos dias 19 e 20 de março de 2025 a visita de Wallace Raman (profissional de Departamento Pessoal) e Larissa Portugal (profissional de Marketing), pai e tia do aprendiz Isaac Raman. Eles compartilharam experiências de suas áreas, oferecendo dicas práticas e mostrando a realidade do mercado de trabalho. A atividade proporcionou aos jovens um momento enriquecedor de aprendizado, despertando interesse por novas oportunidades e incentivando a participação ativa em diferentes ramos profissionais.', './src/visitaAprendiz.jpeg');

// Curso de modelista oferece oportunidades
createOldNews('modelista', 'Curso de Modelista Oferece Oportunidades', 'Curso de modelista do Senac oferece oportunidade para alunas desenvolverem habilidades em costura e criação de peças. O curso de modelista do Senac Sobradinho oferece às alunas a oportunidade de aprender e praticar a criação de peças de vestuário, como saias, blusas e principalmente calças, utilizando tecidos de qualidade como jeans e saia. Sob orientação da instrutora Célia, as estudantes passam por todas as etapas do processo, desde a modelagem e corte até a costura e ajustes finais, confeccionando peças únicas feitas sob medida. O curso se destaca por fornecer materiais e incentivar a prática, tornando-se uma importante porta de entrada para quem deseja ingressar no setor da moda.', './src/modelista.jpeg');

// Jhuan, Aluno Destaque da Turma de Técnico em Segurança do Trabalho
createOldNews('Jhuan', 'Jhuan, Aluno Destaque da Turma de Técnico em Segurança do Trabalho', 'Jhuan Kayron foi escolhido como Aluno Destaque da turma de Técnico em Segurança do Trabalho do Senac Sobradinho. Reconhecido por sua dedicação, esforço e boa comunicação, Jhuan se tornou uma inspiração para os colegas. Sua postura comprometida e aproveitamento das oportunidades de aprendizado fizeram dele um exemplo de perseverança e sucesso na formação técnica.', './src/jhuan.jpeg');

// Integração entre as turmas de Técnico em Segurança do Trabalho e Jovem Aprendiz
createOldNews("intJTST", 'Integração Entre as Turmas de Técnico em Segurança do Trabalho e Jovem Aprendiz', 'Turmas de TST e Jovem Aprendiz se unem para simular casos reais de acidentes de trabalho. No dia 24 de março, as turmas de Técnico em Segurança do Trabalho (TST) e Jovem Aprendiz realizaram uma atividade de integração que simulou acidentes de trabalho, como choque elétrico, queda e síndrome de Burnout. Os alunos trabalharam em equipe para investigar cenários realistas e desenvolver habilidades práticas para prevenir acidentes e promover um ambiente de trabalho seguro. A atividade foi um sucesso, permitindo que os alunos desenvolvessem habilidades teóricas e práticas em um ambiente interativo e colaborativo.', './src/TSTJA.jpeg');

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