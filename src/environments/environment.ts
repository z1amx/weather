// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  fireBase: {
    apiKey: 'AIzaSyANEv9eWlkeiIfk0YH9L8oTHiQEu8wtJb8',
    authDomain: 'weather-site-f0417.firebaseapp.com',
    databaseURL: 'https://weather-site-f0417.firebaseio.com',
    projectId: 'weather-site-f0417',
    storageBucket: 'weather-site-f0417.appspot.com',
    messagingSenderId: '890104659397'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
