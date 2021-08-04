# Atividade 3 - Hooks básicos: useState e useEffect

Agora é hora de aprender sobre o estado da nossa aplicação, e como podemos fazer nossa aplicação reagir à mudanças nesse estado.

## Informações principais

- **Núcleo:** Front-end
- **Orientador:** [Abner Rodrigues](@todomir)
- **Data da Atividade:** 07/08
- **Data de Entrega:** 13/08

## Descrição da atividade

Estado é um conceito importantíssimo para aplicações React. As variáveis de estado, ou *state*, são responsáveis por armazenar o estado *duh* da aplicação, e é baseado na mudança desse estado que o React faz seu processo de re-renderização. Além disso, o React pode executar também efeitos colaterais, chamados de *effects* que executam quando a página renderiza ou quando uma mudança de estado ocorre.

Para isso, você vai começar a trabalhar com os *hooks* do React. Os *hooks* são funções responsáveis por acessar o ciclo de vida, isto é, todo o processo realizado pela VDOM, seja *mount*, atualização ou *unmount*, sem precisar usar componentes de classe. Nesta aula, dois *hooks* serão especialmente importantes: o **useState** e o **useEffect**.

Nesta atividade, você irá explorar o conceito de hooks, estado e efeitos colaterais criando um formulário. Sua tarefa será de criar a interface especificada [neste mockup](https://www.figma.com/file/rLVDzUeLbRbwvR82oCOGON/Cname?node-id=0%3A1).

### Regras

- O uso do Typescript é obrigatório e sua habilidade de tipar corretamente será avaliada
- Você deverá recriar a interface descrita na seção de [descrição da atividade](#descricao-da-atividade)
- A forma de estilização fica à seu critério (Tailwind ou CSS puro)
- Você deve usar os hooks **useState** e **useEffect** para construir sua aplicação. O uso eficiente desses hooks será avaliado.
- O campo nome deve estar focado assim que a página renderizar, isto é, o usuário deve poder começar a digitar seu nome sem precisar clicar em nada
- O botão de submit deve ficar desabilitado caso o checkbox esteja desmarcado, conforme mostrado no [mockup](https://www.figma.com/file/rLVDzUeLbRbwvR82oCOGON/Cname?node-id=0%3A1)
- A página **deverá ser responsiva**. As telas de mobile e desktop estão disponíveis no [mockup](https://www.figma.com/file/rLVDzUeLbRbwvR82oCOGON/Cname?node-id=0%3A1)
- A validação do formulário não será cobrada, mas é um bônus.
- Após o submit do formulário, um modal deverá ser exibido em tela, mostrando a mensagem apresentada no [mockup](https://www.figma.com/file/rLVDzUeLbRbwvR82oCOGON/Cname?node-id=0%3A1). Os dados digitados pelo usuário deverão ser exibidos e integrados com essa mensagem.
- O botão concluir do modal deverá fechá-lo e limpar todos os campos do formulário

## Materiais de apoio

- [Introdução aos Hooks](https://pt-br.reactjs.org/docs/hooks-intro.html)
- [Hooks de forma resumida](https://pt-br.reactjs.org/docs/hooks-overview.html)
- [React Hooks na prática | Diego Fernandes](https://www.youtube.com/watch?v=6WB16wZS61c)
- [React Hooks Tutorial | Ben Awad](https://youtu.be/f687hBjwFcM)
  - De 01:35 até 15:50
- [Mastering React Hooks with Typescript](https://youtu.be/zM_ZiSl2n2E)
  - De 03:10 até 14:45
- [10 React Hooks Explained // Plus Build your own from Scratch](https://youtu.be/TNhaISOUy6Q)
  - De 02:20 até 05:55
