# Atividade 9 - Consultando APIs externas

Consultando APIs reais com dados reais.

## Informações principais

- **Núcleo:** Front-end
- **Orientador:** [Abner Rodrigues](@todomir)
- **Data da Atividade:** 25/09
- **Data de Entrega:** 01/10

## Descrição da atividade

Grande parte do trabalho de um desenvolvedor front-end é integrar sites com APIs externas. Então é isso que faremos na atividade de hoje.

Hoje vamos consultar a uma API com informações sobre a COVID-19 em todo o mundo.

Sua atividade consistirá em duas páginas: uma página de pesquisa com dois filtros, país e status *(e.g Brasil e casos confirmados)* e uma página para exibir esses resultados e possibilitar outra pesquisa. Para isso, você deverá consultar a [COVID19 API](https://covid19api.com) e implementar a interface proposta neste [mockup](https://www.figma.com/file/F1e9EfpflFgC0BTTSncvEi/COVID-API?node-id=0%3A1).

Além disso, para fazer a consulta, você pode utilizar qualquer abordagem que preferir, mas preferencialmente usará ou o [Axios](https://axios-http.com/docs/intro), ou o [Fetch](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch), ou o [React Query](https://react-query.tanstack.com). Você pode dar uma olhada em quais abordagens você gosta mais, cada abordagem tem suas vantagens e desvantagens, desde DX (developer experience) à tamanho da biblioteca, então escolha sabiamente e não tente complicar demais.

É importante também lidar com todos os estados de uma consulta assíncrona: *idle, loading, success e error*. Então, caso os dados estejam carregando, uma das abordagens é criar um [skeleton](https://css-tricks.com/building-skeleton-components-with-react/), que é um esqueleto da página que mostra ao usuário a disposição das informações antes mesmo dos dados carregarem (ver link para mais exemplos).

Junto a isso, é preciso lidar com erros para dar feedback ao usuário sobre as ações que ele realiza. Uma das abordagens mais populares é usando [Error Boundaries](https://pt-br.reactjs.org/docs/error-boundaries.html) que é uma forma nativa de capturar erros e não permitir que partes da aplicação parem de funcionar por que desses erros.

### Regras

- O uso do ESLint e do Prettier é obrigatório para manter os padrões de projeto
- O uso do Typescript é obrigatório e sua habilidade de tipar corretamente será avaliada
- Você deverá recriar a interface descrita na seção de [descrição da atividade](#descricao-da-atividade)
- A página deverá ser responsiva, conforme o mockup exibido na [descrição da atividade](#descricao-da-atividade)
- A página `/` ou index deverá conter os seguintes filtros para pesquisa:
  - País: deverá ser um select com todos os países disponíveis na API
  - Status: deverá ser um select com todos os status disponíveis na API
  - Ambos os filtros são obrigatórios e deverão mostrar um erro caso estejam vazios.
- A página `/results` deverá exibir o resultado da pesquisa, com os buscados da API, além dos mesmos filtros da página anterior, já preenchidos com os valores usados na pesquisa passada
  - A página `/results` deverá persistir os filtros da pesquisa no caso de um refresh, a abordagem utilizada para implementar essa funcionalidade será avaliada.
- A forma de consulta à API é livre, mas recomenda-se usar Axios ou Fetch
- Você deverá lidar com estados de carregamento e erros na aplicação

## Materiais de apoio

- [COVID19 API](https://covid19api.com)
- [React Router](https://reactrouter.com/web/guides/quick-start)
- [React Query](https://react-query.tanstack.com)
- [Fetch](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch)
- [Axios](https://axios-http.com/docs/intro)
- [Error Boundaries](https://pt-br.reactjs.org/docs/error-boundaries.html)

- [Código desenvolvido durante a RN](https://github.com/Todomir/rn-8)

## Sugestões

Como [Error Boundaries](https://pt-br.reactjs.org/docs/error-boundaries.html) são componentes de classe, e o código acaba sendo igual para muitos projetos, foi criada a lib [react-error-boundary](https://github.com/bvaughn/react-error-boundary), com a implementação do error boundary. Essa lib pode ser usada em outros projetos, mas inicialmente é recomendado implementar você mesmo para entender como funciona.

### Comando com todos as dependências necessárias para o ESLint e Prettier

```bash
npm install --save-dev prettier eslint eslint-config-airbnb-typescript eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-hooks
```
Ou, caso esteja usando Yarn:

```bash
yarn add -D prettier eslint eslint-config-airbnb-typescript eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react 
```

