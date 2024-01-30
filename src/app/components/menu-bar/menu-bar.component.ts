import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css', './menu-bar.responsive.component.css']
})
export class MenuBarComponent {
  showMenuBar() {
    const menuElement:HTMLElement | null = document.getElementById("nav-menu-bar");

    if (menuElement) {
      if (menuElement.className === "menu-bar") {
        menuElement.className += " responsive";
      } else {
        menuElement.className = "menu-bar";
      }
    }
  }
}
