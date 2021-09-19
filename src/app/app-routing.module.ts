import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './components/project/projects/projects.component';
import { ProjectDetailsComponent } from './components/project/project-details/project-details.component';
import { ProjectAddComponent } from './components/project/project-add/project-add.component';

const routes: Routes = [
  { path: '', component: ProjectsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects-add', component: ProjectAddComponent },
  { path: 'projects/:id', component: ProjectDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
