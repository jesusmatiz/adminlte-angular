import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  public form: FormGroup;

  constructor(public fb: FormBuilder, public router: Router) {
    this.form = this.fb.group({
      'username': [null, Validators.compose([Validators.required, Validators.email])],
      'password': [null, Validators.compose([Validators.required])],
    });
  }

  ngOnInit(): void {
    sessionStorage.clear();
  }

  public onSubmit(values: Object): void {

    console.log(values);

    sessionStorage.setItem("access_token", "YWRtaW5sdGUtYW5ndWxhcg==");
    this.router.navigate(['/']);
  }

}
