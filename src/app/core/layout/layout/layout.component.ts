import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  // TODO: add menu to right side of navbar that handles auth
  constructor() { }

  ngOnInit(): void {
  }

  logout() {

  }
}
