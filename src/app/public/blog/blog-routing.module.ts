import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../_services/auth-guard.service';

import { BlogComponent } from './blog.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { BlogPostComponent } from './blog-post/blog-post.component';

const blogRoutes: Routes = [
    { path: '', component: BlogComponent },
    { path: 'new', component: BlogEditComponent, canActivate: [AuthGuard] },
    { path: ':id', component: BlogPostComponent },
    { path: ':id/edit', component: BlogEditComponent, canActivate: [AuthGuard] }
]; 
@NgModule({
    imports: [
        RouterModule.forChild(blogRoutes)
    ],
    exports: [RouterModule]
})
export class BlogRoutingModule {} 