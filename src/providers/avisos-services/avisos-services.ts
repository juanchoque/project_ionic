import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Aviso } from '../../models/aviso';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';

/*
  Generated class for the AvisosServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AvisosServicesProvider {

  avisos: AngularFireList<Aviso>;
  constructor(
    public http: HttpClient,
    public contactsdb: AngularFireDatabase,
    public afAuth: AngularFireAuth) {
      this.avisos = contactsdb.list('/avisos/');
  }

  //lista de aviso
  public listaAvisos(): Observable<Aviso[]>{
    //this.avisos = [new Aviso(1,'En alquiler departamento de tres ambientes',-17.372904,-66.144320),new Aviso(2,'Duena venta casa por motivos de traslado preco charlable',-17.372330,-66.146562)];
    //return this.avisos;
    return this.avisos.valueChanges();
  }

  //regitro en base de datos
  public publicarAviso(aviso: Aviso): boolean{
    this.avisos.push(aviso);
    //this.avisos = [new Aviso(1,'En alquiler departamento de tres ambientes',-17.372904,-66.144320),new Aviso(2,'Duena venta casa por motivos de traslado preco charlable',-17.372330,-66.146562)];
    return true;
  }

}
