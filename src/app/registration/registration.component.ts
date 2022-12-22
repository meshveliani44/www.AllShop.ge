import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup
  constructor(private router: Router) { 
    this.registrationForm = new FormGroup({
      Firstname: new FormControl(null, Validators.minLength(2)),
      Lastname: new FormControl(null, Validators.minLength(4)),
      Username: new FormControl(null, Validators.maxLength(18)),
      Password: new FormControl(null, Validators.required),
      Address: new FormControl(null, Validators.required),
      Mail: new FormControl(null, Validators.required),
      Phone: new FormControl(null,),
      sex: new FormControl(null, Validators.required)

  })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.registrationForm.valid){
      console.log('successful registration', this.registrationForm.value)
      this.router.navigate(['/welcome'])
      this.registrationForm.reset
    } else{
      console.log('registration failed')
    }
  }

}
