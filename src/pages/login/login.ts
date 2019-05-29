import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from "../../pages/home/home";
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {

  username: string
  password: string

  constructor(public navCtrl: NavController, public navParams: NavParams, public HttpClient: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  Masuk() {
    this.HttpClient.post('http://localhost:8000/api/masuk',
      {
        username: this.username,
        password: this.password
      }).subscribe(
        respon => {
          console.log(respon)
          if (respon['pesan'] == 'Tidak ada') {
            alert('Username tidak ada')
          }
          if (respon['pesan'] == 'Berhasil') {
            alert('Berhasil masuk. Selamat datang')
            this.HomePage()
          }
          if (respon['pesan'] == 'Gagal') {
            alert('Username/Password salah')
          }
        },
        error => {
          console.log(error)
        },
        null
      )
  }

  HomePage() {
    this.navCtrl.setRoot(HomePage);
  }
}