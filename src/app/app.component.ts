import { Component,OnInit} from '@angular/core';
import { DetailsService } from './details.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  status1: boolean = true;

  myFunction() {

    this.status1 = false;
  }

}

