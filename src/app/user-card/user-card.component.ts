import { CommonModule } from '@angular/common';
import {
  AfterContentInit,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
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
  implements
    OnInit,
    OnDestroy,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterViewInit
{
  @Input() name: string = 'Ander';
  @Input() email: string = 'ander@ander.com';

  password: string = '';
  showButton: boolean = false;
  @Output() sendData: EventEmitter<string> = new EventEmitter();

  @ViewChild('buttonTest', { static: false }) buttonTest!: ElementRef;
  @ViewChild('buttonShow', { static: true }) buttonShow!: ElementRef; //  Para hacer componentes estáticos

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

  ngAfterViewInit(): void {
    console.log('NG AFTER VIEW INIT');
    // console.log(this.buttonTest); // Para ver los atributos de un lemento html en el DOM
    this.buttonShow.nativeElement.textContent = 'buttonShow in OnInit';
    if (this.buttonTest) {
      this.buttonTest.nativeElement.textContent = 'buttonTest in OnInit';
    }
  }
}
