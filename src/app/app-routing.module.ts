import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";

import { HomeComponent } from "./core/home/home.component";

import { ShoppingListComponent } from "./personal/cuisine/shopping-list/shopping-list.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { KnowledgeComponent } from "./personal/knowledge/knowledge.component";
import { CareerComponent } from "./personal/career/career.component";
import { PicturesComponent } from "./personal/pictures/pictures.component";
import { LanguagesComponent } from "./personal/languages/languages.component";
import { CuisineComponent } from "./personal/cuisine/cuisine.component";

const appRoutes: Routes = [

    // app-routing
    { path: '', component: HomeComponent },

    // auth-routing
    { path: 'signup', redirectTo: 'signup' },
    { path: 'signin', redirectTo: 'signin' },

    // public-routing
    { path: 'projects', redirectTo: 'projects' },
    { path: 'resume', redirectTo: 'resume' },
    { path: 'blog', redirectTo: 'blog' },
    { path: 'contact', redirectTo: 'contact' },

    // personal-routing
    { path: 'career', component: CareerComponent },
    { path: 'languages', component: LanguagesComponent },
    { path: 'pictures', component: PicturesComponent },
    { path: 'cuisine', component: CuisineComponent },
    { path: 'knowledge', loadChildren: './personal/personal.module#PersonalModule'},

    { path: '404', component: NotFoundComponent },
    { path: '**', redirectTo: '404' },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})
export class AppRoutingModule {

}