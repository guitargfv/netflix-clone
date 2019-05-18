import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  signupForm: FormGroup;
  @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;

  constructor(public afAuth: AngularFireAuth, private formBuilder: FormBuilder,
    private router: Router, private userService: UserService) { }

  ngOnInit() {

    this.signupForm = this.formBuilder.group({
      userName: ['',
        [
          Validators.required,
          Validators.email
        ]
      ],
      password: ['',
        [
          Validators.required,
          Validators.minLength(8)]
      ]
    });
  }

  registerUser() {
    const userName = this.signupForm.get('userName').value;
    const password = this.signupForm.get('password').value;


    this.afAuth.auth.createUserWithEmailAndPassword(userName, password)
      .then(value => {
        value.user.getIdToken().then(token => this.userService.setToken(token));
        this.router.navigate(['']);

      })
      .catch(error => {
        console.log('mensagem de erro', error.message);
        this.signupForm.reset();
        this.userNameInput.nativeElement.focus();
        alert('Erro ao cadastrar usuário');
      });
  }
}

