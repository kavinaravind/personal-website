import { NgModule } from "@angular/core";
import { SharedModule } from "../_shared/shared.module";
import { FlexLayoutModule } from "@angular/flex-layout";

import { CoreComponent } from "./core.component";
import { HeaderComponent } from "../core/header/header.component";
import { FooterComponent } from "./footer/footer.component";

import { DataStorageService } from "../_shared/data-storage.service";
import { AuthService } from "../_services/auth.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ProjectsModule } from "../public/projects/projects.module";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent
    ],
    imports: [
        SharedModule,
        ProjectsModule,
        RouterModule,
        BrowserAnimationsModule,        
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
    ],
    providers: [
        DataStorageService,
        AuthService,
    ]
})
export class CoreModule {} 