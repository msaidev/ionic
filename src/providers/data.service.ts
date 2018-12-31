import {Injectable} from "@angular/core";
import {AngularFireDatabase} from "angularfire2/database";
import {User} from "firebase/app";
import {Profile} from "./../models/profile/profile.interface";
import {AuthProvider} from "./auth.service";
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class DataService {
  constructor(private database: AngularFireDatabase, private authService: AuthProvider) {
  }

  getProfile(user: User) {
    try {
      return this.database.object(`/profiles/${user.uid}`).valueChanges();
    } catch (error) {
      return error;
    }
  }
  searchProfile(firstName: string) {
    try {
      return this.database
        .list<Profile>("/profiles", ref =>
          ref.orderByChild("firstName").startAt(firstName)
        )
        .valueChanges();
    } catch (error) {
      return error;
    }
  }
  async saveProfile(user: User, profile: Profile) {
    try {
      profile.email = user.email;
      await this.database.object(`/profiles/${user.uid}`).set(profile);
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  }

  /*public getAuthenticatedUserProfile() {
    return this.authService.getAuthenticatedUser()
      .map(user=>user.uid)
      .mergeMap(authId => this.database.object(`/profiles/${authId}`) )
      .take(1);
  }*/
}
