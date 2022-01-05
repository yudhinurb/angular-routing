import { Component, OnInit } from '@angular/core';
import { UrlSegmentGroup } from '@angular/router';

@Component({
  selector: 'app-loping',
  templateUrl: './loping.component.html',
  styleUrls: ['./loping.component.scss'],
})
export class LopingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  users = [
    {
      nama: 'klin',
      umur: 19,
    },
    {
      nama: 'Rizki',
      umur: 18,
    },
    {
      nama: 'Yuda',
      umur: 25,
    },
    {
      nama: 'Brian',
      umur: 21,
    },
    {
      nama: 'Dita',
      umur: 30,
    },
  ];
}
