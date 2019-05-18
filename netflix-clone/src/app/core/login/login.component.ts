import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(public afAuth: AngularFireAuth, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  login() {
    this.afAuth.auth.createUserWithEmailAndPassword('testePeloAPP2@teste.com', '12345678')
      .then(value => console.log('Mensagem do then', value))
      .catch(error => {
        console.log('mensagem de erro', error.message);

      });
  }

}
