import { Injectable } from '@nestjs/common';
import { BaseEnv } from '../base-env';
import { cleanEnv, CleanEnv, str } from 'envalid';
import { NodeEnvValidationObj } from '../node-env/node.env';

export interface Discord extends CleanEnv {
  DISCORD_CLIENT_ID: string;
  DISCORD_CLIENT_SECRET: string;
}

export const DiscordValidationsObj = Object.assign(
  {},
  {
    DISCORD_CLIENT_ID: str(),
    DISCORD_CLIENT_SECRET: str(),
  },
  NodeEnvValidationObj,
);

@Injectable()
export class DiscordEnv extends BaseEnv {
  private env: Discord;

  constructor() {
    super();
    this.env = cleanEnv(process.env, DiscordValidationsObj, {
      dotEnvPath: this.DOT_ENV_PATH,
    });
  }

  get DISCORD_CLIENT_ID() {
    return this.env.DISCORD_CLIENT_ID;
  }

  get DISCORD_CLIENT_SECRET() {
    return this.env.DISCORD_CLIENT_SECRET;
  }
}
