import { LoginResponse } from "./../../models/login/login-response.interface";
import { Component } from "@angular/core";
import { IonicPage, NavController, ToastController } from "ionic-angular";
import { Observable } from "rxjs";
import { DataService } from "../../providers/data.service";
import { Profile } from "../../models/profile/profile.interface";
import { User } from "firebase";
@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  constructor(
    private navCtrl: NavController,
    private toastCtrl: ToastController,
    private dataService: DataService
  ) { }

  onLoginDone(event: any) {
    if (!event.error) {
      event = event.result.user as LoginResponse;
      this.toastCtrl
        .create({
          message: `Welcome Back ${event.email}`,
          duration: 3000
        })
        .present();
      const collection$: Observable<Profile> = this.dataService.getProfile(<
        User
        >event);
      collection$.subscribe(profile => {
        console.log(profile);
        profile
          ? this.navCtrl.setRoot("TabsPage")
          : this.navCtrl.setRoot("ProfilePage");
      });
    } else {
      this.toastCtrl
        .create({ message: event.error.message, duration: 3000 })
        .present();
    }
  }
}
