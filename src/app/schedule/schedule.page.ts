import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonModal, ModalController } from '@ionic/angular';
import { scheduled } from 'rxjs';
import { ProfilePage } from '../profile/profile.page';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {
  public bg = './assets/bg.jpeg';
  public logo = './assets/logo.jpeg';
  public isSet = false;
  public date: string = '';
  public label = '';
  public setdate: any = [];
  private records = localStorage;
  constructor(private modalCntrl: ModalController, private router: Router) {

  }
  ngOnInit() {
    if (!this.date) {
      this.isSet = false;
    }
    if (!this.records.getItem('active')) {
      this.router.navigate(['/login']);
    }

  }
  set() {
    if (this.date != this.setdate) {
      this.label = 'Schedules: to pickup!';
      this.isSet = false;
      this.setdate.push(this.date);
    }
  }
  selectdate() {
    let curr_date = new Date();
    let yr = curr_date.getFullYear();
    let mm = curr_date.getMonth() + 1;
    let day = curr_date.getDate();
    let today_date = `${yr}-${mm}-${day}`;
    if (this.date != today_date) {
      this.isSet = true;
    }else{
      this.isSet = false;
    }
  }
  public editProfile() {
    this.modalCntrl.create({
      component: ProfilePage
    }).then((modalRes: { present: () => void; }) => {
      modalRes.present();
    });
  }
  public out() {
    this.records.setItem('active', '');
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 500);
  }
}
