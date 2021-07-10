import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}
  loginForm: FormGroup;
  submitted: boolean = false;
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, validatePassword]]
    });
  }

  submit() {
    this.submitted = true;
  }
}

function validatePassword(c: FormControl) {
  let exp = /^[a-zA-Z][0-1]$/;

  return exp.test(c.value)
    ? null
    : {
        passwordError: {
          message: 'Password is invalid'
        }
      };
}
