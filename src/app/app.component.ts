import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  constructor() {}

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyCPV7b-EeWBTT_2xeJUXt1eY2AWth9YeAo",
      authDomain: "ng-recipe-book-fcb84.firebaseapp.com"
    })
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
