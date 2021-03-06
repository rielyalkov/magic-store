import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../admin/auth-service/authentication.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup;
  hide = true;
  clicked = false;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router,
    private auth: AngularFireAuth,
  ) {
    this.formGroup = formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get form(): { [p: string]: AbstractControl } { return this.formGroup.controls; }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  clear(controlName): void {
    this.formGroup.get(controlName).reset();
  }

  submit(): void {
    this.clicked = true;
    this.authService.login(this.formGroup.value.username, this.formGroup.value.password).then(
      response => {
        console.log(response);
        this.authService.setLoginStatus(response.user.uid);
        (console.log('true!'));
        this.router.navigate([this.returnUrl]);
        },
    ).catch(
      () => (console.log('error!'))
    );
  }
}
