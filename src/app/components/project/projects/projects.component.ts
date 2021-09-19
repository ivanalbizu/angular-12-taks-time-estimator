import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { Project } from 'src/app/models/Project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projectService
      .getAll()
      .subscribe((projects) => (this.projects = projects));
  }

  deleteProject(project: Project): void {
    this.projectService
      .delete(project)
      .subscribe(
        () => (this.projects = this.projects.filter(t => t.id !== project.id))
      );
  }
}
