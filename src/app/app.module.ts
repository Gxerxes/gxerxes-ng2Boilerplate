import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {Ng2BootstrapModule} from "ng2-bootstrap";

import {AppStore} from "angular2-redux-util";
import {Lib} from "../Lib";
import notify from "../appdb/NotifyReducer";

var providing = [{
    provide: "DEV_ENV",
    useValue: Lib.DevMode()
}, {
    provide: "OFFLINE_ENV",
    useValue: false
}, {
    provide: AppStore,
    useFactory: Lib.StoreFactory({
        notify
        // appdb,
        // business,
        // stations,
        // reseller,
        // adnet,
        // orders
    })
}];

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, FormsModule, HttpModule, Ng2BootstrapModule],
    providers: [providing],
    bootstrap: [AppComponent]
})
export class AppModule {
}
