import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DataService } from './data.service';
import { HttpModule } from '@angular/http';
import { OperatorPage } from '../pages/Operator/operator';
import { OperatorService } from '../services/operator.serivce';
import { CreateOperatorPage } from '../pages/Operator/CreateOperator/createrOperator';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    OperatorPage,
    CreateOperatorPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    OperatorPage,
    CreateOperatorPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataService,
    OperatorService
  ]
})
export class AppModule {}
