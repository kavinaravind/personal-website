import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { StartupService } from './services/startup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public location = '';

  constructor(private router: Router, private startup: StartupService) {

  }

  ngOnInit() {
    
    // If there is no startup data receivied (maybe an error!)
    // navigate to error route
    if (!this.startup.startupData) {
      this.router.navigate(['404'], { replaceUrl: true });
      this.location = '404';
    } else {
      firebase.initializeApp({
        apiKey: this.startup.startupData.apiKey,
        authDomain: this.startup.startupData.authDomain,
        databaseURL: this.startup.startupData.databaseURL,
        projectId: this.startup.startupData.projectId,
        storageBucket: this.startup.startupData.storageBucket,
        messagingSenderId: this.startup.startupData.messagingSenderId
      });
    }
  }
}
