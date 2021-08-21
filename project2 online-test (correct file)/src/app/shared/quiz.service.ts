import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor() { }

  getQuestion(){
    return["1","2","3"];
  }


  getAnswer(){
    return["1a","2a","3a"];
  }

  getab(){
    return["1aa","2aa","3aa"];
  }
}
