# Atividade 8 - Roteamento com React Router

Páginas diferentes, de verdade agora.

## Informações principais

- **Núcleo:** Front-end
- **Orientador:** [Abner Rodrigues](@todomir)
- **Data da Atividade:** 17/09
- **Data de Entrega:** 24/09

## Descrição da atividade

Até agora, a gente somente simulou novas páginas simplesmente trocando de componentes, mas agora vamos para o próximo nível: criar páginas distintas, de verdade.

Para isso, vamos usar o React Router, que é uma das bilbiotecas mais utilizadas para criar roteamento de páginas.

A atividade é simples, todas as páginas distintas do [mockup](https://www.figma.com/file/z9kZjLRkPF7wS7BE3uNwUX/Timely?node-id=0%3A1) deverão ser páginas diferentes no React Router, onde a tela de login ficará na rota `/login`, e a tela de dashboard na rota `/dashboard`. Além disso, a rota `/dashboard` deverá ser uma **rota protegida**, isto é, só deverá ser acessível se o usuário estiver logado.

Também teremos uma rota `/profile`, que também deverá ser protegida, e mostrará alguns dados específicos para cada usuário. Esses dados deverão ser criados por vocês e devem ser únicos pra cada usuário.

Caso o usuário não esteja logado, ele deverá ser redirecionado para a página de login, caso ele esteja logado, deverá ser redirecionado à página de dashboard.

### Regras

- O uso do Typescript é obrigatório e sua habilidade de tipar corretamente será avaliada
- Você deverá recriar a interface descrita na seção de [descrição da atividade](#descricao-da-atividade)
- A página deverá ser responsiva, conforme o mockup exibido na [descrição da atividade](#descricao-da-atividade)
- Todos os requisitos da atividade anterior deverão ser mantidos.
- Você deverá utilizar o React Router para criar um sistema de rotas para sua aplicação.
- A rota `/login` deverá redirecionar ao dashboard se houver um usuário logado.
- A rota `/dashboard` deverá ser protegida, isto é, só deverá ser acessível se o usuário estiver logado.
  - A rota `/dashboard` deverá redirecionar ao login se não houver um usuário logado.
- A rota `/profile` deverá ser protegida, isto é, só deverá ser acessível se o usuário estiver logado.

## Materiais de apoio

- [React Router](https://reactrouter.com/web/guides/quick-start)
