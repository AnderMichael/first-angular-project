import { CommonModule } from '@angular/common';
import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
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
import { SharedModule } from '../shared/shared.module';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'user-card',
  standalone: true,
  imports: [CommonModule, FormsModule, SharedModule],
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
    AfterViewInit,
    AfterContentChecked,
    AfterViewChecked
{
  @Input() name: string = 'Ander';
  @Input() email: string = 'ander@ander.com';

  password: string = '';
  showButton: boolean = false;

  subscription: Subscription = new Subscription();

  @Output() sendData: EventEmitter<string> = new EventEmitter();

  @ViewChild('buttonTest', { static: false }) buttonTest!: ElementRef;
  @ViewChild('buttonShow', { static: true }) buttonShow!: ElementRef; //  Para hacer componentes estáticos

  constructor(private activatedRoute: ActivatedRoute) {
    this.subscription.add(
      this.activatedRoute.params.subscribe((params) => {
        console.log('PARAMS: ', params);
      })
    );

    console.log('Snapshot: ', this.activatedRoute.snapshot.params);
  }

  public onSendData() {
    this.sendData.emit('Hi from chlid component!');
  }

  ngOnInit(): void {
    // console.log('USER CARD FROM NG-OnInit');
    // this.password = `${this.name} ${this.email} PASSWORD`;
  }

  ngOnDestroy(): void {
    // console.log('USER CARD FROM NG-DESTROY');
    this.subscription.unsubscribe()
  }

  ngOnChanges(changes: SimpleChanges): void {
    const { name, email } = changes;
    this.password = `${name.currentValue} ${email.currentValue} PASSWORD`;
  }

  ngDoCheck(): void {
    // console.log('Do CHECK user card');
  }

  ngAfterContentInit(): void {
    // console.log('NG AFTER CONTENT INIT');
  }

  ngAfterViewInit(): void {
    // console.log('NG AFTER VIEW INIT');
    // console.log(this.buttonTest); // Para ver los atributos de un lemento html en el DOM
    this.buttonShow.nativeElement.textContent = 'buttonShow in OnInit';
    if (this.buttonTest) {
      this.buttonTest.nativeElement.textContent = 'buttonTest in OnInit';
    }
  }

  ngAfterContentChecked(): void {
    // console.log('Do AFTER CONTENT user card');
  }

  ngAfterViewChecked(): void {
    // console.log('AFTER VIEW CHECKED!')
  }
}
