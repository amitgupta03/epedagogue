import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatBotComponent } from './chat-bot.component';
import { ChatService } from './chat.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MessageComponent } from './message/message.component';



@NgModule({
  declarations: [ChatBotComponent, MessageComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[
    ChatBotComponent
  ],
  providers:[ChatService]
})
export class ChatBotModule { }
