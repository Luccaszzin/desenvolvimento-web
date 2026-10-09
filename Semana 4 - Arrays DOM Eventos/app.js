// Bloco 1
const nomes = ["Ana", "Bruno", "Carla"];

nomes.forEach((nome) => console.log(`Olá, ${nome}!`));

const nomesMaiusculos = nomes.map((nome) => nome.toUpperCase());
console.log("Nomes em maiúsculas:", nomesMaiusculos);

const precos = [10, 25, 40, 5, 60];

const precosAcimaDe20 = precos.filter((preco) => preco > 20);
console.log("Preços acima de 20:", precosAcimaDe20);

const somaPrecos = precos.reduce((acumulador, preco) => acumulador + preco, 0);
console.log("Soma dos preços:", somaPrecos);

const produtos = [
    { nome: "Caderno", preco: 15 },
    { nome: "Caneta", preco: 5 },
    { nome: "Mochila", preco: 80 },
    { nome: "Estojo", preco: 30 },
];

const nomesProdutos = produtos.map((produto) => produto.nome);
console.log("Nomes dos produtos:", nomesProdutos);

const produtosBaratos = produtos.filter((produto) => produto.preco < 50);
console.log("Produtos com preço menor que 50:", produtosBaratos);

const totalProdutos = produtos.reduce((total, produto) => total + produto.preco, 0);
console.log("Soma dos preços dos produtos:", totalProdutos);

produtos.forEach((produto) => console.log(`${produto.nome}: R$ ${produto.preco}`));

// Bloco 2
const titulo = document.querySelector("#titulo");
titulo.textContent = "Blog do Lucas";

const paragrafos = document.querySelectorAll(".texto");
paragrafos.forEach((paragrafo) => console.log(paragrafo.textContent));

const lista = document.querySelector("#lista");
lista.innerHTML += `
    <li>Item D</li>
    <li>Item E</li>
`;

const terceiroItem = document.createElement("li");
terceiroItem.textContent = "Terceiro item";
lista.append(terceiroItem);

terceiroItem.classList.add("destaque");
console.log('classList.contains("destaque"):', terceiroItem.classList.contains("destaque"));

const tarefas = ["Estudar JS", "Fazer exercícios", "Revisar DOM"];

tarefas.forEach((tarefa, indice) => {
    const li = document.createElement("li");
    li.textContent = tarefa;

    if (indice === 0) {
        li.classList.add("feito");
    }

    lista.append(li);
});

console.log("Quantidade de itens na lista:", document.querySelectorAll("li").length);

// Bloco 3
const botao = document.querySelector("#botao");

botao.addEventListener("click", () => console.log("Clicou!"));

botao.addEventListener("mouseover", () => {
    botao.textContent = "Pode clicar!";
});

const campoNome = document.querySelector("#nome");

campoNome.addEventListener("keyup", () => console.log(campoNome.value));

// Delegação: um listener na lista trata também os <li> criados depois
lista.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("feito");
        console.log("Item clicado:", e.target.textContent);
    }
});

const liDinamico = document.createElement("li");
liDinamico.textContent = "Item criado via JavaScript";
lista.append(liDinamico);

const formulario = document.querySelector("#formulario");
const campoTarefa = document.querySelector("#tarefa");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const texto = campoTarefa.value.trim();

    if (texto === "") {
        return;
    }

    const li = document.createElement("li");
    li.textContent = texto;
    lista.append(li);

    campoTarefa.value = "";
});
