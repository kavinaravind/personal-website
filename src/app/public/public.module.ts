import { NgModule } from "@angular/core";
import { AgmCoreModule } from "@agm/core";
import { PublicRoutingModule } from "./public-routing.module";
import { SharedModule } from "../_shared/shared.module";

import { ProjectsComponent } from "./projects/projects.component";
import { PdfViewerComponent } from "ng2-pdf-viewer/dist";
import { ResumeComponent } from "./resume/resume.component";
import { ContactComponent } from "./contact/contact.component";

import { BlogService } from "../_services/blog.service";
import { AuthService } from "../_services/auth.service";

@NgModule({
    declarations: [
        ProjectsComponent,
        PdfViewerComponent,
        ResumeComponent,
        ContactComponent,      
    ],
    imports: [
        SharedModule,
        AgmCoreModule,
        PublicRoutingModule
    ],
    providers: [
        BlogService,
        AuthService
    ]
})
export class PublicModule {}