import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface IPerson {
  name: string;
  lastName: string;
  age: number;
}

function sumAttempt(a: number, b: number) {
  return a + b;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-tour-of-heroes';
  sumAttempt = sumAttempt;
  animales: string[] = ['a', 'b', 'c', 'd', 'e', 'f'];
  person: IPerson = {
    name: 'Ander',
    lastName: 'Cayllan',
    age: 20
  }

  constructor() {
    console.log('subtract', this.subtract(8, 4));
    console.log('MAP: ', this.animales.map((animal) => (animal + ' - New')));
    console.log('FOREACH', this.animales.forEach((animal) => (animal + ' + New')));
    console.log('FIND:', this.animales.find((animal) => animal === 'z'));
    console.log('FILTER:', this.animales.filter((animal) => animal === 'z'));
    console.log('IndexOf: ', this.animales.indexOf('c'));
  }

  public sum(num1: number, num2: number): number {
    return num1 + num2;
  }

  private subtract(num1: number, num2: number): number {
    return num1 - num2;
  }

  public getArray() {
    const persons: number[] = [1, 2, 3, 4, 5]
    for (let i = 0; i < persons.length; i++) {
      if (persons[i] % 2 == 0) {
        console.log('person = ', persons[i]);
      }
    }
  }

}
