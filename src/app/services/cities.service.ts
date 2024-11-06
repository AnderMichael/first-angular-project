import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

interface City {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class CitiesService {
  private cities = new BehaviorSubject<City[]>([]);
  cities$ = this.cities.asObservable();

  constructor(private http: HttpClient) {
    this.loadCities();
  }

  private loadCities(): void {
    const storedCities = localStorage.getItem('cities_load');
    if (storedCities) {
      this.cities.next(JSON.parse(storedCities));
    } else {
      this.http.get<City[]>('assets/cities.json').subscribe((data) => {
        this.cities.next(data);
        this.saveToLocalStorage(data);
      });
    }
  }

  private saveToLocalStorage(cities: City[]): void {
    localStorage.setItem('cities_load', JSON.stringify(cities));
  }

  getCities(): Observable<City[]> {
    return this.cities$;
  }

  addCity(name: string): string | null {
    const currentCities = this.cities.value;
    if (currentCities.some(city => city.name.toLowerCase() === name.toLowerCase())) {
      return 'City already exists now!';
    }

    const newCity = { id: currentCities.length + 1 , name };
    const updatedCities = [...currentCities, newCity];
    this.cities.next(updatedCities);
    this.saveToLocalStorage(updatedCities);
    return null;
  }

  deleteCity(name: string): void {
    const updatedCities = this.cities.value.filter(city => city.name !== name);
    this.cities.next(updatedCities);
    this.saveToLocalStorage(updatedCities);
  }
}
