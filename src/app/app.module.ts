import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Geolocation } from '@ionic-native/geolocation';
import { AvisosPage } from '../pages/avisos/avisos';
import { MapaPage } from '../pages/mapa/mapa';
import { MisavisosPage } from '../pages/misavisos/misavisos';
import { AvisosServicesProvider } from '../providers/avisos-services/avisos-services';
import { MisAvisosListComponent } from '../components/mis-avisos-list/mis-avisos-list';
import { MisAvisosListRowComponent } from '../components/mis-avisos-list-row/mis-avisos-list-row';
import { PublicarAvisoPage } from '../pages/publicar-aviso/publicar-aviso';
import { DetalleAvisoPage } from '../pages/detalle-aviso/detalle-aviso';
import { RegistrarCuentaPage } from '../pages/registrar-cuenta/registrar-cuenta';
import { OpconesPage } from '../pages/opcones/opcones';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    AvisosPage,
    MapaPage,
    MisavisosPage,
    MisAvisosListComponent,
    MisAvisosListRowComponent,
    PublicarAvisoPage,
    DetalleAvisoPage,
    RegistrarCuentaPage,
    OpconesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    AvisosPage,
    MapaPage,
    MisavisosPage,
    MisAvisosListComponent,
    MisAvisosListRowComponent,
    PublicarAvisoPage,
    DetalleAvisoPage,
    RegistrarCuentaPage,
    OpconesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AvisosServicesProvider
  ]
})
export class AppModule {}
