import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LoginPageModule } from '../login/login.module';
import {
  FormGroup,
  FormControl

} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginPage } from '../login/login.page';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  public bg = './assets/bg.jpeg';
  public logo = './assets/logo.jpeg';
  public pwd = 'text';
  public isFocus = false;
  public alerttxt = '';
  public alert = '';
  public info = {
    fname: '',
    lname: '',
    email: '',
    password: '',
    address: '',
    number: '',
    sex: ''
  };
  constructor(private navCtrl: NavController, private router: Router) {

  }

  ngOnInit() {
  }
  login() {
    this.navCtrl.navigateBack('login');
  }
  public getGender(velue: any) {
    this.info.sex = velue;
  }
  public onFocus(e: any) {
    console.log(e.target.value);
    this.pwd = 'password';

  }
  public submit() {
    if (this.info.fname && this.info.lname && this.info.email && this.info.password && this.info.address && this.info.number) {
      localStorage.setItem('email', `${this.info.email}`);
      localStorage.setItem('fname', `${this.info.fname}`);
      localStorage.setItem('lname', `${this.info.lname}`);
      localStorage.setItem('password', `${this.info.password}`);
      localStorage.setItem('number', `${this.info.number}`);
      localStorage.setItem('address', `${this.info.address}`);
      this.alert = 'alert alert-success';
      this.alerttxt = 'successfully registered';
      setTimeout(() => {
        this.router.navigate(['/login']);
        
      },1000);
    }
    else {
      this.alert = 'alert alert-danger';
      this.alerttxt = 'Please fill up the missing field!';
    }
  }
}