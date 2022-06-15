import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { initializeApp } from "firebase/app";
import { getAnalytics, setCurrentScreen } from "firebase/analytics";

const key = environment.apiKey;
const domain = environment.authDomain;
const id = environment.projectId;
const bucket = environment.storageBucket;
const senderId = environment.messagingSenderId;
const aId = environment.appId;
const mId = environment.measurementId;

const firebaseConfig = {
  apiKey: key,
  authDomain: domain,
  projectId: id,
  storageBucket: bucket,
  messagingSenderId: senderId,
  appId: aId,
  measurementId: mId
};

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);