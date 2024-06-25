import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NevbarComponent } from "./components/nevbar/nevbar.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { LoginService } from './services/login.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [ RouterModule,CommonModule, RouterOutlet, NevbarComponent, SidebarComponent]
})
export class AppComponent {
  title = 'facebookClone';
  constructor(public loginService:LoginService){

  }

}
