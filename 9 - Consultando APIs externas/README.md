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

### Regras

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

## Materiais de apoio

- [COVID19 API](https://covid19api.com)
- [React Router](https://reactrouter.com/web/guides/quick-start)
- [React Query](https://react-query.tanstack.com)
- [Fetch](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch)
- [Axios](https://axios-http.com/docs/intro)
