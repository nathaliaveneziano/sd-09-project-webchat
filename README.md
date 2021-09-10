### Projeto WebChat!

Projeto desenvolvido no curso de Desenvolvimento de Software da Trybe onde a proposta era desenvolver um chat online onde o usuário deveria ser capaz de:

 - Usar um front-end para enviar mensagens a clientes conectados;
 - Visualizar o histórico de mensagens da conversa;
 - Visualizar os usuários online no momento;
 - Alterar o nome de usuário no chat em tempo real;

---

# Habilidades

- Desenvolver backend em `Node.js`;
- Utilizar a estrutura `MVC`;
- Usar o pacote `socket.io` do Node.js para criar aplicações que trafeguem mensagens através de sockets;
- Criar o frontend urilizando `EJS`.

---

# Instruções para utilização:

1. Clone o repositório

   - `git clone https://github.com/tryber/sd-09-project-webchat.git`.
   - Entre na pasta do repositório que você acabou de clonar:
     - `cd sd-09-project-webchat`

2. Crie uma branch a partir da branch `master`

   - Verifique que você está na branch `master`
     - Exemplo: `git branch`
   - Se não estiver, mude para a branch `master`
     - Exemplo: `git checkout master`
   - Agora, crie uma branch onde você vai guardar os `commits` do seu projeto
     - Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`
     - Exemplo: `git checkout -b joaozinho-webchat-project`

3. Crie na raiz do projeto os arquivos que você precisará desenvolver:

   - Verifique que você está na raiz do projeto
     - Exemplo: `pwd` -> o retorno vai ser algo tipo _/Users/joaozinho/code/**sd-09-project-webchat**_

4. Adicione as mudanças ao _stage_ do Git e faça um `commit`

   - Verifique que as mudanças ainda não estão no _stage_
     - Exemplo: `git status` (devem aparecer listados os novos arquivos em vermelho)
   - Adicione o novo arquivo ao _stage_ do Git
     - Exemplo:
       - `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
       - `git status` (devem aparecer listados os arquivos em verde)
   - Faça o `commit` inicial
     - Exemplo:
       - `git commit -m 'iniciando o projeto. VAMOS COM TUDO :rocket:'` (fazendo o primeiro commit)
       - `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

5. Adicione a sua branch com o novo `commit` ao repositório remoto

   - Usando o exemplo anterior: `git push -u origin joaozinho-webchat-project`

6. Crie um novo `Pull Request` _(PR)_

   - Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-09-project-webchat/pulls)
   - Clique no botão verde _"New pull request"_
   - Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
   - Clique no botão verde _"Create pull request"_
   - Adicione uma descrição para o _Pull Request_, um título claro que o identifique, e clique no botão verde _"Create pull request"_
   - **Não se preocupe em preencher mais nada por enquanto!**
   - Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-09-project-webchat/pulls) e confira que o seu _Pull Request_ está criado



```
DB_URL=mongodb://localhost:27017/webchat/    // conexão local com o seu MongoDB
DB_NAME=webchat                             // nome do database
```


