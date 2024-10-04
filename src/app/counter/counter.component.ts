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
      earlyRead: () => {
        console.log("🚀 ~ CounterComponent ~ constructor ~ earlyRead:")
        const currentAppColor = this.counterBackground;
        return 'From early read: ' + currentAppColor;
      },
      write: (props) => {
        console.log("🚀 ~ CounterComponent ~ constructor ~ write:")
        document.body.style.backgroundColor = this.counterBackground;
        return 'From write: ' + this.counterBackground;
      },
      mixedReadWrite: (props) => {
        console.log("🚀 ~ CounterComponent ~ constructor ~ mixedReadWrite:")
        if (props.includes('red')) {
          this.counterBackground = 'green';
        } else {
          this.counterBackground = 'red';
        }
        return 'From mixedReadWrite: ' + this.counterBackground;
      },
      read: (props) => {
        console.log("🚀 ~ CounterComponent ~ constructor ~ read:")
        const newBackground = this.counterBackground;
      },
    });
    afterNextRender(() => {
      console.log('AFTER NEXT RENDER: ', this.sum);
    });
  }
}
