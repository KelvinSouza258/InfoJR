# Atividade 10 - Next e o próximo nível

Usando o framework React para produção

## Informações principais

- **Núcleo:** Front-end
- **Orientador:** [Abner Rodrigues](@todomir)
- **Data da Atividade:** 02/10
- **Data de Entrega:** 08/10

## Descrição da atividade

A gente trabalhou até agora com React apenas. O problema é que pra muitos sites, rankear um site em React no Google é muito difícil, graças ao fato de que o React usa CSR (client side rendering), ou seja, a página fica vazia até o Javascript carregar, e nem sequer carrega se o Javascript do navegador estiver desativado.

Esse é um dos problemas que o [Next.js]("https://nextjs.org") resolve. Ele é um framework que faz o SSR (server side rendering), ou seja, ele renderiza o site primeiro no servidor, e retorna HTML estático pro cliente.

Fomos de sites estáticos com HTML, para sites dinâmicos com React, e para sites estáticos de novo com [Next.js]("https://nextjs.org").

Porém, o Next tem uma série de vantagens, pois seus sites estáticos são ✨ *dinâmicos* ✨, então podemos gerar páginas estáticas a partir de conteúdo dinâmico, como um banco de dados, uma API, um CMS, etc, ou indexar dados de forma dinâmica antes da página sequer renderizar, evitando ter que lidar com estados de loading em algumas situações.

Além disso, o Next oferece *file based routing*, isto é, todas suas páginas já são automaticamente transformadas em rotas e não precisamos fazer isso manualmente, eliminando o uso de bibliotecas de roteamento, como também diversos componentes que facilitam a criação de páginas, como **Image, Link, Script**, entre outros. O Next possui também suporte à CSS Modules *out-of-the-box*.

Sua atividade será aprender sobre SSR e SSG (server side rendering e static site generation), e como usar [Next.js]("https://nextjs.org") para gerar sites estáticos. Para isso, você irá replicar [este mockup](https://www.figma.com/file/6Uib9NpfOnHTlzwoN803IK/Blogão-da-Info?node-id=0%3A1). A página **home** será a página inicial, e a **post** será a página de um post específico. **As páginas de posts devem ser geradas automaticamente**, com uma página pra cada post disponível.

Além disso, usaremos o [json-server](github.com/typicode/json-server) como uma pseudo-API, para simular um banco de dados. Para isso, basta arrastar o  instalar o pacote json-server no seu projeto usando o comando:

```bash
npm i json-server
```

ou

```bash
yarn add json-server
```

e depois, rodar o comando:

```bash
npm run json-server --watch cms.json
```

ou

```bash
yarn json-server --watch cms.json
```

### Regras

- O uso do Typescript é obrigatório e sua habilidade de tipar corretamente será avaliada
- Você deverá recriar a interface descrita na seção de [descrição da atividade](#descricao-da-atividade)
- A página deverá ser responsiva, conforme o mockup exibido na [descrição da atividade](#descricao-da-atividade)
- A forma de estilização fica à seu critério (Tailwind, CSS-in-JS, CSS Modules, ou CSS puro)
- A página home deverá ser a página inicial, e a página de post deverá ser a página de um post específico.
- O post mais recente deve ser exibido acima dos outros, com imagem, título e descrição, conforme o mockup exibido na [descrição da atividade](#descricao-da-atividade).
- As páginas de posts devem ser geradas automaticamente, com uma página pra cada post disponível.
- O uso do [json-server](github.com/typicode/json-server) é obrigatório. Todos os dados estão dentro do arquivo `cms.json`
- Você pode adicionar mais posts no `cms.json`, mas não é necessário.
  - Você pode usar o próprio json-server também para enviar todas as requisições que faria numa API comum.

## Materiais de apoio

- [Next.js](https://nextjs.org/docs/getting-started)
- [json-server](github.com/typicode/json-server)
