import { Component } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { Router, Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Angular8Tutorial';
  constructor(private loadingBar: SlimLoadingBarService, private router: Router){
    this.router.events.subscribe((event: Event) => {
      this.navigationInterceptor(event);
    });
  }

  private navigationInterceptor(event: Event): void{
    if (event instanceof NavigationStart){
      this.loadingBar.start();
    }
    if (event instanceof NavigationEnd){
      this.loadingBar.complete();
    }
    if (event instanceof NavigationCancel){
      this.loadingBar.stop();
    }
    if (event instanceof NavigationError){
      this.loadingBar.stop();
    }
  }
}
