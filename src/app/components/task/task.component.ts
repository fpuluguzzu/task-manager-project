import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Itask } from 'src/app/interfaces/itask';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class TaskComponent {
  @Input() task!:Itask;

}
