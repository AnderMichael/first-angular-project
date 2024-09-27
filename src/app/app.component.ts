import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserCardComponent } from './user-card/user-card.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { HistoryCalculatorComponent } from './history-calculator/history-calculator.component';

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
  imports: [
    RouterOutlet,
    UserCardComponent,
    CalculatorComponent,
    HistoryCalculatorComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-tour-of-heroes';
  sumAttempt = sumAttempt;
  result: number = 0;

  history: string[] = [];


  animales: string[] = ['a', 'b', 'c', 'd', 'e', 'f'];
  person: IPerson = {
    name: 'Ander',
    lastName: 'Cayllan',
    age: 20,
  };

  students: number[] = [1, 2, 3, 4, 5, 6];
  parents: number[] = [7, 8, 9, 10];

  var1 = 0;
  var2 = null;
  var3 = 'hola';

  constructor() {
    const { name, age } = this.person;
    console.log('subtract', this.subtract(8, 4));
    console.log(
      'MAP: ',
      this.animales.map((animal) => animal + ' - New')
    );
    console.log(
      'FOREACH',
      this.animales.forEach((animal) => animal + ' + New')
    );
    console.log(
      'FIND:',
      this.animales.find((animal) => animal === 'z')
    );
    console.log(
      'FILTER:',
      this.animales.filter((animal) => animal === 'z')
    );
    console.log('IndexOf: ', this.animales.indexOf('c'));
    console.log('Destructuración: ', name, age);
    let both = [...this.students, ...this.parents];
    console.log('Spread Operator', both);
    console.log('Sum Spread', this.sumSpread(1, 2, 4));

    // Nullish Coalesing -> Ignorar los null's o undefined's
    console.log('Nullish Coalesing 0 vs null:', this.var1 ?? this.var2);
    console.log('Nullish Coalesing null vs hola:', this.var2 ?? this.var3);
    console.log('Nullish Coalesing null vs null:', null ?? null);

    console.log('OR 0 vs null: ', this.var1 || this.var2);
    console.log('OR null vs 0: ', this.var2 || this.var1);
  }

  public sumSpread(...persons: number[]): number {
    // return persons[0] + persons[1]; // Es una lista
    return persons.reduce((sum, currNum) => sum + currNum, 10); // Callback - Acumulador, Valor Inicial
  }

  public sum(num1: number, num2: number): number {
    return num1 + num2;
  }

  private subtract(num1: number, num2: number): number {
    return num1 - num2;
  }

  public getArray() {
    const persons: number[] = [1, 2, 3, 4, 5];
    for (let i = 0; i < persons.length; i++) {
      if (persons[i] % 2 == 0) {
        console.log('person = ', persons[i]);
      }
    }
  }

  public receiveData(data: any) {
    console.log('Print in father component:', data);
  }

  public onResult(event: any) {
    if(!event){
      this.result = 0;
    }else{
      if(event.type === 'SUM'){
        this.history.push(`SUM: ${event.result}`)
      }else{
        this.history.push(`MULT: ${event.result}`)
      }
    }
    this.result = event.result;
  }

  public addItem(ans: string) {
    this.history.push(ans);
  }
}
