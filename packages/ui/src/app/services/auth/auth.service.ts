import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { environment } from '../../../environments/environment';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authFlowConfig = {
    issuer: 'https://discord.com/',
    redirectUri: window.location.origin + '/auth/callback',
    clientId: environment.discordClientId,
    responseType: 'code',
    scope: 'identify guilds',
  };

  constructor(
    private router: Router,
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private cookieService: CookieService,
  ) {}

  isLoggedIn() {
    return this.cookieService.check('vericon-session');
  }

  async initLogin() {
    this.location.replaceState('/');
    window.location.href = this.getAuthUrl();
  }

  getAccessToken(code: string) {
    // make call here
  }

  private getAuthUrl(scopes = 'identify guilds') {
    return `https://discord.com/api/oauth2/authorize?client_id=${
      environment.discordClientId
    }&redirect_uri=${encodeURIComponent(
      environment.callbackUrl,
    )}&response_type=code&scope=${encodeURIComponent(scopes)}`;
  }
}
