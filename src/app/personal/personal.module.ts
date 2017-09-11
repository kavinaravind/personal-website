import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../_shared/shared.module";
import { PersonalRoutingModule } from "./personal-routing.module";

import { PicturesComponent } from "./pictures/pictures.component";
import { CareerComponent } from "./career/career.component";
import { LanguagesComponent } from "./languages/languages.component";

import { ShoppingListService } from "../_services/shopping-list.service";
import { RecipeService } from "../_services/recipe.service";
import { DataStorageService } from "../_shared/data-storage.service";
import { AuthService } from "../_services/auth.service";
import { CuisineComponent } from "./cuisine/cuisine.component";

@NgModule({
    declarations: [
        PicturesComponent,
        CareerComponent,
        LanguagesComponent
    ],
    imports: [
        SharedModule,
        PersonalRoutingModule,
        SharedModule
    ],
    providers: [
        ShoppingListService,
        RecipeService,
        DataStorageService,
        AuthService
    ]
})
export class PersonalModule {}