import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule, AlertController, ToastController} from 'ionic-angular';
import {HttpModule, Http} from '@angular/http';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {LocalStorageModule} from 'angular-2-local-storage';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MyApp} from './app.component';
import {HomePage} from './home/home';
import {TodoComponent} from "./todolist/todo.component";
import {TodoService} from "./todolist/todo.service";
import {TodoDetailComponent} from "./todolist/todo-detail.component";
import {LoginComponent} from "./users/login/login.component";
import {SignupComponent} from "./users/login/signup.component";
import {UserService} from "./users/services/users.service";
import {TelephoneService} from "./users/services/telephones.service";
import {AddressService} from "./users/services/address.service";
import {AddressComponent} from "./users/addresses/address.component";
import {AddressDetailComponent} from "./users/addresses/address-detail.component";
import {TelephoneComponent} from "./users/telephones/telephone.component";
import {TelephoneDetailComponent} from "./users/telephones/telephone-detail.component";
import {UsersComponent} from "./users/profile/users-profile.component";
import {UserEditComponent} from "./users/profile/user-profile-edit.component";
import {ToastService} from "./toast/toast.service";

export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TodoComponent,
    TodoDetailComponent,
    LoginComponent,
    SignupComponent,
    AddressComponent,
    AddressDetailComponent,
    TelephoneComponent,
    TelephoneDetailComponent,
    UsersComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    }),
    LocalStorageModule.withConfig({
      prefix: 'web-atrio-app',
      storageType: 'localStorage'
    }),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TodoComponent,
    TodoDetailComponent,
    LoginComponent,
    SignupComponent,
    AddressComponent,
    AddressDetailComponent,
    TelephoneComponent,
    TelephoneDetailComponent,
    UsersComponent,
    UserEditComponent
  ],
  providers: [
    TodoService,
    UserService,
    TelephoneService,
    AddressService,
    ToastService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AlertController,
    ToastController
  ]
})
export class AppModule {
}
