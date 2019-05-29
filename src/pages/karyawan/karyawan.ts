import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the KaryawanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-karyawan',
  templateUrl: 'karyawan.html',
})
export class KaryawanPage {

  daftar: any

  constructor(public navCtrl: NavController, public navParams: NavParams, public HttpClient: HttpClient) {
    this.Karyawan();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KaryawanPage');
  }

  Karyawan(){
    this.HttpClient.get('http://localhost:8000/api/tampil')
    .subscribe(
      respon => {
        console.log(respon)
        this.daftar = respon
      },
      error => {
        console.log(error)
      },
      null
    )
  }

}
