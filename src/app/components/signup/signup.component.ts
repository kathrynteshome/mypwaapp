import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  public onSubmit(event: any): void {
    const payload = this.signupForm.value;
    // do signup here
    console.log('payload ', payload);
  }

  public hasError(controlName: string, errorName: string): boolean {
    return this.signupForm.controls[controlName].hasError(errorName);
  }

  private initForm(): void {
    this.signupForm = this.fb.group({
      firstName: new FormControl(null, Validators.required),
      middleName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      suffix: new FormControl(null),
      dob: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      primaryPhone: new FormControl(null, Validators.required),
    });
  }
}
