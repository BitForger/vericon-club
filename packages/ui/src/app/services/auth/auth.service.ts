import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { environment } from '../../../environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { DiscordService } from '../discord/discord.service';

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
    private discordService: DiscordService,
  ) {}

  isLoggedIn() {
    return this.cookieService.check('vericon-session');
  }

  async initLogin() {
    this.location.replaceState('/');
    window.location.href = this.getAuthUrl();
  }

  async isAuthorized(token: string) {
    const guilds = await this.discordService.getGuilds(token);
    if (guilds.some((value) => value.id === environment.guildId)) {
      /*const guild = await this.discordService.getGuild(
        environment.guildId,
        token,
      );
      console.log('guild', guild);*/
    }
  }

  private getAuthUrl(scopes = 'identify guilds') {
    return `https://discord.com/api/oauth2/authorize?client_id=${
      environment.discordClientId
    }&redirect_uri=${encodeURIComponent(
      environment.callbackUrl,
    )}&response_type=token&scope=${encodeURIComponent(scopes)}`;
  }
}
