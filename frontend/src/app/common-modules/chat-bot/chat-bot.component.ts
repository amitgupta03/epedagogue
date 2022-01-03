import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.scss']
})
export class ChatBotComponent implements OnInit {

  openChat: boolean =false;
  isChatStart:boolean = false;
  textInput: string = '';

  BACK_ENABLED: boolean = true;
  @Input('messages') messages: any[] = [];
  constructor( private chatService: ChatService) { }

  ngOnInit(): void {
  }

  chatIconClicked(){
    this.openChat = !this.openChat;
  }

  startChat(){
    this.isChatStart = true
  }

  sendMessage(){
    let newMessage = { text: this.textInput, date: "", userOwner: true};;

    this.messages.push(newMessage);

    let messageBack =  { "firstname": environment.firstName, "text": this.textInput}
    if(this.BACK_ENABLED){
      this.chatService.sendMessage(messageBack)
      .subscribe((res: any) => {
        let messageReturn: any = { text: res.responseMessage, date: new Date().toDateString(), userOwner: false}
        this.messages.push(messageReturn);
        this.getMsg()
      });
    }
    this.textInput = '';
  }

  onKey(event: any){
    if(event.keyCode == 13){
      this.sendMessage();
    }
  }

  getMsg() {
    this.chatService.getMessage();
  }

}
