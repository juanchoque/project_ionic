import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { AvisosServicesProvider } from '../../providers/avisos-services/avisos-services';
import { Aviso } from '../../models/aviso';
import { PublicarAvisoPage } from '../publicar-aviso/publicar-aviso';
import { OpconesPage } from '../opcones/opcones';

/**
 * Generated class for the MisavisosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-misavisos',
  templateUrl: 'misavisos.html',
})
export class MisavisosPage {
  avisos: Aviso[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public avisosServicesProvider: AvisosServicesProvider,
    public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    this.cargarAvisos();
  }

  private cargarAvisos(){
    this.avisos = this.avisosServicesProvider.listaAvisos();
  }

  //funcion para publicar avisos
  publicarAviso(){
    this.navCtrl.push(PublicarAvisoPage);
  }

  mostrarOpcines(myEvent) {
    let popover = this.popoverCtrl.create(OpconesPage);
    popover.present({
      ev: myEvent
    });
  }

}
