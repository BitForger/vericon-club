import { Body, Controller, HttpService, Post } from '@nestjs/common';
import { DiscordEnv } from '@api/env/discord-env/discord.env';
import { AppEnv } from '@api/env/app-env/app.env';

@Controller('auth')
export class AuthController {
  constructor(
    private discordEnv: DiscordEnv,
    private appEnv: AppEnv,
    private httpService: HttpService,
  ) {}

  @Post('token')
  async finishLogin(@Body('code') code: string) {
    const body = {
      client_id: this.discordEnv.DISCORD_CLIENT_ID,
      client_secret: this.discordEnv.DISCORD_CLIENT_SECRET,
      grant_type: 'authorization_code',
      code,
      redirect_uri: `${this.appEnv.APP_URL}/auth/callback`,
      scope: 'identify guilds',
    };

    console.log('token', body);

    const result = await this.httpService
      .post(`https://discord.com/api/oauth2/token`, body, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
      .toPromise();

    console.log('result', result);
  }
}
