# Atividade 5 - Compartilhando estado com a Context API

Nessa aula, vamos aprender como compartilhar estado com a API de contexto do React.

## Informações principais

- **Núcleo:** Front-end
- **Orientador:** [Abner Rodrigues](@todomir)
- **Data da Atividade:** 28/08
- **Data de Entrega:** 03/09

## Descrição da atividade

Como já sabemos, o fluxo de dados do React é unidirecional e flui sempre pra baixo na árvore de componentes. Porém, existem momentos que precisamos compartilhar dados com componentes acima da árvore, ou componentes netos, bisnetos, tataranetos e assim por diante. Passar esses dados para baixo como props, ação conhecida como *prop drilling* é um dos mais comuns, porém, nem sempre é o ideal, principalmente se tratando de compartilhar dados do topo da árvore para a base.

Para mitigar esse problema, existe a API de contexto do React, que nos permite compartilhar estado entre componentes sem passá-lo por props.

Sua atividade será pesquisar sobre a Context API e seus hooks. Além disso, iremos implementar um simples dashboard no nosso [mockup](https://www.figma.com/file/z9kZjLRkPF7wS7BE3uNwUX/Timely?node-id=0%3A1).

Vamos aumentar um pouco a complexidade dos nossos dados também. Seu login deverá pesquisar o array de usuários em `user.json` e verificar se o usuário existe e se suas credenciais conferem.

### Regras

- O uso do Typescript é obrigatório e sua habilidade de tipar corretamente será avaliada
- Você deverá recriar a interface descrita na seção de [descrição da atividade](#descricao-da-atividade)
- A página deverá ser responsiva, conforme o mockup exibido na [descrição da atividade](#descricao-da-atividade)
- A forma de estilização fica à seu critério (Tailwind ou CSS puro)
- A página deverá persistir o e-mail do usuário. A forma fica ao seu critério, mas utilizar a forma considerada mais segura é recomendado.
- A página deverá persistir a informação da preferência de tema do usuário.
- Ao fazer login ou logout, a página deve ser atualizada automaticamente.
- Após o *refresh*, deve ser exibida a tela correspondente à ação -- tela de logout após o login, e tela de login após o logout.

## Materiais de apoio

- [Universal Cookie docs](https://github.com/reactivestack/cookies/tree/master/packages/universal-cookie)
- [Document.cookie](https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie)
- [Salvando informações no Local Storage com ReactJs](https://medium.com/@carloslevir/salvando-informa%C3%A7%C3%B5es-no-local-storage-com-reactjs-ca5d59842153)
