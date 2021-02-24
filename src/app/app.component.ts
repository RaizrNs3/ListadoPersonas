import { Component } from '@angular/core';
import {Persona} from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de Personas';
  personas: Persona[] = [new Persona('Daniel', 'López'),
                         new Persona('Paola', 'Alonso'),
                         new Persona('Julieta', 'López')];
  nombreInput = '';
  apellidoInput = '';
  agregarPersona(): void{
    this.personas.push(new Persona(this.nombreInput, this.apellidoInput));
  }
}
