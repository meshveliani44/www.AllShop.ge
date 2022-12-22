import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  logInForm!: FormGroup;

  constructor(private router: Router, public formbuilder: FormBuilder) {
    // this.logInForm = new FormGroup({
    //   Username: new FormControl(null, Validators.required),
    //   Password: new FormControl(null, Validators.required),
    // })
    this.logInForm = this.formbuilder.group({
      Username: new FormControl(null, Validators.required),
      Password: new FormControl(null, Validators.required),
    })

  }

  ngOnInit(): void {


  }

  onSubmit() {
    if (this.logInForm.valid) {
      console.log('submited successfully', this.logInForm.value)
      this.router.navigate(['products'])
      this.logInForm.reset
    } else {
      console.log('invalid input')
    }
  }

  logIn() {
    this.router.navigate(['/registration'])
  }

}
