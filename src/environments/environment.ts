// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  fireBaseConfig: {
    apiKey: "AIzaSyCeX_Q71pso5DeyD2NrOM6zWeM3w-CIFfc",
    authDomain: "weather-caf41.firebaseapp.com",
    databaseURL: "https://weather-caf41.firebaseio.com",
    projectId: "weather-caf41",
    storageBucket: "weather-caf41.appspot.com",
    messagingSenderId: "527490218177"
  }

};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
