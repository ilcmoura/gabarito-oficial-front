import {Routes} from '@angular/router'

import { HomeComponent } from './component/home/home.component'
import { DashboardComponent } from './component/dashboard/dashboard.component'
import { CollegeTestComponent } from './component/college-test/college-test.component'
import { CourseComponent } from './component/course/course.component'
import { ExerciseListComponent } from './component/exercise-list/exercise-list.component'
import { ListSubjectLevelComponent } from './component/list-subject-level/list-subject-level.component'


export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'vestibulares', component: CollegeTestComponent},
  {path: 'curso', component: CourseComponent},
  {path: 'listas-de-exercicios', component: ExerciseListComponent},
  {path: 'listas-por-nivel-assunto', component: ListSubjectLevelComponent}
]
