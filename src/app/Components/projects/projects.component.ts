import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/Services/projects.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projectList: any;
  projectList$: any = [];

  constructor(private ProjectsService: ProjectsService ) { }

  // ngOnInit(): void {
  //   this.ProjectsService.getProjects().subscribe((data: any) => {
  //     this.projectList = data;
  //     console.log(this.projectList);
  //   })
  // }


  ngOnInit(): void {
    this.projectList$ = this.ProjectsService.getProjects();
    console.log(this.projectList$);
  }
}
