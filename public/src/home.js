import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class Home {
  standings = null;


  constructor(http) {
    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('http://localhost:3000/');
    });

    this.http = http;
  }

  activate() {
    return this.http.fetch('Standings')
      .then(response => response.json())
      .then(standings => this.standings = standings);
  }
}