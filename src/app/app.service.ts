import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Attribute, ValuesList} from './interfaces';
import { environment} from '../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    constructor(private http: HttpClient) { }
    public attributesUrl = 'attributes';
    public valuesListUrl = 'values-list';
    getAttributes(): Observable<Attribute[]> {
        return this.http.get<Attribute[]>(environment.endPoint + this.attributesUrl);
    }
    getValuesList(): Observable<ValuesList[]> {
        return this.http.get<ValuesList[]>(environment.endPoint + this.valuesListUrl);
    }
}
