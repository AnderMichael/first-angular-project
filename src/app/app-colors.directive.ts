import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Directive({
  selector: '[ngColors]',
  standalone: true,
})
export class AppColorsDirective {
  @Input() color!: string;
  @Input() defaultColor!: string;

  @Output() colorClick: EventEmitter<string> = new EventEmitter<string>();
  @Output() colorDoubleClick: EventEmitter<string> = new EventEmitter<string>();

  @HostListener('click') onClick() {
    this.element.nativeElement.style.backgroundColor = this.color;
    this.colorClick.emit('CLICK '+ this.color);
  }

  @HostListener('dblclick') onDoubleClick() {
    this.element.nativeElement.style.backgroundColor = this.color;
    this.colorClick.emit('DBL green '+  this.color);
  }

  @HostListener('blur') onBlur() {
    this.element.nativeElement.style.backgroundColor = this.color;
    this.color = this.defaultColor;
  }

  constructor(private element: ElementRef) {}
}
