import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { data } from '../constants/data';
import { SearchComponent } from './search/search.component';
import { CardComponent } from './card/card.component';
import { ItemComponent } from './item/item.component';
import { ListComponent } from './list/list.component';
import { CommonModule } from '@angular/common';

export interface Person {
  name: string;
  lastName: string;
  type: string;
  subject?: string;
  firstTestScore: number;
  secondTestScore: number;
  finalTestScore: number;
  address: {
    number: string;
    street: string;
    zone: string;
  };
  country: string;
  province: string;
  messages: string[];
}

export type CardState = 'personal' | 'geographic' | 'messages';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SearchComponent,
    CardComponent,
    ItemComponent,
    ListComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-tour-of-heroes';
  people: Person[] = Object.values(data) as Person[];
  peopleDisplay: Person[] = Object.values(data) as Person[];

  personSelected: Person = Object.values(data)[0] as Person;
  messagesDisplay: string[] = Object.values(data)[0].messages;

  cardState: CardState = 'personal';

  public onResult(event: any) {
    console.log(event);
    if (event === '') {
      this.peopleDisplay = this.people;
    } else {
      this.peopleDisplay = this.people.filter(
        (person) =>
          person.name.includes(event) || person.lastName.includes(event)
      );
    }
  }

  public onChangeMessage(event: any) {
    console.log(event);
    if (event === '') {
      this.messagesDisplay = this.personSelected.messages;
    } else {
      this.messagesDisplay = this.personSelected.messages.filter((message) =>
        message.includes(event)
      );
    }
  }

  public onPerson(event: Person) {
    this.personSelected = event;
    this.messagesDisplay = this.personSelected.messages;
  }

  public deletePerson(event: Person) {
    this.people = this.people.filter((person) => person.name !== event.name);
    this.peopleDisplay = this.people;
  }

  public changePersonal() {
    this.cardState = 'personal';
  }

  public changeGeographic() {
    this.cardState = 'geographic';
  }

  public changeMessages() {
    this.cardState = 'messages';
  }
}
