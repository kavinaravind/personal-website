import { NgModule } from "@angular/core";
import { SharedModule } from "../../_shared/shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProjectsRoutingModule } from "./projects-routing.module";
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';

import { ProjectsComponent } from "./projects.component";
import { PowerHourComponent } from "./power-hour/power-hour.component";
import { MdDialogModule, MdCardModule } from "@angular/material";

@NgModule({
    declarations: [
        ProjectsComponent,
        PowerHourComponent
    ],
    imports: [
        SharedModule,
        ProjectsRoutingModule,
        MdDialogModule,
        MdCardModule,
        AngularFontAwesomeModule
    ]
})
export class ProjectsModule {}