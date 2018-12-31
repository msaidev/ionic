import {LoginResponse} from "./../../models/login/login-response.interface";
import {Component} from "@angular/core";
import {IonicPage, NavController, ToastController} from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-register",
  templateUrl: "register.html"
})
export class RegisterPage {
  constructor(
    public navCtrl: NavController,
    private toastCtrl: ToastController
  ) {
  }

  onRegisterDone(event: LoginResponse) {
    if (!event.error) {
      this.toastCtrl
        .create({message: "Account Registered Successfully.", duration: 3000})
        .present();
      this.navCtrl.setRoot("LoginPage");
    } else {
      this.toastCtrl
        .create({message: event.error.message, duration: 3000})
        .present();
    }
  }
}
