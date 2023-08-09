import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  constructor(public auth: AuthService, public router: Router) {}
  ngOnDestroy(): void {
    this.isDropDownOpen = false;
  }
  @Output() navbarOpenEvent = new EventEmitter();
  token: boolean = false;
  role: string | null = '';
  isDropDownOpen: boolean = false;
  userName: string | null = '';
  isSidebarOpen: boolean = false;

  ngOnInit(): void {
    // this.token=!!this.auth.getToken();
    // this.role=localStorage.getItem('Role');
    this.router.events.subscribe((event) => {
      if (event.constructor.name === 'NavigationEnd') {
        this.token = !!this.auth.getToken();
        this.role = localStorage.getItem('Role');
        this.userName = localStorage.getItem('userName');
      }
    });
  }

  logout() {
    let status = this.auth.logout();
    if (status) {
      this.router.navigate(['/login']);
    }
  }
  updateDropDown() {
    this.isDropDownOpen = !this.isDropDownOpen;
  }
  hideDropDown() {
    this.isDropDownOpen = false;
  }
  toggleSidebar() {
    this.navbarOpenEvent.emit();
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  closeSidebar() {
    this.isSidebarOpen = false;
  }
}
