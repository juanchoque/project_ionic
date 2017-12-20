import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geoposition } from '@ionic-native/geolocation';
import { Aviso } from '../../models/aviso';
import { AvisosServicesProvider } from '../../providers/avisos-services/avisos-services';

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
  latitudCocha: Number = -17.372904;
  longitudCocha: Number = -66.144320;


  //model para registro de aviso
  aviso: Aviso = new Aviso(0, '', this.latitudCocha, this.longitudCocha);

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public avisosServicesProvider: AvisosServicesProvider) {
      this.aviso = navParams.get('aviso');
      this.latitudCocha = this.aviso.latitud;
      this.longitudCocha = this.aviso.longitud;
  }

  ionViewDidLoad() {
    //if(typeof google == "undefined" || typeof google.maps == "undefined"){
      this.loadMap(null);
    //}
  }

  //cargar mapa
  loadMap(position: Geoposition){
    
    console.log(this.latitudCocha, this.longitudCocha);
    
    let mapEle: HTMLElement = document.getElementById('mapp');
    let myLatLng = {lat: this.latitudCocha, lng: this.longitudCocha};
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

      //cargando para el registro en base de datos
      this.aviso.latitud = latitude;
      this.aviso.longitud = longitude;

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

    var posicion = new google.maps.LatLng(this.latitudCocha, this.longitudCocha);
    
    var dogwalkMarker = new google.maps.Marker(
    {
        position: posicion, 
        title: "descrpcion"
    });
    dogwalkMarker.setMap(this.map);
    this.markers.push(dogwalkMarker);//para eliminar
  }

  //metodo para registro en base de datos
  publicarAviso(){
    //alert(">>" + this.aviso.descripcion + ">>" + this.aviso.precio + ">>" + this.aviso.telefono + ">>" + this.aviso.direccion + ">>" + this.aviso.latitud + ">>" + this.aviso.longitud);
    let titulo = this.aviso.descripcion;
    if(this.aviso.descripcion.length >= 20){
      titulo = this.aviso.descripcion.substring(0,20);
    }
    this.aviso.titulo = titulo;
    this.aviso.fecPublicacion = new Date();
    
    this.avisosServicesProvider.publicarAviso(this.aviso);
    this.navCtrl.pop();
  }

}
