import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InboxPage } from './inbox';
import { MESSAGE_LIST } from '../../mocks/message/messages';

@NgModule({
  declarations: [
    InboxPage,
  ],
  imports: [
    IonicPageModule.forChild(InboxPage),
  ],
})
export class InboxPageModule {
  public messagesList: any[];
  constructor() {
    this.messagesList = MESSAGE_LIST;
    console.log(this.messagesList);
  }
}
