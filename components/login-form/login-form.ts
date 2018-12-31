import { Component, EventEmitter, Output } from "@angular/core";
import { NavController, LoadingController } from "ionic-angular";
import { Account } from "../../models/account/account.interface";
import { LoginResponse } from "../../models/login/login-response.interface";
import { AuthProvider } from "../../providers/auth.service";

@Component({
  selector: "app-login-form",
  templateUrl: "login-form.html"
})
export class LoginFormComponent {
  account = { email: "", password: "" } as Account;
  emailExpression  = "[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})"
  @Output() loginStatus: EventEmitter<LoginResponse>;

  constructor(
    private navCtrl: NavController,
    private afAuth: AuthProvider,
    private ldCtrl: LoadingController
  ) {
    this.loginStatus = new EventEmitter<LoginResponse>();
  }

  async login() {
    const loading = this.ldCtrl.create({ content: "Please Wait..." });
    loading.present();
    const result = await this.afAuth.signInWithEmailAndPassword(this.account);
    this.loginStatus.emit(result);
    loading.dismiss();
  }

  navigateToPage(pageName) {
    this.navCtrl.push(pageName);
  }
}
