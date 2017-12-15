import { NgModule } from "@angular/core";
import { SharedModule } from "../_shared/shared.module";
import { AgmCoreModule } from "@agm/core";

import { PdfViewerComponent } from "ng2-pdf-viewer/dist";
import { ResumeComponent } from "./resume/resume.component";
import { ContactComponent } from "./contact/contact.component";

import { BlogService } from "../_services/blog.service";
import { AuthService } from "../_services/auth.service";
import { HomeComponent } from "./home/home.component";

@NgModule({
    declarations: [
        HomeComponent,
        PdfViewerComponent,
        ResumeComponent,
        ContactComponent,
    ],
    imports: [
        SharedModule,
        AgmCoreModule
    ],
    providers: [
        BlogService,
        AuthService
    ]
})
export class PublicModule {}