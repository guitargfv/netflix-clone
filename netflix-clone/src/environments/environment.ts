// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'https://api.themoviedb.org/3/movie/',
  firebaseConfig: {
    apiKey: "AIzaSyDRGvCkFyJFtxWOUycqfA5goj0KDZlQVLo",
    authDomain: "avaliacaosantander.firebaseapp.com",
    databaseURL: "https://avaliacaosantander.firebaseio.com",
    projectId: "avaliacaosantander",
    storageBucket: "avaliacaosantander.appspot.com",
    messagingSenderId: "118141395135",
    appId: "1:118141395135:web:b9338848452fa246"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
