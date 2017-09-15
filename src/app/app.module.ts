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
import {EditcommodityPage} from'../pages/editcommodity/editcommodity';
import {StartPage} from'../pages/start/start';
import {SidemenuPage} from'../pages/sidemenu/sidemenu';
import {RegisterPage} from'../pages/register/register';
import {PersonalSettingsPage} from  "../pages/personal-settings/personal-settings";
import {SettingsPage}from "../pages/settings/settings";
import {AboutPage}from"../pages/about/about";
import {AddproducePage}from"../pages/addproduce/addproduce";
import {ProduceDetailsPage } from "../pages/produce-details/produce-details";
import{Http, HttpModule} from '@angular/http';
import {AuthService} from "./auth.service";


import {Transfer} from '@ionic-native/transfer';
import {FilePath} from '@ionic-native/file-path';
import {Camera} from '@ionic-native/camera';
import { CommodityProvider } from '../providers/commodity/commodity';
import { FarmersProvider } from '../providers/farmers/farmers';
import { LikeProvider } from '../providers/like/like';
import {NotificationPage} from '../pages/notification/notification';
import {CommoditydetailsPage} from '../pages/commoditydetails/commoditydetails';
import { UserProvider } from '../providers/user/user';


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
    AboutPage,
    AddproducePage,
    ProduceDetailsPage,
    EditcommodityPage,
    NotificationPage,
    CommoditydetailsPage

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
    AboutPage,
    AddproducePage,
    ProduceDetailsPage,
    EditcommodityPage,
    NotificationPage,
    CommoditydetailsPage
  ],
  providers: [
    AuthService,
    StatusBar,
    SplashScreen,
    Transfer,
    Camera,
    FilePath,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CommodityProvider,
    FarmersProvider,
    LikeProvider,
    UserProvider,

  ]
})
export class AppModule {}
