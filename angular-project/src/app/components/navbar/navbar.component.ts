import { Component, OnInit } from '@angular/core';
import { GlobalEventsManager } from '../../services/global-events.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  showNavbar: boolean = true;
  showBoardPageLink: boolean = true;
  showBurnDownLink: boolean = true;

  constructor(private globalEventsManager: GlobalEventsManager, private router: Router) {

    this.globalEventsManager.showNavBar.subscribe((mode: any) => {
      this.showNavbar = true;
    });

    this.globalEventsManager.hideNavBar.subscribe((mode: any) => {
      this.showNavbar = false;
    });

    this.globalEventsManager.emitShowBoardPage.subscribe((mode: any) => {
      this.showBoardPageLink = true;
    });

    this.globalEventsManager.emitHideBoardPage.subscribe((mode: any) => {
      this.showBoardPageLink = false;
    });

    this.globalEventsManager.emitShowBurnDownPage.subscribe((mode: any) => {
      this.showBurnDownLink = true;
    });

    this.globalEventsManager.emitHideBurnDownPage.subscribe((mode: any) => {
      this.showBurnDownLink = false;
    });

  }

  ngOnInit() {
  }

  logout() {
    this.router.navigate(['./login']);
  }

  goToBoardPage() {
    var m_u_id = localStorage.getItem('userId');
    this.router.navigate(['./boardpage/' + m_u_id]);
  }

  goToBurnDown() {
    this.router.navigate(['./burndown']);
  }

}
