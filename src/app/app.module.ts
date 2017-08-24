import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {LoginPage} from '../pages/login/login';
import {ProducePage} from '../pages/produce/produce';
import {MyInterestPage} from  "../pages/my-interest/my-interest";
import {DashboardPage} from '../pages/dashboard/dashboard';
import {FavoritesPage} from '../pages/favorites/favorites';
import {MyProducePage} from "../pages/my-produce/my-produce";
import {FarmersPage} from'../pages/farmers/farmers';
import {StartPage} from'../pages/start/start';
import {SidemenuPage} from'../pages/sidemenu/sidemenu';
import {RegisterPage} from'../pages/register/register';
import {PersonalSettingsPage} from  "../pages/personal-settings/personal-settings";
import {SettingsPage}from "../pages/settings/settings";
import {AboutPage}from"../pages/about/about";
import{Http, HttpModule} from '@angular/http';
import {AuthService} from "./auth.service";

import {Transfer} from '@ionic-native/transfer';
import {FilePath} from '@ionic-native/file-path';
import {Camera} from '@ionic-native/camera';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    DashboardPage,
    ProducePage,
    FavoritesPage,
    FarmersPage,
    StartPage,
    RegisterPage,
    SidemenuPage,
    MyProducePage,
    MyInterestPage,
    PersonalSettingsPage,
    SettingsPage,
    AboutPage
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
    LoginPage,
    DashboardPage,
    ProducePage,
    FavoritesPage,
    FarmersPage,
    StartPage,
    RegisterPage,
    SidemenuPage,
    MyProducePage,
    MyInterestPage,
    PersonalSettingsPage,
    SettingsPage,
    AboutPage
  ],
  providers: [
    AuthService,
    StatusBar,
    SplashScreen,
    Transfer,
    Camera,
    FilePath,
    {provide: ErrorHandler, useClass: IonicErrorHandler},

  ]
})
export class AppModule {}
