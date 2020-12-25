import { Injectable } from '@nestjs/common';
import { cleanEnv, str } from 'envalid';
import { NodeEnvValidationObj } from '@api/env/node-env/node.env';
import { BaseEnv } from '@api/env/base-env';

interface application {
  APP_URL: string;
}

export const AppEnvValidationsObj = Object.assign(
  {},
  {
    APP_URL: str(),
  },
  NodeEnvValidationObj,
);

@Injectable()
export class AppEnv extends BaseEnv {
  protected env: application;
  constructor() {
    super();
    this.env = cleanEnv(process.env, AppEnvValidationsObj, {
      dotEnvPath: this.DOT_ENV_PATH,
    });
  }

  get APP_URL() {
    return this.env.APP_URL;
  }
}
