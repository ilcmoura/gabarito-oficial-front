import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common'

import { RouterModule, PreloadAllModules } from '@angular/router';

import { DataTablesModule } from 'angular-datatables';

import { ROUTES } from './app.routes'

import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HeaderComponent } from './common/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { MenuComponent } from './common/menu/menu.component';
import { ExerciseListComponent } from './component/exercise-list/exercise-list.component';
import { ListSubjectLevelComponent } from './component/list-subject-level/list-subject-level.component';
import { CollegeTestComponent } from './component/college-test/college-test.component';
import { CourseComponent } from './component/course/course.component';
import { PageTopComponent } from './common/page-top/page-top.component';
import { InputComponent } from './shared/input/input.component';
import { CourseBoxComponent } from './shared/course-box/course-box.component';
import { RatingComponent } from './shared/rating/rating.component';
import { MessagesComponent } from './shared/messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    HomeComponent,
    MenuComponent,
    ExerciseListComponent,
    ListSubjectLevelComponent,
    CollegeTestComponent,
    CourseComponent,
    PageTopComponent,
    InputComponent,
    CourseBoxComponent,
    RatingComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules})
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy},
              {provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
