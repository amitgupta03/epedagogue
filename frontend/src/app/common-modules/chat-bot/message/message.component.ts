import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  @Input('text') text: string = '';
  @Input('date') date: any;
 // @Input('owner') owner: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
