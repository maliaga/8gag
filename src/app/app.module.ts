import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {SubirPage} from "../pages/subir/subir";
import {AngularFireAuthModule} from "angularfire2/auth";
import {AngularFireDatabase, AngularFireDatabaseModule} from "angularfire2/database";
import {AngularFireModule} from "angularfire2";
import {PipesModule} from "../pipes/pipes.module";

export const firebaseConfig = {
  apiKey: "AIzaSyAH9uS-DyaKAjATXL5eXttoRE7fyx_rcQ4",
  authDomain: "gag-2ac55.firebaseapp.com",
  databaseURL: "https://gag-2ac55.firebaseio.com",
  projectId: "gag-2ac55",
  storageBucket: "gag-2ac55.appspot.com",
  messagingSenderId: "279406516007"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SubirPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    PipesModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SubirPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
