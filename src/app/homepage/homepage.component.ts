import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  title = 'Evelyn\'s Blog';
  twitterurl = 'https://twitter.com/ArchangelEuropa';
  githuburl = 'https://github.com/TheExplosion3';

  constructor() {}

  ngOnInit(): void {
  }

}
