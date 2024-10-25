import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { ExamService } from '../exam.service';

@Component({
  selector: 'app-average',
  standalone: true,
  imports: [],
  templateUrl: './average.component.html',
  styleUrl: './average.component.scss'
})
export class AverageComponent {
  constructor(private _authService: AuthService,
    private _examService: ExamService
) { }
public onPrint(){
    console.log('LOGGED USER: ', this._authService.getUser())
  }
  public onSend(){
    this._examService.sendNewScore([79,80,60])
  }
}
