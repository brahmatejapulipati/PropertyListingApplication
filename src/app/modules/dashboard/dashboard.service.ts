import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private _jsonURL = "../../../assets/propertiesData.json"

  constructor(private _http : HttpClient) { }

  getPropertiesList() : Observable<any>{
    return this._http.get(this._jsonURL);
  }
}
