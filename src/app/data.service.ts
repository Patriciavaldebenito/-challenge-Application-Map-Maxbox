import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from './store';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseURL = environment.apiURL

  constructor(private http: HttpClient) { }
  
  getStore(): Observable<Store[]> {

    const url = this.baseURL;
    console.log(url)
     return this.http.get<Store[]>(url);



     
  }
}
