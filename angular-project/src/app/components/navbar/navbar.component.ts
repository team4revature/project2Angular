import { Component, OnInit } from '@angular/core';
import { GlobalEventsManager } from '../../services/global-events.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  showNavbar : boolean = false; 

  constructor(private globalEventsManager: GlobalEventsManager,private router : Router) {

     this.globalEventsManager.showNavBar.subscribe((mode: any) => {
      this.showNavbar = true;

      //if (this.showNavBar = true) {
      //    this.getFeatureListByLoggedInUser(1)
      //        .then(list => { this.featureList = list; });
      //}
  });

  this.globalEventsManager.hideNavBar.subscribe((mode: any) => {
      this.showNavbar = false;
      //this.featureList = [];
  });

  this.globalEventsManager.emitPage.subscribe((page: String) => {
    //TODO: switch on the page and add the buttons dynamically. 
  }); 

  }

  ngOnInit() {
  }

  logout(){
    this.router.navigate(['./login']);
  }
}
