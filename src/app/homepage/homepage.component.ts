import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'homepage.component.html'

})

export class HomepageComponent {
  details = [
    { name: 'a' },
    { name: 'b' },
    { name: 'c' },
  ]
  default = 'Angular';

  isActive = false
  onSelect(e) {
    console.log(e)
  }
}