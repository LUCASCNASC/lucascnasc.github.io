window.testCaseTranslations = window.testCaseTranslations || {};
window.testCaseTranslations.api = {
  'API-LOGIN-001': {
    title: 'Log in with valid credentials',
    objective: 'Authenticate a registered user and obtain an authorization token.',
    preconditions: [
      'Have an active ServeRest test account and access to its valid email address and password.',
    ],
    steps: [
      {
        action:
          'Send POST https://serverest.dev/login with Content-Type: application/json and the body {"email":"<valid email>","password":"<valid password>"}.',
        expectedResult:
          'The response returns HTTP 200 and a JSON body with message equal to "Login realizado com sucesso" and authorization populated with the token.',
      },
    ],
  },
  'API-LOGIN-002': {
    title: 'Log in with a valid email and an incorrect password',
    objective: 'Verify that a registered email cannot authenticate without its matching password.',
    preconditions: [
      'Have an active ServeRest test account and know its registered email address.',
    ],
    steps: [
      {
        action:
          'Send POST https://serverest.dev/login with Content-Type: application/json and the body {"email":"<registered email>","password":"<incorrect password>"}.',
        expectedResult:
          'The response returns HTTP 401 and a JSON body with message equal to "Email e/ou senha inválidos".',
      },
    ],
  },
  'API-LOGIN-003': {
    title: 'Log in with an incorrect email and a valid password',
    objective: 'Verify that a valid password cannot authenticate with an unregistered email.',
    preconditions: [
      'Have an active ServeRest test account and know its valid password.',
    ],
    steps: [
      {
        action:
          'Send POST https://serverest.dev/login with Content-Type: application/json and the body {"email":"<unregistered email>","password":"<valid test account password>"}.',
        expectedResult:
          'The response returns HTTP 401 and a JSON body with message equal to "Email e/ou senha inválidos".',
      },
    ],
  },
  'API-LOGIN-004': {
    title: 'Log in with an incorrect email and password',
    objective: 'Verify that invalid credentials do not authenticate a user.',
    preconditions: ['The ServeRest API is available for testing.'],
    steps: [
      {
        action:
          'Send POST https://serverest.dev/login with Content-Type: application/json and the body {"email":"<unregistered email>","password":"<incorrect password>"}.',
        expectedResult:
          'The response returns HTTP 401 and a JSON body with message equal to "Email e/ou senha inválidos".',
      },
    ],
  },
  'API-LOGIN-005': {
    title: 'Log in with an empty email and a valid password',
    objective: 'Verify that a valid password cannot authenticate when the email is empty.',
    preconditions: [
      'Have an active ServeRest test account and know its valid password.',
    ],
    steps: [
      {
        action:
          'Send POST https://serverest.dev/login with Content-Type: application/json and the body {"email":"","password":"<valid test account password>"}.',
        expectedResult:
          'The response returns HTTP 401 and a JSON body with message equal to "Email e/ou senha inválidos".',
      },
    ],
  },
  'API-LOGIN-006': {
    title: 'Log in with a valid email and an empty password',
    objective: 'Verify that a registered email cannot authenticate when the password is empty.',
    preconditions: [
      'Have an active ServeRest test account and know its registered email address.',
    ],
    steps: [
      {
        action:
          'Send POST https://serverest.dev/login with Content-Type: application/json and the body {"email":"<registered email>","password":""}.',
        expectedResult:
          'The response returns HTTP 401 and a JSON body with message equal to "Email e/ou senha inválidos".',
      },
    ],
  },
  'API-LOGIN-007': {
    title: 'Log in with an empty email and password',
    objective: 'Verify that empty credential fields do not authenticate a user.',
    preconditions: ['The ServeRest API is available for testing.'],
    steps: [
      {
        action:
          'Send POST https://serverest.dev/login with Content-Type: application/json and the body {"email":"","password":""}.',
        expectedResult:
          'The response returns HTTP 401 and a JSON body with message equal to "Email e/ou senha inválidos".',
      },
    ],
  },
  'API-LOGIN-008': {
    title: 'Log in without a request body',
    objective: 'Verify the login response when the request has no body.',
    preconditions: ['The ServeRest API is available for testing.'],
    steps: [
      {
        action:
          'Send POST https://serverest.dev/login with Content-Type: application/json and no body.',
        expectedResult:
          'The response returns HTTP 401 and a JSON body with message equal to "Email e/ou senha inválidos".',
      },
    ],
  },
  'API-LOGIN-009': {
    title: 'Log in with an empty JSON object',
    objective: 'Verify the login response when the JSON body contains no credential fields.',
    preconditions: ['The ServeRest API is available for testing.'],
    steps: [
      {
        action:
          'Send POST https://serverest.dev/login with Content-Type: application/json and the body {}.',
        expectedResult:
          'The response returns HTTP 401 and a JSON body with message equal to "Email e/ou senha inválidos".',
      },
    ],
  },
  'API-LOGIN-010': {
    title: 'Log in without the email field',
    objective: 'Verify that omitting the email does not authenticate the user.',
    preconditions: [
      'Have an active ServeRest test account and know its valid password.',
    ],
    steps: [
      {
        action:
          'Send POST https://serverest.dev/login with Content-Type: application/json and the body {"password":"<valid test account password>"}.',
        expectedResult:
          'The response returns HTTP 401 and a JSON body with message equal to "Email e/ou senha inválidos"; no token is issued.',
      },
    ],
  },
  'API-LOGIN-011': {
    title: 'Log in without the password field',
    objective: 'Verify that omitting the password does not authenticate the user.',
    preconditions: [
      'Have an active ServeRest test account and know its registered email address.',
    ],
    steps: [
      {
        action:
          'Send POST https://serverest.dev/login with Content-Type: application/json and the body {"email":"<registered email>"}.',
        expectedResult:
          'The response returns HTTP 401 and a JSON body with message equal to "Email e/ou senha inválidos"; no token is issued.',
      },
    ],
  },
  'API-LOGIN-012': {
    title: 'Log in with an invalid email format',
    objective: 'Verify that a malformed email address does not authenticate the user.',
    preconditions: ['The ServeRest API is available for testing.'],
    steps: [
      {
        action:
          'Send POST https://serverest.dev/login with Content-Type: application/json and the body {"email":"invalid-user","password":"<any password>"}.',
        expectedResult:
          'The response returns HTTP 401 and a JSON body with message equal to "Email e/ou senha inválidos"; no token is issued.',
      },
    ],
  },
  'API-LOGIN-013': {
    title: 'Log in with an email containing only spaces',
    objective: 'Verify that whitespace in the email does not authenticate a user.',
    preconditions: ['The ServeRest API is available for testing.'],
    steps: [
      {
        action:
          'Send POST https://serverest.dev/login with Content-Type: application/json and the body {"email":"   ","password":"<any password>"}.',
        expectedResult:
          'The response does not authenticate the user or return authorization; record the status and message to confirm the expected contract for whitespace-only input.',
      },
    ],
  },
  'API-LOGIN-014': {
    title: 'Log in with a password containing only spaces',
    objective: 'Verify that whitespace is not accepted as a valid password.',
    preconditions: [
      'Have an active ServeRest test account and know its registered email address.',
    ],
    steps: [
      {
        action:
          'Send POST https://serverest.dev/login with Content-Type: application/json and the body {"email":"<registered email>","password":"   "}.',
        expectedResult:
          'The response does not authenticate the user or return authorization; record the status and message to confirm the expected contract for whitespace-only input.',
      },
    ],
  },
  'API-LOGIN-015': {
    title: 'Log in with a null email',
    objective: 'Verify how null is handled in the email field.',
    preconditions: ['The ServeRest API is available for testing.'],
    steps: [
      {
        action:
          'Send POST https://serverest.dev/login with Content-Type: application/json and the body {"email":null,"password":"<any password>"}.',
        expectedResult:
          'The request does not authenticate or return authorization; record the status and message because the published contract does not define behavior for null fields. The API must not return a 5xx error.',
      },
    ],
  },
  'API-LOGIN-016': {
    title: 'Log in with a numeric password',
    objective: 'Verify how a numeric value is handled in the password field.',
    preconditions: ['The ServeRest API is available for testing.'],
    steps: [
      {
        action:
          'Send POST https://serverest.dev/login with Content-Type: application/json and the body {"email":"<registered email>","password":123456}.',
        expectedResult:
          'The request does not authenticate or return authorization; record the status and message because the published contract defines password as a string but does not specify the error for a numeric type. The API must not return a 5xx error.',
      },
    ],
  },
  'API-LOGIN-017': {
    title: 'Log in without the Content-Type header',
    objective: 'Verify login behavior when Content-Type is not provided.',
    preconditions: ['The ServeRest API is available for testing.'],
    steps: [
      {
        action:
          'Send POST https://serverest.dev/login without the Content-Type header, with the JSON body {"email":"<registered email>","password":"<valid password>"}.',
        expectedResult:
          'Record the returned status and body. The request must not issue authorization unless the credentials are processed according to the contract; the behavior when the header is absent is not specified in the documentation.',
      },
    ],
  },
  'API-LOGIN-018': {
    title: 'Log in with an unsupported Content-Type',
    objective: 'Verify login behavior with an unsupported content type.',
    preconditions: ['The ServeRest API is available for testing.'],
    steps: [
      {
        action:
          'Send POST https://serverest.dev/login with Content-Type: text/plain and the body {"email":"<registered email>","password":"<valid password>"}.',
        expectedResult:
          'Record the returned status and body. The API must not issue authorization for a request whose format was not processed according to the contract; confirm the expected status because the documentation does not specify this case.',
      },
    ],
  },
  'API-LOGIN-019': {
    title: 'Log in with malformed JSON',
    objective: 'Verify how a body that cannot be parsed as JSON is handled.',
    preconditions: ['The ServeRest API is available for testing.'],
    steps: [
      {
        action:
          'Send POST https://serverest.dev/login with Content-Type: application/json and the body {"email":.',
        expectedResult:
          'The API rejects the request without authenticating or issuing authorization and without returning a 5xx error; record the status and message to confirm the expected error code.',
      },
    ],
  },
  'API-LOGIN-020': {
    title: 'Use the login token to create and cancel a cart',
    objective:
      'Verify that the token returned by login authorizes a protected operation and that test cleanup restores stock.',
    preconditions: [
      'Have an active test account with no existing cart and a test product with available stock.',
    ],
    steps: [
      {
        action:
          'Log in with valid credentials at POST /login and save the returned authorization value.',
        expectedResult: 'The response returns HTTP 200 and authorization contains a token.',
      },
      {
        action:
          'Send POST /carrinhos with the token in the Authorization header and a valid test product in the body {"produtos":[{"idProduto":"<product id>","quantidade":1}]}.',
        expectedResult:
          'The response returns HTTP 201 and confirms creation of the cart associated with the authenticated user.',
      },
      {
        action:
          'Send DELETE /carrinhos/cancelar-compra with the same token in the Authorization header.',
        expectedResult:
          'The response returns HTTP 200, the test cart is removed, and the product quantity is restored to stock.',
      },
    ],
  },
  'API-USERS-LIST-001': {
    endpoint: 'GET /usuarios',
    title: 'List registered users',
    objective: 'Retrieve the user collection and validate the response format.',
    preconditions: ['The API is available.'],
    steps: [
      {
        action: 'Send GET https://serverest.dev/usuarios.',
        expectedResult:
          'The API returns HTTP 200, a numeric quantidade field, and a usuarios array. The quantidade value matches the number of returned items.',
      },
    ],
  },
  'API-USERS-LIST-002': {
    endpoint: 'GET /usuarios',
    title: 'Filter users by email',
    objective: 'Verify that the collection can be filtered by the email parameter.',
    preconditions: [
      'Have a registered test user with a unique, known email address.',
    ],
    steps: [
      {
        action:
          'Send GET https://serverest.dev/usuarios?email=<email-de-teste>, using the registered email address.',
        expectedResult:
          'The API returns HTTP 200, quantidade equal to 1, and usuarios contains the user with the queried email.',
      },
    ],
  },
  'API-USERS-CREATE-001': {
    endpoint: 'POST /usuarios',
    title: 'Register a user with valid data',
    objective: 'Create a test user and obtain the generated identifier.',
    preconditions: [
      'Use a unique email generated for the test that is not already registered.',
      'Plan to delete the created user at the end of the test.',
    ],
    steps: [
      {
        action:
          'Send POST https://serverest.dev/usuarios with Content-Type: application/json and body {"nome":"Test User","email":"<unique-email>","password":"<test-password>","administrador":"true"}.',
        expectedResult:
          'The API returns HTTP 201, message "Cadastro realizado com sucesso", and a non-empty _id.',
      },
      {
        action: 'Retrieve GET /usuarios/<_id-retornado>.',
        expectedResult:
          'The created user is returned and its data matches the submitted body.',
      },
      {
        action: 'Delete the test user with DELETE /usuarios/<_id-retornado>.',
        expectedResult:
          'The API returns HTTP 200 and confirms deletion of the test record.',
      },
    ],
  },
  'API-USERS-CREATE-002': {
    endpoint: 'POST /usuarios',
    title: 'Prevent registration with an email that is already in use',
    objective: 'Verify that two users cannot be registered with the same email address.',
    preconditions: ['Have a registered test user and know its email address.'],
    steps: [
      {
        action:
          'Send POST https://serverest.dev/usuarios with valid data, reusing the email of the existing user.',
        expectedResult:
          'The API returns HTTP 400 with the message "Este email já está sendo usado"; no duplicate user is created.',
      },
    ],
  },
  'API-USERS-GET-001': {
    endpoint: 'GET /usuarios/{_id}',
    title: 'Retrieve an existing user by ID',
    objective: 'Retrieve a known user’s data using its identifier.',
    preconditions: ['Have a registered test user and know its _id.'],
    steps: [
      {
        action: 'Send GET https://serverest.dev/usuarios/<_id-do-usuário>.',
        expectedResult:
          'The API returns HTTP 200, and the returned object contains the queried user’s _id, nome, email, password, and administrador.',
      },
    ],
  },
  'API-USERS-GET-002': {
    endpoint: 'GET /usuarios/{_id}',
    title: 'Retrieve a nonexistent user',
    objective: 'Validate the response when the requested ID does not exist.',
    preconditions: ['Use an ID that does not belong to any registered user.'],
    steps: [
      {
        action: 'Send GET https://serverest.dev/usuarios/<_id-inexistente>.',
        expectedResult:
          'The API returns HTTP 400 with the message "Usuário não encontrado".',
      },
    ],
  },
  'API-USERS-DELETE-001': {
    endpoint: 'DELETE /usuarios/{_id}',
    title: 'Delete a test user with no cart',
    objective: 'Remove a disposable user that has no associated cart.',
    preconditions: [
      'Create a test user with a unique email and confirm that it has no cart.',
      'Save the _id returned during registration.',
    ],
    steps: [
      {
        action: 'Send DELETE https://serverest.dev/usuarios/<_id-do-usuário>.',
        expectedResult:
          'The API returns HTTP 200 with the message "Registro excluído com sucesso".',
      },
      {
        action: 'Retrieve GET /usuarios/<_id-do-usuário>.',
        expectedResult:
          'The API returns HTTP 400 with the message "Usuário não encontrado".',
      },
    ],
  },
  'API-USERS-DELETE-002': {
    endpoint: 'DELETE /usuarios/{_id}',
    title: 'Delete a nonexistent user',
    objective: 'Validate the response when attempting to delete an ID with no matching record.',
    preconditions: ['Use an ID that does not belong to any registered user.'],
    steps: [
      {
        action: 'Send DELETE https://serverest.dev/usuarios/<_id-inexistente>.',
        expectedResult:
          'The API returns HTTP 200 with the message "Nenhum registro excluído".',
      },
    ],
  },
  'API-USERS-DELETE-003': {
    endpoint: 'DELETE /usuarios/{_id}',
    title: 'Prevent deletion of a user with a cart',
    objective: 'Verify that a user with an associated cart cannot be deleted.',
    preconditions: [
      'In an isolated test environment, create a test user and an associated cart.',
      'Save the user’s _id and the idCarrinho for cleanup at the end.',
    ],
    steps: [
      {
        action: 'Send DELETE https://serverest.dev/usuarios/<_id-do-usuário>.',
        expectedResult:
          'The API returns HTTP 400 with the message "Não é permitido excluir usuário com carrinho cadastrado" and identifies the idCarrinho.',
      },
      {
        action: 'Cancel the cart and delete the test user.',
        expectedResult:
          'The disposable test data is removed without affecting other users’ records.',
      },
    ],
  },
  'API-USERS-UPDATE-001': {
    endpoint: 'PUT /usuarios/{_id}',
    title: 'Update an existing user',
    objective: 'Change a test user’s data and confirm the update.',
    preconditions: [
      'Have a disposable user with no associated cart and know its _id.',
      'Use a unique email address that is not already registered.',
    ],
    steps: [
      {
        action:
          'Send PUT https://serverest.dev/usuarios/<_id-do-usuário> with Content-Type: application/json and the nome, email, password, and administrador fields.',
        expectedResult:
          'The API returns HTTP 200 with the message "Registro alterado com sucesso".',
      },
      {
        action: 'Retrieve GET /usuarios/<_id-do-usuário>.',
        expectedResult: 'The returned data reflects the values sent in the PUT request.',
      },
      {
        action: 'Delete the disposable user after validation.',
        expectedResult: 'The test user is removed.',
      },
    ],
  },
  'API-USERS-UPDATE-002': {
    endpoint: 'PUT /usuarios/{_id}',
    title: 'Prevent updating with another user’s email',
    objective: 'Verify that an update cannot reuse the email address of another account.',
    preconditions: [
      'Have two test users; save their IDs and use unique email addresses.',
    ],
    steps: [
      {
        action:
          'Send PUT /usuarios/<_id-do-primeiro-usuário> with valid data, but specify the email already used by the second user.',
        expectedResult:
          'The API returns HTTP 400 with the message "Este email já está sendo usado"; existing data remains consistent.',
      },
      {
        action:
          'Retrieve both users with GET /usuarios/<_id> and clean up the test records.',
        expectedResult:
          'Neither user was overwritten or duplicated, and the disposable data is removed.',
      },
    ],
  },
  'API-USERS-UPDATE-003': {
    endpoint: 'PUT /usuarios/{_id}',
    title: 'Create a user when updating a nonexistent ID',
    objective: 'Verify the documented PUT behavior when the ID does not yet exist.',
    preconditions: [
      'In an isolated test environment, use a nonexistent ID and a unique email address.',
    ],
    steps: [
      {
        action:
          'Send PUT https://serverest.dev/usuarios/<_id-inexistente> with valid data and a unique email address.',
        expectedResult:
          'The API returns HTTP 201, the message "Cadastro realizado com sucesso", and the new user’s _id.',
      },
      {
        action:
          'Retrieve the created user and delete it at the end using the returned _id.',
        expectedResult:
          'The record created by PUT can be retrieved and then deleted without affecting other users.',
      },
    ],
  },
  'API-USERS-LIST-003': {
    endpoint: 'GET /usuarios',
    title: 'Filter users by ID',
    objective: 'Validate the _id filter for the user listing.',
    preconditions: ['Have a registered test user and know its _id.'],
    steps: [
      {
        action: 'Send GET https://serverest.dev/usuarios?_id=<_id-do-usuário>.',
        expectedResult:
          'The API returns HTTP 200, quantidade equal to 1, and usuarios contains only the user with the queried ID.',
      },
    ],
  },
  'API-USERS-LIST-004': {
    endpoint: 'GET /usuarios',
    title: 'Filter users by name',
    objective: 'Validate the nome filter when querying the collection.',
    preconditions: [
      'Have a test user with a unique or known name for the query.',
    ],
    steps: [
      {
        action: 'Send GET https://serverest.dev/usuarios?nome=<nome-do-usuário>.',
        expectedResult:
          'The API returns HTTP 200, and the listed users match the specified name.',
      },
    ],
  },
  'API-USERS-LIST-005': {
    endpoint: 'GET /usuarios',
    title: 'Filter administrator users',
    objective: 'Validate querying users whose administrador value is true.',
    preconditions: ['At least one test user must exist with administrador true.'],
    steps: [
      {
        action: 'Send GET https://serverest.dev/usuarios?administrador=true.',
        expectedResult:
          'The API returns HTTP 200, and every returned item has administrador equal to "true".',
      },
    ],
  },
  'API-USERS-LIST-006': {
    endpoint: 'GET /usuarios',
    title: 'Filter non-administrator users',
    objective: 'Validate querying users whose administrador value is false.',
    preconditions: ['At least one test user must exist with administrador false.'],
    steps: [
      {
        action: 'Send GET https://serverest.dev/usuarios?administrador=false.',
        expectedResult:
          'The API returns HTTP 200, and every returned item has administrador equal to "false".',
      },
    ],
  },
  'API-USERS-LIST-007': {
    endpoint: 'GET /usuarios',
    title: 'Combine listing filters',
    objective: 'Verify the combined application of the nome and administrador filters.',
    preconditions: [
      'Have test users that allow results to be distinguished by both filters.',
    ],
    steps: [
      {
        action:
          'Send GET https://serverest.dev/usuarios?nome=<nome-de-teste>&administrador=false.',
        expectedResult:
          'The API returns HTTP 200, and every item matches both the specified name and administrador value.',
      },
    ],
  },
  'API-USERS-LIST-008': {
    endpoint: 'GET /usuarios',
    title: 'Query the listing with no matches',
    objective: 'Validate a valid query whose filter finds no users.',
    preconditions: ['Use a test email address that is not registered.'],
    steps: [
      {
        action: 'Send GET https://serverest.dev/usuarios?email=<email-inexistente>.',
        expectedResult:
          'The API returns HTTP 200, quantidade equal to 0, and usuarios as an empty array.',
      },
    ],
  },
  'API-USERS-LIST-009': {
    endpoint: 'GET /usuarios',
    title: 'Filter by a test user’s password',
    objective: 'Verify the documented password filter without using personal credentials.',
    preconditions: [
      'Create a disposable user with a password unique to this test.',
      'Do not record or reuse the password for real accounts.',
    ],
    steps: [
      {
        action:
          'Send GET https://serverest.dev/usuarios?password=<senha-exclusiva-de-teste>.',
        expectedResult:
          'The API returns HTTP 200, and the query matches the configured test user. Avoid displaying or saving the password in shared evidence.',
      },
      {
        action: 'Delete the test user after validation.',
        expectedResult: 'The disposable user is removed.',
      },
    ],
  },
  'API-USERS-CREATE-003': {
    endpoint: 'POST /usuarios',
    title: 'Register a non-administrator user',
    objective: 'Confirm successful registration with administrador set to false.',
    preconditions: [
      'Use a unique email address for the test and plan to delete the record.',
    ],
    steps: [
      {
        action:
          'Send POST /usuarios with Content-Type: application/json and body {"nome":"Test User","email":"<unique-email>","password":"<test-password>","administrador":"false"}.',
        expectedResult:
          'The API returns HTTP 201 with the message "Cadastro realizado com sucesso" and a non-empty _id.',
      },
      {
        action: 'Retrieve GET /usuarios/<_id-retornado>.',
        expectedResult:
          'The user exists, and administrador is returned as "false".',
      },
      {
        action: 'Delete the user created for the test.',
        expectedResult: 'The disposable user is removed.',
      },
    ],
  },
  'API-USERS-CREATE-004': {
    endpoint: 'POST /usuarios',
    title: 'Characterize registration without a body field',
    objective:
      'Identify the API behavior when the email field is omitted, since the documentation does not define required fields or the response for this case.',
    preconditions: [
      'Run only in an isolated test environment.',
      'Use an identifiable name and a unique password, and check records before and after so any user created can be cleaned up.',
    ],
    steps: [
      {
        action:
          'Send POST /usuarios with a valid nome and password, omitting email, and record the status and response body without assuming a specific code.',
        expectedResult:
          'Record the result as evidence for defining the contract. If the API creates a record, find it by the test name and delete it; do not leave test data persisted.',
      },
    ],
  },
  'API-USERS-CREATE-005': {
    endpoint: 'POST /usuarios',
    title: 'Validate the administrador domain during registration',
    objective:
      'Characterize the response to an administrador value outside the documented true/false enum.',
    preconditions: [
      'Run in an isolated environment with a unique email and a cleanup procedure in case a record is created.',
    ],
    steps: [
      {
        action:
          'Send POST /usuarios with valid test data but administrador equal to "maybe"; record the response without assuming an unspecified status.',
        expectedResult:
          'Document the response to confirm whether the invalid value is rejected. If a user is created, find and delete the test record.',
      },
    ],
  },
  'API-USERS-CREATE-006': {
    endpoint: 'POST /usuarios',
    title: 'Verify no duplicate is created after an email conflict',
    objective:
      'Confirm that attempting registration with an email already in use does not change the number of records for that email.',
    preconditions: ['Have a registered test user and know its email address.'],
    steps: [
      {
        action:
          'Record the result of GET /usuarios?email=<email-existente>, then send POST /usuarios with the same email.',
        expectedResult:
          'The POST returns HTTP 400 with "Este email já está sendo usado".',
      },
      {
        action: 'Query GET /usuarios?email=<email-existente> again.',
        expectedResult:
          'The query still returns only the original record; no duplicate user was created.',
      },
    ],
  },
  'API-USERS-GET-003': {
    endpoint: 'GET /usuarios/{_id}',
    title: 'Validate the retrieved user’s data and consistency',
    objective: 'Check that the queried identifier and user fields belong to the same record.',
    preconditions: [
      'Create or choose a test user with known data and note its _id.',
    ],
    steps: [
      {
        action:
          'Retrieve GET /usuarios/<_id-do-usuário> and compare the response with the known data for the test user.',
        expectedResult:
          'The API returns HTTP 200; _id matches the requested path, and nome, email, and administrador match the record used for the test.',
      },
    ],
  },
  'API-USERS-DELETE-004': {
    endpoint: 'DELETE /usuarios/{_id}',
    title: 'Confirm the result of repeated deletion',
    objective: 'Verify that deleting an already removed user again does not affect another record.',
    preconditions: [
      'Create a disposable user with no cart and save the returned _id.',
    ],
    steps: [
      {
        action:
          'Send DELETE /usuarios/<_id-do-usuário>, then repeat the same request with the same ID.',
        expectedResult:
          'The first request returns HTTP 200 with "Registro excluído com sucesso"; the second returns HTTP 200 with "Nenhum registro excluído".',
      },
      {
        action: 'Retrieve GET /usuarios/<_id-do-usuário>.',
        expectedResult:
          'The API returns HTTP 400 with "Usuário não encontrado".',
      },
    ],
  },
  'API-USERS-DELETE-005': {
    endpoint: 'DELETE /usuarios/{_id}',
    title: 'Confirm that a user with a cart remains registered',
    objective: 'Verify that deletion blocked by a cart does not remove the user.',
    preconditions: [
      'In an isolated environment, create a test user with an associated cart and save the identifiers.',
    ],
    steps: [
      {
        action: 'Send DELETE /usuarios/<_id-do-usuário>.',
        expectedResult:
          'The API returns HTTP 400 and indicates that a user with a cart cannot be deleted.',
      },
      {
        action: 'Retrieve GET /usuarios/<_id-do-usuário> before canceling the cart.',
        expectedResult:
          'The API returns HTTP 200 and the user remains registered.',
      },
      {
        action: 'Cancel the cart and delete the user created for the test.',
        expectedResult:
          'The disposable records are removed without changing third-party data.',
      },
    ],
  },
  'API-USERS-UPDATE-004': {
    endpoint: 'PUT /usuarios/{_id}',
    title: 'Update a user to a non-administrator',
    objective: 'Validate changing the administrador field to false for an existing user.',
    preconditions: [
      'Have a disposable test user with no cart and know its _id.',
      'Use a unique email address and plan to delete the user at the end.',
    ],
    steps: [
      {
        action:
          'Send PUT /usuarios/<_id-do-usuário> with a valid body and administrador set to "false".',
        expectedResult:
          'The API returns HTTP 200 with "Registro alterado com sucesso".',
      },
      {
        action: 'Retrieve GET /usuarios/<_id-do-usuário>.',
        expectedResult:
          'The user retains the same _id and administrador is returned as "false".',
      },
      {
        action: 'Delete the disposable user after validation.',
        expectedResult: 'The test user is removed.',
      },
    ],
  },
  'API-USERS-UPDATE-005': {
    endpoint: 'PUT /usuarios/{_id}',
    title: 'Characterize an update with an incomplete body',
    objective:
      'Identify how the API handles omitted fields in PUT, since the documentation does not define required fields or partial updates.',
    preconditions: [
      'Run only in an isolated environment with a disposable user that has no cart.',
      'Save the user’s original data for comparison and restoration, or delete the record at the end.',
    ],
    steps: [
      {
        action:
          'Send PUT /usuarios/<_id-do-usuário> omitting the nome field and record the status and response body without assuming a specific code.',
        expectedResult:
          'Compare the response and data after PUT with the approved contract. Restore the original data or delete the disposable user; do not leave test changes in place.',
      },
    ],
  },
};
