import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { Task } from '../model/task';

@Injectable()
export class TasksService {

    private tasksList: Array<Task> = [];
    private tasksDone: Array<Task> = [];

    private tasksListObs = new BehaviorSubject<Array<Task>>([]); 
    private tasksDoneObs = new BehaviorSubject<Array<Task>>([]);
    
    constructor() {
        this.tasksList = [
            {name:'zakupy', created: new Date()},
            {name: 'mycie', created: new Date()},
            {name: 'nauka angulara', created: new Date()},
            {name: 'sprzatanie', created: new Date()}
        ]
        this.tasksListObs.next(this.tasksList);
    }

    add(task: Task) {
        this.tasksList.push(task);
        this.tasksListObs.next(this.tasksList);
    }

    remove(task: Task) {
        this.tasksList = this.tasksList.filter(e => e !== task);
        this.tasksListObs.next(this.tasksList);
    }

    done(task: Task) {
        this.tasksDone.push(task);
        this.remove(task);
        this.tasksDoneObs.next(this.tasksDone);
    }

    getTasksListObs(): Observable<Array<Task>>{
        return this.tasksListObs.asObservable();
    }

    getTasksDoneObs(): Observable<Array<Task>>{
        return this.tasksDoneObs.asObservable();
    }






}