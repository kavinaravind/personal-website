import { Routes, RouterModule } from '@angular/router';

import { CareerComponent } from "./career/career.component";
import { LanguagesComponent } from "./languages/languages.component";
import { PicturesComponent } from "./pictures/pictures.component";
import { CuisineComponent } from './cuisine/cuisine.component';
import { ShoppingListComponent } from './cuisine/shopping-list/shopping-list.component';
import { RecipesComponent } from './cuisine/recipes/recipes.component';
import { RecipeStartComponent } from './cuisine/recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './cuisine/recipes/recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './cuisine/recipes/recipe-detail/recipe-detail.component';

const personalRoutes: Routes = [
    { path: 'career', component: CareerComponent },
    { path: 'languages', component: LanguagesComponent },
    { path: 'pictures', component: PicturesComponent },
    { path: 'cuisine', loadChildren: './cuisine/cuisine.module#CuisineModule' },
    { path: 'knowledge', loadChildren: './knowledge/knowledge.module#KnowledgeModule'}
];

export class PersonalRoutingModule {}