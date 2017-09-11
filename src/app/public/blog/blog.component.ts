import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { BlogService } from '../../_services/blog.service';
import { Blog } from './blog.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit, OnDestroy {

  blogs: Blog[];
  private subscription: Subscription;

  constructor(private blogService: BlogService ) {}

  ngOnInit() {
    this.blogs = this.blogService.getBlogs();
    this.subscription = this.blogService.blogsChanged.subscribe(
      (blogs: Blog[]) => {
        this.blogs = blogs;
      }
    );
  }

  onEditItem(index: number) {
    this.blogService.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();    
  }
}