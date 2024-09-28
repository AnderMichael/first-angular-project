import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'user-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
  @Input() name: string = 'Ander';
  @Input() email: string = 'ander@ander.com';

  @Output() sendData: EventEmitter<string> = new EventEmitter();

  public onSendData(){
    this.sendData.emit('Hi from chlid component!');
  }
}
