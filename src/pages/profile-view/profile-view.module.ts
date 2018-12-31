import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileViewPage } from './profile-view';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
  declarations: [
    ProfileViewPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfileViewPage),
    ComponentsModule
  ],
})
export class ProfileViewPageModule {}
