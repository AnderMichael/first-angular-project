import { Component, OnInit } from '@angular/core';
import { CitiesService } from '../services/cities.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'list',
  template: `
    <ul>
      <li *ngFor="let city of cities" (click)="deleteCity(city.name)">
        {{ city.name }}
      </li>
    </ul>
  `,
  imports: [CommonModule, FormsModule],
  styleUrl: './list.component.scss',
  standalone: true
})
export class ListComponent implements OnInit {
  cities: { id: number; name: string }[] = [];

  constructor(private citiesService: CitiesService) {}

  ngOnInit(): void {
    this.citiesService.getCities().subscribe((cities) => (this.cities = cities));
  }

  deleteCity(name: string): void {
    this.citiesService.deleteCity(name);
  }
}
