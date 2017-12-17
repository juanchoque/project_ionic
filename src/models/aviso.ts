import { Cuenta } from "./cuenta";

export class Aviso {
    
    id: Number;
    titulo: String;
    descripcion: String;
    orden: Number;
    estado: String;
    telefono: String;
    latitud: Number;
    longitud: Number;
    publicado: Number;
    precio: Number;
    fecPublicacion: Date;
    imagen: String;
    direccion: String;
    cuenta: Cuenta;
    //subCategoria: SubCategoria;
    //tipoAviso: TipoAviso;
    //transaccionAviso: TransaccionAviso;

      constructor(id: Number, descripcion: String, latitud: Number, longitud: Number) {
        this.id = id;
        this.descripcion = descripcion;
        this.latitud = latitud;
        this.longitud = longitud;
      }
}