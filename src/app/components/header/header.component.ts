import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public isMobileMenuOpen: boolean = false; 
  public menuEntries = [
    {
      title: "Startseite",
      url: "/home"
    },
    {
      title: "Leistungen",
      url: "services"
    },
    {
      title: "Referenzen",
      url: "references"
    },
    {
      title: "Kontakt",
      icon: "letter",
      url: "/contact"
    },
    {
      title: "Impressum",
      url: "impressum"
    }
  ];

  constructor() { }

  async ngOnInit() {
    try { 
    } catch {
      
    }
  }

  public toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
