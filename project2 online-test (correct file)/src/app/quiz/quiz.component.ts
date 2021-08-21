import { Component, OnInit } from '@angular/core';
import { QuizService } from '../shared/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  
  Question: any;
  Answer:any;
  ab:any;

  constructor(quizserv: QuizService) { 
    this.Question=quizserv.getQuestion();
    this.Answer=quizserv.  getAnswer();
    
  }

  ngOnInit(): void {
  }

}
