import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Profile} from "../../models/profile/profile.interface";
import {AuthProvider} from "../../providers/auth.service";
import {DataService} from "../../providers/data.service";
import {LoadingController} from "ionic-angular";
import {User} from "firebase";

@Component({
  selector: 'app-view-profile',
  templateUrl: 'view-profile.html'
})
export class ViewProfileComponent implements OnInit {
  userProfile : Profile;
  @Output() onExistingProfileInit : EventEmitter<Profile>;

  constructor(private dataService: DataService, private authService: AuthProvider, private loadCtrl: LoadingController) {
    this.onExistingProfileInit = new EventEmitter<Profile>();
  }
  ngOnInit(): void {
    const loading = this.loadCtrl.create({content: "Please Wait..."});
    loading.present();
    /*this.dataService.getAuthenticatedUserProfile().subscribe((profile)=>{
      this.userProfile = <Profile>profile;
      this.onExistingProfileInit.emit(this.userProfile);
      loading.dismiss();
    })*/
    this.authService.getAuthenticatedUser().subscribe((user: User) => {
      this.dataService.getProfile(user).subscribe((profile) => {
        this.userProfile = <Profile>profile;
        this.onExistingProfileInit.emit(this.userProfile);
        loading.dismiss();
      });
    });
  }
}
