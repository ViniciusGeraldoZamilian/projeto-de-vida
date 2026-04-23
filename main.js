const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2026-04-25T00:00:00");

function calculaTempo(tempoAlvo) {
    const agora = new Date();
    const diferenca = tempoAlvo - agora;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
    const segundos = Math.floor((diferenca / 1000) % 60);

    return `${dias}d ${horas}h ${minutos}m ${segundos}s`;
}

function atualizaContador() {
    contadores[0].textContent = calculaTempo(tempoObjetivo1);
}

// atualiza a cada segundo
setInterval(atualizaContador, 1000);