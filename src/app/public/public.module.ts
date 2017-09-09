import { NgModule } from "@angular/core";
import { AgmCoreModule } from "@agm/core";
import { PublicRoutingModule } from "./public-routing.module";
import { AppRoutingModule } from "../app-routing.module";

import { ProjectsComponent } from "./projects/projects.component";
import { PdfViewerComponent } from "ng2-pdf-viewer/dist";
import { ResumeComponent } from "./resume/resume.component";
import { BlogComponent } from "./blog/blog.component";
import { ContactComponent } from "./contact/contact.component";

@NgModule({
    declarations: [
        ProjectsComponent,
        //PdfViewerComponent,
        ResumeComponent,
        ContactComponent,      
    ],
    imports: [
        AgmCoreModule,
        PublicRoutingModule
    ]
})
export class PublicModule {}