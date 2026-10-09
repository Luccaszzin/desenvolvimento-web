# Semana 5 – Objetos, Dados e Assincronismo

Mini projeto com `index.html` e `app.js` que mostra:

1. **Validação e manipulação de dados:** pedidos são validados (cliente não vazio e valor maior que 0), filtrados pelo status `"pago"`, somados com `reduce` e formatados com `toFixed(2)`.
2. **Buscador de CEP:** consome a API ViaCEP com `fetch` e `async/await`, valida o CEP com `trim()` e expressão regular, e trata os quatro estados da tela (Carregando, Erro, Vazio/Não encontrado e Sucesso). Também guarda um histórico de buscas.
3. **Mini Pokédex:** consome a PokéAPI, mostra nome, imagem e tipos, e trata 404 como "Pokémon não encontrado".

Para ver o resultado, abra o `index.html` no navegador. Os dados de validação aparecem no Console (F12).

## Por que `Promise.all` pode ser mais rápido que vários `await` seguidos?

Com `await` seguidos, cada requisição só começa depois que a anterior termina:

```js
const a = await buscar("a"); // espera terminar
const b = await buscar("b"); // só começa agora
```

Se cada uma leva 1 segundo, o total é cerca de 2 segundos.

Com `Promise.all`, todas as requisições são disparadas ao mesmo tempo e o código espera todas terminarem:

```js
const [a, b] = await Promise.all([buscar("a"), buscar("b")]);
```

Como o tempo de rede se sobrepõe, o total fica perto de 1 segundo. Em geral, `Promise.all` aproveita melhor o tempo de espera das requisições quando elas são independentes entre si. Se uma depende do resultado da outra, o `await` sequencial continua necessário.
