import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { SurveyViewerComponent } from './survey-viewer/survey-viewer.component';
import { SurveyBuilderComponent } from './survey-builder/survey-builder.component';
import { ModelViewerComponent } from './model-viewer/model-viewer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { Shell } from './shell/shell.service';

const routes: Routes = [
  Shell.childRoutes(
   [
     {
       path: '',
       component: SurveyBuilderComponent,
     },
     {
       path: 'viewer',
       component: SurveyViewerComponent
     },
     {
       path: 'viewer/:pageId',
       component: SurveyViewerComponent
     },
     {
       path: 'model',
       component: ModelViewerComponent
     },
   ]),
  // Fallback when no prior route is matched
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
