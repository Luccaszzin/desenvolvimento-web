// Parte 1
const pedidos = [
    { cliente: "Bia", valor: 120, status: "pago" },
    { cliente: "", valor: 50, status: "pago" },
    { cliente: "Carlos", valor: 0, status: "pago" },
    { cliente: "Ana", valor: 80, status: "pendente" },
    { cliente: "Duda", valor: 200, status: "pago" },
    { cliente: "Lucas", valor: 35.5, status: "pago" },
];

const pedidosValidos = pedidos.filter(
    (pedido) => pedido.cliente.trim() !== "" && typeof pedido.valor === "number" && pedido.valor > 0
);
const pedidosPagos = pedidosValidos.filter((pedido) => pedido.status === "pago");
const totalFaturado = pedidosPagos.reduce((total, pedido) => total + pedido.valor, 0);
const textosPedidos = pedidosPagos.map((pedido) => `${pedido.cliente} — R$ ${pedido.valor.toFixed(2)}`);

console.log(textosPedidos);
console.log(`Total faturado: R$ ${totalFaturado.toFixed(2)}`);

// Parte 2
const formCep = document.querySelector("#formCep");
const inputCep = document.querySelector("#cep");
const botaoBuscar = document.querySelector("#buscar");
const statusCep = document.querySelector("#status-cep");
const resultadoCep = document.querySelector("#resultado");
const listaHistorico = document.querySelector("#historico");
const historicoCeps = [];

function validarCep(valor) {
    const cep = valor.trim();
    return /^\d{8}$/.test(cep) ? cep : null;
}

async function buscarCep(cep) {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`, {
        signal: AbortSignal.timeout(5000),
    });

    if (!response.ok) {
        throw new Error(`Erro HTTP ${response.status}`);
    }

    return response.json();
}

function mostrarResultadoCep(dados) {
    const campos = [
        ["Rua", dados.logradouro],
        ["Bairro", dados.bairro],
        ["Cidade", dados.localidade],
        ["UF", dados.uf],
    ];

    const elementos = campos.flatMap(([termo, valor]) => {
        const dt = document.createElement("dt");
        dt.textContent = termo;

        const dd = document.createElement("dd");
        dd.textContent = valor;

        return [dt, dd];
    });

    resultadoCep.replaceChildren(...elementos);
}

function atualizarHistorico(registro) {
    historicoCeps.push(registro);

    listaHistorico.replaceChildren(
        ...historicoCeps.map((item) => {
            const li = document.createElement("li");
            li.textContent = `${item.cep} — ${item.cidade}/${item.uf}`;
            return li;
        })
    );
}

formCep.addEventListener("submit", async (e) => {
    e.preventDefault();

    const cep = validarCep(inputCep.value);

    if (!cep) {
        resultadoCep.replaceChildren();
        statusCep.textContent = "CEP inválido: digite exatamente 8 números.";
        return;
    }

    botaoBuscar.disabled = true;
    statusCep.textContent = "Buscando...";

    try {
        const dados = await buscarCep(cep);

        if (dados.erro) {
            resultadoCep.replaceChildren();
            statusCep.textContent = "CEP não encontrado";
            return;
        }

        mostrarResultadoCep(dados);
        atualizarHistorico({ cep, cidade: dados.localidade, uf: dados.uf });
        statusCep.textContent = "";
    } catch (erro) {
        resultadoCep.replaceChildren();
        statusCep.textContent = "Falha na conexão. Tente novamente.";
        console.error(erro);
    } finally {
        botaoBuscar.disabled = false;
    }
});

// Parte 3
const formPokemon = document.querySelector("#formPokemon");
const inputPokemon = document.querySelector("#pokemon");
const botaoPokemon = document.querySelector("#buscar-pokemon");
const statusPokemon = document.querySelector("#status-pokemon");
const resultadoPokemon = document.querySelector("#pokemon-resultado");

async function buscarPokemon(nome) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${encodeURIComponent(nome)}`, {
        signal: AbortSignal.timeout(5000),
    });

    if (response.status === 404) {
        return null;
    }

    if (!response.ok) {
        throw new Error(`Erro HTTP ${response.status}`);
    }

    return response.json();
}

function mostrarPokemon(dados) {
    const nome = document.createElement("h2");
    nome.textContent = dados.name;

    const elementos = [nome];

    if (dados.sprites.front_default) {
        const imagem = document.createElement("img");
        imagem.src = dados.sprites.front_default;
        imagem.alt = dados.name;
        elementos.push(imagem);
    }

    const tipos = document.createElement("ul");
    tipos.replaceChildren(
        ...dados.types.map(({ type }) => {
            const li = document.createElement("li");
            li.textContent = type.name;
            return li;
        })
    );
    elementos.push(tipos);

    resultadoPokemon.replaceChildren(...elementos);
}

formPokemon.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nome = inputPokemon.value.trim().toLowerCase();

    if (nome === "") {
        resultadoPokemon.replaceChildren();
        statusPokemon.textContent = "Digite o nome de um Pokémon.";
        return;
    }

    botaoPokemon.disabled = true;
    statusPokemon.textContent = "Buscando...";

    try {
        const dados = await buscarPokemon(nome);

        if (dados === null) {
            resultadoPokemon.replaceChildren();
            statusPokemon.textContent = "Pokémon não encontrado";
            return;
        }

        mostrarPokemon(dados);
        statusPokemon.textContent = "";
    } catch (erro) {
        resultadoPokemon.replaceChildren();
        statusPokemon.textContent = "Falha na conexão. Tente novamente.";
        console.error(erro);
    } finally {
        botaoPokemon.disabled = false;
    }
});
