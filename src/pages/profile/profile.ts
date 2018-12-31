import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController
} from "ionic-angular";
import {Profile} from "../../models/profile/profile.interface";
@IonicPage()
@Component({
  selector: "page-profile",
  templateUrl: "profile.html"
})
export class ProfilePage {
  existingProfile:Profile;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private toastCtrl: ToastController
  ) {
    this.existingProfile = this.navParams.get("existingProfile") as Profile;
  }

  onSaveProfileDone(event: Boolean) {
    let toast;
    if (event) {
      toast = this.toastCtrl.create({
        message: "Info Updated Successfully.",
        duration: 3000
      });
      toast.present();
      this.navCtrl.setRoot("TabsPage");
    } else {
      toast = this.toastCtrl.create({
        message: "Something Wrong Happened.",
        duration: 3000
      });
      toast.present();
    }
  }
}
