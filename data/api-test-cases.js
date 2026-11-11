window.testCases = window.testCases || {};
window.testCases.api = {
  service: 'ServeRest API',
  endpoint: 'POST /login',
  _template: {
    id: 'API-002',
    title: 'Título curto e descritivo',
    objective: 'O que este caso valida.',
    preconditions: ['Pré-condição ou dados necessários.'],
    steps: [
      {
        action: 'Requisição ou ação a executar.',
        expectedResult: 'Resposta ou comportamento esperado.',
      },
    ],
    priority: 'High | Medium | Low',
    endpoint: 'GET /usuarios',
  },
  cases: [
    {
      id: 'API-LOGIN-001',
      title: 'Login com credenciais válidas',
      objective: 'Autenticar um usuário cadastrado e obter um token de autorização.',
      preconditions: [
        'Ter uma conta de teste ativa no ServeRest e acesso ao e-mail e à senha válidos.',
      ],
      steps: [
        {
          action:
            'Enviar POST https://serverest.dev/login com Content-Type: application/json e o corpo {"email":"<e-mail válido>","password":"<senha válida>"}.',
          expectedResult:
            'A resposta retorna HTTP 200 e um corpo JSON com message igual a "Login realizado com sucesso" e authorization preenchido com o token.',
        },
      ],
      priority: 'High',
    },
    {
      id: 'API-LOGIN-002',
      title: 'Login com e-mail válido e senha incorreta',
      objective: 'Verificar que um e-mail cadastrado não autentica sem a senha correspondente.',
      preconditions: [
        'Ter uma conta de teste ativa no ServeRest e conhecer o e-mail cadastrado.',
      ],
      steps: [
        {
          action:
            'Enviar POST https://serverest.dev/login com Content-Type: application/json e o corpo {"email":"<e-mail cadastrado>","password":"<senha incorreta>"}.',
          expectedResult:
            'A resposta retorna HTTP 401 e um corpo JSON com message igual a "Email e/ou senha inválidos".',
        },
      ],
      priority: 'High',
    },
    {
      id: 'API-LOGIN-003',
      title: 'Login com e-mail incorreto e senha válida',
      objective: 'Verificar que uma senha válida não autentica com um e-mail não cadastrado.',
      preconditions: [
        'Ter uma conta de teste ativa no ServeRest e conhecer a senha válida dessa conta.',
      ],
      steps: [
        {
          action:
            'Enviar POST https://serverest.dev/login com Content-Type: application/json e o corpo {"email":"<e-mail não cadastrado>","password":"<senha válida da conta de teste>"}.',
          expectedResult:
            'A resposta retorna HTTP 401 e um corpo JSON com message igual a "Email e/ou senha inválidos".',
        },
      ],
      priority: 'High',
    },
    {
      id: 'API-LOGIN-004',
      title: 'Login com e-mail e senha incorretos',
      objective: 'Verificar que credenciais inválidas não autenticam um usuário.',
      preconditions: ['API ServeRest disponível para testes.'],
      steps: [
        {
          action:
            'Enviar POST https://serverest.dev/login com Content-Type: application/json e o corpo {"email":"<e-mail não cadastrado>","password":"<senha incorreta>"}.',
          expectedResult:
            'A resposta retorna HTTP 401 e um corpo JSON com message igual a "Email e/ou senha inválidos".',
        },
      ],
      priority: 'High',
    },
    {
      id: 'API-LOGIN-005',
      title: 'Login com e-mail vazio e senha válida',
      objective: 'Verificar que uma senha válida não autentica quando o e-mail está vazio.',
      preconditions: [
        'Ter uma conta de teste ativa no ServeRest e conhecer a senha válida dessa conta.',
      ],
      steps: [
        {
          action:
            'Enviar POST https://serverest.dev/login com Content-Type: application/json e o corpo {"email":"","password":"<senha válida da conta de teste>"}.',
          expectedResult:
            'A resposta retorna HTTP 401 e um corpo JSON com message igual a "Email e/ou senha inválidos".',
        },
      ],
      priority: 'Medium',
    },
    {
      id: 'API-LOGIN-006',
      title: 'Login com e-mail válido e senha vazia',
      objective: 'Verificar que um e-mail cadastrado não autentica quando a senha está vazia.',
      preconditions: [
        'Ter uma conta de teste ativa no ServeRest e conhecer o e-mail cadastrado.',
      ],
      steps: [
        {
          action:
            'Enviar POST https://serverest.dev/login com Content-Type: application/json e o corpo {"email":"<e-mail cadastrado>","password":""}.',
          expectedResult:
            'A resposta retorna HTTP 401 e um corpo JSON com message igual a "Email e/ou senha inválidos".',
        },
      ],
      priority: 'Medium',
    },
    {
      id: 'API-LOGIN-007',
      title: 'Login com e-mail e senha vazios',
      objective: 'Verificar que campos de credencial vazios não autenticam um usuário.',
      preconditions: ['API ServeRest disponível para testes.'],
      steps: [
        {
          action:
            'Enviar POST https://serverest.dev/login com Content-Type: application/json e o corpo {"email":"","password":""}.',
          expectedResult:
            'A resposta retorna HTTP 401 e um corpo JSON com message igual a "Email e/ou senha inválidos".',
        },
      ],
      priority: 'Medium',
    },
    {
      id: 'API-LOGIN-008',
      title: 'Login sem corpo na requisição',
      objective: 'Verificar a resposta do login quando a requisição não contém corpo.',
      preconditions: ['API ServeRest disponível para testes.'],
      steps: [
        {
          action:
            'Enviar POST https://serverest.dev/login com Content-Type: application/json e sem enviar corpo.',
          expectedResult:
            'A resposta retorna HTTP 401 e um corpo JSON com message igual a "Email e/ou senha inválidos".',
        },
      ],
      priority: 'Medium',
    },
    {
      id: 'API-LOGIN-009',
      title: 'Login com objeto JSON vazio',
      objective: 'Verificar a resposta do login quando o corpo JSON não contém os campos de credencial.',
      preconditions: ['API ServeRest disponível para testes.'],
      steps: [
        {
          action:
            'Enviar POST https://serverest.dev/login com Content-Type: application/json e o corpo {}.',
          expectedResult:
            'A resposta retorna HTTP 401 e um corpo JSON com message igual a "Email e/ou senha inválidos".',
        },
      ],
      priority: 'Medium',
    },
    {
      id: 'API-LOGIN-010',
      title: 'Login sem o campo e-mail',
      objective: 'Verificar que a ausência do e-mail não autentica o usuário.',
      preconditions: [
        'Ter uma conta de teste ativa no ServeRest e conhecer a senha válida.',
      ],
      steps: [
        {
          action:
            'Enviar POST https://serverest.dev/login com Content-Type: application/json e o corpo {"password":"<senha válida da conta de teste>"}.',
          expectedResult:
            'A resposta retorna HTTP 401 e um corpo JSON com message igual a "Email e/ou senha inválidos"; nenhum token é emitido.',
        },
      ],
      priority: 'Medium',
    },
    {
      id: 'API-LOGIN-011',
      title: 'Login sem o campo senha',
      objective: 'Verificar que a ausência da senha não autentica o usuário.',
      preconditions: [
        'Ter uma conta de teste ativa no ServeRest e conhecer o e-mail cadastrado.',
      ],
      steps: [
        {
          action:
            'Enviar POST https://serverest.dev/login com Content-Type: application/json e o corpo {"email":"<e-mail cadastrado>"}.',
          expectedResult:
            'A resposta retorna HTTP 401 e um corpo JSON com message igual a "Email e/ou senha inválidos"; nenhum token é emitido.',
        },
      ],
      priority: 'Medium',
    },
    {
      id: 'API-LOGIN-012',
      title: 'Login com e-mail em formato inválido',
      objective: 'Verificar que um endereço de e-mail malformado não autentica o usuário.',
      preconditions: ['API ServeRest disponível para testes.'],
      steps: [
        {
          action:
            'Enviar POST https://serverest.dev/login com Content-Type: application/json e o corpo {"email":"usuario-invalido","password":"<senha qualquer>"}.',
          expectedResult:
            'A resposta retorna HTTP 401 e um corpo JSON com message igual a "Email e/ou senha inválidos"; nenhum token é emitido.',
        },
      ],
      priority: 'Medium',
    },
    {
      id: 'API-LOGIN-013',
      title: 'Login com e-mail contendo apenas espaços',
      objective: 'Verificar que espaços em branco no e-mail não autenticam um usuário.',
      preconditions: ['API ServeRest disponível para testes.'],
      steps: [
        {
          action:
            'Enviar POST https://serverest.dev/login com Content-Type: application/json e o corpo {"email":"   ","password":"<senha qualquer>"}.',
          expectedResult:
            'A resposta não autentica o usuário nem retorna authorization; registrar o status e a mensagem para confirmar o contrato esperado para entradas compostas por espaços.',
        },
      ],
      priority: 'Low',
    },
    {
      id: 'API-LOGIN-014',
      title: 'Login com senha contendo apenas espaços',
      objective: 'Verificar que espaços em branco não são aceitos como senha válida.',
      preconditions: [
        'Ter uma conta de teste ativa no ServeRest e conhecer o e-mail cadastrado.',
      ],
      steps: [
        {
          action:
            'Enviar POST https://serverest.dev/login com Content-Type: application/json e o corpo {"email":"<e-mail cadastrado>","password":"   "}.',
          expectedResult:
            'A resposta não autentica o usuário nem retorna authorization; registrar o status e a mensagem para confirmar o contrato esperado para entradas compostas por espaços.',
        },
      ],
      priority: 'Low',
    },
    {
      id: 'API-LOGIN-015',
      title: 'Login com e-mail nulo',
      objective: 'Verificar o tratamento de null no campo e-mail.',
      preconditions: ['API ServeRest disponível para testes.'],
      steps: [
        {
          action:
            'Enviar POST https://serverest.dev/login com Content-Type: application/json e o corpo {"email":null,"password":"<senha qualquer>"}.',
          expectedResult:
            'A requisição não autentica nem retorna authorization; registrar o status e a mensagem, pois o contrato publicado não define o comportamento para campos null. A API não deve retornar erro 5xx.',
        },
      ],
      priority: 'Low',
    },
    {
      id: 'API-LOGIN-016',
      title: 'Login com senha numérica',
      objective: 'Verificar o tratamento de um tipo numérico no campo senha.',
      preconditions: ['API ServeRest disponível para testes.'],
      steps: [
        {
          action:
            'Enviar POST https://serverest.dev/login com Content-Type: application/json e o corpo {"email":"<e-mail cadastrado>","password":123456}.',
          expectedResult:
            'A requisição não autentica nem retorna authorization; registrar o status e a mensagem, pois o contrato publicado define senha como string, mas não especifica o erro para tipo numérico. A API não deve retornar erro 5xx.',
        },
      ],
      priority: 'Low',
    },
    {
      id: 'API-LOGIN-017',
      title: 'Login sem o header Content-Type',
      objective: 'Verificar o comportamento do login quando o Content-Type não é informado.',
      preconditions: ['API ServeRest disponível para testes.'],
      steps: [
        {
          action:
            'Enviar POST https://serverest.dev/login sem o header Content-Type, com o corpo JSON {"email":"<e-mail cadastrado>","password":"<senha válida>"}.',
          expectedResult:
            'Registrar o status e o corpo retornados. A requisição não deve emitir authorization sem que as credenciais sejam processadas conforme o contrato; o comportamento para ausência do header não está especificado na documentação.',
        },
      ],
      priority: 'Low',
    },
    {
      id: 'API-LOGIN-018',
      title: 'Login com Content-Type não suportado',
      objective: 'Verificar o comportamento do login com um tipo de conteúdo não suportado.',
      preconditions: ['API ServeRest disponível para testes.'],
      steps: [
        {
          action:
            'Enviar POST https://serverest.dev/login com Content-Type: text/plain e o corpo {"email":"<e-mail cadastrado>","password":"<senha válida>"}.',
          expectedResult:
            'Registrar o status e o corpo retornados. A API não deve emitir authorization para uma requisição cujo formato não foi processado conforme o contrato; o status esperado deve ser confirmado, pois a documentação não especifica esse caso.',
        },
      ],
      priority: 'Low',
    },
    {
      id: 'API-LOGIN-019',
      title: 'Login com JSON malformado',
      objective: 'Verificar o tratamento de um corpo que não pode ser interpretado como JSON.',
      preconditions: ['API ServeRest disponível para testes.'],
      steps: [
        {
          action:
            'Enviar POST https://serverest.dev/login com Content-Type: application/json e o corpo {"email":.',
          expectedResult:
            'A API rejeita a requisição sem autenticar nem emitir authorization e sem retornar erro 5xx; registrar o status e a mensagem para confirmar o código de erro esperado.',
        },
      ],
      priority: 'Low',
    },
    {
      id: 'API-LOGIN-020',
      title: 'Usar o token de login para criar e cancelar um carrinho',
      objective:
        'Verificar que o token retornado pelo login autoriza uma operação protegida e que a limpeza do teste restaura o estoque.',
      preconditions: [
        'Ter uma conta de teste ativa sem carrinho existente, além de um produto de teste com estoque disponível.',
      ],
      steps: [
        {
          action:
            'Fazer login com credenciais válidas em POST /login e guardar o authorization retornado.',
          expectedResult:
            'A resposta retorna HTTP 200 e authorization contém um token.',
        },
        {
          action:
            'Enviar POST /carrinhos com o token no header Authorization e um produto de teste válido no corpo {"produtos":[{"idProduto":"<id do produto>","quantidade":1}]}.',
          expectedResult:
            'A resposta retorna HTTP 201 e confirma a criação do carrinho associado ao usuário autenticado.',
        },
        {
          action:
            'Enviar DELETE /carrinhos/cancelar-compra com o mesmo token no header Authorization.',
          expectedResult:
            'A resposta retorna HTTP 200, o carrinho de teste é removido e a quantidade do produto volta ao estoque.',
        },
      ],
      priority: 'High',
    },
    {
      id: 'API-USERS-LIST-001',
      endpoint: 'GET /usuarios',
      title: 'Listar usuários cadastrados',
      objective: 'Consultar a coleção de usuários e validar o formato da resposta.',
      preconditions: ['A API está disponível.'],
      steps: [
        {
          action: 'Enviar GET https://serverest.dev/usuarios.',
          expectedResult:
            'A API retorna HTTP 200, um campo quantidade numérico e um array usuarios. O valor de quantidade corresponde ao número de itens retornados.',
        },
      ],
      priority: 'High',
    },
    {
      id: 'API-USERS-LIST-002',
      endpoint: 'GET /usuarios',
      title: 'Filtrar usuários por e-mail',
      objective: 'Verificar a filtragem da coleção pelo parâmetro email.',
      preconditions: [
        'Ter um usuário de teste cadastrado com e-mail exclusivo e conhecido.',
      ],
      steps: [
        {
          action:
            'Enviar GET https://serverest.dev/usuarios?email=<email-de-teste>, usando o e-mail cadastrado.',
          expectedResult:
            'A API retorna HTTP 200, quantidade igual a 1 e usuarios contém o usuário com o e-mail consultado.',
        },
      ],
      priority: 'High',
    },
    {
      id: 'API-USERS-CREATE-001',
      endpoint: 'POST /usuarios',
      title: 'Cadastrar usuário com dados válidos',
      objective: 'Criar um usuário de teste e obter o identificador gerado.',
      preconditions: [
        'Usar um e-mail exclusivo, gerado para o teste, que ainda não esteja cadastrado.',
        'Planejar a exclusão do usuário criado ao final do teste.',
      ],
      steps: [
        {
          action:
            'Enviar POST https://serverest.dev/usuarios com Content-Type: application/json e body {"nome":"Usuário de Teste","email":"<email-exclusivo>","password":"<senha-de-teste>","administrador":"true"}.',
          expectedResult:
            'A API retorna HTTP 201, message "Cadastro realizado com sucesso" e um _id não vazio.',
        },
        {
          action: 'Consultar GET /usuarios/<_id-retornado>.',
          expectedResult:
            'O usuário criado é retornado e seus dados correspondem ao body enviado.',
        },
        {
          action: 'Excluir o usuário de teste por DELETE /usuarios/<_id-retornado>.',
          expectedResult:
            'A API retorna HTTP 200 e confirma a exclusão do registro de teste.',
        },
      ],
      priority: 'High',
    },
    {
      id: 'API-USERS-CREATE-002',
      endpoint: 'POST /usuarios',
      title: 'Impedir cadastro com e-mail já utilizado',
      objective: 'Validar que não é possível cadastrar dois usuários com o mesmo e-mail.',
      preconditions: [
        'Ter um usuário de teste cadastrado e conhecer seu e-mail.',
      ],
      steps: [
        {
          action:
            'Enviar POST https://serverest.dev/usuarios com dados válidos, reutilizando o e-mail do usuário existente.',
          expectedResult:
            'A API retorna HTTP 400 e a mensagem "Este email já está sendo usado"; nenhum usuário duplicado é criado.',
        },
      ],
      priority: 'High',
    },
    {
      id: 'API-USERS-GET-001',
      endpoint: 'GET /usuarios/{_id}',
      title: 'Consultar usuário existente pelo ID',
      objective: 'Obter os dados de um usuário conhecido usando seu identificador.',
      preconditions: [
        'Ter um usuário de teste cadastrado e conhecer seu _id.',
      ],
      steps: [
        {
          action: 'Enviar GET https://serverest.dev/usuarios/<_id-do-usuário>.',
          expectedResult:
            'A API retorna HTTP 200 e o objeto retornado contém o _id, nome, email, password e administrador do usuário consultado.',
        },
      ],
      priority: 'High',
    },
    {
      id: 'API-USERS-GET-002',
      endpoint: 'GET /usuarios/{_id}',
      title: 'Consultar usuário inexistente',
      objective: 'Validar a resposta quando o ID solicitado não existe.',
      preconditions: [
        'Usar um ID que não pertença a nenhum usuário cadastrado.',
      ],
      steps: [
        {
          action: 'Enviar GET https://serverest.dev/usuarios/<_id-inexistente>.',
          expectedResult:
            'A API retorna HTTP 400 com a mensagem "Usuário não encontrado".',
        },
      ],
      priority: 'Medium',
    },
    {
      id: 'API-USERS-DELETE-001',
      endpoint: 'DELETE /usuarios/{_id}',
      title: 'Excluir usuário de teste sem carrinho',
      objective: 'Remover um usuário descartável que não possua carrinho associado.',
      preconditions: [
        'Criar um usuário de teste com e-mail exclusivo e confirmar que ele não possui carrinho.',
        'Guardar o _id retornado pelo cadastro.',
      ],
      steps: [
        {
          action: 'Enviar DELETE https://serverest.dev/usuarios/<_id-do-usuário>.',
          expectedResult:
            'A API retorna HTTP 200 com a mensagem "Registro excluído com sucesso".',
        },
        {
          action: 'Consultar GET /usuarios/<_id-do-usuário>.',
          expectedResult:
            'A API retorna HTTP 400 com a mensagem "Usuário não encontrado".',
        },
      ],
      priority: 'High',
    },
    {
      id: 'API-USERS-DELETE-002',
      endpoint: 'DELETE /usuarios/{_id}',
      title: 'Excluir usuário inexistente',
      objective: 'Validar a resposta ao tentar excluir um ID sem registro correspondente.',
      preconditions: ['Usar um ID que não pertença a nenhum usuário cadastrado.'],
      steps: [
        {
          action:
            'Enviar DELETE https://serverest.dev/usuarios/<_id-inexistente>.',
          expectedResult:
            'A API retorna HTTP 200 com a mensagem "Nenhum registro excluído".',
        },
      ],
      priority: 'Medium',
    },
    {
      id: 'API-USERS-DELETE-003',
      endpoint: 'DELETE /usuarios/{_id}',
      title: 'Impedir exclusão de usuário com carrinho',
      objective: 'Validar que um usuário com carrinho associado não pode ser excluído.',
      preconditions: [
        'Em ambiente de teste isolado, criar um usuário de teste e um carrinho associado a ele.',
        'Guardar o _id do usuário e o idCarrinho para limpeza ao final.',
      ],
      steps: [
        {
          action: 'Enviar DELETE https://serverest.dev/usuarios/<_id-do-usuário>.',
          expectedResult:
            'A API retorna HTTP 400 com a mensagem "Não é permitido excluir usuário com carrinho cadastrado" e identifica o idCarrinho.',
        },
        {
          action: 'Cancelar o carrinho e excluir o usuário criado pelo teste.',
          expectedResult:
            'Os dados descartáveis do teste são removidos sem afetar registros de outros usuários.',
        },
      ],
      priority: 'High',
    },
    {
      id: 'API-USERS-UPDATE-001',
      endpoint: 'PUT /usuarios/{_id}',
      title: 'Atualizar usuário existente',
      objective: 'Alterar os dados de um usuário de teste e confirmar a atualização.',
      preconditions: [
        'Ter um usuário descartável, sem carrinho associado, e conhecer seu _id.',
        'Usar um e-mail exclusivo ainda não cadastrado.',
      ],
      steps: [
        {
          action:
            'Enviar PUT https://serverest.dev/usuarios/<_id-do-usuário> com Content-Type: application/json e os campos nome, email, password e administrador.',
          expectedResult:
            'A API retorna HTTP 200 com a mensagem "Registro alterado com sucesso".',
        },
        {
          action: 'Consultar GET /usuarios/<_id-do-usuário>.',
          expectedResult:
            'Os dados retornados refletem os valores enviados no PUT.',
        },
        {
          action: 'Excluir o usuário descartável após a validação.',
          expectedResult: 'O usuário de teste é removido.',
        },
      ],
      priority: 'High',
    },
    {
      id: 'API-USERS-UPDATE-002',
      endpoint: 'PUT /usuarios/{_id}',
      title: 'Impedir atualização com e-mail de outro usuário',
      objective:
        'Validar que a atualização não pode reutilizar o e-mail de uma conta diferente.',
      preconditions: [
        'Ter dois usuários de teste; guardar os IDs e usar e-mails exclusivos.',
      ],
      steps: [
        {
          action:
            'Enviar PUT /usuarios/<_id-do-primeiro-usuário> com dados válidos, mas informando o e-mail já utilizado pelo segundo usuário.',
          expectedResult:
            'A API retorna HTTP 400 com a mensagem "Este email já está sendo usado"; os dados existentes permanecem consistentes.',
        },
        {
          action:
            'Consultar os dois usuários com GET /usuarios/<_id> e limpar os registros de teste.',
          expectedResult:
            'Nenhum dos usuários foi sobrescrito ou duplicado e os dados descartáveis são removidos.',
        },
      ],
      priority: 'High',
    },
    {
      id: 'API-USERS-UPDATE-003',
      endpoint: 'PUT /usuarios/{_id}',
      title: 'Criar usuário ao atualizar um ID inexistente',
      objective:
        'Verificar o comportamento documentado do PUT quando o ID ainda não existe.',
      preconditions: [
        'Em ambiente de teste isolado, usar um ID inexistente e um e-mail exclusivo.',
      ],
      steps: [
        {
          action:
            'Enviar PUT https://serverest.dev/usuarios/<_id-inexistente> com dados válidos e um e-mail exclusivo.',
          expectedResult:
            'A API retorna HTTP 201, a mensagem "Cadastro realizado com sucesso" e o _id do novo usuário.',
        },
        {
          action:
            'Consultar o usuário criado e removê-lo ao final usando o _id retornado.',
          expectedResult:
            'O registro criado pelo PUT pode ser consultado e depois excluído sem afetar outros usuários.',
        },
      ],
      priority: 'Medium',
    },
    {
      id: 'API-USERS-LIST-003',
      endpoint: 'GET /usuarios',
      title: 'Filtrar usuário pelo ID',
      objective: 'Validar o filtro _id da listagem de usuários.',
      preconditions: [
        'Ter um usuário de teste cadastrado e conhecer seu _id.',
      ],
      steps: [
        {
          action:
            'Enviar GET https://serverest.dev/usuarios?_id=<_id-do-usuário>.',
          expectedResult:
            'A API retorna HTTP 200, quantidade igual a 1 e usuarios contém somente o usuário com o ID consultado.',
        },
      ],
      priority: 'High',
    },
    {
      id: 'API-USERS-LIST-004',
      endpoint: 'GET /usuarios',
      title: 'Filtrar usuários pelo nome',
      objective: 'Validar o filtro nome na consulta da coleção.',
      preconditions: [
        'Ter um usuário de teste com nome exclusivo ou conhecido para a consulta.',
      ],
      steps: [
        {
          action:
            'Enviar GET https://serverest.dev/usuarios?nome=<nome-do-usuário>.',
          expectedResult:
            'A API retorna HTTP 200 e os usuários listados correspondem ao nome informado.',
        },
      ],
      priority: 'Medium',
    },
    {
      id: 'API-USERS-LIST-005',
      endpoint: 'GET /usuarios',
      title: 'Filtrar usuários administradores',
      objective: 'Validar a consulta de usuários com administrador igual a true.',
      preconditions: [
        'Existir ao menos um usuário de teste com administrador true.',
      ],
      steps: [
        {
          action:
            'Enviar GET https://serverest.dev/usuarios?administrador=true.',
          expectedResult:
            'A API retorna HTTP 200 e todos os itens retornados têm administrador igual a "true".',
        },
      ],
      priority: 'Medium',
    },
    {
      id: 'API-USERS-LIST-006',
      endpoint: 'GET /usuarios',
      title: 'Filtrar usuários não administradores',
      objective: 'Validar a consulta de usuários com administrador igual a false.',
      preconditions: [
        'Existir ao menos um usuário de teste com administrador false.',
      ],
      steps: [
        {
          action:
            'Enviar GET https://serverest.dev/usuarios?administrador=false.',
          expectedResult:
            'A API retorna HTTP 200 e todos os itens retornados têm administrador igual a "false".',
        },
      ],
      priority: 'Medium',
    },
    {
      id: 'API-USERS-LIST-007',
      endpoint: 'GET /usuarios',
      title: 'Combinar filtros da listagem',
      objective: 'Verificar a aplicação conjunta dos filtros nome e administrador.',
      preconditions: [
        'Ter usuários de teste que permitam distinguir os resultados pelos dois filtros.',
      ],
      steps: [
        {
          action:
            'Enviar GET https://serverest.dev/usuarios?nome=<nome-de-teste>&administrador=false.',
          expectedResult:
            'A API retorna HTTP 200 e todos os itens correspondem simultaneamente ao nome e ao valor de administrador informados.',
        },
      ],
      priority: 'Medium',
    },
    {
      id: 'API-USERS-LIST-008',
      endpoint: 'GET /usuarios',
      title: 'Consultar listagem sem correspondências',
      objective: 'Validar uma consulta válida cujo filtro não encontra usuários.',
      preconditions: [
        'Usar um e-mail de teste que não esteja cadastrado.',
      ],
      steps: [
        {
          action:
            'Enviar GET https://serverest.dev/usuarios?email=<email-inexistente>.',
          expectedResult:
            'A API retorna HTTP 200, quantidade igual a 0 e usuarios como array vazio.',
        },
      ],
      priority: 'Medium',
    },
    {
      id: 'API-USERS-LIST-009',
      endpoint: 'GET /usuarios',
      title: 'Filtrar por senha de usuário de teste',
      objective:
        'Verificar o filtro password documentado sem utilizar credenciais pessoais.',
      preconditions: [
        'Criar um usuário descartável com senha exclusiva para este teste.',
        'Não registrar nem reutilizar a senha em contas reais.',
      ],
      steps: [
        {
          action:
            'Enviar GET https://serverest.dev/usuarios?password=<senha-exclusiva-de-teste>.',
          expectedResult:
            'A API retorna HTTP 200 e a consulta corresponde ao usuário de teste configurado. Evitar exibir ou salvar a senha em evidências compartilhadas.',
        },
        {
          action: 'Excluir o usuário de teste após a validação.',
          expectedResult: 'O usuário descartável é removido.',
        },
      ],
      priority: 'Low',
    },
    {
      id: 'API-USERS-CREATE-003',
      endpoint: 'POST /usuarios',
      title: 'Cadastrar usuário não administrador',
      objective: 'Confirmar o cadastro válido com administrador definido como false.',
      preconditions: [
        'Usar um e-mail exclusivo para o teste e planejar a exclusão do registro.',
      ],
      steps: [
        {
          action:
            'Enviar POST /usuarios com Content-Type: application/json e body {"nome":"Usuário de Teste","email":"<email-exclusivo>","password":"<senha-de-teste>","administrador":"false"}.',
          expectedResult:
            'A API retorna HTTP 201 com a mensagem "Cadastro realizado com sucesso" e um _id não vazio.',
        },
        {
          action: 'Consultar GET /usuarios/<_id-retornado>.',
          expectedResult:
            'O usuário existe e administrador é retornado como "false".',
        },
        {
          action: 'Excluir o usuário criado pelo teste.',
          expectedResult: 'O usuário descartável é removido.',
        },
      ],
      priority: 'Medium',
    },
    {
      id: 'API-USERS-CREATE-004',
      endpoint: 'POST /usuarios',
      title: 'Caracterizar cadastro sem um campo do body',
      objective:
        'Identificar o comportamento da API quando o campo email não é enviado, pois a documentação não define campos obrigatórios nem a resposta para esse caso.',
      preconditions: [
        'Executar somente em ambiente isolado de teste.',
        'Usar nome identificável, senha exclusiva e verificar os registros antes e depois para permitir a limpeza de qualquer usuário eventualmente criado.',
      ],
      steps: [
        {
          action:
            'Enviar POST /usuarios com nome e password válidos, omitindo email, e registrar status e corpo da resposta sem presumir um código específico.',
          expectedResult:
            'O resultado fica registrado como evidência para definição do contrato. Se a API criar um registro, localizar pelo nome de teste e removê-lo; não deixar dados de teste persistidos.',
        },
      ],
      priority: 'Low',
    },
    {
      id: 'API-USERS-CREATE-005',
      endpoint: 'POST /usuarios',
      title: 'Validar o domínio de administrador no cadastro',
      objective:
        'Caracterizar a resposta para um valor de administrador fora do enum documentado true/false.',
      preconditions: [
        'Executar em ambiente isolado, com e-mail exclusivo e procedimento de limpeza caso um registro seja criado.',
      ],
      steps: [
        {
          action:
            'Enviar POST /usuarios com dados de teste válidos, mas com administrador igual a "maybe"; registrar a resposta sem presumir um status não especificado.',
          expectedResult:
            'O retorno é documentado para confirmar se o valor inválido é rejeitado. Se houver cadastro, localizar e excluir o registro de teste.',
        },
      ],
      priority: 'Low',
    },
    {
      id: 'API-USERS-CREATE-006',
      endpoint: 'POST /usuarios',
      title: 'Verificar ausência de duplicação após conflito de e-mail',
      objective:
        'Confirmar que a tentativa de cadastro com e-mail usado não altera a quantidade de registros para esse e-mail.',
      preconditions: [
        'Ter um usuário de teste cadastrado e conhecer seu e-mail.',
      ],
      steps: [
        {
          action:
            'Registrar o resultado de GET /usuarios?email=<email-existente> e então enviar POST /usuarios com esse mesmo e-mail.',
          expectedResult:
            'O POST retorna HTTP 400 com "Este email já está sendo usado".',
        },
        {
          action: 'Consultar novamente GET /usuarios?email=<email-existente>.',
          expectedResult:
            'A consulta continua retornando somente o registro original; nenhum usuário duplicado foi criado.',
        },
      ],
      priority: 'High',
    },
    {
      id: 'API-USERS-GET-003',
      endpoint: 'GET /usuarios/{_id}',
      title: 'Validar dados e consistência do usuário consultado',
      objective:
        'Conferir se o identificador consultado e os campos de usuário pertencem ao mesmo registro.',
      preconditions: [
        'Criar ou escolher um usuário de teste com dados conhecidos e anotar seu _id.',
      ],
      steps: [
        {
          action:
            'Consultar GET /usuarios/<_id-do-usuário> e comparar a resposta com os dados conhecidos do usuário de teste.',
          expectedResult:
            'A API retorna HTTP 200; _id corresponde ao caminho solicitado e nome, email e administrador correspondem ao registro usado no teste.',
        },
      ],
      priority: 'High',
    },
    {
      id: 'API-USERS-DELETE-004',
      endpoint: 'DELETE /usuarios/{_id}',
      title: 'Confirmar resultado de exclusão repetida',
      objective:
        'Verificar que excluir novamente um usuário já removido não afeta outro registro.',
      preconditions: [
        'Criar um usuário descartável sem carrinho e guardar o _id retornado.',
      ],
      steps: [
        {
          action:
            'Enviar DELETE /usuarios/<_id-do-usuário> e, em seguida, repetir a mesma requisição com o mesmo ID.',
          expectedResult:
            'A primeira requisição retorna HTTP 200 com "Registro excluído com sucesso"; a segunda retorna HTTP 200 com "Nenhum registro excluído".',
        },
        {
          action: 'Consultar GET /usuarios/<_id-do-usuário>.',
          expectedResult:
            'A API retorna HTTP 400 com "Usuário não encontrado".',
        },
      ],
      priority: 'Medium',
    },
    {
      id: 'API-USERS-DELETE-005',
      endpoint: 'DELETE /usuarios/{_id}',
      title: 'Confirmar que usuário com carrinho permanece cadastrado',
      objective:
        'Verificar que a exclusão bloqueada por carrinho não remove o usuário.',
      preconditions: [
        'Em ambiente isolado, criar um usuário de teste com carrinho associado e guardar os identificadores.',
      ],
      steps: [
        {
          action: 'Enviar DELETE /usuarios/<_id-do-usuário>.',
          expectedResult:
            'A API retorna HTTP 400 e informa que o usuário com carrinho não pode ser excluído.',
        },
        {
          action: 'Consultar GET /usuarios/<_id-do-usuário> antes de cancelar o carrinho.',
          expectedResult:
            'A API retorna HTTP 200 e o usuário continua cadastrado.',
        },
        {
          action: 'Cancelar o carrinho e excluir o usuário criado para o teste.',
          expectedResult:
            'Os registros descartáveis são removidos sem alterar dados de terceiros.',
        },
      ],
      priority: 'High',
    },
    {
      id: 'API-USERS-UPDATE-004',
      endpoint: 'PUT /usuarios/{_id}',
      title: 'Atualizar usuário para não administrador',
      objective:
        'Validar a alteração do campo administrador para false em um usuário existente.',
      preconditions: [
        'Ter um usuário de teste descartável sem carrinho e conhecer seu _id.',
        'Usar e-mail exclusivo e planejar a exclusão do usuário ao final.',
      ],
      steps: [
        {
          action:
            'Enviar PUT /usuarios/<_id-do-usuário> com body válido, e administrador igual a "false".',
          expectedResult:
            'A API retorna HTTP 200 com "Registro alterado com sucesso".',
        },
        {
          action: 'Consultar GET /usuarios/<_id-do-usuário>.',
          expectedResult:
            'O usuário continua com o mesmo _id e administrador é retornado como "false".',
        },
        {
          action: 'Excluir o usuário descartável após a validação.',
          expectedResult: 'O usuário de teste é removido.',
        },
      ],
      priority: 'Medium',
    },
    {
      id: 'API-USERS-UPDATE-005',
      endpoint: 'PUT /usuarios/{_id}',
      title: 'Caracterizar atualização com body incompleto',
      objective:
        'Identificar como a API trata campos omitidos no PUT, já que a documentação não define obrigatoriedade nem atualização parcial.',
      preconditions: [
        'Executar somente em ambiente isolado com usuário descartável sem carrinho.',
        'Guardar os dados originais do usuário para comparar e restaurar ou excluir o registro ao final.',
      ],
      steps: [
        {
          action:
            'Enviar PUT /usuarios/<_id-do-usuário> omitindo o campo nome e registrar status e corpo da resposta sem presumir um código específico.',
          expectedResult:
            'A resposta e os dados após o PUT são comparados com o contrato aprovado. Restaurar os dados originais ou excluir o usuário descartável; não deixar alterações de teste persistirem.',
        },
      ],
      priority: 'Low',
    },
  ],
};
