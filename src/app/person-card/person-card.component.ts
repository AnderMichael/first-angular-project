import { Component, Input } from '@angular/core';
import { Person } from '../../constants/persons';

@Component({
  selector: 'person-card',
  standalone: true,
  imports: [],
  templateUrl: './person-card.component.html',
  styleUrl: './person-card.component.scss',
})
export class PersonCardComponent {
  @Input() person!: Person;
}
