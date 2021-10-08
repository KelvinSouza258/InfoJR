# Atividade 10 - Next e o próximo nível

Flexibilizando o conteúdo de nossos sites

## Informações principais

- **Núcleo:** Front-end
- **Orientador:** [Abner Rodrigues](@todomir)
- **Data da Atividade:** 11/10
- **Data de Entrega:** 16/10

## Descrição da atividade

Agora que já sabemos do potencial do Next.js, podemos elevar ainda mais a flexibilidade de nossos sites.

Imagine a seguinte situação: um cliente quer criar um site que contenha conteúdo dinâmico, como por exemplo, um blog, um site de lojas, um site de eventos, etc. Nós criamos as páginas pra esse site, fazemos a entrega e tudo certo. Porém, agora o cliente quer adicionar um post no blog dele, ou um produto na loja. Então vamos no banco de dados, fazemos as mudanças necessárias e entregamos o site novamente. Mas agora ele quer mudar o título da página inicial; então vamos lá no código fonte e alteramos.

Já ficou claro que esse workflow não é desejado para nenhum dos lados. Os desenvolvedores não querem ter que ficar mudando coisas pequenas, ou mexendo em API e em banco de dados toda vez que o cliente pedir uma mudança. Do outro lado, o cliente só quer fazer uma mudança simples no conteúdo sem ficar dependente dos desenvolvedores.

É pra resolver essas situações que existem os **CMSs**. CMS é sigla para *Content Management System*, ou seja, Sistema de Gerenciamento de Conteúdo. O CMS consiste em uma interface gráfica ligada à alguma forma de persistir dados (alguns CMSs como o Netlify utilizam o Git, outros usam bancos de dados como Postgres) responsável por gerenciar o conteúdo de um site, como o exemplo acima.

Entre os diversos CMSs, um deles é o [Storyblok](https://www.storyblok.com/), foco de nossa atividade de hoje.

Sua atividade será pesquisar sobre o Storyblok, ver as vantagens e desvantagens, principais diferenças de outros CMSs e entender como o Storyblok funciona, e então integrá-lo com nossa aplicação de [blog](https://www.figma.com/file/6Uib9NpfOnHTlzwoN803IK/Blogão-da-Info?node-id=0%3A1) da aula anterior.

Todas as regras da atividade anterior se mantém. Contudo, agora usaremos os dados do Storyblok para gerenciar o conteúdo do blog, e não do arquivo JSON. Sendo assim, esse arquivo, tal como o `json-server` deverão ser removidos do projeto e substituídos pelo Storyblok.

### Regras

- O uso do Typescript é obrigatório e sua habilidade de tipar corretamente será avaliada
- Você deverá recriar a interface descrita na seção de [descrição da atividade](#descricao-da-atividade)
- A página deverá ser responsiva, conforme o mockup exibido na [descrição da atividade](#descricao-da-atividade)
- A forma de estilização fica à seu critério (Tailwind, CSS-in-JS, CSS Modules, ou CSS puro)
- As regras da atividade anterior permanecem, com excessão do `json-server`, que deverá ser removido, juntamente ao arquivo `cms.json`.
- O uso do Storyblok é obrigatório. Mais ninguém além de você irá acessar a GUI do Storyblok em seu projeto, então basta criar uma conta pessoal e usar o Storyblok como seu CMS.
  - A implementação eficaz do Storyblok será avaliada.

## Materiais de apoio

- [Next.js](https://nextjs.org/docs/getting-started)
- [Storyblok](https://www.storyblok.com/)
  - [Storyblok - Next.js](https://www.storyblok.com/tp/add-a-headless-cms-to-next-js-in-5-minutes)
  - [Storyblok - Next.js | Typescript](https://www.storyblok.com/tp/storefront-next-bigcommerce)
    - **ATENÇÃO**: este tutorial não inclui apenas a configuração padrão do Storyblok com Typescript, mas sim a implementação do Storyblok em um template de e-commerce do Next.js. Cuidado ao copiar código cegamente. Avalie o código pra ver se ele se encaixa no seu contexto antes de copiar.
