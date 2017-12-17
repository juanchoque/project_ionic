import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Aviso } from '../../models/aviso';

/*
  Generated class for the AvisosServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AvisosServicesProvider {

  avisos: Aviso[];
  constructor() {
    
  }

  //lista de aviso
  public listaAvisos(): Aviso[]{
    this.avisos = [new Aviso(1,'En alquiler departamento de tres ambientes',-17.372904,-66.144320),new Aviso(2,'Duena venta casa por motivos de traslado preco charlable',-17.372330,-66.146562)];
    return this.avisos;
  }

  //regitro en base de datos
  public agregarAviso(aviso: Aviso): boolean{
    this.avisos.push(aviso);
    //this.avisos = [new Aviso(1,'En alquiler departamento de tres ambientes',-17.372904,-66.144320),new Aviso(2,'Duena venta casa por motivos de traslado preco charlable',-17.372330,-66.146562)];
    return true;
  }

}
