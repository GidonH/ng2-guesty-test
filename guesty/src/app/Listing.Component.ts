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

    reviews: string[];
    title = 'Listing details';

    selected = '';

    ngOnInit() {
        this.data.currentMessage.subscribe(message => this.selected = message);
        console.log(this.selected);
        this.getReviews();
    }

    getReviews = function () {
        this.http.get('https://api.airbnb.com/v2/reviews?client_id=3092nxybyb0otqw18e8nh5nty&role=all&listing_id='+this.selected.listing.id).subscribe(data => {
            this.reviews = data;
            console.log(this.reviews);
        });
    }
}
