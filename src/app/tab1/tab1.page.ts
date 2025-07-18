import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [
    IonicModule, // 👈 Add this
    CommonModule,
    FormsModule, // 👈 Add this too if you use forms
  ],
})
export class Tab1Page implements OnInit {
  constructor() {}

  ngOnInit() {
    const splash = document.getElementById('splash');
    const login = document.getElementById('login');
    const progress = document.querySelector(
      '.loading-bar-progress'
    ) as HTMLElement;

    let width = 0;
    const loading = setInterval(() => {
      width += 10;
      if (progress) {
        progress.style.width = width + '%';
      }
      if (width >= 100) {
        clearInterval(loading);
        if (splash) splash.classList.add('hide');
        setTimeout(() => {
          if (splash) splash.style.display = 'none';
          if (login) login.style.display = 'block';
        }, 1000);
      }
    }, 150);
  }
}
