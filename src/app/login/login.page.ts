import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { RegistrationPage } from '../registration/registration.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public bg = './assets/bg.jpeg';
  public logo = './assets/logo.jpeg';
  public pwd = 'text';
  public username: any = '';
  public password: any = '';
  private records = localStorage;
  public alert = '';
  public alertTxt = '';
  constructor(private navCtrl: NavController, private router: Router) { }

  ngOnInit() {
  }
  public getUsername(value: any) {
    if (value.target.value == this.records.getItem('email')) {
      return (this.username = value.target.value);
    }
  }
  public getPassword(value: any) {
    console.log(value)
    if (value.target.value == this.records.getItem('password')) {
      return (this.password = value.target.value);
    }
  }
  public signup() {
    this.router.navigate(['/registration']);
    this.username='';
    this.password='';
  }
  public onFocus(e: any) {
    console.log(e.target.value);
    this.pwd = 'password';
  }
  auth() {
    if (this.username && this.password) {
      this.alert = 'alert alert-success';
      this.alertTxt = 'login successful';
      this.records.setItem('active','1')
      setTimeout(() => {
        this.router.navigate(['/home']);
      }, 1000)
    } else {
      this.alert = 'alert alert-danger';
      this.alertTxt = 'Account not found!';
    }
  }
}

