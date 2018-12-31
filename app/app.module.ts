import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule} from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";
import { FormsModule } from "@angular/forms";
import { MyApp } from "./app.component";
import { CONFIGS } from "./app.configs";
import { AuthProvider } from "../providers/auth.service";
import { DataService } from "../providers/data.service";

@NgModule({
  declarations: [MyApp],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(CONFIGS.fireBaseConfigs),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FormsModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthProvider,
    DataService
  ]
})
export class AppModule {}
