// Criar as variáveis

const nomeDoce = "Pirulito";
const preco = 4.9;
const disponivel = true;

console.log(nomeDoce, preco, dispomivel);

DocumentFragment.getElementById("resultado") 
.textContent =
' ${nomeDoce} custa R$' +
'${preco.toFixed(@)} - disponivel:' +
'${disponivel}';