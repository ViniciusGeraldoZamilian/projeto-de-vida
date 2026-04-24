const contadores = document.querySelectorAll(".contador");

// datas para cada objetivo
const tempos = [
new Date("2026-04-25T00:00:00"),
new Date("2026-05-01T00:00:00"),
new Date("2026-06-01T00:00:00"),
new Date("2026-07-01T00:00:00")
];

function calculaTempo(tempoAlvo) {
const agora = new Date();
const diferenca = tempoAlvo - agora;

```
if (diferenca <= 0) {
    return "Tempo esgotado!";
}

const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
const segundos = Math.floor((diferenca / 1000) % 60);

return `${dias}d ${horas}h ${minutos}m ${segundos}s`;
```

}

function atualizaContador() {
contadores.forEach((contador, i) => {
contador.textContent = calculaTempo(tempos[i]);
});
}

// inicia imediatamente
atualizaContador();

// atualiza a cada segundo
setInterval(atualizaContador, 1000);

// ----------- ABAS -----------
const botoes = document.querySelectorAll(".botao");
const abas = document.querySelectorAll(".aba-conteudo");

botoes.forEach((botao, i) => {
botao.addEventListener("click", () => {

```
    botoes.forEach(b => b.classList.remove("ativo"));
    abas.forEach(a => a.classList.remove("ativo"));

    botao.classList.add("ativo");
    abas[i].classList.add("ativo");
});
```

});
