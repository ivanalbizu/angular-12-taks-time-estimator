import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/Project';
import { ProjectService } from 'src/app/services/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.scss'],
})
export class ProjectAddComponent implements OnInit {
  project: Project = {
    id: 0,
    name: '',
    tasks: [],
    cms: '',
    frameworkJS: '',
    urlDesign: '',
    backExpertise: '',
    frontExpertise: ''
  }
  submitted: boolean = false;

  constructor(private projectService: ProjectService, private router: Router) {}

  ngOnInit(): void {}

  onSubmitCreate(project: Project): void {
    this.projectService.create(project)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
          this.router.navigate([`/projects/${response.id}`]);
        },
        error => {
          console.log(error);
        });
  }
}
