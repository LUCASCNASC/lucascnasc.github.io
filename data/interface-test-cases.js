window.testCases = window.testCases || {};
window.testCases.interface = {
  service: 'ServeRest Frontend',
  endpoint: 'Login',
  _template: {
    id: 'UI-001',
    title: 'Título curto e descritivo',
    objective: 'O que este caso valida.',
    preconditions: ['Pré-condição ou dados necessários.'],
    steps: [
      {
        action: 'Ação a executar na interface.',
        expectedResult: 'Comportamento visível esperado.',
      },
    ],
    priority: 'High | Medium | Low',
  },
  cases: [
    {
      id: 'UI-LOGIN-001',
      title: 'Exibir formulário de login',
      objective: 'Confirmar que a tela apresenta os campos e ações necessários para entrar.',
      preconditions: ['A aplicação ServeRest está disponível.'],
      steps: [
        {
          action: 'Acessar https://front.serverest.dev/login.',
          expectedResult:
            'A página apresenta o título "Login", os campos "Digite seu email" e "Digite sua senha", o botão "Entrar" e o link "Cadastre-se".',
        },
      ],
      priority: 'High',
    },
    {
      id: 'UI-LOGIN-002',
      title: 'Manter a senha mascarada',
      objective: 'Verificar que os caracteres da senha não são exibidos em texto aberto.',
      preconditions: ['A tela de login está aberta.'],
      steps: [
        {
          action: 'Digitar uma senha de teste no campo "Digite sua senha".',
          expectedResult:
            'O campo permanece do tipo senha e os caracteres digitados são mascarados.',
        },
      ],
      priority: 'Medium',
    },
    {
      id: 'UI-LOGIN-003',
      title: 'Impedir envio com ambos os campos vazios',
      objective: 'Validar as mensagens de obrigatoriedade ao tentar entrar sem preencher os campos.',
      preconditions: ['A tela de login está aberta e ambos os campos estão vazios.'],
      steps: [
        {
          action: 'Clicar em "Entrar".',
          expectedResult:
            'A tela permanece no login e exibe os alertas "Email é obrigatório" e "Password é obrigatório".',
        },
      ],
      priority: 'High',
    },
    {
      id: 'UI-LOGIN-004',
      title: 'Impedir envio sem e-mail',
      objective: 'Validar a obrigatoriedade do e-mail independentemente da senha preenchida.',
      preconditions: ['A tela de login está aberta.'],
      steps: [
        {
          action:
            'Deixar o campo de e-mail vazio, preencher a senha com um valor de teste e clicar em "Entrar".',
          expectedResult:
            'A tela permanece no login, exibe "Email é obrigatório" e não autentica o usuário.',
        },
      ],
      priority: 'High',
    },
    {
      id: 'UI-LOGIN-005',
      title: 'Impedir envio sem senha',
      objective: 'Validar a obrigatoriedade da senha independentemente do e-mail preenchido.',
      preconditions: ['A tela de login está aberta.'],
      steps: [
        {
          action:
            'Preencher o campo de e-mail com um endereço válido de teste, deixar a senha vazia e clicar em "Entrar".',
          expectedResult:
            'A tela permanece no login e exibe "Password é obrigatório"; o usuário não é autenticado.',
        },
      ],
      priority: 'High',
    },
    {
      id: 'UI-LOGIN-006',
      title: 'Rejeitar e-mail em formato inválido',
      objective: 'Validar a mensagem apresentada para um endereço de e-mail malformado.',
      preconditions: ['A tela de login está aberta.'],
      steps: [
        {
          action:
            'Digitar "email-invalido" no campo de e-mail, preencher a senha com um valor de teste e clicar em "Entrar".',
          expectedResult:
            'A tela permanece no login e apresenta o alerta "Email deve ser um email válido"; nenhuma sessão é iniciada.',
        },
      ],
      priority: 'High',
    },
    {
      id: 'UI-LOGIN-007',
      title: 'Rejeitar credenciais incorretas',
      objective: 'Confirmar que credenciais inválidas não dão acesso à aplicação.',
      preconditions: [
        'Usar credenciais fictícias de teste que não pertençam a uma conta válida.',
      ],
      steps: [
        {
          action:
            'Preencher e-mail em formato válido e senha incorreta e clicar em "Entrar".',
          expectedResult:
            'A aplicação permanece na tela de login, exibe "Email e/ou senha inválidos" e não inicia uma sessão.',
        },
      ],
      priority: 'High',
    },
    {
      id: 'UI-LOGIN-008',
      title: 'Entrar com credenciais válidas',
      objective: 'Confirmar o acesso à aplicação com uma conta ativa.',
      preconditions: [
        'Ter uma conta de teste ativa e cadastrada na ServeRest, com e-mail e senha válidos.',
      ],
      steps: [
        {
          action:
            'Preencher e-mail e senha da conta de teste e clicar em "Entrar".',
          expectedResult:
            'A autenticação é concluída, a aplicação sai da rota /login e apresenta a área inicial para o usuário autenticado.',
        },
      ],
      priority: 'High',
    },
    {
      id: 'UI-LOGIN-009',
      title: 'Fechar alerta de validação',
      objective: 'Verificar que um alerta de erro pode ser dispensado pela própria interface.',
      preconditions: [
        'Gerar um alerta na tela de login, por exemplo enviando o formulário vazio.',
      ],
      steps: [
        {
          action: 'Clicar no botão "Close" do alerta.',
          expectedResult:
            'O alerta correspondente desaparece sem navegar para outra página nem alterar os valores dos campos.',
        },
      ],
      priority: 'Low',
    },
    {
      id: 'UI-LOGIN-010',
      title: 'Abrir cadastro a partir da tela de login',
      objective: 'Confirmar que o link de cadastro direciona para o formulário de criação de usuário.',
      preconditions: ['A tela de login está aberta.'],
      steps: [
        {
          action: 'Clicar em "Cadastre-se".',
          expectedResult:
            'A aplicação navega para /cadastrarusuarios e exibe o formulário de cadastro.',
        },
      ],
      priority: 'Medium',
    },
    {
      id: 'UI-REGISTER-PUBLIC-001',
      endpoint: 'Cadastro de usuário — acesso público',
      title: 'Abrir cadastro sem estar autenticado',
      objective:
        'Confirmar que uma pessoa não autenticada pode iniciar o cadastro pelo link da tela de login.',
      preconditions: ['Não existir sessão autenticada no navegador.'],
      steps: [
        {
          action: 'Acessar /login e clicar em "Cadastre-se".',
          expectedResult:
            'A aplicação abre /cadastrarusuarios sem solicitar login e apresenta o formulário de cadastro.',
        },
      ],
      priority: 'High',
    },
    {
      id: 'UI-REGISTER-PUBLIC-002',
      endpoint: 'Cadastro de usuário — acesso público',
      title: 'Exibir os campos do cadastro público',
      objective:
        'Verificar os controles disponíveis para criar uma conta sem autenticação.',
      preconditions: [
        'Estar deslogado e acessar o cadastro pelo link "Cadastre-se" da tela de login.',
      ],
      steps: [
        {
          action: 'Inspecionar a tela de cadastro.',
          expectedResult:
            'A tela apresenta o título "Cadastro", os campos "Digite seu nome", "Digite seu email" e "Digite sua senha", a checkbox "Cadastrar como administrador?", o botão "Cadastrar" e o link "Entrar".',
        },
      ],
      priority: 'High',
    },
    {
      id: 'UI-REGISTER-PUBLIC-003',
      endpoint: 'Cadastro de usuário — acesso público',
      title: 'Voltar ao login pelo formulário de cadastro público',
      objective:
        'Validar o caminho de retorno ao login para quem ainda não possui uma conta.',
      preconditions: [
        'Estar deslogado na tela /cadastrarusuarios.',
      ],
      steps: [
        {
          action: 'Clicar em "Entrar".',
          expectedResult:
            'A aplicação retorna à tela /login sem criar conta nem iniciar sessão.',
        },
      ],
      priority: 'Medium',
    },
    {
      id: 'UI-REGISTER-PUBLIC-004',
      endpoint: 'Cadastro de usuário — acesso público',
      title: 'Bloquear cadastro público com formulário vazio',
      objective:
        'Validar as mensagens de obrigatoriedade para todos os campos textuais.',
      preconditions: [
        'Estar deslogado na tela de cadastro com nome, e-mail e senha vazios.',
      ],
      steps: [
        {
          action: 'Clicar em "Cadastrar".',
          expectedResult:
            'A conta não é criada e são exibidos os alertas "Nome é obrigatório", "Email é obrigatório" e "Password é obrigatório".',
        },
      ],
      priority: 'High',
    },
    {
      id: 'UI-REGISTER-PUBLIC-005',
      endpoint: 'Cadastro de usuário — acesso público',
      title: 'Bloquear cadastro público sem nome',
      objective:
        'Verificar a validação do nome sem que outros campos vazios ocultem o resultado.',
      preconditions: [
        'Estar deslogado na tela de cadastro.',
      ],
      steps: [
        {
          action:
            'Deixar o nome vazio, preencher e-mail válido e senha de teste e clicar em "Cadastrar".',
          expectedResult:
            'A aplicação exibe "Nome é obrigatório", permanece no cadastro e não cria uma conta.',
        },
      ],
      priority: 'High',
    },
    {
      id: 'UI-REGISTER-PUBLIC-006',
      endpoint: 'Cadastro de usuário — acesso público',
      title: 'Bloquear cadastro público sem e-mail',
      objective:
        'Verificar a validação do e-mail quando nome e senha estão preenchidos.',
      preconditions: [
        'Estar deslogado na tela de cadastro.',
      ],
      steps: [
        {
          action:
            'Preencher nome e senha de teste, deixar o e-mail vazio e clicar em "Cadastrar".',
          expectedResult:
            'A aplicação exibe "Email é obrigatório", permanece no cadastro e não cria uma conta.',
        },
      ],
      priority: 'High',
    },
    {
      id: 'UI-REGISTER-PUBLIC-007',
      endpoint: 'Cadastro de usuário — acesso público',
      title: 'Bloquear cadastro público sem senha',
      objective:
        'Verificar a validação da senha quando nome e e-mail estão preenchidos.',
      preconditions: [
        'Estar deslogado na tela de cadastro.',
      ],
      steps: [
        {
          action:
            'Preencher nome e e-mail válido, deixar a senha vazia e clicar em "Cadastrar".',
          expectedResult:
            'A aplicação exibe "Password é obrigatório", permanece no cadastro e não cria uma conta.',
        },
      ],
      priority: 'High',
    },
    {
      id: 'UI-REGISTER-PUBLIC-008',
      endpoint: 'Cadastro de usuário — acesso público',
      title: 'Rejeitar e-mail inválido no cadastro público',
      objective:
        'Validar o formato do e-mail antes de criar a conta pela rota pública.',
      preconditions: [
        'Estar deslogado na tela de cadastro.',
      ],
      steps: [
        {
          action:
            'Preencher nome e senha com valores de teste, informar um e-mail malformado e clicar em "Cadastrar".',
          expectedResult:
            'O cadastro não é concluído, a aplicação informa que o e-mail deve ser válido e permanece no formulário.',
        },
      ],
      priority: 'High',
    },
    {
      id: 'UI-REGISTER-PUBLIC-009',
      endpoint: 'Cadastro de usuário — acesso público',
      title: 'Exibir checkbox de administrador desmarcada por padrão',
      objective:
        'Confirmar que um cadastro novo não recebe o papel de administrador por padrão.',
      preconditions: [
        'Estar deslogado e abrir um formulário de cadastro novo.',
      ],
      steps: [
        {
          action:
            'Verificar o estado inicial de "Cadastrar como administrador?" sem interagir com a checkbox.',
          expectedResult:
            'A checkbox está desmarcada; um cadastro submetido sem alterá-la solicita a criação de usuário normal.',
        },
      ],
      priority: 'High',
    },
    {
      id: 'UI-REGISTER-PUBLIC-010',
      endpoint: 'Cadastro de usuário — acesso público',
      title: 'Criar usuário normal pela rota pública',
      objective:
        'Cadastrar uma conta com a checkbox de administrador desmarcada e validar o papel atribuído.',
      preconditions: [
        'Estar deslogado.',
        'Usar e-mail exclusivo e credenciais descartáveis em ambiente de teste; preparar uma conta administradora de teste para limpeza, se necessária.',
      ],
      steps: [
        {
          action:
            'Acessar o cadastro por "Cadastre-se", preencher nome, e-mail exclusivo e senha, manter "Cadastrar como administrador?" desmarcada e enviar.',
          expectedResult:
            'A aplicação confirma o cadastro conforme o fluxo aprovado; a conta criada é de usuário normal, não de administrador.',
        },
        {
          action:
            'Entrar com a nova conta de teste e comparar as opções disponíveis com a matriz de permissões de usuário normal.',
          expectedResult:
            'A autenticação funciona e a conta não recebe as opções nem permissões reservadas ao papel de administrador.',
        },
        {
          action: 'Remover os dados descartáveis conforme o procedimento do ambiente.',
          expectedResult:
            'A conta de teste e eventuais recursos associados são limpos.',
        },
      ],
      priority: 'High',
    },
    {
      id: 'UI-REGISTER-PUBLIC-011',
      endpoint: 'Cadastro de usuário — acesso público',
      title: 'Criar administrador pela rota pública',
      objective:
        'Validar o papel solicitado ao marcar a checkbox de administrador no formulário público.',
      preconditions: [
        'Estar deslogado.',
        'Usar e-mail exclusivo e credenciais descartáveis em ambiente de teste; definir como a conta será removida após a validação.',
      ],
      steps: [
        {
          action:
            'Acessar o cadastro por "Cadastre-se", preencher nome, e-mail exclusivo e senha, marcar "Cadastrar como administrador?" e enviar.',
          expectedResult:
            'A aplicação confirma o cadastro conforme o fluxo aprovado e cria a conta com papel de administrador.',
        },
        {
          action:
            'Entrar com a conta de teste e verificar as permissões administrativas previstas na matriz de acesso.',
          expectedResult:
            'A conta autentica e recebe as opções autorizadas ao papel de administrador.',
        },
        {
          action: 'Remover os dados descartáveis conforme o procedimento do ambiente.',
          expectedResult:
            'A conta de teste e eventuais recursos associados são limpos.',
        },
      ],
      priority: 'High',
    },
    {
      id: 'UI-REGISTER-AUTH-001',
      endpoint: 'Cadastro de usuário — usuário autenticado',
      title: 'Abrir cadastro pelo botão do header',
      objective:
        'Confirmar que uma pessoa autenticada pode acessar o cadastro pelo header.',
      preconditions: [
        'Estar autenticado com uma conta autorizada a cadastrar usuários.',
      ],
      steps: [
        {
          action: 'Clicar em "Cadastrar Usuários" no header.',
          expectedResult:
            'A aplicação abre a tela de cadastro de usuários dentro da área autenticada.',
        },
      ],
      priority: 'High',
    },
    {
      id: 'UI-REGISTER-AUTH-002',
      endpoint: 'Cadastro de usuário — usuário autenticado',
      title: 'Abrir cadastro pelo card de usuários',
      objective:
        'Confirmar que o card "Cadastrar Usuários" oferece o mesmo acesso ao cadastro.',
      preconditions: [
        'Estar autenticado e na tela que apresenta o card "Cadastrar Usuários".',
      ],
      steps: [
        {
          action: 'Clicar no botão "Cadastrar" do card "Cadastrar Usuários".',
          expectedResult:
            'A aplicação abre a mesma tela de cadastro acessível pelo botão do header.',
        },
      ],
      priority: 'High',
    },
    {
      id: 'UI-REGISTER-AUTH-003',
      endpoint: 'Cadastro de usuário — usuário autenticado',
      title: 'Exibir o mesmo formulário no fluxo autenticado',
      objective:
        'Verificar que o cadastro acessado após login mantém os campos e a opção de papel.',
      preconditions: [
        'Estar autenticado e abrir o cadastro pelo header ou pelo card.',
      ],
      steps: [
        {
          action: 'Inspecionar o formulário aberto na área autenticada.',
          expectedResult:
            'O formulário apresenta nome, e-mail, senha e "Cadastrar como administrador?", com os mesmos requisitos de cadastro da rota pública.',
        },
      ],
      priority: 'High',
    },
    {
      id: 'UI-REGISTER-AUTH-004',
      endpoint: 'Cadastro de usuário — usuário autenticado',
      title: 'Bloquear envio autenticado com campos vazios',
      objective:
        'Confirmar que as validações obrigatórias também funcionam no fluxo autenticado.',
      preconditions: [
        'Estar autenticado e abrir o formulário de cadastro com nome, e-mail e senha vazios.',
      ],
      steps: [
        {
          action: 'Clicar em "Cadastrar".',
          expectedResult:
            'Nenhuma conta é criada; os alertas de nome, e-mail e senha obrigatórios são apresentados e o fluxo autenticado não perde a sessão.',
        },
      ],
      priority: 'High',
    },
    {
      id: 'UI-REGISTER-AUTH-005',
      endpoint: 'Cadastro de usuário — usuário autenticado',
      title: 'Criar usuário normal pela área autenticada',
      objective:
        'Validar a criação de uma conta normal pelo botão disponível após o login.',
      preconditions: [
        'Estar autenticado com usuário autorizado a cadastrar contas.',
        'Usar e-mail exclusivo e credenciais descartáveis; preparar a limpeza da conta após o teste.',
      ],
      steps: [
        {
          action:
            'Abrir o cadastro pelo header ou card, preencher dados válidos e manter "Cadastrar como administrador?" desmarcada.',
          expectedResult:
            'A conta é criada com papel de usuário normal, conforme o fluxo de sucesso aprovado.',
        },
        {
          action:
            'Verificar que o usuário que realizou o cadastro continua autenticado e que a nova conta pode entrar com as credenciais de teste.',
          expectedResult:
            'A sessão do usuário criador permanece consistente e a conta criada autentica com permissões de usuário normal.',
        },
        {
          action: 'Remover a conta descartável conforme o procedimento do ambiente.',
          expectedResult: 'Nenhum dado de teste permanece no ambiente.',
        },
      ],
      priority: 'High',
    },
    {
      id: 'UI-REGISTER-AUTH-006',
      endpoint: 'Cadastro de usuário — usuário autenticado',
      title: 'Criar administrador pela área autenticada',
      objective:
        'Validar a criação de uma conta administradora pelo formulário acessado após login.',
      preconditions: [
        'Estar autenticado com usuário autorizado a cadastrar contas.',
        'Usar e-mail exclusivo e credenciais descartáveis; preparar a limpeza da conta após o teste.',
      ],
      steps: [
        {
          action:
            'Abrir o cadastro pelo header ou card, preencher dados válidos, marcar "Cadastrar como administrador?" e enviar.',
          expectedResult:
            'A conta é criada com papel de administrador, conforme o fluxo de sucesso aprovado.',
        },
        {
          action:
            'Entrar com a conta criada e verificar as permissões administrativas previstas na matriz de acesso.',
          expectedResult:
            'A conta autentica e recebe somente as opções e permissões autorizadas ao administrador.',
        },
        {
          action: 'Remover a conta descartável conforme o procedimento do ambiente.',
          expectedResult: 'Nenhum dado de teste permanece no ambiente.',
        },
      ],
      priority: 'High',
    },
    {
      id: 'UI-REGISTER-SHARED-001',
      endpoint: 'Cadastro de usuário — regras compartilhadas',
      title: 'Impedir duplicidade de e-mail no cadastro público',
      objective:
        'Verificar que a rota pública rejeita um endereço que já pertence a outra conta.',
      preconditions: [
        'Ter uma conta de teste existente e conhecer seu e-mail.',
        'Estar deslogado e abrir o cadastro por "Cadastre-se".',
      ],
      steps: [
        {
          action:
            'Preencher todos os campos com dados de teste válidos, reutilizar o e-mail existente e clicar em "Cadastrar".',
          expectedResult:
            'O cadastro é rejeitado com o aviso de que o e-mail já está sendo usado; a conta original permanece inalterada e não é criada uma segunda conta.',
        },
      ],
      priority: 'High',
    },
    {
      id: 'UI-REGISTER-SHARED-002',
      endpoint: 'Cadastro de usuário — regras compartilhadas',
      title: 'Impedir duplicidade de e-mail no cadastro autenticado',
      objective:
        'Verificar que o cadastro pela área autenticada aplica a mesma regra de unicidade de e-mail.',
      preconditions: [
        'Ter uma conta de teste existente e conhecer seu e-mail.',
        'Estar autenticado e abrir o cadastro pelo header ou card.',
      ],
      steps: [
        {
          action:
            'Preencher todos os campos com dados de teste válidos, reutilizar o e-mail existente e clicar em "Cadastrar".',
          expectedResult:
            'O cadastro é rejeitado com o mesmo aviso de e-mail já utilizado; não é criada outra conta e a sessão do usuário autenticado permanece ativa.',
        },
      ],
      priority: 'High',
    },
    {
      id: 'UI-REGISTER-SHARED-003',
      endpoint: 'Cadastro de usuário — regras compartilhadas',
      title: 'Manter o cadastro original após tentativa duplicada',
      objective:
        'Confirmar que uma tentativa com e-mail repetido não altera os dados da conta existente.',
      preconditions: [
        'Ter uma conta de teste com dados conhecidos e abrir o cadastro por qualquer um dos dois fluxos.',
      ],
      steps: [
        {
          action:
            'Tentar cadastrar outro usuário com o e-mail existente, usando nome, senha e papel diferentes.',
          expectedResult:
            'A interface informa que o e-mail já está em uso e não substitui nome, senha ou papel da conta original.',
        },
        {
          action:
            'Autenticar com as credenciais originais e comparar o papel e os dados da conta com os valores anotados.',
          expectedResult:
            'A conta original continua válida, com seus dados e papel preservados.',
        },
      ],
      priority: 'High',
    },
    {
      id: 'UI-REGISTER-SHARED-004',
      endpoint: 'Cadastro de usuário — regras compartilhadas',
      title: 'Aplicar a mesma validação de e-mail nos dois fluxos',
      objective:
        'Comparar a validação de e-mail inválido entre cadastro público e autenticado.',
      preconditions: [
        'Ter acesso aos dois caminhos de cadastro e uma conta autorizada para o caminho autenticado.',
      ],
      steps: [
        {
          action:
            'Em cada caminho, preencher nome e senha e informar um e-mail malformado; enviar o formulário.',
          expectedResult:
            'Os dois fluxos rejeitam o formato inválido e apresentam comportamento equivalente, sem criar conta.',
        },
      ],
      priority: 'Medium',
    },
    {
      id: 'UI-REGISTER-SHARED-005',
      endpoint: 'Cadastro de usuário — regras compartilhadas',
      title: 'Comparar validações obrigatórias entre os dois fluxos',
      objective:
        'Garantir que cada campo obrigatório é validado de forma consistente nos dois pontos de entrada.',
      preconditions: [
        'Ter acesso ao cadastro público e ao cadastro na área autenticada.',
      ],
      steps: [
        {
          action:
            'Em cada fluxo, enviar o formulário vazio e depois repetir os testes deixando vazio, separadamente, nome, e-mail e senha.',
          expectedResult:
            'Ambos os fluxos sinalizam os mesmos campos obrigatórios e não criam conta quando faltar qualquer campo requerido.',
        },
      ],
      priority: 'High',
    },
    {
      id: 'UI-REGISTER-SHARED-006',
      endpoint: 'Cadastro de usuário — regras compartilhadas',
      title: 'Alternar a opção de administrador antes do envio',
      objective:
        'Verificar que a checkbox representa uma escolha explícita e pode ser marcada e desmarcada.',
      preconditions: [
        'Abrir um formulário novo por qualquer um dos dois caminhos.',
      ],
      steps: [
        {
          action:
            'Marcar "Cadastrar como administrador?" e depois desmarcá-la antes de enviar o formulário.',
          expectedResult:
            'O estado da checkbox acompanha a última interação e o cadastro resultante é de usuário normal.',
        },
      ],
      priority: 'Medium',
    },
    {
      id: 'UI-REGISTER-SHARED-007',
      endpoint: 'Cadastro de usuário — regras compartilhadas',
      title: 'Manter checkbox de administrador associada ao rótulo',
      objective:
        'Validar que o texto da opção identifica claramente o controle que define o papel da conta.',
      preconditions: [
        'Abrir o formulário de cadastro público ou autenticado.',
      ],
      steps: [
        {
          action:
            'Clicar no texto "Cadastrar como administrador?" e observar o estado da checkbox.',
          expectedResult:
            'O texto funciona como rótulo da checkbox; ela alterna de estado e deixa claro que a opção altera o papel solicitado.',
        },
      ],
      priority: 'Medium',
    },
    {
      id: 'UI-REGISTER-SHARED-008',
      endpoint: 'Cadastro de usuário — regras compartilhadas',
      title: 'Mascarar a senha durante o cadastro',
      objective:
        'Confirmar que a senha digitada não fica visível em texto aberto.',
      preconditions: [
        'Abrir o formulário de cadastro por qualquer um dos dois caminhos.',
      ],
      steps: [
        {
          action: 'Digitar uma senha descartável no campo "Digite sua senha".',
          expectedResult:
            'O campo permanece do tipo senha e mascara os caracteres digitados.',
        },
      ],
      priority: 'Medium',
    },
    {
      id: 'UI-REGISTER-SHARED-009',
      endpoint: 'Cadastro de usuário — regras compartilhadas',
      title: 'Dispensar alerta do formulário de cadastro',
      objective:
        'Verificar que o alerta de validação pode ser fechado sem abandonar o cadastro.',
      preconditions: [
        'Gerar um alerta no formulário, por exemplo enviando os campos vazios.',
      ],
      steps: [
        {
          action: 'Clicar em "Close" no alerta que deseja dispensar.',
          expectedResult:
            'O alerta selecionado desaparece; a tela permanece no formulário e os demais campos não são apagados.',
        },
      ],
      priority: 'Low',
    },
    {
      id: 'UI-REGISTER-SHARED-010',
      endpoint: 'Cadastro de usuário — permissões',
      title: 'Impedir acesso de usuário normal a ações administrativas',
      objective:
        'Validar que uma conta criada sem marcar a checkbox não ganha permissões de administrador.',
      preconditions: [
        'Ter uma conta descartável cadastrada com "Cadastrar como administrador?" desmarcada.',
        'Consultar a matriz aprovada de permissões e rotas administrativas.',
      ],
      steps: [
        {
          action:
            'Entrar com a conta normal e tentar localizar e acessar uma ação administrativa definida na matriz, tanto pela navegação quanto pelo acesso direto à rota, se aplicável.',
          expectedResult:
            'A conta normal não consegue executar ações administrativas; a aplicação oculta, bloqueia ou nega o acesso conforme a matriz aprovada.',
        },
        {
          action: 'Limpar a conta descartável conforme o procedimento do ambiente.',
          expectedResult: 'Nenhum dado de teste permanece no ambiente.',
        },
      ],
      priority: 'High',
    },
    {
      id: 'UI-REGISTER-SHARED-011',
      endpoint: 'Cadastro de usuário — permissões',
      title: 'Permitir ações administrativas para administrador',
      objective:
        'Verificar que uma conta criada com a checkbox marcada recebe o papel e as permissões administrativas previstas.',
      preconditions: [
        'Ter uma conta descartável criada com "Cadastrar como administrador?" marcada.',
        'Consultar a matriz aprovada de permissões administrativas.',
      ],
      steps: [
        {
          action:
            'Entrar com a conta administradora de teste e verificar os itens de navegação, rotas e ações definidas na matriz.',
          expectedResult:
            'A conta acessa as ações autorizadas ao administrador e não recebe permissões além das definidas.',
        },
        {
          action: 'Limpar a conta descartável conforme o procedimento do ambiente.',
          expectedResult: 'Nenhum dado de teste permanece no ambiente.',
        },
      ],
      priority: 'High',
    },
    {
      id: 'UI-REGISTER-SHARED-012',
      endpoint: 'Cadastro de usuário — regras compartilhadas',
      title: 'Impedir criação duplicada em envio repetido',
      objective:
        'Verificar que uma ação repetida de envio não cria mais de uma conta com o mesmo e-mail.',
      preconditions: [
        'Usar e-mail exclusivo e credenciais descartáveis em ambiente de teste controlado.',
      ],
      steps: [
        {
          action:
            'Preencher um cadastro válido e clicar duas vezes rapidamente em "Cadastrar", ou repetir o envio enquanto a primeira resposta ainda está sendo processada.',
          expectedResult:
            'É criada no máximo uma conta para o e-mail; a interface evita ou informa claramente a repetição, sem duplicar o registro.',
        },
        {
          action: 'Localizar e remover a conta de teste criada.',
          expectedResult: 'O ambiente volta ao estado anterior ao teste.',
        },
      ],
      priority: 'Medium',
    },
    {
      id: 'UI-REGISTER-SHARED-013',
      endpoint: 'Cadastro de usuário — regras compartilhadas',
      title: 'Validar valor de administrador após autenticação',
      objective:
        'Confirmar que o papel persistido corresponde ao estado da checkbox no momento do envio.',
      preconditions: [
        'Usar e-mails descartáveis distintos e ter como verificar as permissões de cada conta criada.',
      ],
      steps: [
        {
          action:
            'Criar uma conta com a checkbox desmarcada e outra conta com a checkbox marcada, usando cada uma das origens de cadastro.',
          expectedResult:
            'A primeira conta é normal e a segunda é administradora, independentemente do fluxo de entrada usado.',
        },
        {
          action:
            'Autenticar com ambas as contas e comparar seus acessos com a matriz de permissões.',
          expectedResult:
            'A conta normal tem menos acessos que a administradora, de acordo com a matriz; nenhum papel é trocado entre as contas.',
        },
        {
          action: 'Limpar as contas descartáveis e os dados associados.',
          expectedResult: 'Nenhum dado de teste permanece no ambiente.',
        },
      ],
      priority: 'High',
    },
  ],
};
