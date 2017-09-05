import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { GoogleApiConfig } from './shared/google-api-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GoogleApiConfig]
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  constructor(private googleAPIConfig: GoogleApiConfig) {}

  ngOnInit() {
    firebase.initializeApp({
      apiKey: this.googleAPIConfig.apiKey,
      authDomain: this.googleAPIConfig.authDomain,
      databaseURL: this.googleAPIConfig.databaseURL,
      projectId: this.googleAPIConfig.projectId,
      storageBucket: this.googleAPIConfig.storageBucket,
      messagingSenderId: this.googleAPIConfig.messagingSenderId
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
