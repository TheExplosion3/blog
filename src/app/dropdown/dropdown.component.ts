import { Component, OnInit, ViewChild, AfterViewInit, AfterViewChecked } from '@angular/core';
import { PageoneComponent } from './pageone/pageone.component';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit, AfterViewInit {

  public selected = 'none';
  pageOne = 'p1';
  ngOnInit(): void {
    document.getElementById("three")!.style.display = "none";
  }
  ngAfterViewInit(): void {

  }
  ngAfterViewChecked(): void {
    document.getElementById("three")!.style.display = "none";
    switch(this.selected) {

      case "none": {
        const pages = document.getElementsByClassName("pages") as HTMLCollectionOf<HTMLElement>;
        Array.from(pages).forEach(page => {
          page.style.display = "none"
        })
        break;
      }

      case "p1": {
        document.getElementById("three")!.style.display = "block";
        break;
      }
    }
  }

  @ViewChild(PageoneComponent) PageoneComponent: PageoneComponent | undefined;
  async save() {

  }


}
