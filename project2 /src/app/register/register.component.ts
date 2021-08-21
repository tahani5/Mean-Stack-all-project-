import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  messag!: FormGroup;
  submitted: boolean=false;
  success: boolean=false;
 


  constructor(private formBuilder: FormBuilder) { 


  }

  ngOnInit(): void {

    this.messag=this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      messag :['' , Validators.required]
    })
  }


onSubmit(){
  this.submitted=true;
  if(this.messag.invalid){
    return ;
  }
  this.success=true;

}


}
