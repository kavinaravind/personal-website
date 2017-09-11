import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from "../../_services/auth-guard.service";

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

const knowledgeRoutes: Routes = [
    { path: 'knowledge', component: KnowledgeComponent, children: [
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
        RouterModule.forChild(knowledgeRoutes)
    ],
    exports: [RouterModule],
    providers: [
        AuthGuard
    ]
})
export class KnowledgeRoutingModule {}