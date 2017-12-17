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
  markers = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //if(typeof google == "undefined" || typeof google.maps == "undefined"){
      this.loadMap(null);
    //}
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

    this.map.addListener('click', (event) =>  {

      for (var i = 0; i < this.markers.length; i++) {
          this.markers[i].setMap(null);
      }
      this.markers.length = 0;//fin eliminar

      var latitude = event.latLng.lat();//position.coords.latitude;
      let longitude = event.latLng.lng();
      //var longitude = e.latLng.lng();
      var posicion = new google.maps.LatLng(latitude, longitude);
      
      var dogwalkMarker = new google.maps.Marker(
      {
          position: posicion, 
          title: "descrpcion"
      });
      
      dogwalkMarker.setMap(this.map);

      this.markers.push(dogwalkMarker);//para eliminar
    });

    var posicion = new google.maps.LatLng(-17.372904, -66.144320);
    
    var dogwalkMarker = new google.maps.Marker(
    {
        position: posicion, 
        title: "descrpcion"
    });
    dogwalkMarker.setMap(this.map);
    this.markers.push(dogwalkMarker);//para eliminar
  }

}
