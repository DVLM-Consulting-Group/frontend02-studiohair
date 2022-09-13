import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Login } from 'src/app/models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  log: Login = {
    email: '',
    senha: ''
  }

  email = new FormControl(null, Validators.email);
  senha = new FormControl(null, Validators.minLength(3));

  constructor() { }

  ngOnInit(): void {
  }

  validaCampos(): boolean{
    if(this.email.valid && this.senha.valid){
      return true;
    } else {
      return false;
    }
  }

}
