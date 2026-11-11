window.testCaseTranslations = window.testCaseTranslations || {};
window.testCaseTranslations.interface = {
  'UI-LOGIN-001': {
    title: 'Display the login form',
    objective: 'Confirm that the screen displays the fields and actions needed to sign in.',
    preconditions: ['The ServeRest application is available.'],
    steps: [
      {
        action: 'Open https://front.serverest.dev/login.',
        expectedResult:
          'The page displays the "Login" title, the "Digite seu email" and "Digite sua senha" fields, the "Entrar" button, and the "Cadastre-se" link.',
      },
    ],
  },
  'UI-LOGIN-002': {
    title: 'Keep the password masked',
    objective: 'Verify that password characters are not displayed as plain text.',
    preconditions: ['The login screen is open.'],
    steps: [
      {
        action: 'Enter a test password in the "Digite sua senha" field.',
        expectedResult:
          'The field remains a password field and the entered characters are masked.',
      },
    ],
  },
  'UI-LOGIN-003': {
    title: 'Prevent submission when both fields are empty',
    objective: 'Validate the required-field messages when attempting to sign in without entering any values.',
    preconditions: ['The login screen is open and both fields are empty.'],
    steps: [
      {
        action: 'Click "Entrar".',
        expectedResult:
          'The screen remains on the login page and displays the "Email é obrigatório" and "Password é obrigatório" alerts.',
      },
    ],
  },
  'UI-LOGIN-004': {
    title: 'Prevent submission without an email address',
    objective: 'Validate that email is required regardless of whether a password has been entered.',
    preconditions: ['The login screen is open.'],
    steps: [
      {
        action:
          'Leave the email field empty, enter a test value for the password, and click "Entrar".',
        expectedResult:
          'The screen remains on the login page, displays "Email é obrigatório", and does not authenticate the user.',
      },
    ],
  },
  'UI-LOGIN-005': {
    title: 'Prevent submission without a password',
    objective: 'Validate that a password is required regardless of whether an email address has been entered.',
    preconditions: ['The login screen is open.'],
    steps: [
      {
        action:
          'Enter a valid test email address, leave the password empty, and click "Entrar".',
        expectedResult:
          'The screen remains on the login page and displays "Password é obrigatório"; the user is not authenticated.',
      },
    ],
  },
  'UI-LOGIN-006': {
    title: 'Reject an incorrectly formatted email address',
    objective: 'Validate the message displayed for a malformed email address.',
    preconditions: ['The login screen is open.'],
    steps: [
      {
        action:
          'Enter "email-invalido" in the email field, enter a test value for the password, and click "Entrar".',
        expectedResult:
          'The screen remains on the login page and displays the "Email deve ser um email válido" alert; no session is started.',
      },
    ],
  },
  'UI-LOGIN-007': {
    title: 'Reject incorrect credentials',
    objective: 'Confirm that invalid credentials do not grant access to the application.',
    preconditions: [
      'Use fictitious test credentials that do not belong to a valid account.',
    ],
    steps: [
      {
        action:
          'Enter a correctly formatted email address and an incorrect password, then click "Entrar".',
        expectedResult:
          'The application remains on the login screen, displays "Email e/ou senha inválidos", and does not start a session.',
      },
    ],
  },
  'UI-LOGIN-008': {
    title: 'Sign in with valid credentials',
    objective: 'Confirm access to the application with an active account.',
    preconditions: [
      'Have an active test account registered with ServeRest, with a valid email address and password.',
    ],
    steps: [
      {
        action:
          'Enter the test account email and password, then click "Entrar".',
        expectedResult:
          'Authentication succeeds, the application leaves the /login route, and the authenticated user is shown the home area.',
      },
    ],
  },
  'UI-LOGIN-009': {
    title: 'Close a validation alert',
    objective: 'Verify that an error alert can be dismissed through the interface.',
    preconditions: [
      'Trigger an alert on the login screen, for example by submitting the empty form.',
    ],
    steps: [
      {
        action: 'Click the alert’s "Close" button.',
        expectedResult:
          'The corresponding alert disappears without navigating to another page or changing the field values.',
      },
    ],
  },
  'UI-LOGIN-010': {
    title: 'Open registration from the login screen',
    objective: 'Confirm that the registration link opens the user creation form.',
    preconditions: ['The login screen is open.'],
    steps: [
      {
        action: 'Click "Cadastre-se".',
        expectedResult:
          'The application navigates to /cadastrarusuarios and displays the registration form.',
      },
    ],
  },
  'UI-REGISTER-PUBLIC-001': {
    endpoint: 'User registration — public access',
    title: 'Open registration without being authenticated',
    objective: 'Confirm that an unauthenticated person can start registration from the login screen link.',
    preconditions: ['There is no authenticated session in the browser.'],
    steps: [
      {
        action: 'Open /login and click "Cadastre-se".',
        expectedResult:
          'The application opens /cadastrarusuarios without requiring sign-in and displays the registration form.',
      },
    ],
  },
  'UI-REGISTER-PUBLIC-002': {
    endpoint: 'User registration — public access',
    title: 'Display the public registration fields',
    objective: 'Verify which controls are available to create an account without authentication.',
    preconditions: [
      'Be signed out and open registration using the "Cadastre-se" link on the login screen.',
    ],
    steps: [
      {
        action: 'Inspect the registration screen.',
        expectedResult:
          'The screen displays the "Cadastro" title, the "Digite seu nome", "Digite seu email", and "Digite sua senha" fields, the "Cadastrar como administrador?" checkbox, the "Cadastrar" button, and the "Entrar" link.',
      },
    ],
  },
  'UI-REGISTER-PUBLIC-003': {
    endpoint: 'User registration — public access',
    title: 'Return to login from the public registration form',
    objective: 'Validate the path back to login for someone who does not yet have an account.',
    preconditions: ['Be signed out on the /cadastrarusuarios screen.'],
    steps: [
      {
        action: 'Click "Entrar".',
        expectedResult:
          'The application returns to the /login screen without creating an account or starting a session.',
      },
    ],
  },
  'UI-REGISTER-PUBLIC-004': {
    endpoint: 'User registration — public access',
    title: 'Block public registration with an empty form',
    objective: 'Validate the required-field messages for all text fields.',
    preconditions: [
      'Be signed out on the registration screen with the name, email, and password fields empty.',
    ],
    steps: [
      {
        action: 'Click "Cadastrar".',
        expectedResult:
          'The account is not created, and the "Nome é obrigatório", "Email é obrigatório", and "Password é obrigatório" alerts are displayed.',
      },
    ],
  },
  'UI-REGISTER-PUBLIC-005': {
    endpoint: 'User registration — public access',
    title: 'Block public registration without a name',
    objective: 'Verify name validation without other empty fields obscuring the result.',
    preconditions: ['Be signed out on the registration screen.'],
    steps: [
      {
        action:
          'Leave the name empty, enter a valid email and a test password, then click "Cadastrar".',
        expectedResult:
          'The application displays "Nome é obrigatório", remains on the registration screen, and does not create an account.',
      },
    ],
  },
  'UI-REGISTER-PUBLIC-006': {
    endpoint: 'User registration — public access',
    title: 'Block public registration without an email address',
    objective: 'Verify email validation when the name and password have been entered.',
    preconditions: ['Be signed out on the registration screen.'],
    steps: [
      {
        action:
          'Enter a name and a test password, leave the email empty, and click "Cadastrar".',
        expectedResult:
          'The application displays "Email é obrigatório", remains on the registration screen, and does not create an account.',
      },
    ],
  },
  'UI-REGISTER-PUBLIC-007': {
    endpoint: 'User registration — public access',
    title: 'Block public registration without a password',
    objective: 'Verify password validation when the name and email address have been entered.',
    preconditions: ['Be signed out on the registration screen.'],
    steps: [
      {
        action:
          'Enter a name and valid email address, leave the password empty, and click "Cadastrar".',
        expectedResult:
          'The application displays "Password é obrigatório", remains on the registration screen, and does not create an account.',
      },
    ],
  },
  'UI-REGISTER-PUBLIC-008': {
    endpoint: 'User registration — public access',
    title: 'Reject an invalid email in public registration',
    objective: 'Validate the email format before creating an account through the public route.',
    preconditions: ['Be signed out on the registration screen.'],
    steps: [
      {
        action:
          'Enter test values for the name and password, provide a malformed email address, and click "Cadastrar".',
        expectedResult:
          'Registration does not complete, the application reports that the email must be valid, and the form remains open.',
      },
    ],
  },
  'UI-REGISTER-PUBLIC-009': {
    endpoint: 'User registration — public access',
    title: 'Show the administrator checkbox unchecked by default',
    objective: 'Confirm that a new registration is not assigned the administrator role by default.',
    preconditions: [
      'Be signed out and open a new registration form.',
    ],
    steps: [
      {
        action:
          'Check the initial state of "Cadastrar como administrador?" without interacting with the checkbox.',
        expectedResult:
          'The checkbox is unchecked; submitting a registration without changing it requests creation of a regular user.',
      },
    ],
  },
  'UI-REGISTER-PUBLIC-010': {
    endpoint: 'User registration — public access',
    title: 'Create a regular user through the public route',
    objective: 'Register an account with the administrator checkbox unchecked and validate the assigned role.',
    preconditions: [
      'Be signed out.',
      'Use a unique email address and disposable credentials in a test environment; prepare a test administrator account for cleanup if needed.',
    ],
    steps: [
      {
        action:
          'Open registration through "Cadastre-se", enter a name, unique email address, and password, leave "Cadastrar como administrador?" unchecked, and submit.',
        expectedResult:
          'The application confirms registration according to the approved flow; the created account is a regular user, not an administrator.',
      },
      {
        action:
          'Sign in with the new test account and compare the available options with the regular-user permissions matrix.',
        expectedResult:
          'Authentication succeeds and the account does not receive options or permissions reserved for the administrator role.',
      },
      {
        action:
          'Remove the disposable data according to the environment procedure.',
        expectedResult:
          'The test account and any associated resources are cleaned up.',
      },
    ],
  },
  'UI-REGISTER-PUBLIC-011': {
    endpoint: 'User registration — public access',
    title: 'Create an administrator through the public route',
    objective: 'Validate the requested role when the administrator checkbox is selected in the public form.',
    preconditions: [
      'Be signed out.',
      'Use a unique email address and disposable credentials in a test environment; decide how the account will be removed after validation.',
    ],
    steps: [
      {
        action:
          'Open registration through "Cadastre-se", enter a name, unique email address, and password, select "Cadastrar como administrador?", and submit.',
        expectedResult:
          'The application confirms registration according to the approved flow and creates the account with the administrator role.',
      },
      {
        action:
          'Sign in with the test account and verify the administrator permissions defined in the access matrix.',
        expectedResult:
          'The account authenticates and receives the options authorized for the administrator role.',
      },
      {
        action:
          'Remove the disposable data according to the environment procedure.',
        expectedResult:
          'The test account and any associated resources are cleaned up.',
      },
    ],
  },
  'UI-REGISTER-AUTH-001': {
    endpoint: 'User registration — authenticated user',
    title: 'Open registration using the header button',
    objective: 'Confirm that an authenticated person can access registration from the header.',
    preconditions: [
      'Be authenticated with an account authorized to register users.',
    ],
    steps: [
      {
        action: 'Click "Cadastrar Usuários" in the header.',
        expectedResult:
          'The application opens the user registration screen within the authenticated area.',
      },
    ],
  },
  'UI-REGISTER-AUTH-002': {
    endpoint: 'User registration — authenticated user',
    title: 'Open registration using the users card',
    objective: 'Confirm that the "Cadastrar Usuários" card provides the same access to registration.',
    preconditions: [
      'Be authenticated and on the screen that displays the "Cadastrar Usuários" card.',
    ],
    steps: [
      {
        action: 'Click the "Cadastrar" button on the "Cadastrar Usuários" card.',
        expectedResult:
          'The application opens the same registration screen available through the header button.',
      },
    ],
  },
  'UI-REGISTER-AUTH-003': {
    endpoint: 'User registration — authenticated user',
    title: 'Display the same form in the authenticated flow',
    objective: 'Verify that registration accessed after sign-in retains the fields and role option.',
    preconditions: [
      'Be authenticated and open registration from the header or card.',
    ],
    steps: [
      {
        action: 'Inspect the form opened in the authenticated area.',
        expectedResult:
          'The form displays name, email, and password fields and "Cadastrar como administrador?", with the same registration requirements as the public route.',
      },
    ],
  },
  'UI-REGISTER-AUTH-004': {
    endpoint: 'User registration — authenticated user',
    title: 'Block authenticated submission with empty fields',
    objective: 'Confirm that required-field validation also works in the authenticated flow.',
    preconditions: [
      'Be authenticated and open the registration form with the name, email, and password fields empty.',
    ],
    steps: [
      {
        action: 'Click "Cadastrar".',
        expectedResult:
          'No account is created; required name, email, and password alerts are displayed, and the authenticated flow does not end the session.',
      },
    ],
  },
  'UI-REGISTER-AUTH-005': {
    endpoint: 'User registration — authenticated user',
    title: 'Create a regular user from the authenticated area',
    objective: 'Validate creation of a regular account using the button available after sign-in.',
    preconditions: [
      'Be authenticated as a user authorized to register accounts.',
      'Use a unique email address and disposable credentials; prepare to clean up the account after the test.',
    ],
    steps: [
      {
        action:
          'Open registration from the header or card, enter valid details, and leave "Cadastrar como administrador?" unchecked.',
        expectedResult:
          'The account is created with the regular-user role, according to the approved success flow.',
      },
      {
        action:
          'Verify that the user who created the account remains authenticated and that the new account can sign in with the test credentials.',
        expectedResult:
          'The creator’s session remains consistent, and the created account authenticates with regular-user permissions.',
      },
      {
        action:
          'Remove the disposable account according to the environment procedure.',
        expectedResult: 'No test data remains in the environment.',
      },
    ],
  },
  'UI-REGISTER-AUTH-006': {
    endpoint: 'User registration — authenticated user',
    title: 'Create an administrator from the authenticated area',
    objective: 'Validate creation of an administrator account using the form accessed after sign-in.',
    preconditions: [
      'Be authenticated as a user authorized to register accounts.',
      'Use a unique email address and disposable credentials; prepare to clean up the account after the test.',
    ],
    steps: [
      {
        action:
          'Open registration from the header or card, enter valid details, select "Cadastrar como administrador?", and submit.',
        expectedResult:
          'The account is created with the administrator role, according to the approved success flow.',
      },
      {
        action:
          'Sign in with the created account and verify the administrator permissions defined in the access matrix.',
        expectedResult:
          'The account authenticates and receives only the options and permissions authorized for an administrator.',
      },
      {
        action:
          'Remove the disposable account according to the environment procedure.',
        expectedResult: 'No test data remains in the environment.',
      },
    ],
  },
  'UI-REGISTER-SHARED-001': {
    endpoint: 'User registration — shared rules',
    title: 'Prevent duplicate email in public registration',
    objective: 'Verify that the public route rejects an email address that already belongs to another account.',
    preconditions: [
      'Have an existing test account and know its email address.',
      'Be signed out and open registration using "Cadastre-se".',
    ],
    steps: [
      {
        action:
          'Enter valid test data in all fields, reuse the existing email address, and click "Cadastrar".',
        expectedResult:
          'Registration is rejected with a notice that the email is already in use; the original account remains unchanged and no second account is created.',
      },
    ],
  },
  'UI-REGISTER-SHARED-002': {
    endpoint: 'User registration — shared rules',
    title: 'Prevent duplicate email in authenticated registration',
    objective: 'Verify that registration in the authenticated area applies the same email uniqueness rule.',
    preconditions: [
      'Have an existing test account and know its email address.',
      'Be authenticated and open registration from the header or card.',
    ],
    steps: [
      {
        action:
          'Enter valid test data in all fields, reuse the existing email address, and click "Cadastrar".',
        expectedResult:
          'Registration is rejected with the same email-already-in-use notice; no other account is created and the authenticated user’s session remains active.',
      },
    ],
  },
  'UI-REGISTER-SHARED-003': {
    endpoint: 'User registration — shared rules',
    title: 'Preserve the original registration after a duplicate attempt',
    objective: 'Confirm that an attempt using a duplicate email does not change the existing account’s data.',
    preconditions: [
      'Have a test account with known details and open registration through either flow.',
    ],
    steps: [
      {
        action:
          'Attempt to register another user with the existing email address, using a different name, password, and role.',
        expectedResult:
          'The interface reports that the email is already in use and does not replace the original account’s name, password, or role.',
      },
      {
        action:
          'Sign in with the original credentials and compare the account role and details with the recorded values.',
        expectedResult:
          'The original account remains valid, with its details and role preserved.',
      },
    ],
  },
  'UI-REGISTER-SHARED-004': {
    endpoint: 'User registration — shared rules',
    title: 'Apply the same email validation in both flows',
    objective: 'Compare invalid-email validation between public and authenticated registration.',
    preconditions: [
      'Have access to both registration paths and an account authorized for the authenticated path.',
    ],
    steps: [
      {
        action:
          'In each path, enter a name and password, provide a malformed email address, and submit the form.',
        expectedResult:
          'Both flows reject the invalid format and behave equivalently without creating an account.',
      },
    ],
  },
  'UI-REGISTER-SHARED-005': {
    endpoint: 'User registration — shared rules',
    title: 'Compare required-field validation in both flows',
    objective: 'Ensure each required field is validated consistently at both entry points.',
    preconditions: [
      'Have access to public registration and registration in the authenticated area.',
    ],
    steps: [
      {
        action:
          'In each flow, submit the empty form, then repeat the tests leaving the name, email, and password empty one at a time.',
        expectedResult:
          'Both flows flag the same required fields and do not create an account when any required field is missing.',
      },
    ],
  },
  'UI-REGISTER-SHARED-006': {
    endpoint: 'User registration — shared rules',
    title: 'Toggle the administrator option before submission',
    objective: 'Verify that the checkbox represents an explicit choice and can be selected and cleared.',
    preconditions: [
      'Open a new form through either of the two registration paths.',
    ],
    steps: [
      {
        action:
          'Select "Cadastrar como administrador?" and then clear it before submitting the form.',
        expectedResult:
          'The checkbox state reflects the most recent interaction, and the resulting registration is for a regular user.',
      },
    ],
  },
  'UI-REGISTER-SHARED-007': {
    endpoint: 'User registration — shared rules',
    title: 'Keep the administrator checkbox associated with its label',
    objective: 'Validate that the option text clearly identifies the control that sets the account role.',
    preconditions: [
      'Open the public or authenticated registration form.',
    ],
    steps: [
      {
        action:
          'Click the "Cadastrar como administrador?" text and observe the checkbox state.',
        expectedResult:
          'The text acts as the checkbox label; the checkbox toggles and makes clear that the option changes the requested role.',
      },
    ],
  },
  'UI-REGISTER-SHARED-008': {
    endpoint: 'User registration — shared rules',
    title: 'Mask the password during registration',
    objective: 'Confirm that the entered password is not visible as plain text.',
    preconditions: [
      'Open the registration form through either of the two paths.',
    ],
    steps: [
      {
        action:
          'Enter a disposable password in the "Digite sua senha" field.',
        expectedResult:
          'The field remains a password field and masks the entered characters.',
      },
    ],
  },
  'UI-REGISTER-SHARED-009': {
    endpoint: 'User registration — shared rules',
    title: 'Dismiss a registration form alert',
    objective: 'Verify that a validation alert can be closed without leaving registration.',
    preconditions: [
      'Trigger an alert in the form, for example by submitting the empty fields.',
    ],
    steps: [
      {
        action: 'Click "Close" on the alert to dismiss.',
        expectedResult:
          'The selected alert disappears; the form remains open and the other fields are not cleared.',
      },
    ],
  },
  'UI-REGISTER-SHARED-010': {
    endpoint: 'User registration — permissions',
    title: 'Prevent a regular user from accessing administrative actions',
    objective: 'Validate that an account created without selecting the checkbox does not receive administrator permissions.',
    preconditions: [
      'Have a disposable account registered with "Cadastrar como administrador?" unchecked.',
      'Consult the approved matrix of permissions and administrative routes.',
    ],
    steps: [
      {
        action:
          'Sign in with the regular account and try to find and access an administrative action defined in the matrix, both through navigation and by directly opening the route if applicable.',
        expectedResult:
          'The regular account cannot perform administrative actions; the application hides, blocks, or denies access according to the approved matrix.',
      },
      {
        action:
          'Clean up the disposable account according to the environment procedure.',
        expectedResult: 'No test data remains in the environment.',
      },
    ],
  },
  'UI-REGISTER-SHARED-011': {
    endpoint: 'User registration — permissions',
    title: 'Allow administrative actions for an administrator',
    objective: 'Verify that an account created with the checkbox selected receives the administrator role and the defined administrative permissions.',
    preconditions: [
      'Have a disposable account created with "Cadastrar como administrador?" selected.',
      'Consult the approved administrative permissions matrix.',
    ],
    steps: [
      {
        action:
          'Sign in with the test administrator account and verify the navigation items, routes, and actions defined in the matrix.',
        expectedResult:
          'The account can access actions authorized for an administrator and receives no permissions beyond those defined.',
      },
      {
        action:
          'Clean up the disposable account according to the environment procedure.',
        expectedResult: 'No test data remains in the environment.',
      },
    ],
  },
  'UI-REGISTER-SHARED-012': {
    endpoint: 'User registration — shared rules',
    title: 'Prevent duplicate creation when submission is repeated',
    objective: 'Verify that repeating a submission does not create more than one account with the same email address.',
    preconditions: [
      'Use a unique email address and disposable credentials in a controlled test environment.',
    ],
    steps: [
      {
        action:
          'Complete a valid registration and click "Cadastrar" twice quickly, or resubmit while the first response is still processing.',
        expectedResult:
          'At most one account is created for the email address; the interface prevents or clearly reports the repeated submission without duplicating the record.',
      },
      {
        action: 'Find and remove the created test account.',
        expectedResult: 'The environment returns to its pre-test state.',
      },
    ],
  },
  'UI-REGISTER-SHARED-013': {
    endpoint: 'User registration — shared rules',
    title: 'Validate the administrator value after authentication',
    objective: 'Confirm that the persisted role matches the checkbox state at the time of submission.',
    preconditions: [
      'Use distinct disposable email addresses and be able to verify the permissions of each created account.',
    ],
    steps: [
      {
        action:
          'Create one account with the checkbox cleared and another with the checkbox selected, using each registration entry point.',
        expectedResult:
          'The first account is a regular user and the second is an administrator, regardless of the entry point used.',
      },
      {
        action:
          'Sign in with both accounts and compare their access with the permissions matrix.',
        expectedResult:
          'The regular account has less access than the administrator according to the matrix; the roles are not swapped between the accounts.',
      },
      {
        action: 'Clean up the disposable accounts and associated data.',
        expectedResult: 'No test data remains in the environment.',
      },
    ],
  },
};
