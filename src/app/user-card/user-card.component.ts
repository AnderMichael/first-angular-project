import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
  @Input() name: string = 'Ander';
  @Input() email: string = 'ander@ander.com';

  @Output() sendData: any;
}
