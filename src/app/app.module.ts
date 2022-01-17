import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {
  tabs = [
    {
      path: 'home',
      name: 'Startseite'
    },
    {
      path: 'contact',
      name: 'Kontakt'
    },
    {
      path: 'services',
      name: 'Angebote'
    },
    {
      path: 'gallery',
      name: 'Gallerie'
    },
    {
      path: 'impressum',
      name: 'Impressum und Datenschutz'
    }
  ];
}
