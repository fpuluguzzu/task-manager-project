import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { TaskComponent } from '../components/task/task.component';
import { NgFor } from '@angular/common';
import { Itask } from '../interfaces/itask';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, TaskComponent, NgFor]
})
export class Tab2Page {

  tasks!:Itask[];

  constructor (service: TasksService) {
    service.getTasks().subscribe((results) => {
      this.tasks = results;
    });
  } 

}
