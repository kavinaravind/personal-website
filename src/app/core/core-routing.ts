import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// home
import { CoreComponent } from "./core.component";

// auth routes
import { SignupComponent } from "../_auth/signup/signup.component";
import { SigninComponent } from "../_auth/signin/signin.component";

// public routes
import { ProjectsComponent } from "../public/projects/projects.component";
import { ResumeComponent } from "../public/resume/resume.component";
import { ContactComponent } from "../public/contact/contact.component";
import { publicRoutes } from "../public/public.routes";

export const coreRoutes: Routes = [
    { path: '', component: CoreComponent, 
        children: [
            ...publicRoutes,
            { path: 'signup', component: SignupComponent },
            { path: 'signin', component: SigninComponent },            
        ]
    }
];

export const coreRouting = RouterModule.forChild(coreRoutes);