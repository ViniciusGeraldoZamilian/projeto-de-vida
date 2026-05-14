// ===============================
// BOTÕES DAS ABAS
// ===============================

const botoes = document.querySelectorAll(".botao");
const abas = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {

    botoes[i].addEventListener("click", function () {

        // REMOVE CLASSE ATIVA
        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            abas[j].classList.remove("ativo");
        }

        // ADICIONA CLASSE ATIVA
        botoes[i].classList.add("ativo");
        abas[i].classList.add("ativo");

    });

}

// ===============================
// DATAS DOS OBJETIVOS
// ===============================

const tempos = [

    new Date("2032-04-25T00:00:00"),
    new Date("2032-05-25T00:00:00"),
    new Date("2032-06-25T00:00:00"),
    new Date("2032-07-25T00:00:00")

];

// ===============================
// FUNÇÃO DO CRONÔMETRO
// ===============================

function calculaTempo(tempoObjetivo) {

    const agora = new Date();

    // DIFERENÇA ENTRE DATAS
    const tempoRestante = tempoObjetivo - agora;

    // CASO O TEMPO ACABE
    if (tempoRestante <= 0) {

        return `
            <div class="contador-finalizado">
                Objetivo concluído!
            </div>
        `;

    }

    // CÁLCULOS
    const dias = Math.floor(tempoRestante / (1000 * 60 * 60 * 24));

    const horas = Math.floor(
        (tempoRestante / (1000 * 60 * 60)) % 24
    );

    const minutos = Math.floor(
        (tempoRestante / (1000 * 60)) % 60
    );

    const segundos = Math.floor(
        (tempoRestante / 1000) % 60
    );

    // RETORNA HTML FORMATADO
    return `

        <div class="contador-digito">
            <p class="contador-digito-numero">${dias}</p>
            <p class="contador-digito-texto">dias</p>
        </div>

        <div class="contador-digito">
            <p class="contador-digito-numero">${horas}</p>
            <p class="contador-digito-texto">horas</p>
        </div>

        <div class="contador-digito">
            <p class="contador-digito-numero">${minutos}</p>
            <p class="contador-digito-texto">min</p>
        </div>

        <div class="contador-digito">
            <p class="contador-digito-numero">${segundos}</p>
            <p class="contador-digito-texto">seg</p>
        </div>

    `;

}

// ===============================
// ATUALIZA OS CONTADORES
// ===============================

function atualizaCronometro() {

    const contadores = document.querySelectorAll(".contador");

    for (let i = 0; i < contadores.length; i++) {

        contadores[i].innerHTML = calculaTempo(tempos[i]);

    }

}

// INICIA O CRONÔMETRO
atualizaCronometro();

// ATUALIZA A CADA 1 SEGUNDO
setInterval(atualizaCronometro, 1000);