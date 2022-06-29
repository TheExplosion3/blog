import { Component, OnInit, ViewChild, AfterViewInit, AfterViewChecked, ViewEncapsulation } from '@angular/core';
import { PageoneComponent } from './pageone/pageone.component';

function displayremover(): void {
  const pages = document.getElementsByClassName("pages") as HTMLCollectionOf<HTMLElement>;
  Array.from(pages).forEach(page => {
    page.style.display = "none";
  })
}

function displaychange(id: string): void {
  displayremover();
  document.getElementById(id)!.style.display = "block";
}
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DropdownComponent implements OnInit, AfterViewInit {

  public selected = 'none';
  pageOne = 'p1';
  pageTwo = 'p2';

  ngOnInit(): void {
    displayremover();
  }
  ngAfterViewInit(): void {

  }
  ngAfterViewChecked(): void {
    document.getElementById("three")!.style.display = "none";
    switch(this.selected) {

      case "none": {
        displayremover();
        break;
      }

      case "p1": {
        displaychange("three");
        break;
      }

      case "p2": {
        displaychange("four");
        break;
      }
    }
  }

  @ViewChild(PageoneComponent) PageoneComponent: PageoneComponent | undefined;
  async save() {

  }

}
