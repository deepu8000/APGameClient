import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  Tabs:Tab[] =[];
  constructor() { }

  ngOnInit() {
    this.Tabs.push({ Name : 'Home' , Id :  '' , isActive : true });
    this.Tabs.push({ Name : 'Event' , Id : '1', isActive : false});
    this.Tabs.push({ Name : 'Event' , Id : '2', isActive : false});
    this.Tabs.push({ Name : 'Event' , Id : '3', isActive : false});
  }

}

export class Tab
{

    public Name : string;

    public Id: string;

    public isActive: boolean = false;

}
