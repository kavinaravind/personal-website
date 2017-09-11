import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Blog } from '../blog.model';
import { BlogService } from '../../../_services/blog.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
  
  blog: Blog;
  id: number;

  constructor(private blogService: BlogService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.blog = this.blogService.getBlog(this.id);
        }
      );
  }

  onBackToBlog() {
    this.router.navigate(['../'], {relativeTo: this.route})
  }

  onDeleteRecipe() {
    this.blogService.deleteBlog(this.id);
    this.router.navigate(['/blog']);
  }
}
