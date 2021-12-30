import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  showLoader: boolean = false;
  constructor() {
    this.showLoader=true;
   }

  ngOnInit(): void {
    setTimeout(()=> {
      this.showLoader=false;
    },1000)
  }

}
