import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";

import { coreRoutes } from "./core/core-routing";

import { CoverComponent } from "./cover/cover.component";
import { NotFoundComponent } from "./not-found/not-found.component";

const appRoutes: Routes = [

    // app-routing
    { path: '', children: [
        { path: '', component: CoverComponent },
        { path: 'home', children: [...coreRoutes] }
    ]},
    { path: '404', component: NotFoundComponent },
    { path: '**', redirectTo: '404' },
];

export const AppRouting = RouterModule.forRoot(appRoutes);