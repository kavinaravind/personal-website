import { NgModule } from "@angular/core";

import { HeaderComponent } from "../core/header/header.component";
import { HomeComponent } from "../core/home/home.component";
import { SharedModule } from "../shared/shared.module";
import { AppRoutingModule } from "../app-routing.module";
import { AgmCoreModule } from "@agm/core";

import { ShoppingListService } from "../services/shopping-list.service";
import { RecipeService } from "../services/recipe.service";
import { DataStorageService } from "../shared/data-storage.service";
import { AuthService } from "../auth/auth.service";
import { FooterComponent } from "./footer/footer.component";
import { ContactComponent } from "../contact/contact.component";
import { ResumeComponent } from "../resume/resume.component";
import { PdfViewerComponent } from "ng2-pdf-viewer";
import { ProjectsComponent } from "../projects/projects.component";

@NgModule({
    declarations: [
        HeaderComponent,
        PdfViewerComponent,
        HomeComponent,
        ProjectsComponent,
        ContactComponent,
        ResumeComponent,
        FooterComponent
    ],
    imports: [
        SharedModule,
        AppRoutingModule,
        AgmCoreModule
    ],
    exports: [
        AppRoutingModule,
        HeaderComponent,
        FooterComponent
    ],
    providers: [
        ShoppingListService,
        RecipeService,
        DataStorageService,
        AuthService
    ]
})
export class CoreModule {} 