import { Component, EventEmitter, Output } from "@angular/core";
import { NavController, NavParams, LoadingController } from "ionic-angular";
import { Account } from "../../models/account/account.interface";
import { AuthProvider } from "../../providers/auth.service";
import { LoginResponse } from "../../models/login/login-response.interface";
@Component({
  selector: "app-register-form",
  templateUrl: "register-form.html"
})
export class RegisterFormComponent {
  public account = { email: "", password: "" } as Account;
  @Output() registerStatus: EventEmitter<LoginResponse>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private afAuth: AuthProvider,
    private loadingCtrl: LoadingController
  ) {
    this.registerStatus = new EventEmitter<LoginResponse>();
  }

  async onRegisterClick() {
    const loader = this.loadingCtrl.create({ content: "Please wait..." });
    loader.present();
    const result = await this.afAuth.createUserWithEmailAndPassword(
      this.account
    );
    this.registerStatus.emit(result);
    loader.dismiss();
  }
}
