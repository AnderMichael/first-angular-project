import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ClassmateComponent } from './classmate/classmate.component';
import { ScoreComponent } from './score/score.component';
import { StudentRoutingModule } from './student-routing.module';
import { ExamService } from './exam.service';


@NgModule({
  declarations: [
    ScoreComponent,
    ClassmateComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ],
  providers:[
    ExamService
  ]
})
export class StudentModule { }
