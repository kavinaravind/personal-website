import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ResumeComponent } from './resume/resume.component';

export const publicRoutes : Routes = [
    
    { path: "", component : HomeComponent },
    { path: 'projects', loadChildren: '../public/projects/projects.module#ProjectsModule' },
    { path: 'resume', component: ResumeComponent },
    { path: 'blog', loadChildren: '../public/blog/blog.module#BlogModule' },    
    { path: 'contact', component: ContactComponent },
]

export const publicRouting = RouterModule.forChild(publicRoutes);