### Instruções de execução
Foi utilizado node 20.x para construção do serviço

```shell
  npm install #i nstala as dependências
```

### Configuração de conexão
A aplicação está usando mongodb portanto é necessário adicionar a string de conexão do banco de dados do MongoDB Atlas.

- Altere a string de conexão da constate `uri` no arquivo `src/modules/app/app.module.ts`

Caso tenha o erro:
> ERROR [MongooseModule] Unable to connect to the database. Retrying (3)...

Acesse sua conta do MongoDB Atlas adicione o IP de sua localização para a white list de conexões permitidas do banco de dados. Para saber [clique aqui](https://www.mongodb.com/docs/atlas/security-whitelist/).

### Execute a api

```shell
  npm start # inicializa o serviço em modo produção que fica disponível na porta 3000
```

```shell
  npm start:dev # inicializa o serviço em modo desenvolvimento que fica disponível na porta 3000
```

### Endpoints

- /registers [GET] Lista os registros já criados
- /registers [POST] Cria uma nova solicitação de registro


> Para o consumo dos endpoints não é necessário autênticação
