# Arrays, DOM e Eventos

Projeto prático de JavaScript no navegador, com `index.html` e `app.js` na mesma pasta. Para ver os resultados, abra o `index.html` no navegador e acompanhe o Console (F12).

## Arrays e métodos

- **forEach** percorre o array e executa uma ação para cada item (ex.: imprimir "Olá, NOME!"). Não retorna um novo array.
- **map** percorre o array e retorna um **novo** array com o resultado da transformação de cada item (ex.: nomes em maiúsculas). O original não é alterado.
- **filter** retorna um **novo** array só com os itens que passam na condição (ex.: preços acima de 20). O original não é alterado.
- **reduce** percorre o array acumulando um único valor (ex.: soma de todos os preços), a partir de um valor inicial.

## Manipulação do DOM

- **querySelector / querySelectorAll** selecionam elementos pelo seletor CSS (`#id`, `.classe`). O primeiro retorna um elemento; o segundo, uma lista de elementos.
- **textContent** insere apenas texto, sem interpretar HTML (mais seguro). **innerHTML** interpreta tags, e por isso é usado só quando necessário.
- **createElement** cria um elemento em memória, que passa a aparecer na página ao ser adicionado com **append**.
- **classList** adiciona, remove, alterna (`toggle`) e verifica (`contains`) classes CSS sem reescrever o atributo `class` inteiro.

## Eventos e Event Delegation

- **addEventListener** registra uma função para ser executada quando um evento acontece (`click`, `mouseover`, `keyup`, `submit`).
- **e.preventDefault()** no `submit` do formulário impede o recarregamento da página, que apagaria os dados digitados.

### Por que usar Event Delegation

Em vez de colocar um listener em cada `<li>`, colocamos **um único listener na `#lista`**. Quando um item é clicado, o evento "sobe" pelo DOM até a lista, e dentro dela verificamos quem foi o alvo com `e.target.tagName === "LI"`.

Isso traz duas vantagens:
- **Performance:** menos listeners na memória, o que escala melhor em listas grandes.
- **Elementos dinâmicos:** os `<li>` criados depois pelo JavaScript também recebem o comportamento, sem precisar registrar novos listeners para cada um.
