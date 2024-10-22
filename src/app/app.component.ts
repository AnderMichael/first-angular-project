import { CommonModule } from '@angular/common';
import { data, socialNetworks } from './../data/data';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';

export interface User {
  user_id: string;
  name: string;
  age: number;
  status: string;
  amountAvailable: number;
  subscriptionType: string;
  subscriptions: number[];
  notifications: string[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-tour-of-heroes';
  socialNetworks = socialNetworks;
  users : User[] = Object.values(data);
  addNew(type: string) {
    alert(`Adding new ${type}`);
  }
}
