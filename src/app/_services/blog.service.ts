import { Subject } from "rxjs/Subject";
import { Blog } from "../public/blog/blog.model";

export class BlogService {
  
  startedEditing = new Subject<number>();
  blogsChanged = new Subject<Blog[]>();

  private blogs: Blog[] = [
    new Blog(
        'Blog #1',
        'Sports',
        'August 28, 2013 at 10:00 PM',
        'http://placehold.it/900x300',
        'This is a test 1',
        'blog text 1'
    ),
    new Blog(
        'Blog #2',
        'Computer Science',
        'September 30, 2013 at 11:00 PM',
        'http://placehold.it/900x300',
        'This is a test 2',
        'blog text 2'
    ),
    new Blog(
        'Blog #3',
        'Weather',
        'October 1, 2017 at 10:00 PM',
        'http://placehold.it/900x300',
        'This is a test 2',
        'blog text 3'
    ),
  ];

  constructor() { }

  getBlogs() {
    return this.blogs.slice();
  }

  getBlog(index: number) {
    return this.blogs[index];
  }

  addBlog(blog: Blog) {
    this.blogs.push(blog);
    this.blogsChanged.next(this.blogs.slice());
  }

  addBlogs(blogs: Blog[]) {
    this.blogs.push(...blogs); // using ES6 spread operator
    this.blogsChanged.next(this.blogs.slice());
  }

  updateBlog(index: number, newBlog: Blog) {
    this.blogs[index] = newBlog;
    this.blogsChanged.next(this.blogs.slice());
  }

  deleteBlog(index: number) {
    this.blogs.splice(index, 1);
    this.blogsChanged.next(this.blogs.slice());
  }

  setBlogs(blogs: Blog[]) {
    this.blogs = blogs;
    this.blogsChanged.next(this.blogs.slice());
  }
}