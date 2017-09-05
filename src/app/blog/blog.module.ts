import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { BlogComponent } from "./blog.component";
import { BlogCreateComponent } from "./blog-create/blog-create.component";
import { BlogEditComponent } from "./blog-edit/blog-edit.component";
import { BlogPostComponent } from "./blog-post/blog-post.component";

@NgModule({
    declarations: [
        BlogComponent,
        BlogCreateComponent,
        BlogEditComponent,
        BlogPostComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class BlogModule {}