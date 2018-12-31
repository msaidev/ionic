import {Component, Input, OnInit} from '@angular/core';
import {Message} from "../../models/message/message.interface";

@Component({
  selector: 'app-chat-message',
  templateUrl: 'chat-message.html'
})
export class ChatMessageComponent implements OnInit {
  @Input() chatMessage: Message;
  @Input() index: number;
  message: Message;
  constructor() {
  }

  ngOnInit(): void {
    this.message = this.chatMessage || {} as Message;
  }
}
