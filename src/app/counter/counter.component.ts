import { Component, afterRender, afterNextRender } from '@angular/core';

@Component({
  selector: 'counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  sum: number = 0;
  counterBackground: string = 'Red';
  constructor() {
    afterRender({
      write:() => {
        console.log('INTO write')
        document.body.style.backgroundColor = this.counterBackground
        const currentColor = this.counterBackground
        if(currentColor === 'red') {
          this.counterBackground = 'blue'
        } else {
          this.counterBackground = 'red'
        }
        return 'FROM write: ' + this.counterBackground
      },
      read:(props) => {
        console.log('INTO read ', props)
        const newBackground = this.counterBackground
        console.log('FROM read: ', newBackground)
      },
    });
    afterNextRender(() => {
      console.log('AFTER NEXT RENDER: ', this.sum);
    });
  }
}
