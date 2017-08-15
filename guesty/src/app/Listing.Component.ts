import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { DataService } from "./data.service";

@Component({
    selector: 'app-root',
    templateUrl: './Listing.component.html',
    styleUrls: ['./app.component.css'],

})
export class ListingComponent implements OnInit {
    constructor(private http: HttpClient, private data: DataService) {
    }

    results: string[];
    title = 'Listing details';

    message:string;
    public selected = '';

    ngOnInit() {
        this.data.currentMessage.subscribe(message => this.selected = message);
        console.log(this.selected);
    }
    newMessage() {
        this.data.changeMessage("Hello from Sibling");
        console.log(this.selected);
    }
    //getListings = function (e) {
    //    this.http.get('https://api.airbnb.com/v2/search_results?client_id=3092nxybyb0otqw18e8nh5nty&location='+e+'&_limit=30').subscribe(data => {
    //        this.results = data.search_results;
    //
    //    });
    //}
}
