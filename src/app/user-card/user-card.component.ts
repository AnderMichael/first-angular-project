import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'user-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
})
export class UserCardComponent implements OnInit, OnDestroy {
  @Input() name: string = 'Ander';
  @Input() email: string = 'ander@ander.com';

  @Output() sendData: EventEmitter<string> = new EventEmitter();

  constructor() {
    console.log('USER CARD FROM CONSTRUCTOR');
  }

  public onSendData() {
    this.sendData.emit('Hi from chlid component!');
  }

  ngOnInit(): void {
    console.log('USER CARD FROM NG-OnInit');
  }

  ngOnDestroy(): void { 
    console.log('USER CARD FROM NG-DESTROY');
  }
}
