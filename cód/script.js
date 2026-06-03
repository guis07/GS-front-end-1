const links = document.querySelectorAll("nav a");
const secoes = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let secaoAtual = "";

    secoes.forEach(secao => {

        const topo = secao.offsetTop - 200;
        const altura = secao.offsetHeight;

        if (
            window.scrollY >= topo &&
            window.scrollY < topo + altura
        ) {
            secaoAtual = secao.id;
        }
    });

    links.forEach(link => {

        link.classList.remove("ativo");

        if (
            link.getAttribute("href") ===
            "#" + secaoAtual
        ) {
            link.classList.add("ativo");
        }
    });
});

const formulario =
document.getElementById("formulario");

if (formulario) {

    formulario.addEventListener(
        "submit",
        function (e) {

            e.preventDefault();

            const nome =
                document.getElementById("nome").value.trim();

            const email =
                document.getElementById("email").value.trim();

            const mensagem =
                document.getElementById("mensagem").value.trim();

            if (
                nome === "" ||
                email === "" ||
                mensagem === ""
            ) {

                alert(
                    "Preencha todos os campos."
                );

                return;
            }

            alert(
                "Mensagem enviada com sucesso!"
            );

            formulario.reset();
        }
    );
}


const perguntas = [

{
    pergunta:
    "Qual tecnologia permite comunicação sem internet?",

    opcoes:
    ["Wi-Fi", "LoRa", "Bluetooth"],

    resposta: 1
},

{
    pergunta:
    "Qual recurso ajuda a localizar vítimas?",

    opcoes:
    ["GPS", "Teclado", "Monitor"],

    resposta: 0
},

{
    pergunta:
    "O projeto foi criado para auxiliar em:",

    opcoes:
    ["Desastres naturais", "Jogos", "Streaming"],

    resposta: 0
},

{
    pergunta:
    "A tecnologia LoRa possui:",

    opcoes:
    ["Longo alcance", "Curto alcance", "Nenhum alcance"],

    resposta: 0
},

{
    pergunta:
    "Quem pode utilizar o sistema?",

    opcoes:
    ["Qualquer cidadão", "Somente bombeiros", "Somente médicos"],

    resposta: 0
},

{
    pergunta:
    "O principal objetivo é:",

    opcoes:
    ["Comunicação emergencial", "Marketing", "Publicidade"],

    resposta: 0
},

{
    pergunta:
    "Qual órgão pode utilizar a solução?",

    opcoes:
    ["Defesa Civil", "Banco", "Cinema"],

    resposta: 0
},

{
    pergunta:
    "A solução funciona em áreas rurais?",

    opcoes:
    ["Sim", "Não", "Apenas cidades"],

    resposta: 0
},

{
    pergunta:
    "O sistema auxilia equipes de:",

    opcoes:
    ["Resgate", "Cinema", "Esportes"],

    resposta: 0
},

{
    pergunta:
    "O benefício principal é:",

    opcoes:
    ["Segurança", "Moda", "Publicidade"],

    resposta: 0
}

];


const quizContainer =
document.getElementById("quiz-container");

if (quizContainer) {

    perguntas.forEach((pergunta, indice) => {

        const bloco = document.createElement("div");

        bloco.classList.add("pergunta");

        let html = `
            <h3>
                ${indice + 1}.
                ${pergunta.pergunta}
            </h3>
        `;

        pergunta.opcoes.forEach((opcao, i) => {

            html += `
                <label>
                    <input
                        type="radio"
                        name="q${indice}"
                        value="${i}">
                    ${opcao}
                </label>
                <br>
            `;
        });

        bloco.innerHTML = html;

        quizContainer.appendChild(bloco);
    });
}


function corrigirQuiz() {

    let pontos = 0;

    perguntas.forEach((pergunta, indice) => {

        const respostaMarcada =
        document.querySelector(
            `input[name="q${indice}"]:checked`
        );

        if (
            respostaMarcada &&
            Number(respostaMarcada.value) ===
            pergunta.resposta
        ) {
            pontos++;
        }
    });

    const resultado =
    document.getElementById("resultado");

    if (resultado) {

        resultado.innerHTML =
        `
        Você acertou
        <strong>${pontos}</strong>
        de
        <strong>${perguntas.length}</strong>
        perguntas.
        `;

        resultado.scrollIntoView({
            behavior: "smooth"
        });
    }
}



function temaAzul() {

    document.documentElement
    .style.setProperty(
        "--azul",
        "#0B3C5D"
    );

    document.documentElement
    .style.setProperty(
        "--laranja",
        "#FF8C00"
    );
}

function temaVerde() {

    document.documentElement
    .style.setProperty(
        "--azul",
        "#146C43"
    );

    document.documentElement
    .style.setProperty(
        "--laranja",
        "#28A745"
    );
}

function temaEscuro() {

    document.documentElement
    .style.setProperty(
        "--azul",
        "#111111"
    );

    document.documentElement
    .style.setProperty(
        "--laranja",
        "#BB86FC"
    );
}