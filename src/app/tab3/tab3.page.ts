import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, FormsModule, ReactiveFormsModule],
})
export class Tab3Page {
  taskForm;

  constructor(formBuilder: FormBuilder) {
    this.taskForm = formBuilder.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      task_date: ['', [Validators.required]],
      category: ['', [Validators.required]],
      priority_level: ['', [Validators.required]],
      progress_level: ['', [Validators.required]],

    });
  }

  get titleFormControl() {
    return this.taskForm.get('title')!;
  }
  get descriptionFormControl() {
    return this.taskForm.get('description')!;
  }
  get taskDateFormControl() {
    return this.taskForm.get('task_date')!;
  }
  get categoryFormControl() {
    return this.taskForm.get('category')!;
  }
  get priorityLevelFormControl() {
    return this.taskForm.get('priority_level')!;
  }
  get progressLevelFormControl() {
    return this.taskForm.get('progress_level')!;
  }

  onSubmit() {
console.log(this.taskForm.value);
this.taskForm.reset()
  }

}


