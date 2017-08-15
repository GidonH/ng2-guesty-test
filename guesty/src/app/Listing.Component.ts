import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
    selector: 'app-root',
    templateUrl: './Listing.component.html',
    styleUrls: ['./app.component.css'],

})
export class ListingComponent {
    constructor(private http: HttpClient) {
    }

    results: string[];
    title = '';


    //getListings = function (e) {
    //    this.http.get('https://api.airbnb.com/v2/search_results?client_id=3092nxybyb0otqw18e8nh5nty&location='+e+'&_limit=30').subscribe(data => {
    //        this.results = data.search_results;
    //
    //    });
    //}
}
