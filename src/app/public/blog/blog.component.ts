import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { Router, ActivatedRoute } from '@angular/router';

import { Blog } from './blog.model';
import { BlogService } from '../../_services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit, OnDestroy {

  blogs: Blog[];
  private subscription: Subscription;

  constructor(private blogService: BlogService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.blogs = this.blogService.getBlogs();
    this.subscription = this.blogService.blogsChanged.subscribe(
      (blogs: Blog[]) => {
        this.blogs = blogs;
      }
    );
  }

  onNewBlog() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();    
  }
}