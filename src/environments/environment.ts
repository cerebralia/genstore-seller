// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  version: '0.0.1',
  build: 23,
  apiBaseUrl: 'https://genstore-api.iospot.top/v1',
  apiProxy: '',
  platform: 'seller',
  googleClientId: '946463315327-0l0svqeglss2jrulg19t9hs5slem6247.apps.googleusercontent.com',
  facebookAppId: '113570925979091',
  paymentRedirectSuccessUrl: 'http://localhost:4200/payments/success',
  paymentRedirectCancelUrl: 'http://localhost:4200',
  stripeKey: 'pk_test_Z3rf3HSfsokHl4lLFTBxhZrZ',
  pusher: {
    appId: 591974,
    key: '8cbf727dad3c8ce84888',
    cluster: 'ap1'
  }
};
