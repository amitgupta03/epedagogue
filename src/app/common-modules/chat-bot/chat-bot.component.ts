import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.scss']
})
export class ChatBotComponent implements OnInit {

  openChat: boolean =false;
  isChatStart:boolean = false;
  constructor( ) { }

  ngOnInit(): void {
  }

  chatIconClicked(){
    this.openChat = !this.openChat;
  }

  startChat(){
    this.isChatStart = true
  }

}
