import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  public userProfile = '';
  public defaultPic = 'no img';
  public updateName = false;
  public updateAddress = false;
  public nameV = '';
  public addV = '';
  public emailV = '';
  public passwordV = '';
  public alert = '';
  public alerttxt = '';
  public records = localStorage;
  public updateEmail = false;
  public updatePassword = false;
  constructor(private modalCntrl: ModalController) { }

  ngOnInit() {
  }
  public edit(label: string) {
    switch(label){
      case 'name':this.updateName = true;break;
      case 'email':this.updateEmail = true;break;
      case 'address':this.updateAddress = true;break;
      case 'password':this.updatePassword = true;break;
    }
  }
  save() {

    if (this.nameV.trim()) {
      this.records.setItem('fname', `${this.nameV}`);
    }
    if (this.addV.trim()) {
      this.records.setItem('address', `${this.addV}`);
    }
    if (this.emailV.trim()) {
      this.records.setItem('email', `${this.emailV}`);
    }
    if (this.passwordV.trim()) {
      this.records.setItem('password', `${this.passwordV}`);
    }
    setTimeout(() => {
      this.alert = 'alert alert-success';
      this.alerttxt = 'Successfully update!'
      setTimeout(() => {
        this.alert = 'd-none';
      }, 1500);
    }, 500);
    this.nameV = '';
    this.emailV = '';
    this.passwordV = '';
    this.addV = '';
  }
  close() {
    this.modalCntrl.dismiss();
  }
  fnameout() {
    this.updateName = false;
  }
  fnamein() {
    this.updateEmail = false;
    this.updatePassword = false;
    this.updateAddress = false;
  }
  emailin() {
    this.updatePassword = false;
    this.updateAddress = false;
    this.updateName = false;
  }
  emailout() {
    this.updateEmail = false;
  }
  passwordout() {
    this.updatePassword = false;
  }
  passwordin() {
    this.updateEmail = false;
    this.updateAddress = false;
    this.updateName = false;
  }
}
