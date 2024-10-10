import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Person } from '../app.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {
  @Input() person!: Person;
  @Output() newPerson = new EventEmitter<Person>();
  @Output() delPerson = new EventEmitter<Person>();

  public onSendPerson(){
    this.newPerson.emit(this.person); 
  }

  public onDeletePerson(){
    this.delPerson.emit(this.person); 
  }
}
