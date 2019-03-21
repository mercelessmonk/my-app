import { Component } from '@angular/core';
import * as $ from 'jquery';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    $('.jq').mouseover(function () {
      $(this).css('color', 'red');
    });
    $('.jq').mouseout(function () {
      if ($(this).is(":focus")) {

        $(this).css('color', 'green');
        event.stopImmediatePropagation();
      } else {
        $(this).css('color', 'blue');
      }
    });
  }

}
