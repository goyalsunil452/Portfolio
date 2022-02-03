import { logging } from 'protractor';
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

//here you can specify api urls
const serverIp ='/api';
const googleMaps ='https://maps.googleapis.com/googlemap'

export const environment = {
  production: false,
  version : '1.0.0',
  firebase: {
    apiKey: "AIzaSyDVyXaKs3FJL0SG69tSEVLTlonGrlOV5LM",
    authDomain: "portfolio-sunil.firebaseapp.com",
    databaseURL: "https://portfolio-sunil-default-rtdb.firebaseio.com",
    projectId: "portfolio-sunil",
    storageBucket: "portfolio-sunil.appspot.com",
    messagingSenderId: "963376575040",
    appId: "1:963376575040:web:d284b4e1c805647291a5a5",
    measurementId: "G-4MPXY0X67J"
  },
  name:'',
  defaultLanguage :'en',
  supportedLanguage : ['en'],
  googleMaps:googleMaps,
  serverIp:serverIp,
  logginApiKey:''
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
