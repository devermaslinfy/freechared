import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Attribute, ValuesList} from './interfaces';


@Injectable({
    providedIn: 'root'
})
export class AppService {
    constructor(private http: HttpClient) { }
    public endPoint = 'http://demo3385136.mockable.io/';
    public attributesUrl = 'attributes';
    public valuesListUrl = 'values-list';
    getAttributes(): Observable<Attribute[]> {
        return this.http.get<Attribute[]>(this.endPoint + this.attributesUrl);
    }
    getValuesList(): Observable<ValuesList[]> {
        return this.http.get<ValuesList[]>(this.endPoint + this.valuesListUrl);
    }
}
