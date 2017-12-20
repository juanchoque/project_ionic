import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import { AvisosServicesProvider } from '../../providers/avisos-services/avisos-services';
import { Aviso } from '../../models/aviso';

declare var google;

/**
 * Generated class for the MapaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class MapaPage {
  map: any;
  activeWindow: any;

  avisos: Aviso[];
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private geolocation: Geolocation,
    public avisosServicesProvider: AvisosServicesProvider) {
      let suscriptor = avisosServicesProvider.listaAvisos().subscribe(data => {
        this.avisos = data;
        this.cargarAvisos();
     });
  }

  ionViewDidLoad(){
    //this.getPosition();
    //this.buscarAvisos();
    this.loadMap(null);
  }

  // funcion para recuperar datos desde servicio
  buscarAvisos(){
    //this.avisos = this.avisosServicesProvider.listaAvisos();
  }

  // funcion para recuperar posicion de gps
  getPosition():any{
    this.geolocation.getCurrentPosition().then(response => {
      this.loadMap(response);
    })
    .catch(error =>{
      console.log(error);
    })
  }

  //cargar mapa
  loadMap(position: Geoposition){
    //alert(this.avisos.length);
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

    //this.cargarAvisos();//insertar los avisos

  }

  //cargar info en marker
  addInfoWindowToMarker(aviso, marker) {
    var infoWindowContent = '<div>' + 
      marker.title + 
      '<hr><div align="right"><button id="content' + aviso.id + '" class="button-marker"><span style="display:none">' + aviso.telefono + '</span>LLAMAR</button></div></div>';
    var infoWindow = new google.maps.InfoWindow({
      content: infoWindowContent
    });
    marker.addListener('click', () => {
      if(this.activeWindow != null) this.activeWindow.close(); 
      infoWindow.open(this.map, marker);
      this.activeWindow = infoWindow;
    });

    google.maps.event.addListenerOnce(infoWindow, 'domready', () => {
      document.getElementById('content' + aviso.id).addEventListener('click', () => {
              alert('Clicked' + aviso.id);
          });
    });
  }

  //funcion para cargar los avisos
  cargarAvisos(){
    for( let aviso of this.avisos){
      var posicion = new google.maps.LatLng(aviso.latitud, aviso.longitud);
      
      var dogwalkMarker = new google.maps.Marker(
      {
          position: posicion, 
          title: aviso.descripcion
      });
      this.addInfoWindowToMarker(aviso, dogwalkMarker);
      dogwalkMarker.setMap(this.map);
    }
  }

}
