import { Routes } from '@angular/router';
import { UserCardComponent } from './user-card/user-card.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { AuthGuard } from './guards/auth.guard';
import { GuardForm } from './guards/guard-form.guard';

export const routes: Routes = [
  {
    path: 'card/:studentId',
    component: UserCardComponent,
    title: 'User Card Test Title'
  },
  {
    path: 'calculator',
    component: CalculatorComponent,
    canDeactivate: [GuardForm]
  },
  {
    path: 'counter-nav',
    loadComponent: () =>
      import('./counter/counter.component').then((n) => n.CounterComponent),
  },
  {
    path: 'student',
    title: 'Student',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./student/student.module').then((n) => n.StudentModule),
  },
];
