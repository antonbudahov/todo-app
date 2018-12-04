import {Injectable} from '@angular/core';
import {Task} from './model/task.interface';
import {BehaviorSubject, Observable} from 'rxjs';

import {of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class TaskService {
    private tasksUrl = 'api/tasks'; // URL to web api
    private headers = new HttpHeaders({'Content-Type': 'application/json'});

    private taskSearchSource = new BehaviorSubject<string>('');
    newSearch = this.taskSearchSource.asObservable();

    constructor(private http: HttpClient) {
    }

    public emitSearch(title: string) {
        this.taskSearchSource.next(title);
    }

    public getAllTasks(): Observable<Task[]> {
        return this.http.get<Task[]>(this.tasksUrl).pipe(
            tap(i => console.log(`${i} fetched tasks`)),
            catchError(this.handleError('getAllTasks', []))
        );
    }

    public getTaskById(id: number): Observable<Task> {
        const url = `${this.tasksUrl}/${id}`;
        return this.http.get<Task>(url);
    }

    /** POST: add a new hero to the server */
    public add(task: Task): Observable<Task> {
        return this.http.post<Task>(this.tasksUrl, task, {headers: this.headers}).pipe(
            tap((i: Task) => console.log(`added task w/ id=${i.id}`)),
            catchError(this.handleError<Task>('addTask'))
        );
    }

    /**
     * DELETE: delete the hero from the server
     * @param {Task | Number} task
     * @returns {Observable<Task>}
     */
    public delete(task: Task): Observable<Task> {
        const id = typeof task === 'number' ? task : task.id;
        const url = `${this.tasksUrl}/${id}`;
        return this.http.delete<Task>(url, {headers: this.headers})
            .pipe(
                tap(_ => console.log(`deleted task id=${id}`)),
                catchError(this.handleError<Task>('deleteTask'))
            );
    }

    /** PUT: update the task on the server */
    public update(task: Task): Observable<Task> {
        return this.http.put<Task>(`${this.tasksUrl}/${task.id}`, task, {headers: this.headers});
    }

    /**
     * Handle Http operation that failed.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     * @returns {(error:any)=>Observable<T>}
     */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            console.error(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}
