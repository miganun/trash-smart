import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonModal, ModalController } from '@ionic/angular';
import { profile } from 'console';
import { ProfilePage } from '../profile/profile.page';
import { SchedulePage } from '../schedule/schedule.page';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  public bg = './assets/bg.jpeg';
  public logo = './assets/logo.jpeg';
  private records = localStorage;
  constructor(private modalCntrl: ModalController, private router: Router) {
    if (!this.records.getItem('active')) {
      router.navigate(['/login']);
    }
  }
  public editProfile() {
    this.modalCntrl.create({
      component: ProfilePage
    }).then((modalRes) => {
      modalRes.present();
    });
  }
  public setSchedule() {
    this.router.navigate(['/schedule']);
  }
  public out() {
    this.records.setItem('active', '');
    setTimeout(() => {
      this.router.navigate(['/login']);
    },1000);
  }
}
