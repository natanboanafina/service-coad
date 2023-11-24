# Teste para COAD

## Escolha do Framework

Escolhi o React devido à prática que já possuo com esse framework.

## Funcionamento da Aplicação

Esta aplicação possui a seguinte estrutura de diretórios, a partir do /src, diretório de entrada dos dados e de toda estruturação do aplicativo:

- /App => nele, possui o arquivo index.tsx que é o arquivo principal, onde toda a aplicação é renderizada.
  Nele, foi criado o roteamento com react-router-dom, garantindo a estrutura de Single Page Application, além do Provider que garante o acesso de contextos globais por todo projeto.

- /assets => Este diretório mantém tudo que é referente ao uso de imagens, ícones etc.

- /components => diretório criado para manter os componentes reutilizáveis usados para construir toda a aplicação.

- /components/Button => é o diretório referente ao componente de botão, que foi criado com um estilo pré-definido, como se um molde fosse. Em caso de mudança de estilo, graças ao Styled-Components, bastava herdar os estilos deste molde sem precisar recriá-lo.

- /components/Form => componente que abarca semanticamente e sintaticamente os inputs e button usados.
  Toda estrutura do formulário se realizou no diretório Home, local onde é feito o cadastro dos serviços.

- /components/Input => componente com estilos padrões para todos os inputs, com exceção do input radio.
  Graças à estrutura de props, que passa as informações do componente pai até o filho, além da possibilidade de se usar condicionais na estrutura do layout com Styled-Components, este componente foi utilizado ao longo de todo aplicativo sem a necessidade de recriar um input para cada tipo usado.

- /components/InputRadio => componente específico para o input do tipo radio.
  A criação de um novo input, em vez da utilização do /components/Input para criar estrutura de seleção única, foi escolhida para que o código se tornasse mais legível e menos complexo para manutenção de um único componente.

- /components/List => componente responsável por receber as listas com informações cadastradas pelos usuários.

- /components/Navbar => componente de navegação para desktop e responsivo.

- /components/Searchbar => input de pesquisa simples utilizado para filtrar usuários cadastrados.

- /components/Stripes => componente criado para renderizar informações de cada serviço cadastrado. Ele recebe as informações cadastradas individualmente e renderiza detalhadamente no componente <List/>, dentro da página SolicitationList.

- /components/Text => componente criado para renderizar títulos do h1 até h3, além de parágrafo e span. Para cada elemento selecionado, há uma mudança no tamanho da fonte e no font-weight.

- /components/TextArea => componente responsável por receber toda a descrição detalhada que o usuário informar no formulário.

- /context => diretório responsável por receber contextos globais. A exemplo do usado neste projeto, o arquivo list.tsx é responsável por gerir os dados informados pelo usuário, no formulário, e resgatá-lo para ser utilizado na página SolicitationList.
  Graças a este contexto, que o uso do localstorage foi facilitado, permitindo a comunicação e persistência de dados localmente sem precisar navegar para a página de renderização após cada cadastro.
  Já o arquivo useFormData.tsx funciona como um hook para que o contexto seja chamado em qualquer local do projeto.

- /pages => diretório responsável por manter a estrutura de cada página usada na aplicação.

- /pages/Home => página onde se encontra o formulário de cadastro. Há uma validação básica no formulário, feito com as libs Zod e React-Hook-Forms.

- /pages/SolicitationList => página em que é possível encontrar os dados detalhados que foram cadastrados pelo usuário.

- /schemas => diretório responsável por manter a estrutura de dados e informações do Zod, para que seja possível haver consistência, segurança e performance na hora de validar dados do usuário.

- /styles => diretório responsável por manter tudo relativo ao layout da aplicação.
  No arquivo GlobalStyles.ts, foi possível criar estilos que foram usados como padrão em determinados casos.
  No arquivo theme.ts, foi criado um tema personalizado, através do Styled-Components, para ser usado por toda aplicação.

- /types => diretório reservado para uso de determinados tipos a serem usados na aplicação.

## Uso das libs

- uuid => lib usada para gerar id únicos. Foi utilizada na hora de renderizar elementos únicos dentro de map().
  Apesar de ser possível usar como key o index dos elementos renderizados, utilizar a lib uuid garante que não haja inconsistências.

- styled-components => lib de estilização que se utiliza da abordagem css-in-js. A escolha dessa lib se deu pela sua alta flexibilidade, bem como a capacidade de criar renderizações condicionais sem dificuldades.

- zod => lib para validação de formulários. Esta lib foi escolhida por causa da sua facilidade de uso, além da possibilidade de inferência de tipos que é por ela fornecida. Tal recurso é muito útil ao usarmos TypeScript.

- react-hook-forms +> junto com zod, a validação de dados de formulário, bem como o uso de hooks para efetuar envio, criação de valores padrões etc., temos uma combinação potente.

- vite => torna o processo de inicialização e criação do projeto mais ágil.
