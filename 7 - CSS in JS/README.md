# Atividade 7 - CSS in JS

Tipo SASS, só que com superpoderes.

## Informações principais

- **Núcleo:** Front-end
- **Orientador:** [Abner Rodrigues](@todomir)
- **Data da Atividade:** 11/09
- **Data de Entrega:** 17/09

## Descrição da atividade

Existem diversas formas de estilizar componentes, e quando eu digo diversas, são diversas mesmo.

- CSS puro
- CSS Modules
- Preprocessadores (SASS, LESS, Stylus)
- Algum framework de CSS (Bootsrap, Materialize, Tailwind, etc)
- Inline CSS (faz isso não)
- CSS in JS...

E a lista segue...

Uma dessas abordagens é o CSS-in-JS, que é simplesmente a declaração do nosso CSS num arquivo Javascript, dando a ele, efetivamente, superpoderes: sem conflitos de classes, facilidade de manutenção, facilidade de reutilização, variáveis JS no CSS, etc. Uma lib bem popular de CSS-in-JS é o [styled-components](https://www.styled-components.com/), e é com ela que vamos trabalhar nessa atividade.

Sua atividade será pesquisar sobre o CSS-in-JS, especificamente o styled-components, e entender como ele funciona, vantagens, desvantagens e casos de uso. Além disso, você deverá substituir o CSS de sua aplicação com componentes do [styled-components](https://www.styled-components.com/). Além disso, para facilitar a vida e limpar nossa codebase, você deverá refatorar seu *theme switcher* utilizando [styled-components](https://www.styled-components.com/) e o *theme* do [styled-components](https://www.styled-components.com/).

O [mockup](https://www.figma.com/file/z9kZjLRkPF7wS7BE3uNwUX/Timely?node-id=0%3A1) permanece o mesmo e a maioria do seu CSS permanecerá intacto.

### Regras

- O uso do Typescript é obrigatório e sua habilidade de tipar corretamente será avaliada
- Você deverá recriar a interface descrita na seção de [descrição da atividade](#descricao-da-atividade)
- A página deverá ser responsiva, conforme o mockup exibido na [descrição da atividade](#descricao-da-atividade)
- Todos os requisitos da atividade anterior deverão ser mantidos, esta atividade não deverá implementar novos requisitos
- Você deverá utilizar o [styled-components](https://www.styled-components.com/) para estilizar seus componentes
- O *theme switcher* deve ser refatorado para utilizar o *theme* do [styled-components](https://www.styled-components.com/)
- Todas as cores utilizadas na aplicação devem ser definidas no *theme* do [styled-components](https://www.styled-components.com/)
- Não deverão existir arquivos CSS na aplicação

## Materiais de apoio

- [styled-components](https://www.styled-components.com/docs/basics)

## Sugestões

Como o styled-components se trata de, bom, componentes pré-estilizados, os imports podem acabar ficando meio grandes. Como uma sugestão, recomendo utilizar [esse padrão](https://medium.com/inturn-eng/naming-styled-components-d7097950a245) para importar e nomear seus componentes. Todos os argumentos à favor dele estão no artigo, recomendo ler e decidir se usar ou não.
