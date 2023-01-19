import { Ciudad } from '../ciudad/ciudad';
import { Pais } from '../pais/pais';

export class Persona {
  id: string;
  nombre: string;
  apellido: string;
  edad: number;
  precio: number;
  fecha: Date;

  pais: Pais;
  paisId: string;
  ciudad: Ciudad;
  ciudadId: string;
}
