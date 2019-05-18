import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;

  constructor(public afAuth: AngularFireAuth, private formBuilder: FormBuilder,
    private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  login() {

    const userName = this.loginForm.get('userName').value;
    const password = this.loginForm.get('password').value;


    this.afAuth.auth.signInWithEmailAndPassword(userName, password)
      .then(value => {
        value.user.getIdToken().then(token => this.userService.setToken(token));
        this.router.navigate(['home', value.user.uid]);

      })
      .catch(error => {
        console.log('mensagem de erro', error.message);
        this.loginForm.reset();
        this.userNameInput.nativeElement.focus();
        alert('Usuário ou senha inválidos');
      });
  }
}
