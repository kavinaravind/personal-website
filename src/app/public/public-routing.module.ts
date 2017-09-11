import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ProjectsComponent } from "./projects/projects.component";
import { ResumeComponent } from "./resume/resume.component";
import { BlogComponent } from "./blog/blog.component";
import { ContactComponent } from "./contact/contact.component";

const publicRoutes: Routes = [
    { path: 'projects', component: ProjectsComponent },
    { path: 'resume', component: ResumeComponent },
    { path: 'blog', loadChildren: './blog/blog.module#BlogModule' },    
    { path: 'contact', component: ContactComponent }
];
@NgModule({
    imports: [
        RouterModule.forChild(publicRoutes)
    ],
    exports: [RouterModule]
})
export class PublicRoutingModule {}