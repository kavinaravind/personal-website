import { NgModule } from "@angular/core";
import { SharedModule } from "../../_shared/shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BlogRoutingModule } from "./blog-routing.module";

import { BlogComponent } from "./blog.component";
import { BlogItemComponent } from "./blog-item/blog-item.component";
import { BlogEditComponent } from "./blog-edit/blog-edit.component";
import { BlogPostComponent } from "./blog-post/blog-post.component";
import { BlogSidePanelComponent } from "./blog-side-panel/blog-side-panel.component";

@NgModule({
    declarations: [
        BlogComponent,
        BlogItemComponent,
        BlogEditComponent,
        BlogPostComponent,
        BlogSidePanelComponent
    ],
    imports: [
        SharedModule,
        FormsModule,
        ReactiveFormsModule,        
        BlogRoutingModule
    ]
})
export class BlogModule {}