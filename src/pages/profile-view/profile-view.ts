import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Profile} from "../../models/profile/profile.interface";
import {AuthProvider} from "../../providers/auth.service";

@IonicPage()
@Component({
  selector: 'page-profile-view',
  templateUrl: 'profile-view.html',
})
export class ProfileViewPage {
  existingProfile : Profile;

  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthProvider) {
  }

  onEditProfile(){
    if(this.existingProfile)
      this.navCtrl.push("ProfilePage",{existingProfile:this.existingProfile});
  }
  getExistingProfile($event:Profile){
    this.existingProfile = $event;
  }

  onSignOutClick() {
    this.authService.signOut();
    this.navCtrl.setRoot("LoginPage");
  }
}
