import {LoginResponse} from "./../models/login/login-response.interface";
import {Injectable} from "@angular/core";
import {AngularFireAuth} from "angularfire2/auth";
import {Account} from "../models/account/account.interface";

@Injectable()
export class AuthProvider {
  account = {} as Account;
  constructor(private afAuth: AngularFireAuth) {}

  public getAuthenticatedUser() {
    return this.afAuth.authState;
  }
  public async signInWithEmailAndPassword(account: Account) {
    try {
      return <LoginResponse>{
        result: await this.afAuth.auth.signInWithEmailAndPassword(
          account.email,
          account.password
        )
      };
    } catch (e) {
      return <LoginResponse>{
        error: e
      };
    }
  }
  public async createUserWithEmailAndPassword(account: Account) {
    try {
      return <LoginResponse>{
        result: await this.afAuth.auth.createUserWithEmailAndPassword(
          account.email,
          account.password
        )
      };
    } catch (e) {
      return <LoginResponse>{
        error: e
      };
    }
  }

  public signOut() {
    return this.afAuth.auth.signOut();
  }
}
