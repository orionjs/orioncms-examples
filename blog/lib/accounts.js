AccountsTemplates.configure({
  sendVerificationEmail: true,
  showResendVerificationEmailLink: true,
  enforceEmailVerification: true,
  showForgotPasswordLink: true,
});

var layout = 'orionMaterializeOutAdminLayout';
var template = ReactiveTemplates.get('login');

AccountsTemplates.configureRoute('verifyEmail', {
  name: 'verifyEmail',
  path: '/verify-email',
  template: 'orionBootstrapLogin',
  layoutTemplate: 'orionBootstrapOutAdminLayout',
  redirect: '/admin',
});

AccountsTemplates.configureRoute('resetPwd', {
  name: 'resetPassword',
  path: '/reset-password',
  template: 'orionBootstrapLogin',
  layoutTemplate: 'orionBootstrapOutAdminLayout',
  redirect: '/admin',
});

AccountsTemplates.configureRoute('enrollAccount', {
  name: 'enrollAccount',
  path: '/enroll-account',
  template: 'orionBootstrapLogin',
  layoutTemplate: 'orionBootstrapOutAdminLayout',
  redirect: '/admin',
});

if (Meteor.isServer) {
  Accounts.emailTemplates.siteName = 'Orion Example';
  Accounts.emailTemplates.from = 'Orion Example <example@orionjs.org>';
}
