import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {
  numberBox1 : number = 0;
  numberBox2 : number = 0;

  @Output() sum = new EventEmitter();
  @Output() mult = new EventEmitter();
  @Output() reset = new EventEmitter()
  ;
  public onSum(){
    const sum = Number(this.numberBox1) + Number(this.numberBox2); 
    this.sum.emit({result: sum, type: 'SUM'});
  }

  public onMult(){
    const mult = Number(this.numberBox1) * Number(this.numberBox2);
    this.mult.emit({result: mult, type: 'MULT'});
  }

  public onReset(){
    this.numberBox1 = 0;
    this.numberBox2 = 0;
    this.reset.emit();
  }
}
