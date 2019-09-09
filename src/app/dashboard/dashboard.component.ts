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
    this.Tabs.push({ Name : 'Home' , Route :  'home' , isActive : true  , IconName : 'home'});
    this.Tabs.push({ Name : 'Event' , Route : 'event/1', isActive : false , IconName : 'list-alt'});
    this.Tabs.push({ Name : 'ManageEvent 1' , Route : 'manageevent/1', isActive : false , IconName : 'eye-open'});
    this.Tabs.push({ Name : 'ManageEvent 2' , Route : 'manageevent/2', isActive : false , IconName : 'eye-open'});
  }

}

export class Tab
{

    public Name : string;

    public Route: string;

    public isActive: boolean = false;

    public IconName : string = 'home';


}
