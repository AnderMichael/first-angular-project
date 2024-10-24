import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { UserCardComponent } from './user-card/user-card.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { HistoryCalculatorComponent } from './history-calculator/history-calculator.component';
import { CommonModule } from '@angular/common';
import persons from '../constants/persons';
import { PersonCardComponent } from './person-card/person-card.component';
import { CounterComponent } from './counter/counter.component';
import { filter, from, map, tap } from 'rxjs';
import { AppColorsDirective } from './app-colors.directive';
import { CreateHtmlDirective } from './create-html.directive';
import { PurePipe } from './pure.pipe';
import { ImpurePipe } from './impure.pipe';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { StudentModule } from './student/student.module';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';

interface IPerson {
  name: string;
  lastName: string;
  age: number;
  email: string;
}

function sumAttempt(a: number, b: number) {
  return a + b;
}

interface IForm {
  name: string;
  score?: string;
  school?: string;
  professor?: string;
  university?: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    UserCardComponent,
    CalculatorComponent,
    HistoryCalculatorComponent,
    PersonCardComponent,
    CounterComponent,
    CommonModule,
    AppColorsDirective,
    CreateHtmlDirective,
    PurePipe,
    ImpurePipe,
    MatCardModule,
    MatButtonModule,
    StudentModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  scoreControl = new FormControl<string>('', Validators.required);

  title = 'angular-tour-of-heroes';
  destroyUserCard: boolean = true;
  sumAttempt = sumAttempt;
  result: number = 0;
  persons = persons;

  history: string[] = [];

  userCardCreated: boolean = false;

  animales: string[] = ['a', 'b', 'c', 'd', 'e', 'f'];
  person: IPerson = {
    name: 'Ander1',
    lastName: 'Cayllan',
    email: 'ander1@gmail.com',
    age: 20,
  };

  persontwo: IPerson = {
    name: 'Ander2',
    lastName: 'Cayllan',
    age: 20,
    email: 'ander2@gmail.com',
  };

  students: number[] = [1, 2, 3, 4, 5, 6];
  parents: number[] = [7, 8, 9, 10];

  var1 = 0;
  var2 = null;
  var3 = 'hola';

  youtube = from([1, 2, 3, 4, 5, 6]);

  currentPerson: any = this.person;

  name: string = '';
  lastName: string = '';

  studentForm!: FormGroup;
  student2Form!: UntypedFormGroup
  formBuilder: FormBuilder = new FormBuilder();

  constructor(private router: Router, private unTypedFormBuilder : UntypedFormBuilder) {
    const { name, age } = this.person;
    // console.log('subtract', this.subtract(8, 4));
    // console.log(
    //   'MAP: ',
    //   this.animales.map((animal) => animal + ' - New')
    // );
    // console.log(
    //   'FOREACH',
    //   this.animales.forEach((animal) => animal + ' + New')
    // );
    // console.log(
    //   'FIND:',
    //   this.animales.find((animal) => animal === 'z')
    // );
    // console.log(
    //   'FILTER:',
    //   this.animales.filter((animal) => animal === 'z')
    // );
    // console.log('IndexOf: ', this.animales.indexOf('c'));
    // console.log('Destructuración: ', name, age);
    // let both = [...this.students, ...this.parents];
    // console.log('Spread Operator', both);
    // console.log('Sum Spread', this.sumSpread(1, 2, 4));

    // // Nullish Coalesing -> Ignorar los null's o undefined's
    // console.log('Nullish Coalesing 0 vs null:', this.var1 ?? this.var2);
    // console.log('Nullish Coalesing null vs hola:', this.var2 ?? this.var3);
    // console.log('Nullish Coalesing null vs null:', null ?? null);

    // console.log('OR 0 vs null: ', this.var1 || this.var2);
    // console.log('OR null vs 0: ', this.var2 || this.var1);

    this.youtube.subscribe((res) => {
      console.log('SUSCRIBER 1: ', res);
    });

    // Formularios Pasables
    this.studentForm = this.formBuilder.group<IForm>({
      name: '',
      score: '',
      school: '',
      professor: '',
      university: '',
    });

    // Formularios LoLocos
    this.student2Form = this.unTypedFormBuilder.group({
      name: ['', Validators.required],
      score: [''],
      school: [''],
      professor: [''],
      university: [''],
    });

    this.studentForm.valueChanges.subscribe((res) => {
      console.log('Form group observable:', res);
    });
  }

  public changeDestroy() {
    this.destroyUserCard = !this.destroyUserCard;
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
        // console.log('person = ', persons[i]);
      }
    }
  }

  public receiveData(data: any) {
    console.log('Print in father component:', data);
  }

  public onResult(event: any) {
    if (!event) {
      this.result = 0;
    } else {
      if (event.type === 'SUM') {
        this.history.push(`SUM: ${event.result}`);
      } else {
        this.history.push(`MULT: ${event.result}`);
      }
    }
    this.result = event.result;
  }

  public addItem(ans: string) {
    this.history.push(ans);
  }

  public cleanDiscountPersons() {
    const personsWithoutDiscount = this.personsWithoutDiscount();
    this.persons = personsWithoutDiscount;
  }

  public malePersons() {
    const male = this.persons.filter((person) => person.gender === 'male');
    return male;
  }

  public femalePersons() {
    const female = this.persons.filter((person) => person.gender === 'female');
    return female;
  }

  public personsWithoutDiscount() {
    const personsWithoutDiscount = this.persons.filter(
      (person) => person.age < 18
    );
    return personsWithoutDiscount;
  }

  public personsWithDiscount() {
    const personsWithDiscount = this.persons.filter(
      (person) => person.age >= 18
    );
    return personsWithDiscount;
  }

  public changeToPerson1() {
    this.currentPerson = this.person;
  }

  public changeToPerson2() {
    this.currentPerson = this.persontwo;
  }

  public addVideo() {
    this.youtube
      .pipe(
        map((res) => {
          if (res % 2 == 0) {
            return res;
          }
          return null;
        }),
        filter((res: number | null) => res !== null),
        tap((res: number) => {
          console.log('Value: ', res);
        })
      )
      .subscribe((res) => {
        console.log('SUBSCRIBER 2: ', res);
      });
  }

  public getColor(value: any) {
    console.log('Current color in bg is:', value);
  }

  public addNumber() {
    this.students = [...this.students, 12];
  }

  public sumPure(a: number, b: number): number {
    return a + b;
  }
  public sumImpure(a: number, b: number): number {
    return a + b + Math.random();
  }

  public goToStudentModule() {
    this.router.navigate(['student']);
  }
  public goToCard() {
    this.router.navigate(['card', '10']);
  }

  public onCalculator() {
    this.router.navigate(['calculator'], {
      queryParams: { name: 'John', age: 20 },
    });
  }

  public onSubmit(data: any) {
    console.log('Template Driven Form:', data);
  }

  public printScore() {
    console.log(this.scoreControl.value);
  }

  public onSendData(){
    console.log(this.studentForm)
  }

  public print(){
    console.log('FORM NAME: ', this.studentForm.get('name'))
  }
}
