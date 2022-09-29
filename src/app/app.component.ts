import { Component } from '@angular/core';

// import { MovieState } from './Store/Reducers/movie.reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NGRX-POC';
  constructor() { }
  ngOnInit(): void {
  }
}