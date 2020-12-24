import { Component, OnInit } from "@angular/core";
import { environment } from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ui';
  authFlowConfig = {
    issuer: 'https://discord.com/',
    redirectUri: window.location.origin + '/auth/callback',
    clientId: environment.discordClientId,
    responseType: 'code',
    scope: 'identify guilds'
  }

  constructor() {
  }

  async ngOnInit() {
    // check session
    // authenticate/authorize
  }
}
