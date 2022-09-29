import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  description = 'Este es una aplicacion para probar los "pipes"'
  nombreMaestro = 'melchor carranza santana'
  frutas = ['Manzana', 'Durazno', 'Pera', 'Fresa', 'Uva', 'Platano', 'Mora', 'Mango']
  PI = Math.PI
  porcentaje = 0.6048
  persona = [
    {
      nombre: 'Ernesto',
      edad: 32
    },
    {
      nombre: 'Maria',
      edad: 25
    },
    {
      nombre: 'Marlene',
      edad: 18
    }
  ]
  fecha = Date.now()
  dinero = 100.568
  time = new Observable<string>(observer => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });

}
