import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'history-calculator',
  standalone: true,
  imports: [NgFor],
  templateUrl: './history-calculator.component.html',
  styleUrl: './history-calculator.component.scss',
})
export class HistoryCalculatorComponent {
  @Input() history: string[] = [];
}
