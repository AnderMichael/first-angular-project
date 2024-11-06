import { Component } from '@angular/core';
import { CitiesService } from '../services/cities.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'add',
  template: `
  <div>
    <input [(ngModel)]="newCity" placeholder="Add new city" />
    <button (click)="addCity()">Add City</button>
    <p *ngIf="errorMessage">{{ errorMessage }}</p>
    </div>
  `,
  imports: [CommonModule, FormsModule],
  standalone: true,
  styleUrl: './add.component.scss',
})
export class AddComponent {
  newCity = '';
  errorMessage = '';

  constructor(private citiesService: CitiesService) {}

  addCity(): void {
    this.errorMessage = '';
    const error = this.citiesService.addCity(this.newCity);
    if (error) {
      this.errorMessage = error;
    } else {
      this.newCity = '';
    }
  }
}
