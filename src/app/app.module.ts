import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { environment } from '../environments/environment';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {HomeComponent} from './pages/home/home.component';
import {DetailsComponent} from './pages/details/details.component';
import {WeatherService} from './services/weather/weather.service';
import {HttpClientModule} from '@angular/common/http';
import {WeatherCardComponent} from './ui/weather-card/weather-card.component';
import {AddCardComponent} from './ui/add-card/add-card.component';
import {AddComponent} from './pages/add/add.component';
import {LoginComponent} from './pages/login/login.component';
import {SignupComponent} from './pages/signup/signup.component';
import {UiService} from './services/ui/ui.service';
import {UserDataService} from './services/user/user-data.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    WeatherCardComponent,
    AddCardComponent,
    AddComponent,
    LoginComponent,
    SignupComponent,
    AddCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.fireBase),
    AngularFireDatabaseModule
  ],
  providers: [
    WeatherService,
    UiService,
    UserDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
