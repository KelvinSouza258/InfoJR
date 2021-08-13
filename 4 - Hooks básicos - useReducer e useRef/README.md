# Atividade 4 - Hooks básicos: useReducer e useRef

Nessa aula, iremos avançar um pouco no conceito de hooks com uns hooks um pouco mais avançados.

## Informações principais

- **Núcleo:** Front-end
- **Orientador:** [Abner Rodrigues](@todomir)
- **Data da Atividade:** 14/08
- **Data de Entrega:** 20/08

## Descrição da atividade

Lidar com *state* pode ser bem trabalhoso, dependendo do formato do seu estado. Além disso, pode ser bastante confuso criar query selectors, por exemplo, de forma imperativa.

Pensando nessas questões, existem 2 hooks que podem ajudar a gente a manter nosso código um pouco mais limpo: o **useReducer e o useRef**. Sua atividade será pesquisar sobre esses hooks e refatorar a atividade passada para utilizar estes hooks. Para mais, você deverá também implementar uma validação básica do seu formulário utilizando estes hooks.

O **useReducer** é um hook que recebe um objeto de estado e uma função *dispatch* e retorna um novo estado. Este hook é utilizado bastante para manipular o estado baseado em ações, e não somente manipulá-lo diretamente. Este hook é baseado no padrão [Redux](https://www.dotnetcurry.com/reactjs/1356/redux-pattern-tutorial) e pode ser utilizado para manipular o estado de forma mais limpa.

O **useRef** é um hook que retorna um *ref*. O *ref* é basicamente uma referência que guarda um valor que não irá afetar o processo de render do React, de forma que uma alteração num *ref* não é refletida na UI. O **useRef** é bastante utilizado para salvar referências à elementos da DOM, de forma a manipula-los diretamente, semelhante a um query selector declarativo.

O [mockup](https://www.figma.com/file/rLVDzUeLbRbwvR82oCOGON/Cname?node-id=0%3A1) do projeto deve ainda é o mesmo, porém, deverá ser implementado utilizando estes hooks, em conjunto com a validação básica.

### Regras

- O uso do Typescript é obrigatório e sua habilidade de tipar corretamente será avaliada
- Você deverá recriar a interface descrita na seção de [descrição da atividade](#descricao-da-atividade)
- A forma de estilização fica à seu critério (Tailwind ou CSS puro)
- As regras da atividade anterior ainda devem ser seguidas, seu projeto deve apenas incrementar novas funcionaliades e/ou refatorar algumas partes do código existente.
- Você deve usar os hooks **useReducer** e **useRef** para construir sua aplicação. O uso eficiente desses hooks será avaliado.
- Os valores dos *campos do formulário* devem ser armazenados em apenas um *state*, no formato de um objeto, utilizando o **useReducer**.
- Você deve utilizar o **useRef** para substituir qualquer query selector na sua aplicação.
- O usuário não deve ser capaz de submeter um formulário vazio.
- O nome do usuário não deverá ser menor que 2 caracteres.
- O nome do usuário não deverá ser menor que 2 caracteres.

## Materiais de apoio

- [API de Referência dos Hooks](https://pt-br.reactjs.org/docs/hooks-reference.html#additional-hooks)
- [useReducer vs useState in React](https://www.robinwieruch.de/react-usereducer-vs-usestate)
- [Primeiros passos com React Hooks — useReducer](https://medium.com/@devjpnobrega/primeiros-passos-com-react-hooks-usereducer-c435d83643d8)
- [React Hooks Tutorial | Ben Awad](https://youtu.be/f687hBjwFcM)
  - De 35:58 até 44:38; 1:16:34 até 1:34:31;
- [Mastering React Hooks with Typescript](https://youtu.be/zM_ZiSl2n2E)
  - De 24:12 até 35:06
- [10 React Hooks Explained // Plus Build your own from Scratch](https://youtu.be/TNhaISOUy6Q)
  - De 06:58 até 09:27
