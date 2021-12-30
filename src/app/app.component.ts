import { Component } from '@angular/core';
import { RouteConfigLoadEnd, RouteConfigLoadStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'epedagogue';

  loadingRouteConfig: boolean = false;

  constructor (private router: Router) {}

  ngOnInit () {
      this.router.events.subscribe(event => {
          if (event instanceof RouteConfigLoadStart) {
              this.loadingRouteConfig = true;
          } else if (event instanceof RouteConfigLoadEnd) {
              setTimeout(()=>{
                this.loadingRouteConfig = false;
              },200)
          }
      });
  }

}


