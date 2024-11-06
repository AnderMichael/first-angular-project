import { Component, EventEmitter, Output } from '@angular/core';
import { CitiesService } from '../services/cities.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'filter',
  template: `
    <input [(ngModel)]="filter" placeholder="Filter cities"/>
    <button (click)="applyFilter()">Search</button>
  `,
  standalone: true,
  imports: [CommonModule, FormsModule],
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  filter = '';
  cities: { id: number; name: string }[] = [];
  
  @Output() filteredCities = new EventEmitter<{ id: number; name: string }[]>();

  constructor(private citiesService: CitiesService) {}

  applyFilter(): void {
    this.citiesService.getCities().subscribe((cities) => {
      this.cities = cities.filter(city =>
        city.name.toLowerCase().includes(this.filter.toLowerCase())
      );
      this.filteredCities.emit(this.cities);
    });
  }
}
