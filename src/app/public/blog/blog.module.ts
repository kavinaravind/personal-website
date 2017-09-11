import { NgModule } from "@angular/core";
import { SharedModule } from "../../_shared/shared.module";
import { FormsModule } from "@angular/forms";

import { BlogComponent } from "./blog.component";
import { BlogItemComponent } from "./blog-item/blog-item.component";
import { BlogEditComponent } from "./blog-edit/blog-edit.component";
import { BlogPostComponent } from "./blog-post/blog-post.component";
import { BlogRoutingModule } from "./blog-routing.module";

@NgModule({
    declarations: [
        BlogComponent,
        BlogItemComponent,
        BlogEditComponent,
        BlogPostComponent
    ],
    imports: [
        SharedModule,
        FormsModule,
        BlogRoutingModule
    ]
})
export class BlogModule {}