// criar variantes

const tituloFilme = "adventura espacial";
const classificacaoMinima = 12;
const idadeESpectador = 14;
const podeAssistir = idadeESpectador >= classificacaoMinima;

console.log(podeAssistir);
document.getElementById("resultado").textContent =
'$(tituloFilme"  ($(classificacaoMinima} anos') -
idade $(idadeEspectador: pode assistir?  $(podeAssistir)";