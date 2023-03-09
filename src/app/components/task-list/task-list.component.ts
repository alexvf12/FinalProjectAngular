import { ITask, Levels } from '../../models/interfaces/Task.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})

export class TaskListComponent {
task1: ITask = {
  title: 'task1',
  description: 'description1',
  completed: false,
  level: Levels.Info
}

  task2: ITask = {
    title: 'task2',
    description: 'description2',
    completed: true,
    level: Levels.Urgent
  }

  deleteTask(task: ITask){
alert(`Se procede a eliminar la tarea ${task.title}`);
  }
}
