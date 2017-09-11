import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { FormGroup, FormControl, FormArray, Validators } from "@angular/forms";

import { BlogService } from '../../../_services/blog.service';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {

  id: number;
  editMode = false;
  blogForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private blogService: BlogService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  private initForm() {

    let blogTitle = '';
    let blogCategory = '';
    let blogDate = '';
    let blogImagePath = '';
    let blogShortDescription = '';
    let blogText = '';

    if (this.editMode) {
      const blog = this.blogService.getBlog(this.id);
      blogTitle = blog.title;
      blogCategory = blog.category;
      blogDate = blog.date;
      blogImagePath = blog.imagePath;
      blogShortDescription = blog.shortDescription;
      blogText = blog.blogText;
    }

    this.blogForm = new FormGroup({
      'title': new FormControl(blogTitle, Validators.required),
      'category': new FormControl(blogCategory, Validators.required),
      'date': new FormControl(blogDate, Validators.required),
      'imagePath': new FormControl(blogImagePath, Validators.required),
      'shortDescription': new FormControl(blogShortDescription, Validators.required),
      'blogText': new FormControl(blogText, Validators.required),
    });
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onSubmit() {
    (this.editMode) ? this.blogService.updateBlog(
      this.id,
      this.blogForm.value) : this.blogService.addBlog(this.blogForm.value);
    this.onCancel();
  }
}
