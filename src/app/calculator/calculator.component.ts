import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'calculator',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss',
})
export class CalculatorComponent implements OnInit {
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _authService: AuthService,
    private _router: Router
  ) {}
  ngOnInit(): void {
    this._activatedRoute.queryParams.subscribe((params) => {
      console.log('🚀 ~ CalculatorComponent ~ ngOnInit ~ params:', params);
    });
    console.log(
      'query params snapshot: ',
      this._activatedRoute.snapshot.queryParams
    );
  }

  numberBox1: number = 0;
  numberBox2: number = 0;

  @Output() sum = new EventEmitter();
  @Output() mult = new EventEmitter();
  @Output() reset = new EventEmitter();
  public onSum() {
    const sum = Number(this.numberBox1) + Number(this.numberBox2);
    this.sum.emit({ result: sum, type: 'SUM' });
  }

  public onMult() {
    const mult = Number(this.numberBox1) * Number(this.numberBox2);
    this.mult.emit({ result: mult, type: 'MULT' });
  }

  public onReset() {
    this.numberBox1 = 0;
    this.numberBox2 = 0;
    this.reset.emit();
  }

  public onLogin() {
    this._authService.login();
    this._router.navigate(['/student'])
  }
}
