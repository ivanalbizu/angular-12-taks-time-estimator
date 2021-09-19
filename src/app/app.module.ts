import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProjectsComponent } from './components/project/projects/projects.component';
import { ProjectItemComponent } from './components/project/project-item/project-item.component';
import { ProjectDetailsComponent } from './components/project/project-details/project-details.component';
import { ProjectAddComponent } from './components/project/project-add/project-add.component';
import { TaskItemComponent } from './components/task/task-item/task-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectsComponent,
    ProjectItemComponent,
    ProjectDetailsComponent,
    ProjectAddComponent,
    TaskItemComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
