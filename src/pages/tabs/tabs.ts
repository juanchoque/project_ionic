import { Component } from '@angular/core';

import { AvisosPage } from '../avisos/avisos';
import { MapaPage } from '../mapa/mapa';
import { MisavisosPage } from '../misavisos/misavisos';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AvisosPage;
  tab2Root = MapaPage;
  tab3Root = MisavisosPage;

  constructor() {

  }
}
