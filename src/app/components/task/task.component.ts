import { ITask } from '../../models/interfaces/Task.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit{
@Input() task: ITask | undefined;

constructor(){}

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
}

deleteTask(){
  console.log('Eliminar una tarea', this.task?.title);
}
}
