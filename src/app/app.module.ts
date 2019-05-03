import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { NgSurveysModule } from 'ng-surveys';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurveyBuilderComponent } from './survey-builder/survey-builder.component';
import { SurveyViewerComponent } from './survey-viewer/survey-viewer.component';
import { ModelViewerComponent } from './model-viewer/model-viewer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ShellModule } from './shell/shell.module';

@NgModule({
  declarations: [
    AppComponent,
    SurveyBuilderComponent,
    SurveyViewerComponent,
    ModelViewerComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    ShellModule,
    HttpClientModule,
    NgSurveysModule,
    AppRoutingModule, // must be imported as the last module as it contains the fallback route
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
