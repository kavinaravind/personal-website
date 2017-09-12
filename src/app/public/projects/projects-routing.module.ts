import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsComponent } from './projects.component';
import { PowerHourComponent } from './power-hour/power-hour.component';

const projectRoutes: Routes = [
    { path: '', component: ProjectsComponent },
    { path: 'power-hour', component: PowerHourComponent }
]; 
@NgModule({
    imports: [
        RouterModule.forChild(projectRoutes)
    ],
    exports: [RouterModule]
})
export class ProjectsRoutingModule {} 