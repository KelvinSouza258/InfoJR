# Atividade 6 - Compartilhando estado com a Context API

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
- A aplicação deverá persistir um token associado ao usuário após o login. A forma fica ao seu critério, mas utilizar a forma considerada mais segura é recomendado.
    - Este token deverá ser utilizado para buscar os dados do usuário no caso de um *refresh*
    - Este token deverá ser único para cada usuário
- A página deverá persistir a informação da preferência de tema do usuário
- A aplicação deverá autenticar o usuário baseado no array em `users.json`
    - Caso o usuário não exista, um pop-up de erro deve ser exibido.
- O usuário não deverá conseguir logar caso o campo e-mail ou senha esteja vazio
- Ao fazer login ou logout, a página deve ser atualizada automaticamente
- Após o *refresh*, deve ser exibida a tela correspondente à ação -- tela de logout após o login, e tela de login após o logout.
- A barra de navegação, dashboard e tela de login deveram ser divididos em componentes
- Os dados do usuário logado deve estar acessível para qualquer componente que queira usá-lo
- A Context API deverá ser utilizada para compartilhar dados entre componentes

## Materiais de apoio

- [Context](https://pt-br.reactjs.org/docs/context.html)
- [Context API: como usar de forma simples e fácil](https://www.dtidigital.com.br/blog/context-api-como-usar-de-forma-simples-e-facil/)
- [Universal Cookie docs](https://github.com/reactivestack/cookies/tree/master/packages/universal-cookie)
- [Document.cookie](https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie)
- [Salvando informações no Local Storage com ReactJs](https://medium.com/@carloslevir/salvando-informa%C3%A7%C3%B5es-no-local-storage-com-reactjs-ca5d59842153)
