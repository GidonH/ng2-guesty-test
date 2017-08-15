import {Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { DataService } from "./data.service";


@Component({
    selector: 'app-root',
    templateUrl: './AllListings.component.html',
    styleUrls: ['./app.component.css']
})
export class AllListingsComponent implements OnInit {
    constructor(private http: HttpClient, private data: DataService) {}

    message:string;
    results: string[];
    public selected = '';
    title = 'ng2 guesty';
    cities = ['Select a city', 'London', 'Paris', 'Tel Aviv', 'NYC'];
    getListings = function (e) {
        this.http.get('https://api.airbnb.com/v2/search_results?client_id=3092nxybyb0otqw18e8nh5nty&location='+e+'&_limit=30').subscribe(data => {
            this.results = data.search_results;

        });
    };
   getData = function (data) {
        this.selected = data;
         this.newMessage();
    };


    ngOnInit() {
        this.data.currentMessage.subscribe(message => this.selected = message);
    }

    newMessage() {
        this.data.changeMessage(this.selected);
    }
}
