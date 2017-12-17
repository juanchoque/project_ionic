import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AvisosServicesProvider } from '../../providers/avisos-services/avisos-services';
import { OpconesPage } from '../opcones/opcones';

/**
 * Generated class for the AvisosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-avisos',
  templateUrl: 'avisos.html',
})
export class AvisosPage {
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public avisosServicesProvider: AvisosServicesProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AvisosPage');
  }

}
