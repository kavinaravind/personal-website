import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsComponent } from './projects.component';
import { PowerHourComponent } from './power-hour/power-hour.component';

const projectRoutes: Routes = [
    { path: '', component: PowerHourComponent },
    { path: 'power-hour', component: ProjectsComponent }
]; 
@NgModule({
    imports: [
        RouterModule.forChild(projectRoutes)
    ],
    exports: [RouterModule]
})
export class ProjectsRoutingModule {} 