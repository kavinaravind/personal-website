import { NgModule, APP_INITIALIZER, Injectable, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { AppRoutingModule } from "./app-routing.module";
import { SharedModule } from "./_shared/shared.module";
import { ShoppingListModule } from "./personal/cuisine/shopping-list/shopping-list.module";
import { AuthModule } from "./_auth/auth.module";
import { CoreModule } from "./core/core.module";
import { PersonalModule } from "./personal/personal.module";
import { LAZY_MAPS_API_CONFIG, LazyMapsAPILoaderConfigLiteral, AgmCoreModule } from '@agm/core';
import { PublicModule } from "./public/public.module";
import { KnowledgeModule } from './personal/knowledge/knowledge.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
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
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    AuthModule,
    CoreModule,
    PublicModule,
    PersonalModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyALoB65r4Dm6PuLPb77YhVOtQLadltuI7s'
    })
  ],
  providers: [
    StartupService,
    {
        // Provider for APP_INITIALIZER
        provide: APP_INITIALIZER,
        useFactory: startupServiceFactory,
        deps: [StartupService],
        multi: true
    }
    // ,{
    //   provide: LAZY_MAPS_API_CONFIG,
    //   useClass: GoogleMapsConfig,
    //   deps: [StartupService]
    // }
],
  bootstrap: [AppComponent]
})

export class AppModule { }
