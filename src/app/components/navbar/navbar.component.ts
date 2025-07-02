import { Component } from '@angular/core';
import { faHome, faMusic, faBookOpen, faUsers, faHandHoldingHeart, faVideo} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  faHome = faHome;
  faMusic = faMusic;
  faBookOpen = faBookOpen;
  faUsers = faUsers;
  faHandHoldingHeart = faHandHoldingHeart;
  faVideo = faVideo;


}
