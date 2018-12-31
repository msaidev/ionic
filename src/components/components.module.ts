import { AuthProvider } from "../providers/auth.service";
import { NgModule } from "@angular/core";
import { IonicModule } from "ionic-angular";
import { LoginFormComponent } from "./login-form/login-form";
import { RegisterFormComponent } from "./register-form/register-form";
import { EditProfileComponent } from "./edit-profile/edit-profile";
import { ViewProfileComponent } from "./view-profile/view-profile";
import { ProfileSearchComponent } from "./profile-search/profile-search";
import { SendMessageBoxComponent } from './send-message-box/send-message-box';
import { ChatMessageComponent } from './chat-message/chat-message';

@NgModule({
  declarations: [
    LoginFormComponent,
    RegisterFormComponent,
    EditProfileComponent,
    ViewProfileComponent,
    ProfileSearchComponent,
    SendMessageBoxComponent,
    ChatMessageComponent
  ],
  imports: [IonicModule],
  exports: [
    LoginFormComponent,
    RegisterFormComponent,
    EditProfileComponent,
    ViewProfileComponent,
    ProfileSearchComponent,
    SendMessageBoxComponent,
    ChatMessageComponent
  ],
  providers: [AuthProvider]
})
export class ComponentsModule {}
