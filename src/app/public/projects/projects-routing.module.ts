import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../_services/auth-guard.service';

import { ProjectsComponent } from './projects.component';
import { PowerHourComponent } from './power-hour/power-hour.component';

const projectsRoutes: Routes = [

    // { path: '', component: ProjectsComponent },
    // { path: 'power-hour', component: PowerHourComponent }

]; 
@NgModule({
    imports: [
        RouterModule.forChild(projectsRoutes)
    ],
})
export class ProjectsRoutingModule {} 