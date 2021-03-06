import { NgModule } from "@angular/core";

import { SharedModule } from "../../_shared/shared.module";
import { FormsModule } from "@angular/forms";
import { KnowledgeRoutingModule } from "./knowledge-routing.module";

import { KnowledgeComponent } from "./knowledge.component";
import { AnatonomyPhysiologyComponent } from "./anatonomy-physiology/anatonomy-physiology.component";
import { ArtArchitectureComponent } from "./art-architecture/art-architecture.component";
import { AstronomyComponent } from "./astronomy/astronomy.component";
import { BiologyComponent } from "./biology/biology.component";
import { EcologyComponent } from "./ecology/ecology.component";
import { EconomicsComponent } from "./economics/economics.component";
import { GeographyComponent } from "./geography/geography.component";
import { HistoryComponent } from "./history/history.component";
import { LiteratureComponent } from "./literature/literature.component";
import { MathematicsComponent } from "./mathematics/mathematics.component";
import { MusicComponent } from "./music/music.component";
import { MythologyComponent } from "./mythology/mythology.component";
import { PhilosophyComponent } from "./philosophy/philosophy.component";
import { PoliticalTheoryComponent } from "./political-theory/political-theory.component";
import { ReligionComponent } from "./religion/religion.component";
import { SociologyComponent } from "./sociology/sociology.component";
import { MdSidenavModule, MdListModule, MdButtonModule } from '@angular/material';

@NgModule({
    declarations: [
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
        SharedModule,
        FormsModule,
        KnowledgeRoutingModule,
        MdSidenavModule,
        MdListModule,
        MdButtonModule
    ]
})
export class KnowledgeModule {}