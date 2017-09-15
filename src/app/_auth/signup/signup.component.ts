import { Component, OnInit } from '@angular/core';
import { NgForm, Validators, FormControl } from "@angular/forms";
import { AuthService } from "../../_services/auth.service";

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const PASS_REGEX = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  // emailFormControl = new FormControl('', [
  //   Validators.required,
  //   Validators.pattern(EMAIL_REGEX)
  // ]);

  // passwordFormControl = new FormControl('', [
  //   Validators.required,
  //   Validators.pattern(PASS_REGEX)
  // ]);

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signupUser(email, password);
  }

}
