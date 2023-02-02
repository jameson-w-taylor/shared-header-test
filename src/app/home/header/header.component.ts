import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  // If consumer does not provide defaultHref, ion-back-button will NEVER appear, even when expected
  @Input() defaultHref?: string;
  @Input() title?: string;
  @Input() color?: string;

  constructor() { }

  ngOnInit() {}

}
