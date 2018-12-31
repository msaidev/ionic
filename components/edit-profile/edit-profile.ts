import {Component, OnDestroy, Output, EventEmitter, Input, OnInit} from "@angular/core";
import { LoadingController } from "ionic-angular";
import { Profile } from "./../../models/profile/profile.interface";
import { AuthProvider } from "../../providers/auth.service";
import { DataService } from "../../providers/data.service";

import { Subscription } from "rxjs/Subscription";
import { User } from "firebase/app";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "app-edit-profile",
  templateUrl: "edit-profile.html"
})
export class EditProfileComponent implements OnDestroy,OnInit {
  profile = {} as Profile;
  private authenticatedUser$: Subscription;
  private authenticatedUser: User;
  @Output() saveProfileResult: EventEmitter<Boolean>;
  @Input() existingProfile:Profile;
  constructor(
    private dataService: DataService,
    private authService: AuthProvider,
    private loadingCtrl: LoadingController
  ) {
    this.authenticatedUser$ = this.authService
      .getAuthenticatedUser()
      .subscribe((user: User) => {
        this.authenticatedUser = user;
      });

    this.saveProfileResult = new EventEmitter<Boolean>();

  }
  async onSaveClicked() {
    if (!this.authenticatedUser) {
      console.error("Auth User Not found");
      return;
    }
    const loading = this.loadingCtrl.create({ content: "Please wait..." });
    loading.present();
    const result = await this.dataService.saveProfile(
      this.authenticatedUser,
      this.profile
    );
    loading.dismiss();
    this.saveProfileResult.emit(result);
  }
  ngOnDestroy(): void {
    this.authenticatedUser$.unsubscribe();
  }

  loadProfile(user: User) {
    const loading = this.loadingCtrl.create({ content: "Please wait..." });
    loading.present();

    const collection$: Observable<Profile> = this.dataService.getProfile(user);
    collection$.subscribe(data => {
      this.profile = data;
      loading.dismiss();
    });
  }

  ngOnInit(): void {
    if(this.existingProfile)
      this.profile = this.existingProfile;
  }
}
