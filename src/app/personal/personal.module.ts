import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RecipesRoutingModule } from "../personal/cuisine/recipes/recipes-routing.module";
import { SharedModule } from "../_shared/shared.module";
import { PersonalRoutingModule } from "./personal-routing.module";

import { PicturesComponent } from "./pictures/pictures.component";
import { CareerComponent } from "./career/career.component";
import { LanguagesComponent } from "./languages/languages.component";
import { KnowledgeComponent } from "./knowledge/knowledge.component";

import { AnatonomyPhysiologyComponent } from "./knowledge/anatonomy-physiology/anatonomy-physiology.component";
import { ArtArchitectureComponent } from "./knowledge/art-architecture/art-architecture.component";
import { AstronomyComponent } from "./knowledge/astronomy/astronomy.component";
import { BiologyComponent } from "./knowledge/biology/biology.component";
import { EcologyComponent } from "./knowledge/ecology/ecology.component";
import { EconomicsComponent } from "./knowledge/economics/economics.component";
import { GeographyComponent } from "./knowledge/geography/geography.component";
import { HistoryComponent } from "./knowledge/history/history.component";
import { LiteratureComponent } from "./knowledge/literature/literature.component";
import { MathematicsComponent } from "./knowledge/mathematics/mathematics.component";
import { MusicComponent } from "./knowledge/music/music.component";
import { MythologyComponent } from "./knowledge/mythology/mythology.component";
import { PhilosophyComponent } from "./knowledge/philosophy/philosophy.component";
import { PoliticalTheoryComponent } from "./knowledge/political-theory/political-theory.component";
import { ReligionComponent } from "./knowledge/religion/religion.component";
import { SociologyComponent } from "./knowledge/sociology/sociology.component";

import { ShoppingListService } from "../_services/shopping-list.service";
import { RecipeService } from "../_services/recipe.service";
import { DataStorageService } from "../_shared/data-storage.service";
import { AuthService } from "../_services/auth.service";
import { CuisineComponent } from "./cuisine/cuisine.component";

@NgModule({
    declarations: [
        PicturesComponent,
        CareerComponent,
        LanguagesComponent, 
        KnowledgeComponent,
        AnatonomyPhysiologyComponent,
        ArtArchitectureComponent,
        AstronomyComponent,
        BiologyComponent,
        EcologyComponent,
        EconomicsComponent,
        GeographyComponent,
        HistoryComponent,
        LiteratureComponent,
        MathematicsComponent,
        MusicComponent,
        MythologyComponent,
        PhilosophyComponent,
        PoliticalTheoryComponent,
        ReligionComponent,
        SociologyComponent
    ],
    imports: [
        CommonModule,
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