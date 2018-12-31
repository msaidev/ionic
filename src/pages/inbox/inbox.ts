import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MESSAGE_LIST} from '../../mocks/message/messages';

@IonicPage()
@Component({
  selector: 'page-inbox',
  templateUrl: 'inbox.html',
})
export class InboxPage {

  messagesList = MESSAGE_LIST;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //console.log(this.messagesList)
  }

  navigateToUserSearch(){
    this.navCtrl.push("SearchProfilePage");
  }
}
