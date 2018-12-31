import { Profile } from "./../../models/profile/profile.interface";
import {Component, EventEmitter, Output} from "@angular/core";
import { DataService } from "../../providers/data.service";
@Component({
  selector: "app-profile-search",
  templateUrl: "profile-search.html"
})
export class ProfileSearchComponent {
  query: string;
  profiles: Profile[];
  @Output()OnSelectingProfile : EventEmitter<Profile>;
  constructor(private dateService: DataService) {
    this.OnSelectingProfile = new EventEmitter<Profile>();
  }
  searchUser(query: string) {
    const str = query.trim();
    if(str === query) {
      this.dateService.searchProfile(query).subscribe(profiles => {
        this.profiles = profiles;
      });
    }
  }
  selectProfile(profile:Profile){
    this.OnSelectingProfile.emit(profile);
  }
}
