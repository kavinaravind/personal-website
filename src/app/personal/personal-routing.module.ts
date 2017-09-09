import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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

import { PicturesComponent } from "./pictures/pictures.component";
import { CareerComponent } from "./career/career.component";
import { LanguagesComponent } from "./languages/languages.component";

const personalRoutes: Routes = [
    { path: '', component: KnowledgeComponent, children: [
        { path: 'anatonomy-physiology', component: AnatonomyPhysiologyComponent },
        { path: 'art-architecture', component: ArtArchitectureComponent },
        { path: 'astronomy', component: AstronomyComponent },
        { path: 'biology', component: BiologyComponent },
        { path: 'ecology', component: EcologyComponent },
        { path: 'economics', component: EconomicsComponent },
        { path: 'geography', component: GeographyComponent },
        { path: 'history', component: HistoryComponent },
        { path: 'literature', component: LiteratureComponent },
        { path: 'mathematics', component: MathematicsComponent },        
        { path: 'music', component: MusicComponent },
        { path: 'mythology', component: MythologyComponent },
        { path: 'philosophy', component: PhilosophyComponent },
        { path: 'political-theory', component: PoliticalTheoryComponent },
        { path: 'religion', component: ReligionComponent },
        { path: 'sociology', component: SociologyComponent },     
    ]}  
];

@NgModule({
    imports: [
        RouterModule.forRoot(personalRoutes)
    ],
    exports: [RouterModule]
})
export class PersonalRoutingModule {}