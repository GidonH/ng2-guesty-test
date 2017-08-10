import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng2 guesty';
  cities = ['London', 'Paris', 'Tel Aviv', 'NYC'];
   test = function(e){
    alert(e);
}
}
