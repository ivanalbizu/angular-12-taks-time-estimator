import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { HelperService } from 'src/app/services/helper.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/models/Project';
import { Task } from 'src/app/models/Task';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
})
export class ProjectDetailsComponent implements OnInit {
  project: Project = {
    id: 0,
    name: '',
    tasks: [],
    cms: '',
    frameworkJS: '',
    urlDesign: '',
    backExpertise: '',
    frontExpertise: ''
  };
  task: Task = {
    id: '',
    name: '',
    page: '',
    description: '',
    estimatedTime: 0,
    realTime: 0,
  };

  constructor(
    private projectService: ProjectService,
    private helperService: HelperService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getProject(this.route.snapshot.params.id);
  }

  getProject(id: number): void {
    this.projectService.get(id).subscribe((task) => (this.project = task));
  }

  updateProject(project: Project): void {
    this.projectService.update(project).subscribe();
  }

  createTask(task: Task): void {
    task.id = this.helperService.id();
    this.project.tasks.push({ ...task });
    this.updateProject(this.project);
    this.task = {
      id: '',
      name: '',
      page: '',
      description: '',
      estimatedTime: 0,
      realTime: 0,
    };
  }

  deleteTask(task: Task): void {
    this.project.tasks = this.project.tasks.filter((t) => t.id !== task.id);
    this.updateProject(this.project);
  }

  updateTask(event: any, task: any) {
    const target = event.target;
    const field = target.getAttribute('data-field');
    const currentValue = task[field];
    const newValue = target.type == 'text' ? (target.value).trim() || '' : target.value;

    if (currentValue == newValue) return

    task[field] = newValue;
    this.project.tasks[task] = { ...task };
    this.updateProject(this.project);
  }

  deleteProject(project: Project): void {
    this.projectService.delete(project).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/projects']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
