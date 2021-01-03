import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Guild } from '../../interfaces/guild';

@Injectable({
  providedIn: 'root',
})
export class DiscordService {
  constructor(private httpService: HttpClient, private router: Router) {}

  async getGuilds(token: string) {
    const currentUser = await this.getUser(token);
    console.log('current user', currentUser);
    const myGuilds = await this.getMyGuilds(token);
    console.log('guilds', myGuilds);
    return myGuilds;
  }

  async getGuild(guildID: string, token: string): Promise<Guild> {
    return await this.get(`guilds/${guildID}`, token);
  }

  private async getUser(token: string) {
    return await this.get('users/@me', token);
  }

  private async getMyGuilds(
    token: string,
  ): Promise<
    Array<{
      features: string[];
      icon: string;
      id: string;
      name: string;
      owner: boolean;
      permissions: number;
      permissions_new: string;
    }>
  > {
    return await this.get('users/@me/guilds', token);
  }

  private async get<T>(endpoint: string, token: string) {
    try {
      return await this.httpService
        .get<T>(`https://discord.com/api/${endpoint}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .toPromise();
    } catch (e) {
      console.error(e);
      if (e.status === 401) {
        await this.router.navigate(['auth/login']);
      }
    }
  }
}
