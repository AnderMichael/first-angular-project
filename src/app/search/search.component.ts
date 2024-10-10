import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  searchTerm : string = '' 
  @Output() searchEvent = new EventEmitter<string>();

  onSearchChange() {
    this.searchEvent.emit(this.searchTerm); // Emitimos el valor a los componentes padres
  }
}
