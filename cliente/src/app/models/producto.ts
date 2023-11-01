export class Aspirante{
    _id?:number;
    tpoidentificacion: string;
    identificacion: string;
    nombre: string;
    segundonombre: string;
    primerapellido: string;
    segundoapellido:string;
    genero:  string;
    telefono: number;
    correo:  string;
    grupoSanguineo:  string;
    direccion: string;
    archivoPDF: string;
    estado: string;

    constructor(
        tpoidentificacion: string,
        identificacion: string,
        nombre: string,
        segundonombre: string,
        primerapellido: string, 
        segundoapellido: string,
        telefono: number,
        genero: string,
        correo: string,
        grupoSanguineo: string,
        direccion: string,
        archivoPDF:string,
        estado: string
      ) {
        this.tpoidentificacion = tpoidentificacion;
        this.identificacion = identificacion; 
        this.nombre = nombre; 
        this.segundonombre = segundonombre; 
        this.primerapellido = primerapellido;
        this.segundoapellido = segundoapellido;
        this.telefono = telefono;
        this.genero = genero;
        this.correo = correo;
        this.grupoSanguineo = grupoSanguineo;
        this.direccion = direccion;
        this.archivoPDF = archivoPDF;
        this.estado = estado;
      }
      
}