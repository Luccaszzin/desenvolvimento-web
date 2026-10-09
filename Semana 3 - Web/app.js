const aluno = {
    nome: "Lucas",
    idade: 20,
    curso: "Engenharia da computação",
    isAtivo: true,
    email: "lucas75fla@gmail.com",
    materias: ["Matemática", "Física", "Programação"],
};
const copiaAluno = { ...aluno, periodo: "Segundo" };
console.log(copiaAluno);

const conta = {
    titular: "Lucas",
    saldo: 1000,
    depositar: function (valor) {
        this.saldo += valor;
    },
};
conta.depositar(500);

console.log(conta.saldo);

const perfil = {
    nome: "Lucas",
    foto: null,
    atuacao: "Programador full-stack",
    trabalho: "Google",
};
const trabalho = perfil?.trabalho ?? "Desempregado";
console.log(trabalho);

const fetchPerfil = () => Promise.resolve(perfil);

fetchPerfil().then((dados) => console.log("Perfil carregado:", dados.nome));

// Bloco 1 – Fundamentos e Variáveis

let pontos = 50;
pontos = pontos + 10;
console.log("Pontos:", pontos);

const MAX_PONTOS = 100;
try {
    MAX_PONTOS = 200;
} catch (erro) {
    console.log(erro.name + ": " + erro.message);
}

const textoExemplo = "Olá";
const numeroExemplo = 42;
const booleanoExemplo = true;
let indefinidoExemplo;
const nuloExemplo = null;

console.log(typeof textoExemplo);
console.log(typeof numeroExemplo);
console.log(typeof booleanoExemplo);
console.log(typeof indefinidoExemplo);
console.log(typeof nuloExemplo);

const nomeAluno = "Lucas";
const idadeAluno = 20;

console.log(`Olá, ${nomeAluno}! Você tem ${idadeAluno} anos.`);
console.log("Olá, " + nomeAluno + "! Você tem " + idadeAluno + " anos.");

// Bloco 2 – Funções

console.log("ehMaiorDeIdade(20):", ehMaiorDeIdade(20)); // true

function ehMaiorDeIdade(idade) {
    return idade >= 18;
}

try {
    console.log(ehMaiorDeIdadeExpressao(20));
} catch (erro) {
    console.log(erro.name + ": " + erro.message); // ReferenceError
}

const ehMaiorDeIdadeExpressao = function (idade) {
    return idade >= 18;
};

console.log("ehMaiorDeIdadeExpressao(20):", ehMaiorDeIdadeExpressao(20)); // true

function dobro(n) {
    return n * 2;
}

const dobroExpressao = function (n) {
    return n * 2;
};

const dobroArrow = (n) => n * 2;

console.log("dobro(4):", dobro(4));
console.log("dobroExpressao(4):", dobroExpressao(4));
console.log("dobroArrow(4):", dobroArrow(4));

function dobroComPadrao(n = 1) {
    return n * 2;
}

console.log("dobroComPadrao():", dobroComPadrao());
console.log("dobroComPadrao(7):", dobroComPadrao(7));

// Bloco 3 – Controle de Fluxo

function classificarNota(nota) {
    if (nota >= 6) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}

console.log("classificarNota(7):", classificarNota(7)); // Aprovado
console.log("classificarNota(4):", classificarNota(4)); // Reprovado

const corSemaforo = "amarelo";

switch (corSemaforo) {
    case "vermelho":
        console.log("Pare");
        break;
    case "amarelo":
        console.log("Atenção");
        break;
    case "verde":
        console.log("Siga");
        break;
    default:
        console.log("Cor inválida");
}

for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

let contagem = 5;
while (contagem >= 1) {
    console.log(contagem);
    contagem--;
}

for (let n = 1; n <= 20; n++) {
    console.log(n, n % 2 === 0 ? "par" : "ímpar");
}

let m = 1;
while (m <= 20) {
    console.log(m, m % 2 === 0 ? "par" : "ímpar");
    m++;
}

function diaDaSemana(numero) {
    switch (numero) {
        case 1:
            return "Domingo";
        case 2:
            return "Segunda-feira";
        case 3:
            return "Terça-feira";
        case 4:
            return "Quarta-feira";
        case 5:
            return "Quinta-feira";
        case 6:
            return "Sexta-feira";
        case 7:
            return "Sábado";
        default:
            return "Número inválido";
    }
}

console.log("diaDaSemana(1):", diaDaSemana(1));
console.log("diaDaSemana(9):", diaDaSemana(9));
