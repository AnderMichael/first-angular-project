import { CommonModule } from '@angular/common';
import {
  AfterContentInit,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'user-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
})
export class UserCardComponent
  implements OnInit, OnDestroy, OnChanges, DoCheck, AfterContentInit
{
  @Input() name: string = 'Ander';
  @Input() email: string = 'ander@ander.com';

  password: string = '';

  @Output() sendData: EventEmitter<string> = new EventEmitter();

  constructor() {
    console.log('USER CARD FROM CONSTRUCTOR');
  }

  public onSendData() {
    this.sendData.emit('Hi from chlid component!');
  }

  ngOnInit(): void {
    console.log('USER CARD FROM NG-OnInit');
    // this.password = `${this.name} ${this.email} PASSWORD`;
  }

  ngOnDestroy(): void {
    console.log('USER CARD FROM NG-DESTROY');
  }

  ngOnChanges(changes: SimpleChanges): void {
    const { name, email } = changes;
    this.password = `${name.currentValue} ${email.currentValue} PASSWORD`;
  }

  ngDoCheck(): void {
    console.log('Do CHECK user card');
  }

  ngAfterContentInit(): void {
    console.log('NG AFTER CONTENT INIT');
  }
}
