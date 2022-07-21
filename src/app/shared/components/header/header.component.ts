import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/core/services/auth.service';
import { Name } from '../../models/Name';
import { User } from '../../models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  faPlayCircle = faPlayCircle;
  faUser = faUser;
  userName?: Name;
  faRightFromBracket = faRightFromBracket;
  isAuthenticated = false;
  @Input() title = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.isAuthenticated$.subscribe((state) => {
      this.isAuthenticated = state;
    });
    if (this.isAuthenticated) {
      this.authService
        .getUserInfo()
        .subscribe((userInfo) => (this.userName = userInfo.name));
    }
  }

  loginOut(): void {
    if (confirm('Do you really want to login out?')) {
      this.authService.loginOut();
      this.router.navigate(['/login']);
    }
  }
}
