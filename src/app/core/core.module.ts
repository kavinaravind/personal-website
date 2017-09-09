import { NgModule } from "@angular/core";
import { SharedModule } from "../_shared/shared.module";
import { AppRoutingModule } from "../app-routing.module";

import { HeaderComponent } from "../core/header/header.component";
import { HomeComponent } from "../core/home/home.component";
import { FooterComponent } from "./footer/footer.component";

import { DataStorageService } from "../_shared/data-storage.service";
import { AuthService } from "../_services/auth.service";

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent,
        FooterComponent
    ],
    imports: [
        SharedModule,
        AppRoutingModule,
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        AppRoutingModule,        
    ],
    providers: [
        DataStorageService,
        AuthService
    ]
})
export class CoreModule {} 