export class Usuario{
    _id?:number;
    nombre: string;
    apellido: string;
    usuario: string;
    contrasena: string;

    constructor(nombre: string , apellido : string, usuario: string , contrasena:string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.usuario = usuario;
        this.contrasena = contrasena;
    }
}