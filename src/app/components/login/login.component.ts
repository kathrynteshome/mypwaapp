import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  public onSubmit(event: any): void {
    const payload = this.loginForm.value;
    // do login here
    console.log('payload ', payload);
    this.router.navigate(['home']);
  }

  public hasError(controlName: string, errorName: string): boolean {
    return this.loginForm.controls[controlName].hasError(errorName);
  }

  private initForm(): void {
    this.loginForm = this.fb.group({
      userId: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }
}
