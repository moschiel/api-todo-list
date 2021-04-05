DESAFIO DE UM PROCESSO SELETIVO AO VIVO

Primeira Etapa - 5 minutos
1 - Criar um repositório no github
2 - Clonar o repositório para a máquina

Segunda Etapa - 10 minutos
1 - Iniciem um arquivo package.json (através do npm)
    comando: "npm init -y"
2 - Importar o módulo express e o módulo cors
    comando: "npm i express cors" //quando instala algum modulo, ai aparece a pasta "node_modules"
3 - Criar um arquivo src/index.js
4 - Tornar o index.js o servidor
5 - Startar o servidor

Terceira Etapa - 3 minutos
1 - instalar nodemon como devDependency -> "npm i -D nodemon"

2 - Criar a propriedade start no package.json 
para a aplicação rodar com o comando npm start, da seguinte forma:
No arquivo "package.json" dentro do parametro "scripts", insira a linha "start": "nodemon ./src/index.js"

Quarta Etapa - 8 minutos
1 - Criar uma arquivo src/routes/index.js
2 - Criar uma rota '/' que retorne Hello World na tela
(podem fazer a função no segundo parâmetro sem criar controller)
3 - Importar as rotas no arquivo src/index.js

Quinta Etapa - 20 minutos
1 - Criar o banco de dados to_do_list
2 - Criar o arquivo .sequelizerc na raíz do projeto, exportando as informações de config, models-path e migrations-path
3 - Criar o arquivo src/config/database.js efetuando conexao com o banco de dados to_do_list
4 - Importar o módulo sequelize
5 - Criar uma migration de tasks, nome do arquivo deverá ser database/create_tasks_table.js
nessa migration devemos ter as colunas: 
  id -  Primary Key, Auto Increment, Integer, 
  title - String, 
  description - String, 
  done - Boolean,
  deleted - Boolean
6 - Migrar a tabela tasks para o banco de dados
executar "yarn sequelize db:migrate"

//Aula 02/02
Primeira Etapa - Iniciar as models
executar "yarn sequelize init:models"

Segunda Etapa - Criar a model Task.js na pasta models, com base na propria migration da pasta database\migrations

Terceira Etapa - Criar o controller "TaskController.js" para realizar operações de CRUD das Tasks no banco de dados


Quarta etapa - ao dar npm start, dar erro no conig.use_env_variable, na linha 8 comentar o //[env]

Quinta Etapa - na rota Routes/index.js
  1-remover function da rota '/'
  1.1- importar controller nevessario para efetuar CRUD da API
  1.2- adicionar controller e o metodo dentro dele que será processado quando acessamos a rota '/'


//Aula 04/02 - 
1- criar projeto "app-todo-list"
2- copiar pasta src daqui e colar no novo projeto
3- continua no projeto "app-todo-list"


 