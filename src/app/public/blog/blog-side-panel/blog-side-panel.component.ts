import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../_services/auth.service';

@Component({
  selector: 'app-blog-side-panel',
  templateUrl: './blog-side-panel.component.html',
  styleUrls: ['./blog-side-panel.component.css']
})
export class BlogSidePanelComponent implements OnInit {

  constructor(private authService: AuthService) {}

  ngOnInit() {
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

}
