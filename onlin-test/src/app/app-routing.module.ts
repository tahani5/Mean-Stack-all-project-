import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent} from './quiz/quiz.component';
import { RegisterComponent} from './register/register.component';
import { ResultComponent} from './result/result.component';


export const routes: Routes = [
  { path: 'quiz', component: QuizComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'result', component: ResultComponent },
  { path: '', redirectTo:'/register' , pathMatch:'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
