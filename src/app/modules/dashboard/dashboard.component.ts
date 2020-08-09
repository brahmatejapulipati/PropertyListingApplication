import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/models/Property';
import { DashboardService } from './dashboard.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  properties : Property[] = [];

  constructor(private _dashboardService : DashboardService ) { }

  ngOnInit() {
    this._dashboardService.getPropertiesList().subscribe(result => {
      this.properties = result.propertyList;
      console.log(this.properties);
    })    
  }
}
