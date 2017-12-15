import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from "@angular/forms";
import { AuthService } from "../../_services/auth.service";
import { Router } from '@angular/router';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const PASS_REGEX = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  form = new FormGroup({
    email: new FormControl('email', [
      Validators.required,
      Validators.pattern(EMAIL_REGEX)
    ]),
    password: new FormControl('password', [
      Validators.required,
      Validators.pattern(PASS_REGEX)
    ])
  });

  constructor(private authService: AuthService,
              private router: Router) {}

  ngOnInit() {
  }

  onSignin() {
    const email = this.form.get('email').value;
    const password = this.form.get('password').value;
    this.authService.signinUser(email, password);
  }
}
