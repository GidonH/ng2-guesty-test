import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {AllListingsComponent} from './AllListings.component';
import {ListingComponent} from './Listing.component';
import { DataService } from "./data.service";


const appRoutes: Routes = [
    { path: 'listing', component: ListingComponent },
    { path: '', component: AllListingsComponent },
];


@NgModule({
    declarations: [AppComponent,AllListingsComponent, ListingComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes, { enableTracing: true }
    )],
    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
