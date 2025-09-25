window.onload = function() {
    var modal = new bootstrap.Modal(document.getElementById('AlertaInicio'));
    modal.show();
}
var perguntas = ["Quantos livros da saga Harry Potter existem?", 
                 "Quando foi lançado o primeiro livro?", 
                 "Quais são os nomes dos pais do Harry?", 
                 "Qual o nome da coruja do Harry?", 
                 "Qual desses personagens não é da Sonserina?", 
                 "Qual destas não é uma relíquia dos fundadores?", 
                 "Qual destas não é uma horcrux?",
                 "Qual destas escolas não participou do torneio tribuxo?",
                 "Em que filme Luna Lovegood aparece?",
                 "Qual é o nome do cão de três cabeças que protege o alçapão em Pedra Filosofal?"];

var alternativas = [["8", "10", "7", "5"],
                    ["2010", "2002", "1985", "1997"],
                    ["Joane e Daniel Potter", "Lily e James Potter", 
                     "Angelina e Brad Potter", "Zendaya e Tom Potter"],
                    ["Adivige", "Edwiges", "Gylfie", "Petúnia"],
                    ["Peter Pettigrew", "Draco Malfoy", "Tom Riddle", "Regulus Black"],
                    ["A espada de Gryffindor", "O anel de Slytherin", 
                     "A diadema de Ravenclaw", "A taça de Hufflepuff"],
                    ["O medalhão de Slytherin", "O diário de Tom Riddle", 
                     "Delphine Lestrange", "Harry Potter"],
                    ["Hogwarts", "Beauxbatons", "Durmstrang", "Clodtoer"],
                    ["Ordem da Fénix", "Pedra Filosofal", "Cálice de Fogo", "Câmara Secreta"],
                    ["Princesa", "Hercules", "Fofo", "Brutus"]];

var respostas = ["7", "1997", "Lily e James Potter", "Edwiges", "Peter Pettigrew", 
                 "O anel de Slytherin", "Delphine Lestrange", "Clodtoer", "Ordem da Fénix", "Fofo"];
        
let container = document.getElementById("quiz");
let alter = document.getElementById("alt");
var acertos = 0;
x = 0;
function Quiz() {
    x = 0;
    MostrarPergunta(x);
}

function MostrarPergunta(num) {
    container.innerHTML = "";

    var pergunta = document.createElement("h3");
    pergunta.style = "text-align: center"
    pergunta.innerHTML = perguntas[num];
    container.appendChild(pergunta);

    var Lista = document.createElement("ul");
    Lista.id = "alt";

    for (let i = 0; i < alternativas[num].length; i++) {
        var alt = document.createElement("li");
        alt.classList.add("mb-2");

        var botao = document.createElement("button");
        botao.classList.add("btn", "btn-primary", "btn-block");
        botao.id = alternativas[num][i]
        botao.onclick = function() {
            Analisar(alternativas[num][i], num);
        };
        botao.innerHTML = alternativas[num][i];

        alt.appendChild(botao);
        Lista.appendChild(alt);
    }

    container.appendChild(Lista);
}

function Analisar(resposta, num){
    if(resposta === respostas[num]){
        acertos++;
    }
    num++;
    if(num < 10)
    {
        MostrarPergunta(num);
    }else{
        document.write(acertos);
    }
}