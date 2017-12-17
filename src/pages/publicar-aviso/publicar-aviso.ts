import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geoposition } from '@ionic-native/geolocation';

/**
 * Generated class for the PublicarAvisoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google;

@IonicPage()
@Component({
  selector: 'page-publicar-aviso',
  templateUrl: 'publicar-aviso.html',
})
export class PublicarAvisoPage {
  map: any;
  activeWindow: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PublicarAvisoPage');
    this.loadMap(null);
  }

  publicarAviso(){
    alert("Registra en la nuve");
  }

  //cargar mapa
  loadMap(position: Geoposition){
    let latitude = -17.372904;//position.coords.latitude;
    let longitude = -66.144320;//position.coords.longitude;
    console.log(latitude, longitude);
    
    let mapEle: HTMLElement = document.getElementById('map');
    let myLatLng = {lat: latitude, lng: longitude};
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 14
    });
  
    //mostrando mapa
    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle.classList.add('show-map');
    });

  }

}
