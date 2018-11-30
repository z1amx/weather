import {Component, OnInit} from '@angular/core';
import {UiService} from './services/ui/ui.service';
import {UserDataService} from './services/user/user-data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showMenu = false;
  darkModeActive: boolean;
  usersData;
  constructor(public ui: UiService, private usData: UserDataService ) {}
  ngOnInit() {
    this.ui.darkModeState.subscribe((value) => {
      this.darkModeActive = value;
    });
    this.usData.getUsers().subscribe((usersData) => {
      this.usersData = usersData;
      console.warn( this.usersData)
    });
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  modeToggleSwitch() {
    this.ui.darkModeState.next(!this.darkModeActive);
  }

}
