import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/Rx';

@Injectable()
export class WorkoutService {

  http: any;
  apiKey: String;
  workoutsUrl: String;
  databaseName: String;
  collectionName: String;

  constructor(http: Http){
    this.http = http;
    this.apiKey = '<apiKey>';

    this.collectionName = 'workouts'
    this.databaseName = 'myworkouts_dev';
    this.workoutsUrl = 'http://localhost:8100/databases/' + this.databaseName + '/collections/'+ this.collectionName;
  }

  getWorkouts() {
    return this.http.get(this.workoutsUrl + '?apiKey=' + this.apiKey)
      .map(res => res.json());
  }

  addWorkout(workout) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.workoutsUrl+'?apiKey='+this.apiKey, JSON.stringify(workout), {headers: headers})
      .map(res => res.json());

  }
}
