import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from "../recipes/recipes.component";
import { RecipeStartComponent } from "../recipes/recipe-start/recipe-start.component";
import { RecipeEditComponent } from "../recipes/recipe-edit/recipe-edit.component";
import { AuthGuard } from "../../../_services/auth-guard.service";
import { RecipeDetailComponent } from "../recipes/recipe-detail/recipe-detail.component";

const recipesRoutes: Routes = [
    { path: '', component: RecipesComponent, children: [
        { path: '', component: RecipeStartComponent },
        { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard] },
        { path: ':id', component: RecipeDetailComponent },
        { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard]}
    ] }
];

@NgModule({
    imports: [
        RouterModule.forChild(recipesRoutes)
    ],
    exports: [RouterModule],
    providers: [
        AuthGuard
    ]
})
export class RecipesRoutingModule {} 