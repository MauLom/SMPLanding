import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openSignIn() {
    this.dialog.open(SignInComponent);
  }
  openSignUp() {
    this.dialog.open(SignUpComponent);
  }
  openRecoverPassword() {
    this.dialog.open(RecoverPasswordComponent);
  }
}
