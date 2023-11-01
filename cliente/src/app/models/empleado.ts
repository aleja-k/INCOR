export class Empleado{
    _id?:number;
    valorKilo: number;
    nombre: string;
    apellido: string;
    kilos: number;
    descuentos: number;
    pago:number;

    constructor(valorKilo: number,nombre: string , apellido: string, kilos: number,descuentos: number, pago:number){
        this.valorKilo = valorKilo;
        this.nombre = nombre;
        this.apellido = apellido;
        this.kilos = kilos;
        this.descuentos = descuentos;
        this.pago = pago;
       
    }
}