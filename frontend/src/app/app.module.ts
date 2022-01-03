import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatBotModule } from './common-modules/chat-bot/chat-bot.module';
import { LoaderModule } from './common-modules/loader/loader.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    //RouterModule.forRoot(routes), 
    BrowserModule, 
    AppRoutingModule,
    LoaderModule,
    ChatBotModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
