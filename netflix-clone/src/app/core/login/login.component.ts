import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit() {
    this.afAuth.auth.createUserWithEmailAndPassword('testePeloAPP@teste.com', '12345678');
    console.log('TA SALVOOOOOOO');
  }

}
