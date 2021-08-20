# Atividade 5 - Cookies e LocalStorage

Nessa aula, entender um pouco mais sobre persistência de dados no front-end.

## Informações principais

- **Núcleo:** Front-end
- **Orientador:** [Abner Rodrigues](@todomir)
- **Data da Atividade:** 21/08
- **Data de Entrega:** 27/08

## Descrição da atividade

O *state* do React é uma forma bem eficiente de armazenar dados no front-end. Porém, esse state não é persistido em lugar algum, de modo de que um simples *refresh* na página limpa tudo que estava armazenado. Sendo assim, é preciso utilizar outra forma de armazenar dados que devem ser persistidos entre sessões.

As formas mais populares são os **cookies** e o **LocalStorage**.

Sua atividade será pesquisar sobre essas formas, entender suas vantagens e desvantagens e quando utilizar cada uma delas. E, para praticar, você terá que criar uma simples tela de login, seguindo o seguinte [mockup](https://www.figma.com/file/z9kZjLRkPF7wS7BE3uNwUX/Timely?node-id=0%3A1). Além disso, você terá também que implementar um simples dark mode. A opção selecionada deverá ser mantida ao atualizar a página.

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
