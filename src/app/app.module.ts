import { NgModule, APP_INITIALIZER, Injectable, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { AppRouting } from "./app-routing";
import { SharedModule } from "./_shared/shared.module";
import { ShoppingListModule } from "./personal/cuisine/shopping-list/shopping-list.module";
import { AuthModule } from "./_auth/auth.module";
import { CoreModule } from "./core/core.module";
import { PersonalModule } from "./personal/personal.module";
import { AgmCoreModule, LazyMapsAPILoaderConfigLiteral } from '@agm/core';
import { PublicModule } from "./public/public.module";
import { KnowledgeModule } from './personal/knowledge/knowledge.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { CoverComponent } from './cover/cover.component';
import { CoreComponent } from './core/core.component';
import { NotFoundComponent } from "./not-found/not-found.component";

import { StartupService } from "./_services/startup.service";

export function startupServiceFactory(startupService: StartupService): Function {
  return () => startupService.load();
}

@Injectable()
class GoogleMapsConfig implements LazyMapsAPILoaderConfigLiteral, OnInit {
  
  public apiKey: string;
  
  constructor(private startup: StartupService) { }

  ngOnInit() {
    this.apiKey = this.startup.startupData.mapKey;
  }
}

@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
    CoverComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule,
    AuthModule,
    CoreModule,
    PublicModule,
    PersonalModule,
    AppRouting,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyALoB65r4Dm6PuLPb77YhVOtQLadltuI7s'
    })
  ],
  providers: [
    StartupService,
    {
        provide: APP_INITIALIZER,
        useFactory: startupServiceFactory,
        deps: [StartupService],
        multi: true
    }
],
  bootstrap: [AppComponent]
})

export class AppModule {}
